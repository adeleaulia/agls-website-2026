import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import worker from '../src/worker.js';
import { validateWord } from '../src/words.js';

function setup() {
  const db = new DatabaseSync(':memory:');
  const migration = readFileSync(new URL('../migrations/0001_shared_words.sql', import.meta.url), 'utf8');
  db.exec(migration); db.exec(migration);
  const DB = {
    prepare(sql) {
      let args = [];
      return { bind(...values) { args = values; return this; },
        async all() { return { results: db.prepare(sql).all(...args) }; } };
    },
    async batch(statements) {
      db.exec('BEGIN');
      try { const results = []; for (const s of statements) results.push(await s.all()); db.exec('COMMIT'); return results; }
      catch (e) { db.exec('ROLLBACK'); throw e; }
    }
  };
  const get = () => worker.fetch(new Request('https://example.com/api/words'), { DB });
  const post = (word, ip = '192.0.2.1', extra = {}) => worker.fetch(new Request('https://example.com/api/words', {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': ip, ...extra }, body: JSON.stringify({ word })
  }), { DB });
  return { db, DB, get, post };
}
test('input validation accepts trimmed phrases and rejects unsafe/empty/long input', () => {
  assert.equal(validateWord('  Better   together  '), 'Better together');
  assert.equal(validateWord("Let's grow"), "Let's grow");
  assert.equal(validateWord('A'.repeat(40)), 'A'.repeat(40));
  for (const v of ['', '   ', null, {}, 'A'.repeat(41), '<script>alert(1)</script>', '\u0000test', '!!!']) assert.equal(validateWord(v), null);
});
test('latest 20 shared submissions, stable ordering, retains all older rows', async () => {
  const { db, get, post } = setup();
  for (let i = 0; i < 25; i++) assert.equal((await post('Word ' + i, '192.0.2.' + i)).status, 201);
  const response = await get(); const { words } = await response.json();
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.equal(words.length, 20); assert.equal(words[0].word, 'Word 24'); assert.equal(words[19].word, 'Word 5');
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM words').get().n, 25);
  assert.match(words[0].created_at, /Z$/); db.close();
});
test('persistent limiter rejects sixth submission, allows a new window', async () => {
  const { db, post } = setup();
  for (let i = 0; i < 5; i++) assert.equal((await post('Hello ' + i)).status, 201);
  const blocked = await post('Too many'); assert.equal(blocked.status, 429); assert.ok(blocked.headers.get('Retry-After'));
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM words').get().n, 5);
  db.exec('UPDATE word_rate_limits SET bucket = 0'); assert.equal((await post('Later')).status, 201); db.close();
});
test('parameter binding safely stores apostrophes; invalid and cross-site submissions do not save', async () => {
  const { db, post } = setup();
  assert.equal((await post("Let's grow")).status, 201);
  assert.equal((await post('<img src=x onerror=alert(1)>')).status, 400);
  assert.equal((await post('Hello', '192.0.2.1', { Origin: 'https://other.example' })).status, 403);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM words').get().n, 1); db.close();
});
test('errors, methods, content-type and large requests have safe JSON responses', async () => {
  assert.equal((await worker.fetch(new Request('https://example.com/api/words'), {})).status, 503);
  const { db, DB } = setup();
  for (const [method, body, type, status] of [['DELETE', undefined, 'application/json', 405], ['POST', 'bad', 'text/plain', 415], ['POST', '{bad', 'application/json', 400], ['POST', ' '.repeat(1025), 'application/json', 413]]) {
    const r = await worker.fetch(new Request('https://example.com/api/words', { method, body, headers: { 'Content-Type': type } }), { DB });
    assert.equal(r.status, status); assert.ok((await r.json()).error);
  }
  db.close();
  const failed = await worker.fetch(new Request('https://example.com/api/words'), { DB: { prepare() { throw new Error('secret database detail'); } } });
  assert.equal(failed.status, 503); assert.ok(!(await failed.text()).includes('secret database detail'));
});
