# Runtime Performance Profiling

Profiling is the discipline of measuring before optimizing. Guessing which component is slow — and then `React.memo`-ing everything — is how you waste a sprint and ship code that's harder to maintain. The tooling tells you where the time actually goes.

## Chrome DevTools — Performance panel

The Performance panel records a timeline of everything the main thread does: JS execution, style calculation, layout, paint, and compositing. Start here for any real-user performance complaint.

### Basic recording flow

1. Open DevTools → Performance tab.
2. Click the gear icon, enable CPU throttling (4× is a reasonable approximation of mid-range Android).
3. Click Record, perform the interaction you're investigating, click Stop.
4. The flame chart shows call stacks over time. The x-axis is time; the y-axis is call depth.

### Reading the flame chart

```
Task (200ms)
  └─ evaluate-script.js
       └─ renderWithHooks                   (React internals)
            └─ DashboardPage
                 └─ MetricsGrid
                      └─ MetricsRow (×50)   ← 4ms each × 50 = 200ms
```

Work from the bottom of a call stack up. If a component is rendering 50 times when you expect 10, the problem is upstream — something above it is causing unnecessary re-renders.

### Long task markers

Any task > 50ms appears highlighted in red at the top of the main thread lane. These are the primary cause of input delay (INP). Clicking a long task shows:
- What JavaScript triggered it
- Which timers or event handlers fired during it
- Whether it was triggered by a user event, timer, or network response

## React Profiler

The React DevTools Profiler records which components rendered and why. It answers "why did this component re-render?" — something the Performance panel can't tell you.

### Enabling

In development builds, React DevTools includes a Profiler tab. Production builds have profiling stripped unless you use the profiling build explicitly (`react-dom/profiling` instead of `react-dom`).

### Interpreting the flamegraph

Each bar in the React Profiler flamegraph shows a component and how long its render took. Grayed-out bars indicate the component did NOT render (React reused the previous output). Colored bars rendered.

The "why did this render?" button (🔍 icon) shows the specific props or state that changed. A component rendering with "parent rendered" means it re-rendered because its parent did — even if no props changed. This is where `React.memo` helps (but only helps if the props are stable references).

### Flamegraph vs Ranked chart

- **Flamegraph** — shows the component tree, useful for understanding propagation (which child rendered because of which parent).
- **Ranked chart** — sorts by render duration, useful for finding the most expensive component.

## Identifying re-render cascades

The most common React performance problem is a parent component re-rendering too often, causing all its children to re-render. The fix isn't always `React.memo` — it's often moving state down or stabilizing references.

**Diagnosis pattern:**

1. Open React Profiler, start recording.
2. Perform the interaction.
3. Stop recording. Look for components with many renders.
4. Click a component render, check "why did this render?".
5. If "parent rendered" → fix the parent, not the child.

```tsx
// ❌ Dashboard re-renders on every mouse move because position is in top-level state
function Dashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // All children re-render on every mouse move
  return (
    <>
      <CursorTracker onMove={setMousePosition} />
      <ExpensiveMetricsGrid />  {/* re-renders on every mouse move */}
    </>
  );
}

// ✅ Isolate the volatile state to just the component that needs it
function Dashboard() {
  return (
    <>
      <CursorTracker />  {/* manages its own position state */}
      <ExpensiveMetricsGrid />  {/* never re-renders for mouse moves */}
    </>
  );
}
```

## Web Vitals + Chrome User Timing API

Custom marks integrate with the Performance panel timeline:

```ts
performance.mark('filter:start');
const filtered = filterExpenses(expenses, query);
performance.mark('filter:end');
performance.measure('filter:duration', 'filter:start', 'filter:end');
```

These marks appear as "User Timing" entries in the Performance panel — searchable and visible in the flame chart. Essential for attributing field INP data to specific operations when analyzing traces from real users.

## Tracking Core Web Vitals in DevTools

The Performance panel has a "Web Vitals" row (enable in the toolbar gear menu). It shows:
- LCP — which element and when it painted
- INP — which interaction was the worst
- CLS — which element shifted and by how much

Click any Web Vitals marker to jump to the relevant part of the trace.

## `console.time` vs `performance.measure`

```ts
// ❌ console.time — readable in console, not in Performance panel
console.time('computeInsights');
const insights = generateInsights(data);
console.timeEnd('computeInsights');

// ✅ performance.measure — visible in flame chart, queryable in code
performance.mark('computeInsights:start');
const insights = generateInsights(data);
performance.mark('computeInsights:end');
performance.measure('computeInsights', 'computeInsights:start', 'computeInsights:end');

// Get the measurement programmatically
const [entry] = performance.getEntriesByName('computeInsights');
console.log(entry.duration);  // milliseconds
```

## Memory profiling

The Heap Snapshot tool captures all live objects. Compare two snapshots — before and after an action — to find what's accumulating. Common leaks:

- Event listeners attached in `useEffect` without cleanup
- Closures capturing component-scoped data, stored in module-level arrays
- Timers (`setInterval`) not cleared on unmount
- MutationObserver / ResizeObserver not disconnected

The "Allocation instrumentation on timeline" recording shows memory allocations as they happen — useful for pinpointing which interaction is allocating without releasing.

## The profiling workflow

1. **Reproduce with throttling.** 4× CPU, Slow 3G simulates real conditions.
2. **Record a focused interaction.** Don't record a 30-second session — interactions are buried.
3. **Start with the Performance panel.** Find long tasks and their call stacks.
4. **Switch to React Profiler.** Identify component renders triggered by the interaction.
5. **Apply the narrowest fix.** Move state down, stabilize references, add `useMemo` where you measured — not speculatively.
6. **Record again.** Confirm the fix moved the metric.

## Related

- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for the metrics that the profiling data maps to.
- See also: [Performance → INP and Input Latency](#/codex/performance-inp-and-input-latency) for long task anatomy and how input delay shows in traces.
- See also: [React → Memoization: When and Why](#/codex/react-memoization-when-and-why) for deciding whether `React.memo` is the right fix after profiling.

## Sources

- [Chrome DevTools — Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Chrome DevTools — Timeline](https://developer.chrome.com/docs/devtools/performance/reference)
- [web.dev — Analyze runtime performance](https://web.dev/articles/analyze-runtime-performance)
- [React DevTools — Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
