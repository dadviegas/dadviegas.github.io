# Concurrent Rendering & Suspense

React 18's concurrent mode lets React prepare multiple versions of the UI simultaneously and decide which one to commit. This is not automatic speed — it's the ability to interrupt, pause, and reprioritise renders based on user interaction urgency.

## The fundamental shift

Before concurrent mode, renders were synchronous: once React started reconciling a component tree, it couldn't stop. A 200ms render blocked the UI for 200ms.

Concurrent mode introduces a scheduler. Long renders can be paused mid-tree, the browser can process a user input, and React resumes (or discards) the interrupted render. This makes expensive renders *feel* fast because they never block a high-priority interaction.

## `useTransition` — marking low-priority updates

```tsx
import { useState, useTransition } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);  // urgent — updates the input immediately

    startTransition(() => {
      // not urgent — React can interrupt this if the user types again
      setResults(computeSearchResults(value));
    });
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <ResultsList results={results} />
    </>
  );
}
```

`startTransition` tells React: "this state update is not urgent — don't block the user for it." If the user types before the transition completes, React abandons the old render and starts fresh with the newest value.

`isPending` stays `true` while the transition is in-flight. Use it to show feedback without committing a stale intermediate UI to the screen.

## `useDeferredValue` — deferring a derived value

`useDeferredValue` is `useTransition` for values you don't control the setter for — e.g. a prop from a parent:

```tsx
import { useDeferredValue, memo } from 'react';

function FilterableList({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // This memo check is what makes it effective:
  // FilteredResults won't re-render until deferredQuery stabilises
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <FilteredResults items={items} query={deferredQuery} />
    </>
  );
}

const FilteredResults = memo(({ items, query }: { items: string[]; query: string }) => {
  const filtered = items.filter((i) => i.includes(query));
  return <ul>{filtered.map((i) => <li key={i}>{i}</li>)}</ul>;
});
```

`deferredQuery` is one render behind `query` during rapid input. The `memo` wrapper is essential — without it, `FilteredResults` re-renders every time regardless of whether `deferredQuery` changed.

## Suspense boundaries — data fetching integration

`<Suspense>` has been available for code splitting since React 16. With concurrent mode, it extends to data fetching via React 18's first-class support for *Suspense-compatible data sources*.

```tsx
import { Suspense } from 'react';
import { use } from 'react';  // React 19 / experimental — or via library

function UserProfile({ userId }: { userId: string }) {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDetails userId={userId} />
    </Suspense>
  );
}

function ProfileDetails({ userId }: { userId: string }) {
  // use() unwraps a promise; if the promise isn't resolved,
  // React suspends this component and renders the nearest fallback
  const user = use(fetchUser(userId));  // library-wrapped resource

  return <div>{user.name}</div>;
}
```

Libraries like React Query, SWR, and Relay handle the Suspense plumbing. The component declares what it needs and React handles the loading state — no `isLoading` flag in component code.

## Nested boundaries for progressive disclosure

```tsx
function ProductPage({ productId }: { productId: string }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductHeader productId={productId} />

      {/* Secondary content — its skeleton shows while header is visible */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <ProductReviews productId={productId} />
      </Suspense>
    </Suspense>
  );
}
```

Outer boundary shows while `ProductHeader` loads. Once the header resolves, it renders immediately and the inner boundary shows while reviews load. Users see content progressively rather than staring at a full-page skeleton.

## What concurrent mode does NOT do

- It does not make synchronous renders faster. `useTransition` helps user-perceived performance; if the underlying computation is blocking, it still blocks — just not on urgent work.
- It does not make all state updates concurrent automatically. Only updates inside `startTransition` (or `useDeferredValue`) get deprioritised.
- It does not replace Suspense fallbacks with magic. You still design fallback states; React just knows *when* to show them.

## The `startTransition` vs `setTimeout` distinction

```tsx
// ❌ Workaround from React 17 days — defers the update but not prioritised
setTimeout(() => { setResults(compute(query)); }, 0);

// ✅ React knows this is non-urgent and tracks it through the render lifecycle
startTransition(() => { setResults(compute(query)); });
```

`setTimeout` just shifts work to the next event loop tick. React doesn't know the update is low-priority — it renders it synchronously when the callback fires. `startTransition` integrates with React's scheduler so the transition can actually be interrupted.

## Related

- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for how effects interact with transitions.
- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for how concurrent features improve INP.

## Sources

- [React docs — Suspense](https://react.dev/reference/react/Suspense)
- [React docs — startTransition](https://react.dev/reference/react/startTransition)
- [React blog — React 18 concurrent features](https://react.dev/blog/2022/03/29/react-v18)
- [React docs — useDeferredValue](https://react.dev/reference/react/useDeferredValue)
