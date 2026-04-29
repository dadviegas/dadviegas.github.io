# Design Tokens

Design tokens are the named, platform-agnostic representations of design decisions: colors, spacing, typography, motion, shadows. They're the bridge between design tools and code, ensuring a change in one place propagates everywhere.

## Token taxonomy

```
Primitive tokens  →  Semantic tokens  →  Component tokens
(raw values)         (intent)             (specific usage)

#0d1117           →  color.bg.page    →  sidebar.bg
14px              →  font.size.body   →  button.label.fontSize
8px               →  space.sm         →  card.padding.inner
```

**Primitive tokens** are the design palette — every color, size, and weight in the system. Never used directly in components.

**Semantic tokens** assign meaning to primitives — `color.text.muted` maps to a specific gray. UI code uses semantic tokens.

**Component tokens** (optional) are component-specific references to semantic tokens — `button.bg.primary` maps to `color.accent`.

## TypeScript token system

```ts
// tokens/primitive.ts
const primitive = {
  color: {
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      900: '#111827',
    },
    violet: {
      500: '#8b5cf6',
      600: '#7c3aed',
    },
  },
  fontSize: {
    xs: '11px', sm: '13px', base: '14px', md: '16px',
  },
  spacing: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px', 8: '32px',
  },
} as const;

// tokens/semantic.ts
const semantic = {
  colors: {
    bg: {
      page: primitive.color.gray[900],
      surface: primitive.color.gray[800],
    },
    text: {
      primary: primitive.color.gray[50],
      muted: primitive.color.gray[400],
    },
    accent: primitive.color.violet[500],
  },
  spacing: primitive.spacing,
  fontSize: primitive.fontSize,
} as const;

export const theme = semantic;
export type Theme = typeof theme;
```

## CSS custom properties — tokens at runtime

Expose tokens as CSS variables to enable theming without JS:

```css
:root {
  --color-bg-page: #0d1117;
  --color-text-primary: #e6edf3;
  --color-accent: #8b5cf6;
  --space-sm: 8px;
  --space-md: 16px;
  --font-size-body: 14px;
  --radius-md: 6px;
  --radius-lg: 12px;
}

[data-theme="light"] {
  --color-bg-page: #ffffff;
  --color-text-primary: #111827;
}
```

```tsx
// Emotion — reference the CSS variables as the token value
const Card = styled.div`
  background: var(--color-bg-page);
  color: var(--color-text-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
`;
```

## Token governance

```
✅ Do:
- One source of truth — tokens defined once, consumed everywhere
- Semantic names that express intent, not implementation
- Version tokens alongside design files

❌ Don't:
- Hardcode hex values in component files
- Create component tokens for every variation (creates maintenance burden)
- Change token names without a migration path (breaks all consumers)
```

## W3C Design Tokens format

The Design Tokens Community Group is standardising a JSON format for token exchange between tools:

```json
{
  "color": {
    "accent": {
      "$value": "#8b5cf6",
      "$type": "color",
      "$description": "Primary brand accent color"
    }
  },
  "space": {
    "sm": {
      "$value": "8px",
      "$type": "dimension"
    }
  }
}
```

Tools like Style Dictionary convert this format into platform-specific output (CSS variables, Swift constants, Kotlin values).

## Related

- See also: [Emotion → Theming with Emotion](#/codex/emotion-theming-with-emotion) for CSS-in-JS token consumption.
- See also: [CSS → Custom Properties and Theming](#/codex/css-custom-properties-and-theming) for CSS variable theming patterns.
- See also: [Architecture → Design Systems and Tokens](#/codex/architecture-design-systems-and-tokens) for design system structure.

## Sources

- [W3C — Design Tokens Community Group](https://www.w3.org/community/design-tokens/)
- [Style Dictionary docs](https://styledictionary.com/)
- [Smashing Magazine — Design tokens](https://www.smashingmagazine.com/2019/11/smashing-podcast-episode-3/)
- [Nathan Curtis — Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)
