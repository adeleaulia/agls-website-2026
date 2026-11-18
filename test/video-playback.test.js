import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

function setup() {
  const document = new EventTarget(); document.hidden = false;
  const window = new EventTarget(); window.innerHeight = 844; window.innerWidth = 390;
  const context = { window, document, getComputedStyle: () => ({ visibility: 'visible' }), Promise };
  vm.runInNewContext(readFileSync(new URL('../public/video-playback.js', import.meta.url), 'utf8'), context);
  let state;
  const controller = context.createAGLSVideoPlayback(s => { state = s; });
  const el = new EventTarget();
  Object.assign(el, { isConnected: true, paused: true, error: null, dataset: {}, calls: 0,
    setAttribute(k, v) { this[k + 'Attr'] = v; },
    getBoundingClientRect: () => ({ width: 390, height: 200, top: 0, bottom: 200, left: 0, right: 390 }),
    play() { this.calls++; return Promise.reject(Object.assign(new Error('Blocked'), { name: 'NotAllowedError' })); },
    load() { this.error = null; }
  });
  return { el, controller, window, state: () => state };
}
const flush = () => new Promise(resolve => setImmediate(resolve));
test('blocked autoplay offers a synchronous manual retry with inline muted configuration', async () => {
  const { el, controller, state } = setup();
  controller.attach(el); await flush();
  assert.equal(el.muted, true); assert.equal(el.defaultMuted, true); assert.equal(el.playsInline, true);
  assert.equal(el['webkit-playsinlineAttr'], ''); assert.equal(state().videoNeedsPlay, true);
  el.dispatchEvent(new Event('canplay')); assert.equal(el.calls, 1);
  el.play = function () { this.calls++; this.paused = false; return Promise.resolve(); };
  controller.play(); assert.equal(el.calls, 2); await flush();
  assert.equal(state().videoNeedsPlay, false); controller.dispose();
});
test('network error offers retry and reloads the same element', async () => {
  const { el, controller, state } = setup(); controller.attach(el); await flush();
  el.error = { code: 2 }; el.dispatchEvent(new Event('error'));
  assert.equal(state().videoButton, 'Retry video');
  el.play = function () { this.paused = false; return Promise.resolve(); };
  controller.play(); await flush(); assert.equal(el.error, null); assert.equal(state().videoNeedsPlay, false);
  controller.dispose();
});
test('offscreen video waits for visibility and disposal removes resume listeners', async () => {
  const { el, controller, window } = setup();
  el.getBoundingClientRect = () => ({ width: 0, height: 0 });
  controller.attach(el); assert.equal(el.calls, 0);
  el.getBoundingClientRect = () => ({ width: 390, height: 200, top: 0, bottom: 200, left: 0, right: 390 });
  window.dispatchEvent(new Event('pageshow')); await flush(); assert.equal(el.calls, 1);
  controller.dispose(); window.dispatchEvent(new Event('pageshow')); assert.equal(el.calls, 1);
});
