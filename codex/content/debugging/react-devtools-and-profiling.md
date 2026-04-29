# React DevTools and Profiling

React DevTools is a browser extension that gives you component-level visibility: inspect the component tree, view props/state/context in real time, and use the Profiler to find which renders are slow and why.

## Component tree inspection

The **Components** tab shows the React tree — not the DOM tree. You can:

- Select a component to inspect its current props, state, hooks, and context.
- Click the eye icon to scroll the DOM view to the element.
- Click the `<>` icon to jump to the source file.
- Edit a prop or state value live to test different states (useful for testing loading/error states without triggering them).

```ts
// Tip: label anonymous components for DevTools
// ❌ Anonymous — shows as "Component" in DevTools
export default memo(() => <div>...</div>);

// ✅ Named — shows as "MemoizedCard"
const MemoizedCard = memo(function Card() { return <div>...</div>; });
export default MemoizedCard;

// ✅ Display name for HOCs and forwardRef
const FancyInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});
FancyInput.displayName = 'FancyInput';
```

## The Profiler — finding slow renders

1. Open React DevTools → **Profiler** tab.
2. Click **Record**.
3. Perform the action you want to profile (type in an input, open a modal, scroll a list).
4. Click **Stop**.

The **Flamegraph** shows which components rendered, in order, with their render duration. The **Ranked** chart shows the slowest components sorted by time.

**Reading the flamegraph:**

```
Each bar = one component render
- Gray = did not render this commit (committed same as previous)
- Yellow/orange = rendered, slow
- Green = rendered, fast

Tall stack = deep component tree
Wide bar = slow render time
```

## Why did this component render?

The Profiler tells you what rendered — the **"Why did this render?"** feature tells you why. Enable it in DevTools settings (gear icon → "Record why each component rendered").

The three causes of re-renders:

| Cause | Profiler shows | Fix |
|-------|---------------|-----|
| Props changed | "Props changed: onClick" | Stabilize with `useCallback` / `useMemo` |
| State changed | "State changed: count" | Often correct — check if state is too high up |
| Context changed | "Context changed" | Split context; use selector pattern |
| Parent rendered | "The parent component rendered" | `memo()` the component |

## Diagnosing unnecessary re-renders

```tsx
// 1. Wrap with memo — first line of defence
const ExpensiveChart = memo(function ExpensiveChart({ data }: { data: DataPoint[] }) {
  return <Chart data={data} />;
});

// 2. Stabilize function props with useCallback
function Parent() {
  const handleClick = useCallback(() => {
    // stable reference — doesn't cause child re-renders
    doSomething();
  }, []); // deps: only re-creates if these change

  return <ExpensiveChart onSelect={handleClick} />;
}

// 3. Stabilize object props with useMemo
function Parent() {
  const options = useMemo(() => ({ color: 'blue', size: 'lg' }), []);
  return <ExpensiveChart options={options} />;
}

// 4. Check what's changing with a debug utility
function useWhyDidYouUpdate<T extends object>(name: string, props: T) {
  const prev = useRef<T>(props);
  useEffect(() => {
    const changed = Object.entries(props).filter(([k, v]) => prev.current[k as keyof T] !== v);
    if (changed.length) console.log(`${name} re-rendered:`, Object.fromEntries(changed));
    prev.current = props;
  });
}
```

## Measuring render count in development

```tsx
const renderCount = useRef(0);
renderCount.current++;

// In DevTools: inspect this ref to see how many times the component rendered
// Or log it:
useEffect(() => {
  console.log(`MyComponent rendered ${renderCount.current} times`);
});
```

## Concurrent Mode — Profiler in React 18

In React 18, renders may be interrupted and restarted. The Profiler shows:

- **Committed** renders (actual DOM updates — blue bars)
- **Interrupted** renders (gray bars — never committed)

`startTransition` renders appear as deferred commits. If a transition takes too long, use `useDeferredValue` to keep the UI responsive.

## Related

- See also: [React → Memoization: When and Why](#/codex/react-memoization-when-and-why) for the theory behind profiling.
- See also: [React → Concurrent Rendering and Suspense](#/codex/react-concurrent-rendering-and-suspense) for React 18 profiling.
- See also: [Debugging → Performance Debugging Runbook](#/codex/debugging-performance-debugging-runbook) for the full workflow.

## Sources

- [React DevTools — Getting started](https://react.dev/learn/react-developer-tools)
- [React blog — Profiler API](https://react.dev/reference/react/Profiler)
- [Kent C. Dodds — Profile React Apps](https://kentcdodds.com/blog/profile-a-react-app-for-performance)
- [React docs — Optimizing Performance](https://legacy.reactjs.org/docs/optimizing-performance.html)
