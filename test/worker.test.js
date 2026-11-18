import { test } from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.js';

const env = { ASSETS: { fetch: async () => new Response('0123456789', { headers: { 'Content-Type': 'video/mp4', 'ETag': '"v1"' } }) } };
for (const [range, status, body, contentRange] of [
  ['bytes=0-1', 206, '01', 'bytes 0-1/10'],
  ['bytes=7-', 206, '789', 'bytes 7-9/10'],
  ['bytes=-3', 206, '789', 'bytes 7-9/10'],
  ['bytes=8-99', 206, '89', 'bytes 8-9/10'],
  ['bytes=99-', 416, '', 'bytes */10'],
  ['bytes=-0', 416, '', 'bytes */10'],
  ['bytes=5-2', 416, '', 'bytes */10'],
  ['invalid', 200, '0123456789', null],
  ['bytes=0-1,4-5', 200, '0123456789', null]
]) {
  test(range, async () => {
    const response = await worker.fetch(new Request('https://example.com/uploads/test.mp4', { headers: { Range: range } }), env);
    assert.equal(response.status, status);
    assert.equal(response.headers.get('Content-Range'), contentRange);
    assert.equal(await response.text(), body);
  });
}
test('If-Range mismatch returns the complete representation', async () => {
  const response = await worker.fetch(new Request('https://example.com/uploads/test.mp4', { headers: { Range: 'bytes=0-1', 'If-Range': '"old"' } }), env);
  assert.equal(response.status, 200);
  assert.equal(await response.text(), '0123456789');
});
