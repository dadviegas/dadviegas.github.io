# Memory Leaks and Detached DOM

A memory leak in a web app means objects that should be garbage-collected are kept alive by unintended references. Over time, this grows the heap, slows the page, and eventually crashes the tab. The most common sources are event listeners, closures, and detached DOM nodes.

## The three most common leak patterns

### 1. Forgotten event listeners

```ts
// ❌ Event listener added but never removed
useEffect(() => {
  window.addEventListener('resize', handleResize);
  // Missing cleanup — handleResize retains component closure forever
}, []);

// ✅ Return cleanup function
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [handleResize]);
```

### 2. Timers that outlive their components

```ts
// ❌ setInterval keeps running after component unmounts
useEffect(() => {
  const id = setInterval(tick, 1000);
  // No cleanup — interval fires forever, retaining component closure
}, []);

// ✅ Clear on cleanup
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, [tick]);
```

### 3. Stale closures in async operations

```tsx
// ❌ setState called after unmount — keeps component alive
useEffect(() => {
  fetchData().then((data) => {
    setData(data); // setData captures component in closure
  });
}, []);

// ✅ AbortController + cleanup flag
useEffect(() => {
  const controller = new AbortController();

  fetchData({ signal: controller.signal }).then((data) => {
    setData(data);
  }).catch((err) => {
    if (err.name !== 'AbortError') console.error(err);
  });

  return () => controller.abort();
}, []);
```

## Diagnosing with Chrome DevTools

### Taking heap snapshots

1. DevTools → **Memory** tab → **Heap snapshot** → **Take snapshot**.
2. Perform the suspected leaking action (open/close a modal, navigate a route).
3. Take a second snapshot.
4. Select the second snapshot → change dropdown from **Summary** to **Comparison**.

The Comparison view shows objects created since the first snapshot that haven't been GC'd. Focus on:

- **HTMLDivElement**, **HTMLButtonElement** etc. → Detached DOM nodes — a DOM tree was removed but JavaScript still holds a reference.
- Your own class names (React component names) → React component instances that weren't cleaned up.

### Detached DOM nodes

```ts
// DevTools Memory → Heap snapshot → filter "Detached"
// Click any detached node → see the "Retainers" panel
// Follow the retainer chain to find what's holding the reference

// Common retainer chain:
// Detached HTMLDivElement
//   ← event listener closure
//     ← window ('resize' event listener map)
//
// Fix: removeEventListener on cleanup
```

### Allocation instrumentation

For continuous leaks (not tied to a specific action):

1. Memory → **Allocation instrumentation on timeline** → **Start**.
2. Use the app for 30–60 seconds.
3. Stop → look for blue bars that don't get GC'd (gray bars are GC'd = fine).

## React-specific patterns

```tsx
// ❌ Subscribing to a store without cleanup
useEffect(() => {
  store.subscribe(setState);
  // Missing: return () => store.unsubscribe(setState);
}, []);

// ✅ useSyncExternalStore handles subscription lifecycle
const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

// ❌ ref attached to removed DOM element
const ref = useRef<HTMLElement | null>(null);
// If the element unmounts, ref.current still holds it
// Fix: ref.current = null in cleanup

// ❌ Event listener on document/window in a component that unmounts
useEffect(() => {
  document.addEventListener('keydown', handleKey);
  return () => document.removeEventListener('keydown', handleKey);
  // ✅ Already has cleanup — this is correct
}, [handleKey]);
```

## Monitoring heap size

```ts
// Periodic heap measurement in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    if ('memory' in performance) {
      const { usedJSHeapSize, totalJSHeapSize } = (performance as any).memory;
      console.log(`Heap: ${(usedJSHeapSize / 1024 / 1024).toFixed(1)}MB / ${(totalJSHeapSize / 1024 / 1024).toFixed(1)}MB`);
    }
  }, 5000);
}
```

Watch for steadily growing `usedJSHeapSize` without spikes — that's a slow leak.

## Related

- See also: [Debugging → Chrome DevTools Deep Dive](#/codex/debugging-chrome-devtools-deep-dive) for heap snapshot mechanics.
- See also: [React → Hooks Rules and Mental Model](#/codex/react-hooks-rules-and-mental-model) for useEffect cleanup.
- See also: [React → Refs and Imperative Handles](#/codex/react-refs-and-imperative-handles) for safe ref patterns.

## Sources

- [Chrome DevTools — Fix memory problems](https://developer.chrome.com/docs/devtools/memory-problems/)
- [MDN — Memory management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)
- [web.dev — Memory leaks in web apps](https://web.dev/articles/detached-window-memory-leaks)
- [React docs — Removing Effect dependencies](https://react.dev/learn/removing-effect-dependencies)
