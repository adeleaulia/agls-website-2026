import {test} from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

function setup({reduced = false, coarse = true} = {}) {
  let clock = 0, id = 0;
  const frames = new Map();
  const view = new EventTarget();
  Object.assign(view, {
    isConnected: true, scrollLeft: 0, matches: () => false,
    children: [],
  });
  const track = {isConnected: true, children: []};
  for (let i = 0; i < 26; i++) track.children.push({offsetLeft: i * 120});
  view.closest = () => null;
  const document = new EventTarget();
  Object.assign(document, {hidden: false, documentElement: {}, getElementById: () => null});
  const window = new EventTarget();
  class Observer { constructor(callback) { this.callback = callback; } observe() {} disconnect() {} }
  const context = {
    window, document, AbortController, MutationObserver: Observer,
    matchMedia: q => ({matches: q.includes('reduced') ? reduced : coarse}),
    performance: {now: () => clock},
    requestAnimationFrame: cb => {frames.set(++id, cb); return id;},
    cancelAnimationFrame: key => frames.delete(key),
  };
  vm.runInNewContext(readFileSync(new URL('../public/carousel-motion.js', import.meta.url), 'utf8'), context);
  const control = context.createAGLSSponsorMarquee(view, track, el => el.children.length / 2, .1);
  const step = ms => { clock += ms; const work = [...frames.values()]; frames.clear(); work.forEach(cb => cb(clock)); };
  return {view, control, step, frames, window};
}

test('sponsor marquee advances automatically on coarse-pointer/mobile devices', () => {
  const s = setup({coarse: true});
  s.step(100); s.step(100); s.step(100);
  assert.ok(s.view.scrollLeft > 0);
  s.control.dispose();
});

test('sponsor marquee pauses while touched and resumes after the idle delay', () => {
  const s = setup({coarse: true});
  s.step(100); s.step(100);
  const beforeTouch = s.view.scrollLeft;
  s.view.dispatchEvent(new Event('pointerdown'));
  s.step(1000);
  assert.equal(s.view.scrollLeft, beforeTouch);
  s.window.dispatchEvent(new Event('pointerup'));
  s.step(1000);
  assert.equal(s.view.scrollLeft, beforeTouch);
  s.step(2000);
  assert.ok(s.view.scrollLeft > beforeTouch);
  s.control.dispose();
});

test('reduced-motion preference prevents automatic sponsor movement and disposal cancels frames', () => {
  const s = setup({reduced: true, coarse: true});
  s.step(1000);
  assert.equal(s.view.scrollLeft, 0);
  s.control.dispose();
  assert.equal(s.frames.size, 0);
});
