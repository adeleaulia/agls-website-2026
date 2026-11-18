import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
function setup(fetch) {
  const document = new EventTarget(); document.hidden = false;
  const window = new EventTarget();
  const context = { fetch, document, window, AbortController, setTimeout, clearTimeout, setInterval, clearInterval };
  vm.runInNewContext(readFileSync(new URL('../public/words-client.js', import.meta.url), 'utf8'), context);
  let records = [], error = '';
  const client = context.createAGLSWordsClient(r => { records = r; }, e => { error = e; });
  return { client, records: () => records, error: () => error, document };
}
test('a stale GET cannot overwrite a successfully submitted word', async () => {
  let release;
  const { client, records } = setup((_url, options) => options.method === 'POST'
    ? Promise.resolve(Response.json({ word: { id: 2, word: 'New' } }, { status: 201 }))
    : new Promise(resolve => { release = resolve; }));
  try {
    const loading = client.refresh(); await client.submit('New');
    release(Response.json({ words: [{ id: 1, word: 'Old' }] })); await loading;
    assert.equal(records()[0].word, 'New');
  } finally { client.dispose(); }
});
test('successful submit keeps newest 20 in order and refresh errors preserve the display', async () => {
  let fail = false;
  const { client, records, error } = setup(async (_url, options) => {
    if (fail) throw new Error('offline');
    return options.method === 'POST' ? Response.json({ word: { id: 21, word: 'Newest' } })
      : Response.json({ words: Array.from({ length: 20 }, (_, i) => ({ id: 20 - i, word: String(20 - i) })) });
  });
  try {
    await client.refresh(); await client.submit('Newest');
    assert.equal(records().length, 20); assert.equal(records()[0].id, 21); assert.equal(records()[19].id, 2);
    fail = true; await client.refresh(); assert.equal(records().length, 20); assert.match(error(), /Unable to refresh/);
  } finally { client.dispose(); }
});
test('rejected submission never appears as saved data', async () => {
  const { client, records } = setup(async () => Response.json({ error: 'Rate limited' }, { status: 429 }));
  try { await assert.rejects(client.submit('No save'), /Rate limited/); assert.equal(records().length, 0); }
  finally { client.dispose(); }
});

test('an HTML error page shows a useful failure and never fabricates a saved word', async () => {
  const { client, records } = setup(async () => new Response('<!DOCTYPE html><h1>Unavailable</h1>', { status: 503 }));
  try {
    await assert.rejects(client.submit('Keep my input'), /Shared words are unavailable\. Please try again\./);
    assert.equal(records().length, 0);
  } finally { client.dispose(); }
});
