# Custom Properties & Theming

CSS custom properties (variables) are live values that the cascade applies at computed time, not parse time. This makes them fundamentally different from preprocessor variables — and the reason they enable dynamic theming without JavaScript.

## How custom properties differ from Sass variables

```scss
// Sass variable — resolved at compile time, dead static value in the output CSS
$color-surface: #161b22;
.card { background: $color-surface; }
// Output: .card { background: #161b22; }
// Changing the Sass variable requires recompilation
```

```css
/* CSS custom property — resolved at computed style time, live in the browser */
:root { --color-surface: #161b22; }
.card { background: var(--color-surface); }

/* Change the value at runtime — all consumers update immediately */
document.documentElement.style.setProperty('--color-surface', '#0d1117');
```

## Inheritance and the cascade

Custom properties cascade exactly like any other property. A value defined on a parent applies to all descendants unless overridden:

```css
:root {
  --accent: #58a6ff;
  --text: #e6edf3;
}

.danger-zone {
  --accent: #f85149;  /* overrides for descendants of .danger-zone */
}

.btn {
  background: var(--accent);  /* #58a6ff everywhere, #f85149 inside .danger-zone */
}
```

This makes theming per-widget trivial — set variables on the widget's container and every child picks them up.

## Theming patterns

### Dark / light mode

```css
:root {
  --bg: #0d1117;
  --surface: #161b22;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --border: #30363d;
}

[data-theme="light"] {
  --bg: #ffffff;
  --surface: #f6f8fa;
  --text: #1f2328;
  --text-muted: #656d76;
  --border: #d0d7de;
}
```

Switch themes by toggling `data-theme` on the root element. No component code changes — CSS custom properties propagate automatically.

### Per-suite accent colors

```css
:root { --suite-accent: #58a6ff; }

[data-suite="vida"]  { --suite-accent: #7fb77e; }
[data-suite="lab"]   { --suite-accent: #a371f7; }
[data-suite="learn"] { --suite-accent: #f9a825; }
[data-suite="games"] { --suite-accent: #f97316; }

/* Widget uses the suite color without knowing which suite it's in */
.widget-accent-bar {
  border-left: 2px solid var(--suite-accent);
}
```

### Token fallbacks

```css
/* var(property, fallback) — fallback when the property is undefined */
.card {
  background: var(--surface, #161b22);
  color: var(--text, #e6edf3);
}
```

Useful for component libraries that can't guarantee the host application has set the right tokens.

## Computed values vs inherited values

Custom properties are inherited by default. You can opt out with `@property`:

```css
@property --gradient-angle {
  syntax: '<angle>';
  inherits: false;     /* each element has its own value */
  initial-value: 0deg;
}

/* Animating a custom property only works when @property declares its syntax */
@keyframes rotate-gradient {
  to { --gradient-angle: 360deg; }
}

.spinner {
  background: conic-gradient(from var(--gradient-angle), #58a6ff, transparent);
  animation: rotate-gradient 1s linear infinite;
}
```

Without `@property`, browsers can't interpolate custom properties in animations — they snap between values instead of transitioning.

## Environment variables and system values

`env()` reads browser environment variables (currently mainly for safe areas on notched devices):

```css
.bottom-nav {
  padding-bottom: max(16px, env(safe-area-inset-bottom));
}
```

Custom properties and `env()` can compose:

```css
:root {
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --nav-height: calc(56px + var(--safe-bottom));
}
```

## JavaScript bridge

```ts
// Read a custom property value from JS
const accentColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--accent')
  .trim();

// Write a custom property from JS (triggers CSS re-compute)
document.documentElement.style.setProperty('--accent', '#79c0ff');

// Scoped to a component
const card = document.querySelector('.widget-card') as HTMLElement;
card.style.setProperty('--local-accent', manifest.accentColor);
```

This is the integration point for design-token-based theming in React — set the token once on the root element and all CSS consumers update without a re-render.

## Common pitfalls

**Undefined variables are not errors.** If a custom property is referenced but never defined, the browser uses the initial value (often empty), which may produce unexpected results. Check DevTools' computed styles tab, not just the stylesheet.

**Custom properties in `calc()` inherit their unit:**
```css
:root { --spacing-base: 8; }  /* unitless — won't work in calc */
.item { margin: calc(var(--spacing-base) * 2px); }  /* ❌ invalid */

:root { --spacing-base: 8px; }  /* with unit — works */
.item { margin: calc(var(--spacing-base) * 2); }    /* ✅ 16px */
```

## Related

- See also: [CSS → Specificity & Cascade Layers](#/codex/css-specificity-and-cascade-layers) for how the cascade interacts with custom property values.
- See also: [Emotion → Theming with Emotion](#/codex/emotion-theming-with-emotion) for how CSS-in-JS accesses and extends this system.
