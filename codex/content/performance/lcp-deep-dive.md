# LCP Deep Dive

LCP is the most impactful Core Web Vital to optimize because it directly measures perceived load speed. The metric fires when the largest content element above the fold finishes rendering. Getting LCP below 2.5s at the 75th percentile typically requires fixing at least two of the three phases: TTFB, resource discovery, and resource load time.

## Phase 1 — Time To First Byte

TTFB is everything before the first byte of the HTML document arrives. It includes DNS lookup, TCP handshake, TLS negotiation, and server processing. A TTFB above 800ms makes a 2.5s LCP target nearly impossible.

**Server-side rendering vs. static generation:**

```ts
// ❌ Data fetching that adds to TTFB — runs on every request
export async function getServerSideProps() {
  const products = await db.query('SELECT * FROM products WHERE featured = true');
  return { props: { products } };
}

// ✅ ISR — pre-rendered, served from CDN, revalidates in background
export async function getStaticProps() {
  const products = await db.query('SELECT * FROM products WHERE featured = true');
  return {
    props: { products },
    revalidate: 60,  // stale-while-revalidate: serve cached, regenerate in background
  };
}
```

With Vite/React (no SSR), the HTML shell is static. The TTFB is just CDN latency — usually sub-100ms. But then LCP depends entirely on when the content becomes visible, which shifts the problem to resource discovery and hydration.

## Phase 2 — Resource discovery

The preload scanner parses HTML before JavaScript executes. An LCP image only benefits from early discovery if it appears in the HTML source — not injected by JS, not hidden in CSS, not in a lazily loaded chunk.

### Critical mistake: LCP image in a client-rendered component

```tsx
// ❌ The image URL is only known after JavaScript runs
function ProductHero({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetchProduct(productId).then(setProduct);  // starts after hydration
  }, [productId]);

  if (!product) return <Skeleton />;
  return <img src={product.heroImage} alt={product.name} />;
}
```

The browser's preload scanner sees nothing — the image URL exists only in a response to a fetch that happens after JS runs. At best this adds 500ms to LCP; at worst, 2–3 seconds.

**Fix: include the image in the initial HTML:**

```html
<!-- In the SSR/SSG HTML — image URL known at build time or server time -->
<img
  src="https://cdn.example.com/products/chair-walnut.webp"
  fetchpriority="high"
  decoding="async"
  alt="Walnut dining chair"
  width="800"
  height="600"
/>
```

### `<link rel="preload">` for CSS background images

```html
<!-- ❌ Background image — invisible to preload scanner -->
<style>
  .hero { background-image: url('/hero-1920.webp'); }
</style>

<!-- ✅ Explicit preload — hints the browser to start download early -->
<link
  rel="preload"
  as="image"
  href="/hero-1920.webp"
  imagesrcset="/hero-640.webp 640w, /hero-1280.webp 1280w, /hero-1920.webp 1920w"
  imagesizes="100vw"
/>
```

`imagesrcset` + `imagesizes` on the preload link ensures the browser preloads the correct responsive breakpoint, not always the largest.

## Phase 3 — Resource load time

Once discovered, the image must transfer. Two levers: size and CDN proximity.

### Format and compression

| Format | Typical savings vs JPEG | Browser support |
|--------|------------------------|-----------------|
| WebP | 25–35% smaller | 97%+ |
| AVIF | 40–50% smaller | 88%+ (rising) |
| JPEG XL | 50%+ smaller | Experimental |

Serve AVIF with WebP fallback using `<picture>`:

```html
<picture>
  <source type="image/avif" srcset="/hero.avif" />
  <source type="image/webp" srcset="/hero.webp" />
  <img src="/hero.jpg" alt="Product hero" fetchpriority="high" width="800" height="600" />
</picture>
```

### Responsive images

Serving a 1920×1080 image to a 375px mobile screen is common and expensive. The `srcset` + `sizes` attributes let the browser pick the right resolution:

```html
<img
  src="/hero-800.webp"
  srcset="/hero-400.webp 400w, /hero-800.webp 800w, /hero-1600.webp 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1200px"
  fetchpriority="high"
  alt="Product hero"
  width="800"
  height="600"
/>
```

`sizes` tells the browser how wide the image will be rendered — not a viewport query. Give it the rendered width at each breakpoint.

### CDN configuration

An image served from a single-region origin adds round-trip latency for every user outside that region. For a Lisbon origin serving European users, this is acceptable. For global traffic, serve static assets from a CDN with edge PoPs.

Image optimization CDNs (Cloudinary, Imgix, Cloudflare Images) can:
- Serve AVIF/WebP based on `Accept` header negotiation
- Resize on-the-fly via URL parameters
- Apply smart compression tuned to visual quality, not file size targets

```
# Origin
https://origin.example.com/images/chair-walnut.jpg  (2.4 MB JPEG)

# Imgix CDN — auto-format, width 800, quality 80
https://images.example.com/chair-walnut.jpg?fm=auto&w=800&q=80  (48 KB AVIF)
```

## Real-world LCP investigation workflow

1. Open Chrome DevTools → Performance panel → Enable "Web Vitals" in the recording options.
2. Start recording, reload the page, let it finish, stop recording.
3. Look for the "LCP" marker in the timeline. The element appears in the tooltip.
4. Check what phase dominates: TTFB (network waterfall), load delay (time between TTFB and image start), or load duration (image download bar).
5. If load delay is high: the image is not being discovered early — check for JS-rendered content or missing preload.
6. If load duration is high: the image is too large or served from a slow origin.

## The priority hint `fetchpriority="high"`

Only set `fetchpriority="high"` on the LCP element. Setting it on multiple images forces the browser to download them all at high priority simultaneously, which may slow the actual LCP element. One element per page.

Also: `fetchpriority="low"` on below-the-fold images tells the browser it can deprioritize them, making more bandwidth available for the LCP resource.

## Related

- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for the threshold table and overview of all three metrics.
- See also: [Performance → Image Optimization](#/codex/performance-image-optimization) for format selection, lazy loading, and srcset implementation in React.
- See also: [Performance → Runtime Perf Profiling](#/codex/performance-runtime-perf-profiling) for the Chrome DevTools workflow used to isolate TTFB vs resource phases.

## Sources

- [web.dev — Optimize LCP](https://web.dev/articles/optimize-lcp)
- [web.dev — fetchpriority](https://web.dev/articles/fetch-priority)
- [web.dev — Preload critical assets](https://web.dev/articles/preload-critical-assets)
- [MDN — Resource Hints](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)
