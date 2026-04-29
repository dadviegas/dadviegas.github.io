# Local vs Global State

State management is a placement problem: put state in the right scope and it's easy to reason about. Put it too high and everything re-renders. Put it too low and you pass props everywhere. There's no single rule — this document maps the decision tree.

## The placement heuristic

State belongs as close to where it's used as possible. Start with local state. Lift it only when two components genuinely need the same value at the same time.

```
Question: who needs this state?
  └─ Only this component → useState
  └─ This component + its direct children → useState + props
  └─ Several components in a subtree → Context or lifted state
  └─ Multiple disconnected subtrees → External store (Zustand, Redux)
  └─ Derived from server data + cached → Data-fetching library (SWR, React Query)
```

## What counts as "local" state

Local state is UI state that doesn't need to persist across navigation, doesn't need to sync across tabs, and isn't needed by other components:

- Is a dropdown open?
- What's the current input value before form submission?
- Which tab is active?
- Is a hover state active?
- What's the selected page in a paginated list?

These belong in `useState` inside the component that renders the UI element.

```tsx
// ✅ Modal open state is owned by the component that triggers it
function TransactionRow({ transaction }: { transaction: Transaction }) {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <Row onClick={() => setEditOpen(true)}>{transaction.description}</Row>
      {editOpen && <EditModal transaction={transaction} onClose={() => setEditOpen(false)} />}
    </>
  );
}
```

## The over-lifting problem

Moving state to a parent component "just in case" causes every component in the tree to re-render when that state changes — even components that don't use it.

```tsx
// ❌ selectedTab causes DashboardPage to re-render on every tab switch
// DashboardPage has 8 widgets — all 8 re-render
function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'details'>('overview');
  return (
    <>
      <TabBar selected={selectedTab} onSelect={setSelectedTab} />
      <WeatherWidget />
      <FinanceWidget />
      <StreakWidget />
      {/* …5 more widgets */}
    </>
  );
}

// ✅ Tab state stays in the component that uses it
function DashboardPage() {
  return (
    <>
      <TabSection />   {/* manages its own tab state internally */}
      <WeatherWidget />
      <FinanceWidget />
      <StreakWidget />
    </>
  );
}
```

## Context: the right use case

React Context is not a state management solution — it's a dependency injection mechanism. It solves the "prop drilling" problem: passing a value through many intermediate layers that don't use it.

Good uses:
- Current locale
- Current user / auth state
- Theme tokens
- Feature flags

Bad uses:
- Frequently updated values (causes all consumers to re-render)
- State that could live in `useState` with props

```tsx
// ❌ Fast-changing state in context — causes all consumers to re-render on every tick
const TimerContext = createContext<number>(0);

function App() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <TimerContext.Provider value={tick}>
      {children}  {/* every consumer re-renders every second */}
    </TimerContext.Provider>
  );
}
```

## When external stores are warranted

An external store (Zustand, Jotai, Redux Toolkit) is appropriate when:

1. State is accessed by many components across non-adjacent subtrees
2. State needs to survive component unmounting (shopping cart, form drafts)
3. Actions need to trigger effects independent of the component tree
4. Multiple browser tabs should stay in sync

The key property of external stores: components subscribe to slices. A component that reads `store.user.name` doesn't re-render when `store.cart.items` changes.

```ts
// Zustand — component subscribes to only the slice it needs
const useCartCount = () => useCartStore((state) => state.items.length);

function CartIcon() {
  const count = useCartCount();
  // Re-renders only when item count changes, not when prices update
  return <Badge>{count}</Badge>;
}
```

## Server state is different

Data fetched from an API is not client state. It has a server source of truth, a cache lifetime, and needs background refresh. Managing it with `useState` + `useEffect` creates:
- Manual loading/error states
- No deduplication (two components fetch the same endpoint)
- No cache invalidation

Libraries like SWR and React Query treat server data as a cache layer. They handle deduplication, background revalidation, and optimistic updates — things that `useState` + `useEffect` can't do correctly without significant reinvention.

```ts
// ❌ Reinventing server state management
function ExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchExpenses()
      .then(setExpenses)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  // No background refresh, no cache, no deduplication
}

// ✅ SWR handles all of this
function ExpenseList() {
  const { data: expenses, error } = useSWR('/api/expenses', fetchExpenses);
  if (error) return <ErrorState />;
  if (!expenses) return <LoadingState />;
  return expenses.map((e) => <ExpenseRow key={e.id} expense={e} />);
}
```

## The decision checklist

| Characteristic | → Where to put it |
|----------------|-------------------|
| Only one component uses it | `useState` |
| A few adjacent components use it | `useState` + props |
| Deeply nested prop drilling | Context |
| Multiple disconnected components | Zustand / Jotai |
| Persists in localStorage/sessionStorage | Custom hook wrapping `useState` |
| Data from an API | SWR / React Query |
| Derived from existing state | `useMemo` (not state) |

## Related

- See also: [State → External Stores and Zustand](#/codex/state-external-stores-and-zustand) for the Zustand API and selector patterns.
- See also: [State → Data Fetching as State](#/codex/state-data-fetching-as-state) for SWR/React Query patterns and when to reach for them.
- See also: [React → Context Patterns](#/codex/react-context-patterns) for splitting contexts and preventing unnecessary re-renders from context.

## Sources

- [React docs — State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React docs — Managing State](https://react.dev/learn/managing-state)
- [React docs — Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
