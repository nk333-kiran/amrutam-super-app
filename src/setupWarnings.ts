// Development-only: filter noisy, known non-actionable warnings

if (typeof console !== 'undefined') {
  const origWarn = console.warn.bind(console);
  console.warn = (...args: any[]) => {
    try {
      const msg = args[0] || '';
      if (typeof msg === 'string') {
        // Filter react-native-web prop deprecation
        if (msg.includes('props.pointerEvents is deprecated') || msg.includes('props.pointerEvents is deprecated.')) {
          return;
        }
        // Filter aria-hidden blocked messages from browser devtools
        if (msg.startsWith('Blocked aria-hidden on an element because its descendant retained focus')) {
          return;
        }
      }
    } catch (e) {
      // ignore
    }
    origWarn(...args);
  };
}

// Also guard window-level errors for aria-hidden (web)
if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('error', (e) => {
    try {
      const m = (e && (e as any).message) || '';
      if (typeof m === 'string' && m.startsWith('Blocked aria-hidden on an element')) {
        e.stopImmediatePropagation();
      }
    } catch (err) {
      // ignore
    }
  }, true);
}
