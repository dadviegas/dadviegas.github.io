# The Emotion Babel Plugin

`@emotion/babel-plugin` transforms Emotion calls at build time to add stable labels, enable component selectors, and improve the developer experience through readable class names. It's optional for basic usage but required for anything non-trivial in a production codebase.

## What the plugin adds

**Stable labels** — without the plugin, class names are opaque hashes. With it, the component name appears in the class:

```
Without plugin: .css-1a2b3c { color: #e6edf3; }
With plugin:    .css-1a2b3c-Button { color: #e6edf3; }
```

**Component selectors** — reference a styled component as a CSS selector in another component's template:

```tsx
const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  /* Works only with the Babel plugin */
  ${Icon} {
    color: var(--menu-icon-color, currentColor);
  }

  &:hover ${Icon} {
    color: var(--accent);
  }
`;
```

**Source map improvements** — the plugin adds line/column information to class names, making it easier to trace a style back to its component in DevTools.

## Configuring the plugin

In `.babelrc.js` or the babel config:

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion/babel-plugin',
    // or with options:
    ['@emotion/babel-plugin', {
      autoLabel: 'dev-only',           // 'always' | 'dev-only' | 'never'
      labelFormat: '[local]',          // template for the label
      cssPropOptimization: true,       // optimize `css` prop
      sourceMap: true,                 // emit source maps (slow in dev, disable in prod)
    }],
  ],
};
```

`autoLabel: 'dev-only'` is the recommended setting — readable class names in development, smaller output in production.

## `labelFormat` options

| Placeholder | Resolves to |
|-------------|-------------|
| `[local]` | Variable name (`Button`, `Card`) |
| `[filename]` | File name without extension |
| `[dirname]` | Parent directory name |

```js
// '[dirname]-[filename]-[local]' → 'components-Button-StyledButton'
labelFormat: '[dirname]-[filename]-[local]',
```

## Component selectors under the hood

The plugin converts component references in CSS template literals to their generated class name selector:

```tsx
// Source
const Icon = styled.svg``;
const Button = styled.button`${Icon} { color: red; }`;

// After transformation (simplified)
const Icon = styled.svg`
  label: Icon;
`;
// Icon.toString() === '.css-<hash>-Icon'

const Button = styled.button`
  label: Button;
  .css-<hash>-Icon { color: red; }
`;
```

At runtime, `${Icon}` inside a template literal calls `Icon.toString()`, which returns the selector string. The plugin ensures `toString()` works correctly and the label is stable.

## The `css` prop transform

Without the plugin, the `css` prop requires a JSX pragma comment on every file:

```tsx
/** @jsxImportSource @emotion/react */
// This file-level comment enables the css prop transform
<div css={{ color: 'red' }} />
```

With the plugin, the transform is applied globally — no pragma needed:

```tsx
// Works in any file when @emotion/babel-plugin is configured
<div css={{ color: theme.colors.mainText, padding: theme.spacing.md }} />
```

## Rspack: the equivalent

Rspack doesn't support Babel. Its equivalent is the `rspackExperiments.emotion` option:

```js
// rspack.config.js
module.exports = {
  experiments: {
    rspackExperiments: {
      emotion: {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
      },
    },
  },
};
```

This replicates the label and source map features but may not support all Babel plugin options. Component selectors work in the shell (rspack handles them) but not in remote apps (pure runtime — see the Module Federation constraint).

## Common pitfall: plugin only in the shell

In a Module Federation monorepo with a webpack shell and webpack remote apps, the Babel plugin must be configured in each app's webpack config — not just the shell's. Remotes that don't configure it lose labels and component selectors:

```js
// Each app's webpack.config.js uses createConfig() which includes the Babel loader
// The Babel plugin is configured in babel.config.js at the root
// All apps pick it up automatically if they share the root babel config
```

When a remote doesn't find the Babel plugin in its transform chain, `${SomeComponent}` inside a `styled` template silently becomes `[object Object]` — the component selector appears to work in dev (Babel processes it) but breaks in production builds that use SWC.

## Related

- See also: [Emotion → Runtime vs Compile-time](#/codex/emotion-runtime-vs-compile-time) for when to use the plugin vs runtime-only mode.
- See also: [Bundlers → Rspack Architecture](#/codex/bundlers-rspack-architecture) for configuring `rspackExperiments.emotion`.

## Sources

- [Emotion docs — Babel plugin](https://emotion.sh/docs/babel)
- [Emotion GitHub — @emotion/babel-plugin](https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin)
- [Emotion docs — TypeScript](https://emotion.sh/docs/typescript)
