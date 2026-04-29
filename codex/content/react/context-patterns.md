# Context Patterns

React Context solves prop drilling — passing values through components that don't use them. It doesn't solve state management. The two problems look similar from the outside but have different solutions.

## The core mechanism

```tsx
import { createContext, useContext } from 'react';

interface LocaleContextValue {
  locale: 'en' | 'pt';
  setLocale: (locale: 'en' | 'pt') => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Type-safe hook — throws a useful error if used outside the provider
export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'pt'>('en');
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
```

Every component inside `LocaleProvider` that calls `useLocale()` will re-render when `locale` changes. This is the feature and the footgun.

## The re-render problem and how to avoid it

When the context value object is recreated on every render, all consumers re-render — even when their relevant slice didn't change:

```tsx
// ❌ New object on every render — all consumers re-render on every parent render
function BadProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');
  const [locale, setLocale] = useState('en');

  return (
    <AppContext.Provider value={{ theme, setTheme, locale, setLocale }}>
      {children}
    </AppContext.Provider>
  );
}
```

Solutions:

**1. Split contexts** — subscribe each consumer only to what it needs:

```tsx
const ThemeContext = createContext<...>(null);
const LocaleContext = createContext<...>(null);

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
```

Components that only read `locale` won't re-render when `theme` changes.

**2. Stabilize the value with `useMemo`:**

```tsx
function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState<UserPrefs>(defaultPrefs);

  const value = useMemo(
    () => ({ prefs, setPrefs }),
    [prefs]  // only new object when prefs changes
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
```

## Context is not a store

Context re-renders all subscribers on every change. For high-frequency updates (mouse position, scroll position, live timers), use a library with fine-grained subscriptions or keep the state local.

```tsx
// ❌ Context for high-frequency state — every consumer re-renders on every mousemove
const MouseContext = createContext({ x: 0, y: 0 });

function MouseProvider({ children }: { children: React.ReactNode }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return <MouseContext.Provider value={pos}>{children}</MouseContext.Provider>;
}

// ✅ Zustand or useSyncExternalStore for high-frequency state
// Consumers subscribe to selectors — re-render only when their slice changes
const useMousePosition = () => useMouseStore((s) => s.position);
```

## The composition alternative to context

Many "prop drilling" problems aren't actually prop drilling — they're a component tree that's too deep. Lifting content closer to where it's consumed often eliminates the need for context entirely:

```tsx
// ❌ Prop-drilling theme through intermediaries
function AppLayout({ theme }: { theme: Theme }) {
  return <Sidebar theme={theme} />;
}
function Sidebar({ theme }: { theme: Theme }) {
  return <NavItem theme={theme} />;  // Sidebar doesn't use theme itself
}

// ✅ Composition — move the consumer closer to where the value lives
function AppLayout({ theme }: { theme: Theme }) {
  return (
    <Sidebar>
      <NavItem theme={theme} />  // NavItem gets theme directly
    </Sidebar>
  );
}
function Sidebar({ children }: { children: React.ReactNode }) {
  return <nav>{children}</nav>;  // no theme prop needed
}
```

## Good use cases for context

Context works well for values that are:
- Shared widely across the tree (theme, locale, auth user)
- Changed infrequently (user navigates, changes language)
- Not updated at high frequency (not real-time data)

```tsx
// Good: auth state — rarely changes, widely read
const AuthContext = createContext<{ user: User | null }>(null);

// Good: theme — rarely changes, widely read for styling
const ThemeContext = createContext<{ isDark: boolean }>(null);

// Good: feature flags — read-only at runtime, consumed everywhere
const FlagsContext = createContext<Record<string, boolean>>({});
```

## Related

- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for the custom hook pattern used with context.
- See also: [State → External Stores & Zustand](#/codex/state-external-stores-and-zustand) for when context isn't enough.
- See also: [React → Memoization: When & Why](#/codex/react-memoization-when-and-why) for stabilising context values with `useMemo`.

## Sources

- [React docs — createContext](https://react.dev/reference/react/createContext)
- [React docs — useContext](https://react.dev/reference/react/useContext)
- [React docs — Passing Data Deeply](https://react.dev/learn/passing-data-deeply-with-context)
