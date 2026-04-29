# INP and Input Latency

INP (Interaction to Next Paint) replaced FID in March 2024. It measures the time from a user gesture — click, keydown, or tap — until the browser paints the next frame in response. Unlike FID, which only measured input delay, INP covers the entire round trip: input delay + processing time + presentation delay.

## The three components of interaction latency

```
User gesture
  → [input delay]       Time until the event handler is queued
  → [processing time]   Time the handler itself takes to run
  → [presentation delay] Time to commit the visual change to screen
```

A 200ms INP budget requires all three to sum within that. The practical targets:

| Phase | Target | Cause when over budget |
|-------|--------|----------------------|
| Input delay | < 50ms | Long tasks running on main thread when interaction fires |
| Processing time | < 100ms | Expensive synchronous work in event handlers |
| Presentation delay | < 50ms | Forced reflows, heavy paint areas |

## Input delay — long tasks are the root cause

Input delay accumulates when the main thread is busy with a long task (any task > 50ms) at the exact moment the user interacts. The browser can't start processing the event until the current task finishes.

**Diagnosis:** in Chrome DevTools Performance panel, interactions appear in the "Interactions" lane. The orange bar before the handler fires is input delay. Hover it to see which task was blocking.

Common culprits:
- Third-party scripts executing after load (analytics, chat widgets, A/B testing)
- Large data transforms run synchronously on page load
- React reconciliation triggered by timer-based state updates
- Long microtask chains from promises that block layout

**Breaking up long tasks:**

```ts
// ❌ Synchronous 15ms slice × 500 rows = 7.5s blocking the main thread
function processAllRows(rows: DataRow[]) {
  return rows.map((row) => expensiveTransform(row));
}

// ✅ Yield to browser between chunks using scheduler.yield()
async function processAllRows(rows: DataRow[]): Promise<ProcessedRow[]> {
  const results: ProcessedRow[] = [];
  for (let i = 0; i < rows.length; i++) {
    results.push(expensiveTransform(rows[i]));
    if (i % 50 === 0) {
      await scheduler.yield();  // returns control to browser, allows input events
    }
  }
  return results;
}
```

`scheduler.yield()` (Chrome 115+) is the modern `setTimeout(fn, 0)` — it yields to the browser's event loop without adding arbitrary delay. Fallback: `new Promise(resolve => setTimeout(resolve, 0))`.

## Processing time — deferring non-essential work

Every UI interaction has an essential part (show the user their input was received) and a non-essential part (compute the full result, update related state). Keep essential work synchronous; defer the rest.

```ts
// ❌ Filtering 50,000 rows synchronously blocks the response until done
function SearchPanel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(allRows);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    setResults(filterRows(allRows, q));  // 30ms synchronous → visible lag
  };
  // …
}

// ✅ useTransition defers the expensive state update
function SearchPanel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(allRows);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);  // immediate — input stays responsive
    startTransition(() => {
      setResults(filterRows(allRows, q));  // deferred — can be interrupted
    });
  };
  // …
}
```

## Presentation delay — avoiding forced layouts

Forced layout (also called layout thrashing) happens when JavaScript reads a geometry property — `offsetWidth`, `getBoundingClientRect()`, `scrollTop` — after writing to the DOM. The browser must flush all pending style and layout work before returning the value.

```ts
// ❌ Read-write-read pattern forces a layout per element
elements.forEach((el) => {
  const width = el.offsetWidth;       // forces layout flush
  el.style.width = `${width * 2}px`; // writes layout
  const newWidth = el.offsetWidth;    // forces layout flush again
});

// ✅ Batch reads, then batch writes
const widths = elements.map((el) => el.offsetWidth);  // one layout flush
elements.forEach((el, i) => {
  el.style.width = `${widths[i] * 2}px`;              // no reads after writes
});
```

In React component trees, forced layouts are usually caused by `useLayoutEffect` or `ref` callbacks that read geometry after a render. The same read-then-write pattern applies.

## `isInputPending` — interrupt background work

The Scheduling API's `isInputPending()` returns `true` if there's an unprocessed user event in the queue. Long-running background work (indexing, sorting) can poll this and yield immediately if the user interacts:

```ts
async function buildSearchIndex(documents: Document[]) {
  for (let i = 0; i < documents.length; i++) {
    indexDocument(documents[i]);

    if (navigator.scheduling?.isInputPending()) {
      await scheduler.yield();  // user is trying to interact — yield now
    } else if (i % 100 === 0) {
      await scheduler.yield();  // periodic yield regardless
    }
  }
}
```

This is the most responsive pattern — it yields preemptively when a user event is pending, rather than waiting for a fixed chunk boundary.

## Measuring INP in the field

```ts
import { onINP } from 'web-vitals/attribution';

onINP(({ value, rating, attribution }) => {
  // attribution tells you WHICH interaction caused the worst INP
  const { interactionType, interactionTime, inputDelay, processingDuration, presentationDelay } = attribution;
  analytics.track('inp', {
    value,
    rating,
    interactionType,  // 'keyboard' | 'click' | 'pointer'
    inputDelay,
    processingDuration,
    presentationDelay,
  });
});
```

The `attribution` data from `web-vitals/attribution` pinpoints which of the three phases is the bottleneck and what the target element was — essential for diagnosing field INP that you can't reproduce locally.

## INP vs FID — why the change matters

FID captured the first impression. A page with a great FID could have terrible responsiveness throughout the rest of the session (slow filter interaction, laggy modal close). INP captures the 95th-percentile interaction across the full session. A single slow interaction — even if most are fast — will tank the score.

This means optimizing for INP requires identifying which specific interaction is the worst case, not just ensuring the first click is fast.

## Related

- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for threshold tables and context alongside LCP and CLS.
- See also: [React → Concurrent Rendering and Suspense](#/codex/react-concurrent-rendering-and-suspense) for `useTransition` and `useDeferredValue` — the React-layer tools for keeping input responsive.
- See also: [Performance → Runtime Perf Profiling](#/codex/performance-runtime-perf-profiling) for the DevTools flow that surfaces input delay and long tasks.

## Sources

- [web.dev — Optimize INP](https://web.dev/articles/optimize-inp)
- [web.dev — scheduler.yield](https://web.dev/articles/optimize-long-tasks)
- [Chrome Developers — Long tasks](https://developer.chrome.com/docs/performance/identify-long-tasks)
- [MDN — Scheduler API](https://developer.mozilla.org/en-US/docs/Web/API/Scheduler)
