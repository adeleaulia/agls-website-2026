/* Shared lifecycle for the existing hero video refs; no asset substitutions. */
(function (root) {
  root.createAGLSVideoPlayback = function (onState) {
    const records = new Map();
    let disposed = false;
    const visible = el => {
      const r = el.getBoundingClientRect();
      return el.isConnected && r.width > 0 && r.height > 0 && r.bottom > 0 &&
        r.right > 0 && r.top < window.innerHeight && r.left < window.innerWidth &&
        getComputedStyle(el).visibility !== 'hidden';
    };
    function update() {
      if (disposed) return;
      const active = [...records.values()].filter(r => visible(r.el));
      const error = active.some(r => r.el.error || r.failed);
      onState({ videoNeedsPlay: active.some(r => r.el.paused || r.el.error || r.failed),
        videoMessage: error ? 'Video could not load. Check your connection and try again.' : '',
        videoButton: error ? 'Retry video' : 'Play video' });
    }
    function attempt(record, manual = false) {
      const el = record.el;
      if (disposed || !visible(el) || document.hidden || record.pending) return;
      if (record.blocked && !manual) return;
      if (manual) { record.blocked = false; record.failed = false; if (el.error) el.load(); }
      el.muted = true;
      let result;
      // Call synchronously inside the click handler to preserve iOS user activation.
      try { result = el.play(); } catch (error) { reject(error); return; }
      record.pending = true;
      Promise.resolve(result).then(() => { record.pending = false; record.failed = false; update(); }, reject);
      function reject(error) {
        record.pending = false;
        if (disposed || !el.isConnected) return;
        record.blocked = error.name === 'NotAllowedError';
        record.failed = !['NotAllowedError', 'AbortError'].includes(error.name);
        el.dataset.playbackError = error.name || 'PlaybackError';
        update();
      }
    }
    const resume = () => { records.forEach(r => attempt(r)); update(); };
    const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(resume) : null;
    window.addEventListener('pageshow', resume);
    window.addEventListener('resize', resume);
    document.addEventListener('visibilitychange', resume);
    return {
      attach(el) {
        if (!el || records.has(el)) return;
        // Set DOM properties AND attributes before the first playback request.
        el.muted = true; el.defaultMuted = true; el.playsInline = true; el.autoplay = true;
        el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
        el.setAttribute('webkit-playsinline', ''); el.setAttribute('autoplay', '');
        el.preload = 'auto';
        const record = { el, pending: false, blocked: false, failed: false };
        records.set(el, record);
        record.ready = () => { attempt(record); update(); };
        record.changed = () => { if (!el.paused && !el.error) record.failed = false; update(); };
        ['loadedmetadata', 'canplay'].forEach(e => el.addEventListener(e, record.ready));
        ['playing', 'pause', 'error', 'ended'].forEach(e => el.addEventListener(e, record.changed));
        observer?.observe(el);
        attempt(record);
      },
      detach(el) {
        const r = records.get(el); if (!r) return;
        observer?.unobserve(el);
        ['loadedmetadata', 'canplay'].forEach(e => el.removeEventListener(e, r.ready));
        ['playing', 'pause', 'error', 'ended'].forEach(e => el.removeEventListener(e, r.changed));
        records.delete(el);
      },
      play() { records.forEach(r => attempt(r, true)); },
      dispose() {
        disposed = true;
        [...records.keys()].forEach(el => this.detach(el)); observer?.disconnect();
        window.removeEventListener('pageshow', resume); window.removeEventListener('resize', resume);
        document.removeEventListener('visibilitychange', resume);
      }
    };
  };
})(globalThis);
