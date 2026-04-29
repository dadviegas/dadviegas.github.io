# Shared Singletons & Pitfalls

Module Federation's shared singleton mechanism is powerful but fragile. Several patterns that appear to work in development silently break in production or under specific version conditions. This document maps the failure modes and their fixes.

## What "singleton" actually enforces

When `singleton: true` is set for a library, MF's module resolution returns the same instance for every app that requires it — regardless of which app loaded it first. This is enforced by MF's module registry, not by webpack's deduplication pass.

```js
// App A requests react at runtime:
// 1. MF registry: does a singleton 'react' exist?
// 2a. Yes → return existing instance
// 2b. No → load react from the requiredVersion range → store in registry → return it
```

The problem is step 2b: if two apps provide incompatible version ranges, whichever loads first wins. The second app gets a warning but uses the first app's version.

## Pitfall 1: Version range mismatch

```js
// Shell: react ^18.3.1
shared: { react: { singleton: true, requiredVersion: '^18.3.1' } }

// Remote: react ^17.0.2
shared: { react: { singleton: true, requiredVersion: '^17.0.2' } }
```

Webpack emits a warning: "Shared module react@18.3.1 is not compatible with required version ^17.0.2." MF still runs but the remote uses the shell's React 18. React 18 APIs (like `useTransition`) exist; React 17 APIs (old event system) don't cause issues in this direction. The reverse (shell has 17, remote needs 18) breaks `useTransition`.

**Fix:** Align all apps to the same major version. Use `>=17.0.0` for maximum flexibility or lock to exactly the shell's version.

## Pitfall 2: The eager flag

```js
// ❌ Causes duplicate singleton — both shell and remote initialize their own React
shared: {
  react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
}
```

`eager: true` tells MF to include the library in the initial bundle synchronously instead of async-loading it. When both the shell and a remote set `eager: true`, each bundle includes a copy. At runtime, whichever module system initializes first wins; the other's copy is orphaned.

**Fix:** Set `eager: true` only on the shell. Remotes use async (the default):

```js
// shell/webpack.config.js
shared: {
  react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
}

// remote/webpack.config.js
shared: {
  react: { singleton: true, requiredVersion: '^18.3.1' },
  // no eager — remote waits for the singleton from whoever has it
}
```

## Pitfall 3: The async bootstrap missing

```ts
// ❌ src/index.ts — synchronous initialization before MF resolves
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.getElementById('root')!).render(<App />);

// This creates a new React instance before MF's singleton registry is checked
```

```ts
// ✅ src/index.ts — async bootstrap
import('./bootstrap');

// src/bootstrap.tsx — React initializes after MF singletons are resolved
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.getElementById('root')!).render(<App />);
```

The dynamic import in `index.ts` creates an async boundary. By the time `bootstrap.tsx` runs, MF's shared module resolution is complete and the singleton registry is populated.

## Pitfall 4: Context providers don't cross remote boundaries

React Context works through the component tree. When a remote app renders inside the shell, contexts from the shell don't automatically flow into the remote:

```tsx
// Shell renders:
<ThemeProvider value={theme}>
  <RemoteFinanceApp />  // ❌ RemoteFinanceApp cannot read ThemeContext
</ThemeProvider>
```

Context values live in a specific React instance. If both shell and remote use the same React singleton, context does flow — but only if the Provider is rendered above the React root that renders the remote.

**Fix:** Pass theme values as props or use a non-context mechanism (CSS custom properties, window-level store):

```tsx
// ✅ CSS custom properties — cross-remote-boundary theming
// Shell sets tokens on :root
document.documentElement.style.setProperty('--accent', theme.accent);

// Remote reads via CSS — no React context needed
const Card = styled.div`
  border-color: var(--accent);
`;
```

## Pitfall 5: State management libraries and double initialization

Libraries that maintain module-level singletons (Zustand stores, Redux stores) are duplicated if they're not listed in `shared`:

```js
// ❌ Not in shared — shell and remote each create their own store
// finance app reads its own store; shell widgets read a different store

// ✅ In shared — one store, both apps read from it
shared: {
  '@atlantis/bll': { singleton: true, requiredVersion: '*' },
}
```

Any package that exports singletons (stores, caches, event buses) should be declared as a singleton in the MF config.

## Pitfall 6: Re-declaring shared singletons in remotes

Remotes should not redeclare the same singletons that the shell already declares. The `webpack.common.js` factory handles this:

```js
// webpack.common.js — shared for all apps
const sharedSingletons = {
  react:             { singleton: true, requiredVersion: '^18.3.1' },
  'react-dom':       { singleton: true, requiredVersion: '^18.3.1' },
  '@emotion/react':  { singleton: true, requiredVersion: '^11.13.5' },
  '@emotion/styled': { singleton: true, requiredVersion: '^11.13.5' },
};

// Remote app's webpack.config.js should NOT add these again
// Just use createConfig() which includes sharedSingletons automatically
module.exports = createConfig({ name: 'finance', port: 3031, exposes: { './App': './src/App' } });
```

Redeclaring with different options (e.g., `eager: true` in a remote) overrides the shared config and causes the pitfall 2 scenario.

## Debugging shared module issues

```js
// In the browser console, inspect MF's module registry:
const mfModules = __webpack_require__.S?.default ?? {};
Object.entries(mfModules).forEach(([name, versions]) => {
  console.log(name, Object.keys(versions));
});

// Look for: react appearing more than once with different keys → two instances
```

React DevTools also flags the issue: if you see "Invalid hook call" in a component that lives in a remote, the first thing to check is whether there are two React instances.

## Related

- See also: Module Federation → Fundamentals for the base configuration that singletons build on.
- See also: Bundlers → Webpack Architecture for how the module graph is constructed before MF runs.

## Sources

- [Webpack docs — Module Federation — Shared modules](https://webpack.js.org/plugins/module-federation-plugin/#shared)
- [Module Federation docs — Sharing dependencies](https://module-federation.io/guide/concept/share.html)
- [Zack Jackson — Sharing modules](https://scriptedalchemy.medium.com/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534)
