(function (root) {
  root.createAGLSWordsClient = function (onRecords, onError) {
    let records = [], version = 0, loading = false, disposed = false;
    const controllers = new Set();
    async function request(options = {}) {
      const controller = new AbortController(); controllers.add(controller);
      const timer = setTimeout(() => controller.abort(), 12000);
      try {
        const response = await fetch('/api/words', { ...options, cache: 'no-store', signal: controller.signal });
        let data;
        try { data = await response.json(); }
        catch { throw new Error('Shared words are unavailable. Please try again.'); }
        if (!response.ok) throw new Error(data.error || 'Shared words are unavailable. Please try again.');
        return data;
      } catch (error) {
        if (error.name === 'AbortError') throw new Error('Connection timed out. Please try again.');
        throw error;
      } finally { clearTimeout(timer); controllers.delete(controller); }
    }
    async function refresh() {
      if (disposed || loading || document.hidden) return;
      loading = true; const started = version;
      try {
        const data = await request();
        if (!disposed && started === version) { records = data.words; onRecords(records); }
      } catch { if (!disposed) onError('Unable to refresh shared words. Retrying shortly.'); }
      finally { loading = false; }
    }
    const timer = setInterval(refresh, 15000);
    window.addEventListener('focus', refresh); document.addEventListener('visibilitychange', refresh);
    return {
      refresh,
      async submit(word) {
        version++;
        const data = await request({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ word }) });
        version++;
        if (!disposed) {
          records = [data.word, ...records.filter(r => r.id !== data.word.id)].sort((a, b) => b.id - a.id).slice(0, 20);
          onRecords(records);
        }
        return data.word;
      },
      dispose() {
        disposed = true; clearInterval(timer); controllers.forEach(c => c.abort());
        window.removeEventListener('focus', refresh); document.removeEventListener('visibilitychange', refresh);
      }
    };
  };
})(globalThis);
