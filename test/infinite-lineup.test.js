import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
function setup({reduced = false, coarse = true} = {}) {
  let clock = 0, id = 0;
  const frames = new Map(), observers = [];
  class Observer {
    constructor(callback) { this.callback = callback; this.active = true; observers.push(this); }
    observe() {} disconnect() { this.active = false; }
  }
  const view = new EventTarget();
  Object.assign(view, {children: Array.from({length:81},(_,i)=>({offsetLeft:18+i*254})),clientWidth:390,isConnected:true,matches:()=>false,style:{}});
  let x=0;
  Object.defineProperty(view,'scrollLeft',{get:()=>x,set:v=>{x=Math.max(0,Math.min(81*254-390,v));}});
  const document = new EventTarget(); Object.assign(document,{hidden:false,documentElement:{},getElementById:()=>null});
  const window = new EventTarget();
  const context={window,document,AbortController,MutationObserver:Observer,ResizeObserver:Observer,performance:{now:()=>clock},matchMedia:q=>({matches:q.includes('reduced')?reduced:coarse}),requestAnimationFrame:cb=>{frames.set(++id,cb);return id;},cancelAnimationFrame:i=>frames.delete(i)};
  vm.runInNewContext(readFileSync(new URL('../public/carousel-motion.js',import.meta.url),'utf8'),context);
  const control=context.createAGLSLineupCarousel(view,27);
  const step=ms=>{clock+=ms;const work=[...frames.values()];frames.clear();work.forEach(cb=>cb(clock));};
  const scroll=delta=>{view.scrollLeft+=delta;view.dispatchEvent(new Event('scroll'));};
  return {view,control,step,scroll,frames,observers,window,span:27*254};
}
const mod=(x,n)=>((x%n)+n)%n;
test('native scroll wraps repeatedly in both directions without changing visible card or intra-card offset',()=>{
 const s=setup();const {view,span}=s;assert.equal(view.scrollLeft,span);
 for(const direction of [-1,1,-1,1]) for(let i=0;i<300;i++){
   const before=mod(view.scrollLeft,span);s.scroll(direction*193.25);
   assert.ok(Math.abs(mod(view.scrollLeft,span)-mod(before+direction*193.25,span))<.001);
   assert.ok(view.scrollLeft>=span*.5&&view.scrollLeft<span*1.5);
 }
 s.control.dispose();
});
test('queued arrows cross multiple runs and reverse without hitting native ends',()=>{
 const s=setup({coarse:false});const {view,span}=s;
 for(let i=0;i<50;i++)s.control.move(1);
 s.step(360);assert.ok(Math.abs(mod(view.scrollLeft,span)-mod(50*390*.8,span))<.001);
 for(let i=0;i<75;i++)s.control.move(-1);
 s.step(360);assert.ok(Math.abs(mod(view.scrollLeft,span)-mod(-25*390*.8,span))<.001);
 s.control.dispose();
});
test('rotation preserves logical position; touch cancels arrow animation without cancelling the gesture',()=>{
 const s=setup();s.scroll(254*6+100);const fraction=mod(s.view.scrollLeft,s.span)/s.span;
 s.view.children.forEach((child,i)=>child.offsetLeft=30+i*324);
 s.observers.filter(o=>o.active).forEach(o=>o.callback());
 assert.ok(Math.abs(mod(s.view.scrollLeft,27*324)/(27*324)-fraction)<.001);
 s.control.move(1);const event=new Event('touchstart',{cancelable:true});s.view.dispatchEvent(event);
 const x=s.view.scrollLeft;s.step(400);assert.equal(s.view.scrollLeft,x);assert.equal(event.defaultPrevented,false);
 s.control.dispose();
});
test('reduced motion still wraps arrows; disposal removes listeners observers and frames',()=>{
 const s=setup({reduced:true});s.control.move(-1);assert.equal(s.view.scrollLeft,s.span-390*.8);
 s.control.dispose();s.control.dispose();assert.equal(s.frames.size,0);
 // The first observer belongs to the separate, unchanged sponsor discovery.
 assert.ok(s.observers.slice(1).every(o=>!o.active));
 s.view.scrollLeft=1;s.view.dispatchEvent(new Event('scroll'));assert.equal(s.view.scrollLeft,1);
});

for (const coarse of [true, false]) {
 test(`autoplay on ${coarse ? 'touch' : 'desktop'} with sticky hover`,()=>{
  const s=setup({coarse});s.view.matches=()=>true;const x=s.view.scrollLeft;
  for(let i=0;i<120;i++)s.step(16);
  assert.ok(s.view.scrollLeft>x+60);s.control.dispose();
 });
}
test('touch holds motion then resumes after release and idle',()=>{
 const s=setup();s.step(16);s.view.dispatchEvent(new Event('touchstart'));
 const x=s.view.scrollLeft;
 for(let i=0;i<200;i++)s.step(16);
 assert.equal(s.view.scrollLeft,x);s.window.dispatchEvent(new Event('touchend'));
 for(let i=0;i<100;i++)s.step(16);
 assert.equal(s.view.scrollLeft,x);
 for(let i=0;i<100;i++)s.step(16);
 assert.ok(s.view.scrollLeft>x);s.control.dispose();
});
test('reduced motion disables autoplay',()=>{
 const s=setup({reduced:true});const x=s.view.scrollLeft;
 for(let i=0;i<200;i++)s.step(16);
 assert.equal(s.view.scrollLeft,x);s.control.dispose();
});
