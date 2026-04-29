# External Stores and Zustand

Zustand is a minimal external store — no reducers, no actions, no providers. A store is a function that returns state and methods. Components subscribe to slices of the store; they re-render only when their slice changes.

## Why Zustand over Context

Context re-renders every consumer when the value changes. Zustand lets components subscribe to selectors — only the specific slice they read. For stores with frequently changing or large state shapes, this is the difference between 2 re-renders and 50.

```ts
import { create } from 'zustand';

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const useCartStore = create<CartStore>()((set, get) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => {
    const items = [...state.items, item];
    return { items, total: items.reduce((sum, i) => sum + i.price, 0) };
  }),
  removeItem: (id) => set((state) => {
    const items = state.items.filter((i) => i.id !== id);
    return { items, total: items.reduce((sum, i) => sum + i.price, 0) };
  }),
}));
```

## Selector subscriptions

Components subscribe via a selector function. The component re-renders only when the selector's return value changes (shallow equality by default):

```tsx
// ✅ Only re-renders when item count changes
function CartIcon() {
  const count = useCartStore((state) => state.items.length);
  return <Badge>{count}</Badge>;
}

// ✅ Only re-renders when total changes
function CartTotal() {
  const total = useCartStore((state) => state.total);
  return <span>€{total.toFixed(2)}</span>;
}

// ❌ Subscribes to the entire store — re-renders on every change
function CartTotal() {
  const store = useCartStore();
  return <span>€{store.total.toFixed(2)}</span>;
}
```

For selectors that return objects, use `useShallow` to do a shallow equality check rather than referential equality:

```ts
import { useShallow } from 'zustand/react/shallow';

// ✅ Only re-renders when name or email changes, not when other profile fields update
const { name, email } = useUserStore(
  useShallow((state) => ({ name: state.user.name, email: state.user.email }))
);
```

## Actions: inside vs outside the store

Actions defined inside the store call `set()` and `get()` directly. This is idiomatic Zustand — no external action creators needed.

```ts
const useExpenseStore = create<ExpenseStore>()((set, get) => ({
  expenses: [] as Expense[],
  filter: 'all' as ExpenseFilter,

  addExpense: (expense: Expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),

  deleteExpense: (id: string) =>
    set((state) => ({ expenses: state.expenses.filter((e) => e.id !== id) })),

  // get() reads current state without subscribing
  getFilteredExpenses: () => {
    const { expenses, filter } = get();
    if (filter === 'all') return expenses;
    return expenses.filter((e) => e.type === filter);
  },
}));
```

## Middleware: persist

Zustand ships `persist` middleware that syncs store state to `localStorage` (or any storage adapter):

```ts
import { persist, createJSONStorage } from 'zustand/middleware';

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: 'dark' as 'dark' | 'light',
      locale: 'en' as 'en' | 'pt',
      setTheme: (theme) => set({ theme }),
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'atlantis:settings',      // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({       // only persist these fields
        theme: state.theme,
        locale: state.locale,
      }),
    }
  )
);
```

`partialize` lets you exclude methods (functions can't be serialized) from what gets saved.

## Middleware: devtools

The `devtools` middleware connects to Redux DevTools extension:

```ts
import { devtools } from 'zustand/middleware';

const useExpenseStore = create<ExpenseStore>()(
  devtools(
    (set, get) => ({ /* … */ }),
    { name: 'ExpenseStore' }
  )
);
```

In development, you'll see state snapshots and time-travel debugging in the Redux DevTools extension — essential for debugging complex state transitions.

## Derived state: don't store what you can compute

```ts
// ❌ Storing derived state — must be kept in sync with source data
interface CartStore {
  items: CartItem[];
  total: number;   // derived from items — duplicated state
}

// ✅ Compute in the selector
const useCartTotal = () => useCartStore(
  (state) => state.items.reduce((sum, item) => sum + item.price, 0)
);
```

If a computation is expensive, memoize it in the component with `useMemo`, keyed on the relevant state slice.

## Testing Zustand stores

Test the store in isolation — no React needed:

```ts
import { act } from '@testing-library/react';

describe('CartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [], total: 0 });
  });

  it('adds items and updates total', () => {
    const { addItem } = useCartStore.getState();
    act(() => {
      addItem({ id: 'mug-1', name: 'Ceramic Mug', price: 24.99 });
    });
    expect(useCartStore.getState().total).toBe(24.99);
    expect(useCartStore.getState().items).toHaveLength(1);
  });
});
```

`getState()` and `setState()` give direct access without React hooks — clean for unit tests.

## Zustand vs Redux Toolkit

| Aspect | Zustand | Redux Toolkit |
|--------|---------|---------------|
| Bundle size | ~8KB | ~30KB |
| Boilerplate | Minimal | Moderate (slices, actions) |
| DevTools | Via middleware | Built-in |
| TypeScript | Excellent (v4) | Excellent |
| Async | Manual | RTK Query |
| Learning curve | Low | Medium |

Reach for Redux Toolkit when you need the full RTK Query data-fetching layer, normalized cache for relational data, or strict action/reducer discipline for a large team. For most apps, Zustand is sufficient.

## Module-level store access (non-React)

Zustand stores expose `.getState()` and `.subscribe()` on the store itself, enabling access outside React:

```ts
// Access from event handlers, websocket callbacks, service workers
function handleWebSocketMessage(msg: ServerMessage) {
  const { addExpense } = useExpenseStore.getState();
  addExpense(deserializeExpense(msg.payload));
}

// Subscribe without React (for analytics, logging)
const unsubscribe = useExpenseStore.subscribe(
  (state) => state.expenses,
  (expenses) => {
    analytics.track('expenses-updated', { count: expenses.length });
  }
);
```

This is a significant advantage over Context — non-React code can participate in the same state without going through component lifecycle.

## Related

- See also: [State → Local vs Global State](#/codex/state-local-vs-global-state) for deciding when an external store is warranted vs keeping state local.
- See also: [State → Data Fetching as State](#/codex/state-data-fetching-as-state) for SWR/React Query, which handle server state separately from Zustand's client state domain.

## Sources

- [React docs — useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Zustand docs — Introduction](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React docs — Integrating with third-party state managers](https://react.dev/learn/you-might-not-need-an-effect#subscribing-to-an-external-store)
