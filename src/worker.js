// Static Assets currently does not guarantee byte-range responses.
// /api/* handles shared words; /uploads/* handles byte ranges.
import { handleWords } from './words.js';
export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith('/api/')) return handleWords(request, env);
    const range = request.headers.get('Range');
    const headers = new Headers(request.headers);
    headers.delete('Range');
    const response = await env.ASSETS.fetch(new Request(request, { headers }));
    if (response.status !== 200 || !['GET', 'HEAD'].includes(request.method)) return response;
    const output = new Headers(response.headers);
    output.set('Accept-Ranges', 'bytes');
    if (request.method === 'HEAD' || !range) return new Response(response.body, { status: 200, headers: output });
    const ifRange = request.headers.get('If-Range');
    if (ifRange && ifRange !== output.get('ETag') && ifRange !== output.get('Last-Modified')) {
      return new Response(response.body, { status: 200, headers: output });
    }
    // Ignore unsupported/multipart range syntax as allowed by HTTP.
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2])) return new Response(response.body, { status: 200, headers: output });
    const data = await response.arrayBuffer();
    const size = data.byteLength;
    const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
    const end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
    output.delete('Content-Encoding');
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
      output.set('Content-Range', `bytes */${size}`);
      output.set('Content-Length', '0');
      return new Response(null, { status: 416, headers: output });
    }
    output.set('Content-Range', `bytes ${start}-${end}/${size}`);
    output.set('Content-Length', String(end - start + 1));
    return new Response(data.slice(start, end + 1), { status: 206, headers: output });
  }
};
