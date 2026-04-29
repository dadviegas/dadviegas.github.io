# Runtime vs Compile-time Emotion

Emotion ships in two modes that have different tradeoffs. Understanding which mode you're in — and what it costs — explains several otherwise mysterious performance characteristics and constraints.

## The two modes

**Runtime mode** (`@emotion/react`, `@emotion/styled` without the Babel plugin):
- CSS is generated in the browser from tagged template literals or object styles
- No build step required beyond standard JSX transforms
- Works in any bundler, including those without Babel (rspack with SWC, Vite)

**Compile-time mode** (with `@emotion/babel-plugin`):
- The Babel plugin transforms `css()` calls and `styled` templates at build time
- Adds stable `label` hashes to generated class names (e.g. `css-abc123-Button`)
- Unlocks *component selectors* (targeting a styled component by reference in another component's CSS)
- Required for SSR hydration stability in most configurations

## What the Babel plugin actually does

```tsx
// Source
const Button = styled.button`
  color: ${theme.colors.mainText};
  background: ${theme.colors.surface};
`;

// After @emotion/babel-plugin (simplified)
const Button = styled.button`
  label: Button;                          // added: stable display name
  color: ${theme.colors.mainText};
  background: ${theme.colors.surface};
`;
// Class name becomes: css-<hash>-Button (readable in DevTools)
// Without plugin: css-<hash> (opaque hash only)
```

The plugin also enables component selectors:

```tsx
const Icon = styled.svg`color: currentColor;`;

const Button = styled.button`
  /* With Babel plugin: this compiles to targeting Icon's generated class */
  ${Icon} { margin-right: 4px; }

  /* Without Babel plugin: crashes at runtime — Icon reference is a function, not a string */
`;
```

## The Module Federation constraint

In a Module Federation setup where the shell uses `@emotion/babel-plugin` but remote apps use only the runtime (rspack's `emotion: true` experiment handles it differently), **component selectors crash in remotes**:

```tsx
// ❌ Crashes in any remote app that's runtime-only
const DropdownIcon = styled(ChevronDown)``;
const Trigger = styled.button`
  ${DropdownIcon}:hover & { opacity: 0.8; }  // component selector — runtime failure
`;

// ✅ Use class names instead
const Trigger = styled.button`
  &:hover .dropdown-icon { opacity: 0.8; }
`;
// render: <ChevronDown className="dropdown-icon" />
```

## SSR and class name stability

Runtime Emotion generates class names based on the style content hash. In SSR, the server and client must produce the same hash for hydration to succeed. Two things break this:

1. **Dynamic styles that depend on execution order** — class names are assigned in insertion order. If component A mounts before B on the server but B before A on the client, class names swap.
2. **Missing `cache` context** — each `@emotion/cache` instance maintains its own counter. Use `CacheProvider` with a consistent cache on both server and client.

```tsx
// Correct SSR setup — same cache on server and client
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const cache = createCache({ key: 'css' });  // 'css' is the prefix used in class names

function App() {
  return (
    <CacheProvider value={cache}>
      {/* components */}
    </CacheProvider>
  );
}
```

## Performance: runtime cost

Every `styled` component call in runtime mode runs a style injection algorithm:
1. Parse the template literal with interpolated values
2. Hash the resolved CSS string
3. Check if the hash exists in the style sheet (avoid duplicate injection)
4. If not, inject a `<style>` rule

Step 1–2 happen on every render for dynamic styles (styles with changing interpolations). Step 3–4 happen once per unique style. This means:

- Static styled components are cheap after the first render (cache hit in step 3)
- Dynamic styles with frequent value changes (every render) are expensive

```tsx
// ❌ Expensive: new CSS string on every render → cache miss → style injection
const Row = styled.tr<{ selected: boolean }>`
  background: ${({ selected }) => selected ? '#1f3a52' : 'transparent'};
`;

// ✅ Cheap: two static classes, toggle with prop → both are cached after first render
const Row = styled.tr<{ selected: boolean }>`
  background: transparent;
  ${({ selected }) => selected && `background: #1f3a52;`}
`;
```

## When to use `css` prop vs `styled`

```tsx
// css prop — good for one-off styles local to a component
<div css={{ padding: theme.spacing.md, color: theme.colors.mainText }}>

// styled — good for reusable, named component primitives
const Card = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
`;
```

The `css` prop requires either the JSX pragma (`/** @jsxImportSource @emotion/react */`) or the Babel plugin to transform it. In projects using `react-jsx` transform without the pragma, use `styled` or the `css` import from `@emotion/css` (runtime-only, no cache sharing).

## Related

- See also: [Emotion → The Babel Plugin](#/codex/emotion-babel-plugin) for a deeper look at component selectors and SSR stability.
- See also: [Bundlers → Module Federation](#/codex/module-federation-fundamentals) for the constraint that disables component selectors in remotes.

## Sources

- [Emotion docs — Introduction](https://emotion.sh/docs/introduction)
- [Emotion docs — Babel plugin](https://emotion.sh/docs/babel)
- [Emotion GitHub — @emotion/babel-plugin](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin)
