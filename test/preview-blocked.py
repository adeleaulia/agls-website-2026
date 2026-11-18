"""Local-only reproduction: python test/preview-blocked.py, then open port 8790.
Injects a blocked-autoplay policy into the real page until a trusted button click.
Not included in the public deployment directory; not an iOS device emulator.
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'public'
INJECTION = '''<script>
const originalPlay = HTMLMediaElement.prototype.play;
let allowPlayback = false;
document.addEventListener('click', e => {
  if (e.isTrusted && e.target.closest('button')) allowPlayback = true;
}, true);
HTMLMediaElement.prototype.play = function () {
  return allowPlayback ? originalPlay.call(this) : Promise.reject(new DOMException('Simulated autoplay restriction', 'NotAllowedError'));
};
</script>'''

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        if self.path.split('?')[0] in ('/', '/index.html'):
            html = (ROOT / 'index.html').read_text(encoding='utf-8')
            # Disable native autoplay too, so the rejected play() path is deterministic.
            injection = INJECTION + '''<script>
Object.defineProperty(HTMLMediaElement.prototype, 'autoplay', {set() {}, get() {return false;}});
const originalSetAttribute = Element.prototype.setAttribute;
Element.prototype.setAttribute = function (key, value) {
  if (this instanceof HTMLMediaElement && key.toLowerCase() === 'autoplay') return;
  return originalSetAttribute.call(this, key, value);
};
</script>'''
            data = html.replace('<head>', '<head>' + injection, 1).encode()
            self.send_response(200); self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(data))); self.end_headers(); self.wfile.write(data)
        else:
            super().do_GET()

if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 8790), Handler).serve_forever()
