const BLOCK = ['fuck', 'shit', 'bitch', 'asshole', 'anjing', 'bangsat', 'kontol', 'memek', 'babi', 'goblok', 'tolol', 'ngentot', 'jancuk'];
const json = (data, status = 200, extra = {}) => Response.json(data, {
  status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...extra }
});
export function validateWord(value) {
  if (typeof value !== 'string') return null;
  const word = value.normalize('NFKC').trim().replace(/\s+/gu, ' ');
  if (!word || [...word].length > 40 || !/^[\p{L}\p{M}\p{N} '’.,!?\-]+$/u.test(word)) return null;
  if (!/[\p{L}\p{N}]/u.test(word) || BLOCK.some(b => word.toLowerCase().includes(b))) return null;
  return word;
}
async function readBody(request) {
  if (Number(request.headers.get('Content-Length')) > 1024) throw new Error('large');
  if (!request.body) throw new Error('empty');
  const reader = request.body.getReader();
  const chunks = []; let size = 0;
  for (;;) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.length;
    if (size > 1024) { await reader.cancel(); throw new Error('large'); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}
export async function handleWords(request, env) {
  const url = new URL(request.url);
  if (url.pathname !== '/api/words') return json({ error: 'Not found.' }, 404);
  if (!['GET', 'POST'].includes(request.method)) return json({ error: 'Method not allowed.' }, 405, { Allow: 'GET, POST' });
  if (!env.DB) return json({ error: 'Shared words are temporarily unavailable.' }, 503);
  try {
    if (request.method === 'GET') {
      const { results } = await env.DB.prepare('SELECT id, word, created_at FROM words ORDER BY id DESC LIMIT 20').all();
      return json({ words: results });
    }
    const origin = request.headers.get('Origin');
    if ((origin && origin !== url.origin) || request.headers.get('Sec-Fetch-Site') === 'cross-site') return json({ error: 'Cross-site submission is not allowed.' }, 403);
    if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') return json({ error: 'Use application/json.' }, 415);
    let body;
    try { body = await readBody(request); } catch (error) { return json({ error: error.message === 'large' ? 'Request is too large.' : 'Invalid JSON.' }, error.message === 'large' ? 413 : 400); }
    const word = validateWord(body?.word);
    if (!word) return json({ error: 'Enter a respectful word or phrase of 1–40 characters. HTML is not allowed.' }, 400);
    // Cloudflare supplies this header in production. No raw IP is stored.
    const ip = request.headers.get('CF-Connecting-IP') || 'local-development';
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(url.hostname + ':' + ip));
    const client = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
    const bucket = Math.floor(Date.now() / 60000);
    // D1 batch is a transaction: concurrent requests cannot evade the limit.
    const results = await env.DB.batch([
      env.DB.prepare(`INSERT INTO word_rate_limits (client_hash, bucket, hits) VALUES (?, ?, 1)
        ON CONFLICT(client_hash) DO UPDATE SET
        hits = CASE WHEN bucket = excluded.bucket THEN hits + 1 ELSE 1 END,
        bucket = excluded.bucket`).bind(client, bucket),
      env.DB.prepare(`INSERT INTO words (word)
        SELECT ? WHERE (SELECT hits FROM word_rate_limits WHERE client_hash = ?) <= 5
        RETURNING id, word, created_at`).bind(word, client)
    ]);
    const saved = results[1].results[0];
    if (!saved) return json({ error: 'Please wait a minute before submitting another word.' }, 429, { 'Retry-After': String(60 - Math.floor(Date.now() / 1000) % 60) });
    return json({ word: saved }, 201);
  } catch {
    return json({ error: 'Shared words are temporarily unavailable. Please try again.' }, 503);
  }
}
