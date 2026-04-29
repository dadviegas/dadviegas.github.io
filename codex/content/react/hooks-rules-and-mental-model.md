# Hooks: Rules & Mental Model

The two rules of hooks exist for a mechanical reason: React identifies each hook call by its *position* in the call order. If the call order changes between renders — because a hook is inside a conditional — React reads the wrong state for the wrong hook.

## Why call order matters

React stores hook state in a linked list keyed by order. Given this component:

```tsx
function UserPanel({ userId }: { userId: string }) {
  const [name, setName] = useState('');        // slot 0
  const [loading, setLoading] = useState(false); // slot 1
  useEffect(() => { fetchUser(userId).then(setName); }, [userId]); // slot 2
  ...
}
```

On every render, React expects slot 0 to be `useState`, slot 1 to be `useState`, slot 2 to be `useEffect`. If you put a `useState` inside an `if` block, the slots shift when the condition changes, and React reads `loading` where it expects `name`.

The rule is: **always call hooks at the top level, never conditionally.**

## The closure mental model

Every render creates a new closure. Each render's hooks capture the state values from *that specific render*:

```tsx
function SearchInput() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // This closure captures 'query' from the render when this effect ran
    const timerId = setTimeout(() => {
      search(query); // 'query' is frozen at the value when the effect was scheduled
    }, 300);
    return () => clearTimeout(timerId);
  }, [query]); // re-runs when query changes → fresh closure with new query value

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

The `deps` array tells React when to re-run the effect — which means when to create a new closure with fresh values. A missing dependency causes the effect to use stale values.

## The deps array is a contract

```tsx
// ❌ Stale closure — 'count' is captured at 0 and never updates
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // always 0
    }, 1000);
    return () => clearInterval(interval);
  }, []); // empty deps = runs once, closure captures count=0
}

// ✅ Option 1: add count to deps (re-creates interval on each change)
useEffect(() => {
  const interval = setInterval(() => { console.log(count); }, 1000);
  return () => clearInterval(interval);
}, [count]);

// ✅ Option 2: use functional update to avoid needing count in the dep
useEffect(() => {
  const interval = setInterval(() => {
    setCount((prev) => prev + 1); // no stale closure — prev is current
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

React's ESLint rule (`react-hooks/exhaustive-deps`) catches missing deps. Suppressing it without understanding why is a code smell.

## Custom hooks — extracting stateful logic

Custom hooks are functions that start with `use` and may call other hooks. They are the primary unit of logic reuse in React:

```ts
function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}

// Usage
const debouncedQuery = useDebounce(query, 300);
useEffect(() => {
  if (debouncedQuery) search(debouncedQuery);
}, [debouncedQuery]);
```

Each call to `useDebounce` gets its own independent state — hooks are not singletons within a component, they're scoped to the call site.

## StrictMode and double invocation

React 18's StrictMode double-invokes component renders and effect setups in development to surface side effects in render logic and missing cleanups. If your effect fires twice in development but once in production, that's expected behaviour — not a bug.

The fix is always to write proper cleanup in `useEffect`:

```ts
useEffect(() => {
  const subscription = eventStream.subscribe(handler);
  return () => subscription.unsubscribe(); // cleanup runs between the two invocations
}, []);
```

## Related

- See also: [React → useEffect vs useLayoutEffect](#/codex/react-useeffect-vs-uselayouteffect) for the timing distinction.
- See also: [React → Memoization: When & Why](#/codex/react-memoization-when-and-why) for `useCallback` and `useMemo` in the context of deps arrays.
