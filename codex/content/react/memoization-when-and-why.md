# Memoization: When & Why

`React.memo`, `useMemo`, and `useCallback` are often applied as a reflex response to "make it faster." That's backwards. Used incorrectly, memoization adds complexity and can make performance worse. The right mental model: memoization is a trade-off between computation cost and referential stability.

## `React.memo` — skip re-rendering when props haven't changed

```tsx
// ❌ This memo does nothing useful — primitive props change on every parent render anyway
const StatusBadge = memo(({ count }: { count: number }) => <span>{count}</span>);

// ✅ Memo pays off when the component is expensive to render AND its props are stable
const VirtualizedTable = memo(({ rows, columns }: TableProps) => {
  // renders 500+ cells — re-rendering on every parent render is expensive
  return <table>{/* 500 rows × N columns */}</table>;
});
```

`React.memo` does a *shallow* comparison of props. For objects and arrays, it compares references — so if a parent creates a new array on every render, `memo` never skips.

```tsx
function Dashboard() {
  const [counter, setCounter] = useState(0);

  // ❌ New array on every render — memo on VirtualizedTable sees new `rows` reference
  const rows = data.filter((d) => d.active);

  // ✅ Stable reference — memo works
  const rows = useMemo(() => data.filter((d) => d.active), [data]);

  return <VirtualizedTable rows={rows} columns={columns} />;
}
```

## `useMemo` — memoize an expensive calculation

```tsx
function SpendingReport({ expenses }: { expenses: Expense[] }) {
  // ❌ Recomputes every render — fine if expenses.length is small, wrong at scale
  const totalByCategory = groupAndSum(expenses);

  // ✅ Only recomputes when expenses reference changes
  const totalByCategory = useMemo(() => groupAndSum(expenses), [expenses]);

  return <CategoryChart data={totalByCategory} />;
}
```

The cost `useMemo` saves must exceed the cost of:
1. Running the dependency comparison on every render.
2. Storing the memoized value in memory.

For a `.map()` over 20 items, `useMemo` adds overhead without helping. For a topological sort over a dependency graph, it's worth it.

## `useCallback` — stable function references for child components

`useCallback(fn, deps)` is `useMemo(() => fn, deps)` with sugar. Its purpose is referential stability, not performance on its own:

```tsx
function CommentThread({ threadId }: { threadId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);

  // ❌ New function reference every render → MemoizedInput re-renders every time
  const handleSubmit = (text: string) => {
    setComments((prev) => [...prev, { id: randomId(), text, threadId }]);
  };

  // ✅ Stable reference — MemoizedInput only re-renders when threadId changes
  const handleSubmit = useCallback((text: string) => {
    setComments((prev) => [...prev, { id: randomId(), text, threadId }]);
  }, [threadId]);

  return (
    <>
      <CommentList comments={comments} />
      <MemoizedInput onSubmit={handleSubmit} />
    </>
  );
}

const MemoizedInput = memo(({ onSubmit }: { onSubmit: (text: string) => void }) => {
  // only re-renders when onSubmit reference changes
  return <input onKeyDown={(e) => { if (e.key === 'Enter') onSubmit(e.currentTarget.value); }} />;
});
```

`useCallback` is only effective when the consumer is wrapped in `memo` (or is an effect dependency). A `useCallback` function passed to a non-memoized child saves nothing — the child renders regardless.

## When NOT to memoize

**Don't memoize values that are already cheap:**
```tsx
// ❌ Unnecessary — string concat is instant
const label = useMemo(() => `${firstName} ${lastName}`, [firstName, lastName]);

// ✅ Just compute inline
const label = `${firstName} ${lastName}`;
```

**Don't memoize when the deps change on every render anyway:**
```tsx
function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  // ❌ count changes every time the user clicks — memoization never applies
  const doubled = useMemo(() => count * 2, [count]);
}
```

**Don't memoize to avoid profiling:**
The correct workflow is:
1. Measure with React DevTools Profiler.
2. Identify the component that's slow.
3. Determine whether it's slow because of re-rendering or expensive computation.
4. Apply the right fix.

## The selector pattern — derived data without `useMemo` everywhere

If a parent computes derived state and passes it down, each consumer needs `useMemo`. An alternative: colocate derivation with consumption:

```tsx
// Component reads raw store; derivation is local and cheap
function SpendingChip({ categoryId }: { categoryId: string }) {
  const { data } = useFinance();
  // Derivation is inside the component that needs it — no prop drilling
  const total = data?.expenses
    .filter((e) => e.categoryId === categoryId)
    .reduce((sum, e) => sum + e.amount, 0) ?? 0;

  return <span>{total.toFixed(2)}</span>;
}
```

This avoids threading memoized values through the tree at the cost of one filter+reduce per render. For small datasets (< 500 expenses), this is usually faster than introducing memoization.

## Related

- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for the deps array contract.
- See also: [React → Reconciliation & Keys](#/codex/react-reconciliation-and-keys) for how React decides whether to re-render.
- See also: [Performance → Runtime Performance Profiling](#/codex/performance-runtime-perf-profiling) for measuring before you optimise.
