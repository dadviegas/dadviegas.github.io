# Design Systems and Tokens

A design system is a shared language between designers and engineers — a set of decisions (colors, spacing, typography, motion) encoded as tokens and components that any surface in the product can consume. Without one, every team makes their own local decisions and the product drifts visually.

## Design tokens

A design token is a named value that represents a design decision. Instead of hardcoding `#161b22` in a component, you reference `theme.colors.surface`. The token carries meaning; the hex value is just its current expression.

```ts
// ❌ Hardcoded — any change requires finding every occurrence
const Card = styled.div`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
`;

// ✅ Token-based — change the token, every surface updates
const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;
```

The token layer makes systematic changes safe. Dark mode, density modes, white-labeling — all become a token swap, not a find-and-replace through hundreds of files.

## Token taxonomy

Design tokens are typically organized in tiers:

**Tier 1 — Primitive tokens** (raw values, no semantic meaning):
```ts
const primitives = {
  color: {
    gray900: '#0d1117',
    gray800: '#161b22',
    gray600: '#30363d',
  },
  space: {
    '4': '4px',
    '8': '8px',
    '16': '16px',
  },
};
```

**Tier 2 — Semantic tokens** (names that describe purpose, reference primitives):
```ts
const semantic = {
  colors: {
    mainBg: primitives.color.gray900,
    surface: primitives.color.gray800,
    border: primitives.color.gray600,
  },
  spacing: {
    xs: primitives.space['4'],
    sm: primitives.space['8'],
    md: primitives.space['16'],
  },
};
```

**Tier 3 — Component tokens** (specific to a component, reference semantic tokens):
```ts
const button = {
  paddingX: semantic.spacing.md,
  borderRadius: semantic.borderRadius.md,
  fontWeight: 500,
};
```

In practice, most systems use two tiers. The key property: component code references semantic tokens, never primitives. Primitives are only referenced by semantic tokens.

## TypeScript-typed theme

A typed theme object catches token spelling mistakes at compile time:

```ts
// packages/shared/src/theme.ts
export const theme = {
  colors: {
    mainBg: '#0d1117',
    surface: '#161b22',
    border: '#30363d',
    mainText: '#e6edf3',
    mainTextMuted: '#8b949e',
    accent: '#58a6ff',
  },
  spacing: {
    xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px',
  },
  borderRadius: {
    sm: '4px', md: '6px', lg: '12px',
  },
} as const;

export type Theme = typeof theme;
```

`as const` makes the type fully literal — `theme.colors.mainBg` is typed as `'#0d1117'`, not `string`. This catches typos and enables autocomplete.

## Component library — the LEGO layer

Tokens define the values. A component library provides the reusable patterns built from those values. The key property: one component, one implementation, consumed everywhere.

The most common mistake: building the same button 12 times in 12 apps because each team thought their button was "slightly different." Those buttons drift visually and behaviorally. A button in the design system is a decision that can't be made locally.

**What goes in the component library:**
- Universal patterns used by 3+ surfaces: `Button`, `Input`, `Dropdown`, `Badge`, `Tooltip`
- Layout primitives: `Layout`, `Toolbar`, `Card`
- Shared icons

**What doesn't go in the component library:**
- App-specific components: the expense row in the Finance app, the movie card in Movies
- Components that are only used by one surface today and probably always will be

The threshold is three: if three different surfaces need the same component, it belongs in the library.

## Tokens as CSS custom properties

CSS custom properties (variables) are the native way to expose tokens to the DOM, enabling:
- Runtime theming (switch dark/light without rebuild)
- CSS-level overrides from consumer code
- Access from plain CSS files that don't import the JS theme object

```ts
// Inject tokens as CSS variables on mount
function injectTokens(tokens: typeof theme) {
  const root = document.documentElement;
  root.style.setProperty('--color-surface', tokens.colors.surface);
  root.style.setProperty('--color-border', tokens.colors.border);
  root.style.setProperty('--spacing-md', tokens.spacing.md);
}
```

Then in CSS-in-JS or plain CSS:

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--spacing-md);
}
```

This is especially useful in micro-frontend architectures where some apps use different CSS-in-JS solutions — everyone can consume the same token layer through CSS variables.

## Versioning and breaking changes

Component library breaking changes require careful coordination in a monorepo. Strategies:

1. **Colocate** — if the library and all consumers are in the same monorepo, update everything in one PR. There's no version to manage.
2. **Deprecation warnings** — add a `@deprecated` JSDoc comment on the old API, add the new API, update consumers over multiple PRs, then remove the deprecated one.
3. **Codemod** — for large-scale prop renames, write a jscodeshift codemod that transforms all consumers automatically.

Never break the component library API in a monorepo without updating all consumers in the same PR. "I'll update the consumers later" never happens.

## Related

- See also: [Architecture → Component Composition Over Props](#/codex/architecture-component-composition-over-props) for when to encode variants as props vs. composition slots.
- See also: [CSS → Custom Properties and Theming](#/codex/css-custom-properties-and-theming) for the CSS layer that exposes tokens at runtime.
- See also: [Architecture → Monorepos with pnpm Workspaces](#/codex/architecture-monorepos-with-pnpm-workspaces) for how the component library package is structured in a monorepo.

## Sources

- [Storybook docs — Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/)
- [W3C — Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Style Dictionary docs](https://styledictionary.com/)
- [Theo — Token pipelines](https://github.com/theo-tokens/theo)
