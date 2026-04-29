# Data Fetching as State

Fetching from a server is not the same as managing local state. Server data has an external source of truth, a finite lifetime before it's stale, and needs to stay synchronized across multiple components requesting the same resource. Libraries like SWR and React Query are specialized for this — they provide a cache layer between your components and the server.

## The `useEffect` anti-pattern

Every team writing their own fetch management ends up reinventing a broken subset of what SWR/Query already solve:

```tsx
// ❌ Manual — missing: deduplication, background refresh,
// cache invalidation, race conditions, refocus refresh
function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchExpenses()
      .then((data) => { if (!cancelled) { setExpenses(data); setLoading(false); } })
      .catch((err) => { if (!cancelled) { setError(err); setLoading(false); } });
    return () => { cancelled = true; };
  }, []);
  // …
}
```

The `cancelled` flag handles race conditions but misses:
- Two components mounting simultaneously both fetch — no deduplication
- Data is stale after navigating away and back — no background refresh
- No way to invalidate the cache when the user submits a form
- No retry on network error

## SWR

SWR ("stale-while-revalidate") fetches from the cache immediately, revalidates in the background, and updates the component:

```ts
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ExpenseList() {
  const { data: expenses, error, isLoading, mutate } = useSWR<Expense[]>(
    '/api/expenses',
    fetcher,
    {
      refreshInterval: 30_000,        // background refresh every 30s
      revalidateOnFocus: true,        // refresh when window regains focus
      dedupingInterval: 5_000,        // suppress duplicate requests within 5s
    }
  );

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState />;
  return <List expenses={expenses!} onMutate={mutate} />;
}
```

### Cache key

The first argument to `useSWR` is the cache key — the string (or array/object/function) that uniquely identifies this request. Two components mounting with the same key share the same cache entry and one fetch:

```ts
// Both components use the same key → one fetch, shared result
const { data } = useSWR('/api/expenses', fetcher);        // component A
const { data } = useSWR('/api/expenses', fetcher);        // component B
// → only one network request, both get the same cached value
```

Parameterized requests:

```ts
// Key changes when month changes → new fetch, separate cache entry
const { data } = useSWR(
  month ? `/api/expenses?month=${month}` : null,  // null key → disabled
  fetcher
);
```

A `null` key disables the hook — useful when a parameter hasn't been determined yet.

### Mutation and cache invalidation

After a form submission, invalidate or optimistically update the cache:

```ts
// Revalidate after save — triggers a background refetch
const { mutate } = useSWR('/api/expenses', fetcher);

async function saveExpense(data: NewExpense) {
  await postExpense(data);
  await mutate();  // invalidate the cache → next render gets fresh data
}

// Optimistic update — update locally, then confirm from server
async function saveExpense(data: NewExpense) {
  const optimistic = [...expenses!, { ...data, id: 'temp', createdAt: Date.now() }];
  await mutate(
    async () => {
      const saved = await postExpense(data);
      return [...expenses!, saved];
    },
    { optimisticData: optimistic, rollbackOnError: true }
  );
}
```

## React Query

React Query (TanStack Query) offers the same caching model but with a more explicit API and built-in mutation primitives:

```ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function ExpenseList() {
  const { data: expenses, isLoading, error } = useQuery({
    queryKey: ['expenses'],
    queryFn: fetchExpenses,
    staleTime: 30_000,     // data is fresh for 30s — no background refetch during this window
    gcTime: 5 * 60_000,    // keep in cache for 5 minutes after last consumer unmounts
  });

  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] });
    },
  });

  // …
}
```

### Query keys

React Query's `queryKey` is an array — the same cache semantics as SWR's string key but with structured data:

```ts
// All of these are separate cache entries
useQuery({ queryKey: ['expenses'] });
useQuery({ queryKey: ['expenses', { month: '2026-04' }] });
useQuery({ queryKey: ['expenses', { month: '2026-04', memberId: 'joao' }] });

// Invalidate all expense queries
queryClient.invalidateQueries({ queryKey: ['expenses'] });

// Invalidate only the month-specific query
queryClient.invalidateQueries({ queryKey: ['expenses', { month: '2026-04' }] });
```

## SWR vs React Query

| Feature | SWR | React Query |
|---------|-----|-------------|
| Bundle size | ~4KB | ~11KB |
| Mutations | Manual | `useMutation` built-in |
| Optimistic updates | Via `mutate()` | Via `onMutate` + rollback |
| Infinite scroll | `useSWRInfinite` | `useInfiniteQuery` |
| DevTools | Extension | Built-in panel |
| Prefetching | `preload()` | `prefetchQuery()` |

Both are excellent. SWR is simpler for basic CRUD; React Query is better for complex mutation flows with optimistic UI and rollback.

## Separation from client state

Server state and client state should not mix. Client state (which tab is active, whether a modal is open) belongs in `useState` or Zustand. Server state belongs in SWR or React Query.

```ts
// ❌ Mixing server data into a Zustand store
const useExpenseStore = create((set) => ({
  expenses: [],  // server data in client store — manual sync required
  setExpenses: (expenses) => set({ expenses }),
}));

// ✅ Server state in SWR, client-only state in useState
function ExpensePage() {
  const { data: expenses } = useSWR('/api/expenses', fetcher);  // server state
  const [selectedId, setSelectedId] = useState<string | null>(null);  // client state
}
```

## Related

- See also: [State → Local vs Global State](#/codex/state-local-vs-global-state) for the decision matrix on where different kinds of state belong.
- See also: [State → External Stores and Zustand](#/codex/state-external-stores-and-zustand) for client-only global state and the distinction from server state.

## Sources

- [React docs — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React Query docs — Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- [SWR docs — Introduction](https://swr.vercel.app/docs/getting-started)
- [React docs — use (data fetching)](https://react.dev/reference/react/use)
