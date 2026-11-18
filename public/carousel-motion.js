// Three identical runs provide a full runway on either side of the visible run.
// Rebase by exactly one run, outside the visible seam; native touch is never captured.
(function (root) {
  root.createAGLSLineupCarousel = function (view, count) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const events = new AbortController();
    const listen = (target, name, handler) => target.addEventListener(name, handler, { passive: true, signal: events.signal });
    let span = 0, initialized = false, disposed = false, frameId = 0;
    let held = false, pauseUntil = 0, last = 0, remainder = 0, motion = null;
    const mod = (x, n) => ((x % n) + n) % n;
    function normalize() {
      if (!span) return;
      const x = view.scrollLeft;
      // Half a run of headroom prevents either native endpoint being reached.
      if (x < span * .5 || x >= span * 1.5) {
        view.scrollLeft = span * .5 + mod(x - span * .5, span);
      }
    }
    function advance(delta) {
      view.scrollLeft = span * .5 + mod(view.scrollLeft + delta - span * .5, span);
    }
    function measure() {
      const first = view.children[0], next = view.children[count];
      if (!first || !next) return;
      const nextSpan = next.offsetLeft - first.offsetLeft;
      if (nextSpan <= 0) return;
      if (!initialized || Math.abs(nextSpan - span) > .5) {
        const fraction = initialized ? mod(view.scrollLeft, span) / span : 0;
        span = nextSpan;
        view.scrollLeft = span + fraction * span;
        initialized = true;
        motion = null;
        normalize();
      }
    }
    function pause() { pauseUntil = performance.now() + 2500; }
    function interrupt() { pause(); motion = null; }
    listen(view, 'scroll', normalize);
    listen(view, 'pointerdown', () => { held = true; interrupt(); });
    listen(view, 'touchstart', () => { held = true; interrupt(); });
    listen(view, 'wheel', interrupt);
    listen(view, 'keydown', interrupt);
    listen(view, 'focusin', interrupt);
    const release = () => { if (!held) return; held = false; pause(); };
    listen(window, 'pointerup', release);
    listen(window, 'pointercancel', release);
    listen(window, 'touchend', release);
    listen(window, 'touchcancel', release);
    listen(document, 'visibilitychange', () => { last = 0; interrupt(); });
    const resize = new ResizeObserver(measure);
    resize.observe(view);
    const children = new MutationObserver(() => {
      measure();
      if (view.children[0]) resize.observe(view.children[0]);
    });
    children.observe(view, { childList: true });
    if (view.children[0]) resize.observe(view.children[0]);
    measure();
    function frame(now) {
      if (disposed) return;
      if (!view.isConnected) { dispose(); return; }
      const dt = Math.min(64, now - (last || now)); last = now;
      if (initialized) {
        if (motion) {
          const progress = Math.min(1, (now - motion.start) / 360);
          const eased = 1 - Math.pow(1 - progress, 3);
          const position = motion.distance * eased;
          advance(position - motion.applied);
          motion.applied = position;
          if (progress === 1) motion = null;
        } else if (!reduced.matches && !held && now >= pauseUntil && !document.hidden) {
          remainder += dt * .04;
          const pixels = Math.floor(remainder); remainder -= pixels;
          advance(pixels);
        }
        normalize();
      }
      frameId = requestAnimationFrame(frame);
    }
    frameId = requestAnimationFrame(frame);
    function dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frameId);
      events.abort();
      resize.disconnect(); children.disconnect();
      motion = null;
    }
    return {
      move(direction) {
        measure(); if (!span || disposed) return;
        pause(); normalize();
        const distance = direction * view.clientWidth * .8;
        if (reduced.matches) advance(distance);
        else {
          // Preserve queued distance when arrows are clicked repeatedly.
          const remaining = motion ? motion.distance - motion.applied : 0;
          motion = { start: performance.now(), distance: remaining + distance, applied: 0 };
        }
      },
      dispose
    };
  };
})(globalThis);

// Sponsor marquee: automatic motion is enabled on touch devices too.
// Native horizontal swipes remain available; motion pauses during interaction
// and resumes after a short idle period.
(function (root) {
  root.createAGLSSponsorMarquee = function (view, track, duplicateAt, speed = .035) {
    if (!view || !track) return { dispose() {} };
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const events = new AbortController();
    const listen = (target, name, handler) => target.addEventListener(name, handler, { passive: true, signal: events.signal });
    let frameId = 0, last = 0, remainder = 0, held = false;
    let pauseUntil = 0, disposed = false;
    const pause = () => { pauseUntil = performance.now() + 2500; };
    const interrupt = () => { pause(); };
    listen(view, 'pointerdown', () => { held = true; interrupt(); });
    listen(view, 'touchstart', () => { held = true; interrupt(); });
    const release = () => { held = false; pause(); };
    listen(window, 'pointerup', release);
    listen(window, 'pointercancel', release);
    listen(window, 'touchend', release);
    listen(window, 'touchcancel', release);
    ['wheel', 'keydown', 'focusin'].forEach(name => listen(view, name, interrupt));
    listen(document, 'visibilitychange', () => { last = 0; if (document.hidden) interrupt(); });
    function frame(now) {
      if (disposed) return;
      if (!view.isConnected || !track.isConnected) { dispose(); return; }
      const dt = Math.min(64, now - (last || now));
      last = now;
      const paused = reduced.matches || document.hidden || held || now < pauseUntil || view.matches(':hover, :focus-within');
      const first = track.children[0];
      const next = track.children[duplicateAt(track)];
      if (!paused && first && next) {
        const span = next.offsetLeft - first.offsetLeft;
        if (span > 0) {
          remainder += dt * speed;
          const step = Math.floor(remainder);
          remainder -= step;
          if (step > 0) view.scrollLeft = (view.scrollLeft + step) % span;
        }
      }
      frameId = requestAnimationFrame(frame);
    }
    frameId = requestAnimationFrame(frame);
    function dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frameId);
      events.abort();
    }
    return { dispose };
  };
})(globalThis);

// Reconcile the marquee with the live DOM so re-renders do not create
// duplicate animation loops or leave listeners attached to detached elements.
(() => {
  const active = new Map();
  function scan() {
    const view = document.getElementById('sp-viewport');
    const track = document.getElementById('sp-track');
    for (const [oldView, entry] of active) {
      if (oldView !== view || !oldView.isConnected || entry.track !== track || !entry.track.isConnected) {
        entry.control.dispose();
        active.delete(oldView);
      }
    }
    if (view && track && !active.has(view)) {
      const control = window.createAGLSSponsorMarquee(view, track, el => el.children.length / 2, .035);
      active.set(view, { track, control });
    }
  }
  const observer = new MutationObserver(scan);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  scan();
})();
