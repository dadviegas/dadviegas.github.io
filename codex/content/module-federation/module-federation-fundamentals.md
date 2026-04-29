# Module Federation Fundamentals

Module Federation (MF) lets multiple independently deployed JavaScript applications share code at runtime — without build-time coupling. A shell app loads remote apps on demand, and both can share dependencies like React without duplicating them in the bundle.

## The core concept

Without MF, each app is a standalone bundle that includes its own copy of React, styled-components, and everything else. With MF, the shell declares shared libraries, and remotes consume the shell's copies:

```
Without MF:         With MF:
Shell:              Shell:
  react (copy 1)      react (singleton)
  react-dom (copy 1)  react-dom (singleton)

Finance app:        Finance app:
  react (copy 2)      (uses shell's react)
  react-dom (copy 2)  (uses shell's react-dom)
```

This eliminates duplicate React instances (which break hooks across app boundaries) and reduces total download size.

## Shell configuration (host)

```js
// shell/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        // Runtime URL: evaluated at browser time, not build time
        finance: `promise new Promise((resolve, reject) => {
          const url = window.location.hostname === 'localhost'
            ? 'http://localhost:3031/remoteEntry.js'
            : 'https://finance.example.com/remoteEntry.js';
          const script = document.createElement('script');
          script.src = url;
          script.onload = () => resolve(window.finance);
          script.onerror = reject;
          document.head.appendChild(script);
        })`,
      },
      shared: {
        react:      { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
        '@emotion/react':  { singleton: true, requiredVersion: '^11.13.5' },
        '@emotion/styled': { singleton: true, requiredVersion: '^11.13.5' },
      },
    }),
  ],
};
```

Key points:
- `singleton: true` — only one copy of this library may exist at runtime. The first remote to load provides the copy; others use it.
- `requiredVersion` — guards against major version mismatches. If a remote needs React 17 and the shell provides React 18, webpack throws a warning.
- Promise-based remote strings — the URL is resolved at runtime, enabling LAN deployment (not hardcoded to `localhost`).

## Remote configuration (exposed app)

```js
// finance/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'finance',
      filename: 'remoteEntry.js',  // the entry point the shell loads
      exposes: {
        './App': './src/App',        // exposed module path → local file
        './manifest': './src/manifest',
      },
      shared: {
        // Same list as shell — version must be compatible
        react:      { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
      },
    }),
  ],
};
```

The remote's `name` must match the key used in the shell's `remotes` object. `exposes` maps public path aliases (`./App`) to local source files.

## Consuming a remote in the shell

```tsx
// shell/src/remotes.ts
import { lazy } from 'react';

// The literal string 'finance/App' must match: <remote name>/<exposed path>
const FinanceApp = lazy(() => import('finance/App'));
```

TypeScript needs a type declaration for this:

```ts
// shell/src/declarations.d.ts
declare module 'finance/App' {
  import type React from 'react';
  const App: React.ComponentType<{ topBarRight?: React.ReactNode }>;
  export default App;
}
```

## The singleton requirement — why it matters for hooks

React hooks fail across module boundaries when there are two React instances:

```
Shell: uses React instance A
Finance remote: uses React instance B (different require() call)

Finance component calls useState() → stored in instance B's hook list
Shell renders Finance via React.lazy → renders with instance A's scheduler
→ hooks fire in wrong order → "Invalid hook call" error
```

`singleton: true` prevents this by ensuring only one `react` module exists in the module registry at runtime.

## Version negotiation

```js
// Remote requires ≥17.0.0, shell provides 18.3.1
// ≥17.0.0 is satisfied by 18.3.1 → shell's copy is used ✅

// Remote requires ^17.0.0, shell provides 18.3.1
// ^17.0.0 = ≥17.0.0 <18.0.0 → NOT satisfied → remote downloads its own copy
// Now two React instances exist → hooks break ❌
```

Use `>=` for flexible ranges or `^18.x.x` exactly matching the shell's version. When using `singleton: true`, version mismatches produce a console warning but don't prevent the app from loading — they just increase the chance of bugs.

## The initialization race

MF uses an async bootstrap pattern to avoid initializing before shared modules are ready:

```ts
// src/index.ts — correct: async import of bootstrap
import('./bootstrap');  // dynamic import defers execution until MF is ready

// src/bootstrap.tsx — actual app initialization
import { createRoot } from 'react-dom/client';
import App from './App';
createRoot(document.getElementById('root')!).render(<App />);
```

If you put `createRoot` directly in `index.ts` (without the async bootstrap), React may initialize before the shared React module is resolved, creating a second instance.

## Related

- See also: Module Federation → Shared Singletons & Pitfalls for edge cases with lazy loading and version conflicts.
- See also: Bundlers → Rspack Architecture for the `@module-federation/enhanced/rspack` variant.
- See also: TypeScript → Module Types & Declaration Files for typing remote module imports.
