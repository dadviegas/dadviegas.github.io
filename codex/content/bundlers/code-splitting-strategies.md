# Code Splitting Strategies

Code splitting divides your bundle into smaller chunks that load on demand. Without it, a user visiting the home page downloads code for every page in the app. With it, they download only what's needed now and load the rest when they navigate.

## Dynamic imports — the primitive

The `import()` function returns a promise that resolves to the module. Webpack and rspack see it as a chunk boundary:

```ts
// This creates a separate chunk for the PdfExporter module
async function exportToPdf(data: ReportData) {
  // Only loaded when the user clicks "Export PDF" — not on initial page load
  const { PdfExporter } = await import('./PdfExporter');
  return new PdfExporter().export(data);
}
```

The import is deferred to when the function is called. The module is downloaded, parsed, and executed at that point.

## `React.lazy` — code splitting for components

`React.lazy` wraps a dynamic import so React can render the component with a `<Suspense>` fallback while the chunk loads:

```tsx
import { lazy, Suspense } from 'react';

const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const MoviesPage   = lazy(() => import('./pages/MoviesPage'));

function App() {
  const [view, setView] = useState<'home' | 'settings' | 'movies'>('home');

  return (
    <Suspense fallback={<PageSkeleton />}>
      {view === 'settings' && <SettingsPage />}
      {view === 'movies'   && <MoviesPage />}
      {view === 'home'     && <HomePage />}
    </Suspense>
  );
}
```

Each `lazy()` component becomes a separate chunk. The chunk downloads when the component first renders.

## Route-based splitting — the highest-leverage pattern

Route-based splitting is the most impactful application of code splitting. Pages the user hasn't visited yet don't need to be loaded:

```tsx
// Each route is a separate chunk — /dashboard doesn't load /settings code
const DashboardRoute = lazy(() => import('./routes/Dashboard'));
const SettingsRoute  = lazy(() => import('./routes/Settings'));
const ReportRoute    = lazy(() => import('./routes/Reports'));

// With a hash router (no React Router):
function Router({ hash }: { hash: string }) {
  return (
    <Suspense fallback={<AppSkeleton />}>
      {hash.startsWith('#/settings') && <SettingsRoute />}
      {hash.startsWith('#/reports')  && <ReportRoute />}
      {/* default: dashboard */}
      {!hash.startsWith('#/') && <DashboardRoute />}
    </Suspense>
  );
}
```

## Prefetching — loading before the user navigates

Splitting creates latency at navigation time. Prefetching downloads the next chunk before the user clicks:

```ts
// Preload the settings chunk on hover — navigation is instant
function NavItem({ href, label }: NavItemProps) {
  const chunkRef = useRef<Promise<unknown> | null>(null);

  return (
    <a
      href={href}
      onMouseEnter={() => {
        // Only kick off once per mount
        chunkRef.current ??= import('./routes/Settings');
      }}
    >
      {label}
    </a>
  );
}

// Or with webpack magic comments — tells webpack to use a prefetch link tag
const SettingsRoute = lazy(() => import(/* webpackPrefetch: true */ './routes/Settings'));
```

Webpack magic comment `webpackPrefetch: true` adds a `<link rel="prefetch">` to the HTML — the browser downloads the chunk during idle time after the initial page load.

## Vendor chunk splitting — caching stability

Libraries change less frequently than application code. Separating them improves cache hit rates:

```js
// webpack.config.js / rspack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        // react + react-dom: rarely updated, should be cached aggressively
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        // everything else from node_modules
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -10,
        },
      },
    },
    runtimeChunk: 'single',  // webpack bootstrap in its own cached file
  },
};
```

With this setup:
- Vendor chunks get long cache headers (change only when deps update)
- App chunks get short cache headers (change with every deploy)
- `contenthash` in filenames ensures browsers pick up changes

## Granular splitting — when vendor chunks aren't enough

For large libraries used only in specific features, split at the feature level:

```ts
// Only load the PDF library when the user opens the export modal
async function openExportModal() {
  const [{ jsPDF }, { html2canvas }] = await Promise.all([
    import('jspdf'),
    import('html2canvas'),
  ]);
  // Both chunks downloaded in parallel
  renderExportModal({ jsPDF, html2canvas });
}
```

`Promise.all` downloads multiple chunks in parallel, avoiding a sequential waterfall.

## Module Federation and code splitting

In a Module Federation architecture, each remote app is effectively a code-split chunk. The shell downloads remotes on demand:

```ts
// Shell loads the remote only when the user navigates to that app
const RemoteApp = lazy(() => import('finance/App'));

// Under the hood, webpack loads remoteEntry.js, then the App chunk
// The shell's bundle contains none of the finance app's code
```

This is automatic — `import('finance/App')` is both code splitting and Module Federation in one.

## Measuring split effectiveness

Use `webpack-bundle-analyzer` to visualize:

```bash
GENERATE_SOURCEMAP=false npx webpack --profile --json > stats.json
npx webpack-bundle-analyzer stats.json
```

Look for:
- Large modules in the initial chunk that could be lazy-loaded
- Duplicate modules across multiple chunks (sharing configuration issue)
- Unexpectedly large vendor chunks (a single unused library import)

## Related

- See also: [Bundlers → Webpack Architecture](#/codex/bundlers-webpack-architecture) for how chunks are created in the compilation graph.
- See also: [Bundlers → Tree Shaking](#/codex/bundlers-tree-shaking-and-side-effects) for eliminating code that's imported but never used.
- See also: [Module Federation → Fundamentals](#/codex/module-federation-fundamentals) for the module-level code splitting in multi-app architectures.

## Sources

- [Webpack docs — Code splitting](https://webpack.js.org/guides/code-splitting/)
- [web.dev — Code splitting](https://web.dev/articles/code-splitting-suspense)
- [Vite docs — Code splitting](https://vite.dev/guide/build.html#chunking-strategy)
- [MDN — Dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
