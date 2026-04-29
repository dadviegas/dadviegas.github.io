# Theming with Emotion

Emotion's theming system is a typed context provider — `ThemeProvider` puts a theme object into React context, and `styled` components access it via the `theme` prop. The tradeoff: theming through context means all styled components re-render when the theme changes. For infrequent theme switches, this is fine. For high-frequency changes, prefer CSS custom properties.

## Setting up a typed theme

```ts
// theme.ts
export const theme = {
  colors: {
    mainBg: '#0d1117',
    surface: '#161b22',
    mainText: '#e6edf3',
    mainTextMuted: '#8b949e',
    accent: '#58a6ff',
    border: '#30363d',
    danger: '#f85149',
  },
  spacing: {
    xs: '4px', sm: '8px', md: '16px',
    lg: '24px', xl: '32px', xxl: '48px',
  },
  borderRadius: {
    sm: '4px', md: '6px', lg: '12px',
  },
} as const;

export type Theme = typeof theme;

// Augment Emotion's module to provide the type globally
declare module '@emotion/react' {
  export interface Theme extends Theme {} // merges our type
}
```

With module augmentation, `styled` components receive a typed `theme` argument without any generics at the call site.

## Using theme in styled components

```tsx
import styled from '@emotion/styled';

// theme is typed via module augmentation — no <Theme> generic needed
const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

// Prop-driven variant using theme values
const StatusBadge = styled.span<{ status: 'ok' | 'warn' | 'error' }>`
  color: ${({ theme, status }) => ({
    ok: '#7fb77e',
    warn: '#facc15',
    error: theme.colors.danger,
  }[status])};
`;
```

## The import-theme pattern (skip context)

In a single-theme application that never switches themes at runtime, injecting the theme through context is unnecessary. Import the theme object directly:

```tsx
import { theme } from '@atlantis/shared';
import styled from '@emotion/styled';

// No ThemeProvider needed — import the singleton directly
const Nav = styled.nav`
  background: ${theme.colors.sidebarBg};
  width: ${theme.sidebar.width};
  border-right: 1px solid ${theme.colors.sidebarBorder};
`;
```

This is faster (no context lookup), simpler (no provider), and equally correct when the theme is a constant. The tradeoff: switching themes requires a page reload or reimporting the theme.

## When to use `ThemeProvider`

Use `ThemeProvider` when:
1. The theme changes at runtime (dark/light toggle).
2. Different subtrees of the app need different themes (admin panel vs user-facing portal).

```tsx
import { ThemeProvider } from '@emotion/react';
import { theme as darkTheme } from './themes/dark';
import { theme as lightTheme } from './themes/light';

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Shell />
    </ThemeProvider>
  );
}
```

## Hybrid approach: CSS custom properties + Emotion

The best of both worlds: use CSS custom properties for the token layer (no re-render on theme switch) and Emotion `styled` for structural styles:

```css
/* index.css — set tokens once on :root */
:root {
  --color-surface: #161b22;
  --color-text: #e6edf3;
  --color-accent: #58a6ff;
  --spacing-md: 16px;
  --radius-lg: 12px;
}

[data-theme="light"] {
  --color-surface: #ffffff;
  --color-text: #1f2328;
  --color-accent: #0969da;
}
```

```tsx
// Emotion uses CSS variables — no re-render when toggling data-theme
const Card = styled.div`
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
`;

// Theme switch: just toggle the attribute on <html>
document.documentElement.dataset.theme = 'light';
```

This approach keeps Emotion for component structure and co-location while delegating token switching to CSS.

## Accessing theme outside styled components

```tsx
import { useTheme } from '@emotion/react';

function DynamicSVG() {
  const theme = useTheme();
  return (
    <svg>
      <circle fill={theme.colors.accent} />
    </svg>
  );
}

// css() helper with theme
import { css, useTheme } from '@emotion/react';

function Component() {
  const theme = useTheme();
  const dynamicStyle = css`
    border: 2px solid ${theme.colors.accent};
  `;
  return <div css={dynamicStyle} />;
}
```

## Common mistake: theme object recreation

```tsx
// ❌ New object on every render — all styled components re-render
function Layout({ children }: { children: React.ReactNode }) {
  const isDark = useSystemDarkMode();
  return (
    <ThemeProvider theme={{ ...baseTheme, isDark }}>
      {children}
    </ThemeProvider>
  );
}

// ✅ Stable reference — styled components re-render only when isDark changes
const darkTheme = { ...baseTheme, isDark: true };
const lightTheme = { ...baseTheme, isDark: false };

function Layout({ children }: { children: React.ReactNode }) {
  const isDark = useSystemDarkMode();
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}
```

## Related

- See also: [Emotion → Runtime vs Compile-time](#/codex/emotion-runtime-vs-compile-time) for how theme interpolations are processed.
- See also: [CSS → Custom Properties & Theming](#/codex/css-custom-properties-and-theming) for the CSS-native token layer.

## Sources

- [Emotion docs — Theming](https://emotion.sh/docs/theming)
- [Emotion docs — ThemeProvider](https://emotion.sh/docs/emotion-theming)
- [Emotion docs — CSS Variables](https://emotion.sh/docs/css-variables)
