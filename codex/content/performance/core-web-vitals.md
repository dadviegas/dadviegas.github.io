# Core Web Vitals

Core Web Vitals are Google's three field-measurable signals for page experience: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Each has a threshold bucketed into Good / Needs Improvement / Poor.

## Why these three

Google chose signals that correlate with user perception of loading, interactivity, and visual stability. They're collected in the Chrome UX Report from real-user sessions — not synthetic lab runs. What matters for ranking is the 75th percentile of sessions for each URL.

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | ≤ 2.5s | 2.5–4s | > 4s |
| INP | ≤ 200ms | 200–500ms | > 500ms |
| CLS | ≤ 0.1 | 0.1–0.25 | > 0.25 |

## LCP — what counts as the "largest" element

LCP tracks the render time of the largest image or text block visible in the viewport. Common candidates: hero images, large headings, `<video>` posters, and CSS background images (these count, despite not being HTML elements).

The measurement resets if the user interacts with the page before LCP fires. That means a page where users scroll early can show better LCP than one where they don't — a known quirk in field data.

**What actually moves LCP:**

1. Time To First Byte — before any rendering, the server must respond. TTFB > 800ms almost guarantees poor LCP.
2. Resource discovery latency — the LCP image must be in the HTML or an early `<link rel="preload">`. An image discovered from CSS or JS delayed by a render-blocking script adds 300–800ms.
3. Resource load time — the image transfer itself. Size and CDN proximity dominate here.

```html
<!-- ❌ LCP image discovered late (inside a lazy-loaded component's CSS) -->
<div id="hero"></div>
<!-- hero bg loaded in JS after hydration — not preloaded, discovered at T+2s -->

<!-- ✅ LCP image explicit in HTML with high fetchpriority -->
<img
  src="/images/hero-product.webp"
  fetchpriority="high"
  alt="Product hero"
  width="1200" height="600"
/>
```

The `fetchpriority="high"` attribute tells the browser to deprioritize other resources and start this download immediately in the preload scanner pass.

## INP — replacing FID

INP replaced First Input Delay in March 2024. FID only measured the delay until the browser could process the first interaction — it ignored how long that processing took. INP measures the worst (95th percentile) interaction latency across the entire page visit: input delay + processing time + presentation delay.

**The three phases of an interaction:**

```
User event → [input delay] → event handler runs → [processing time] → frame committed → [presentation delay] → visual update
```

Input delay is often caused by long tasks on the main thread (other JS running before the event handler gets scheduled). Processing time is how long your handler takes. Presentation delay is rendering + compositing.

For a 200ms INP budget:
- Aim for < 50ms of input delay (no long tasks at interaction time)
- < 100ms of processing (split heavy work, defer non-essential updates)
- < 50ms of presentation (avoid forced layouts in handlers)

```ts
// ❌ Expensive synchronous operation in a click handler
function handleFilterChange(value: string) {
  const results = hugeDataset.filter((row) =>
    row.tags.some((t) => t.includes(value))
  );
  setFilteredRows(results);   // synchronous + setState → immediate re-render
}

// ✅ Defer with useTransition — keeps input delay low
function handleFilterChange(value: string) {
  setInputValue(value);                    // immediate — keeps typing responsive
  startTransition(() => {
    setFilteredRows(filterDataset(value)); // deferred — can be interrupted
  });
}
```

## CLS — layout stability

CLS is the sum of all unexpected layout shifts. Each shift is scored as `impact_fraction × distance_fraction`. A full-viewport element that shifts 25% of the viewport = 0.25 impact × 0.25 distance = 0.0625.

**Common CLS causes:**

1. Images without explicit dimensions — browser can't reserve space before download.
2. Ads injected above content — adds height, pushes everything down.
3. Web fonts causing a text reflow (FOUT / FOIT).
4. Dynamic content injected in response to user data after initial render.

```css
/* ❌ No dimensions — browser reserves nothing, shifts on load */
.hero-image img { width: 100%; }

/* ✅ Aspect-ratio reserves space before the image loads */
.hero-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.hero-image img { width: 100%; height: 100%; object-fit: cover; }
```

For web fonts, `font-display: optional` is the safest but drops the custom font on slow connections. `font-display: swap` is the common middle ground — font swaps in when loaded, which can cause a small shift. Preloading the font with `<link rel="preload" as="font">` removes the shift entirely by ensuring the font arrives before first render.

## Measuring in the field

The `web-vitals` npm package reports all three from real sessions:

```ts
import { onLCP, onINP, onCLS } from 'web-vitals';

onLCP(({ value, rating }) => {
  analytics.track('web-vital', { metric: 'LCP', value, rating });
});
onINP(({ value, rating }) => {
  analytics.track('web-vital', { metric: 'INP', value, rating });
});
onCLS(({ value, rating }) => {
  analytics.track('web-vital', { metric: 'CLS', value, rating });
});
```

`rating` is `'good' | 'needs-improvement' | 'poor'` against the thresholds above.

PageSpeed Insights reports field data from the Chrome UX Report (CrUX) for any URL with sufficient traffic. Lab data (Lighthouse) is directional — it helps diagnose problems but doesn't match what users experience.

## Related

- See also: [Performance → LCP Deep Dive](#/codex/performance-lcp-deep-dive) for preloading, CDN configuration, and TTFB optimisation.
- See also: [Performance → INP and Input Latency](#/codex/performance-inp-and-input-latency) for long task forensics, scheduler API, and `isInputPending`.
- See also: [Performance → Runtime Perf Profiling](#/codex/performance-runtime-perf-profiling) for Chrome DevTools workflow to diagnose each metric.

## Sources

- [web.dev — Core Web Vitals](https://web.dev/articles/vitals)
- [web.dev — LCP](https://web.dev/articles/lcp)
- [web.dev — INP](https://web.dev/articles/inp)
- [web.dev — CLS](https://web.dev/articles/cls)
- [MDN — web-vitals npm package](https://www.npmjs.com/package/web-vitals)
