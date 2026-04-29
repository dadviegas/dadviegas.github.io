# Image Optimization

Images are usually the heaviest resources on a page. A single un-optimized hero image can be 3–6MB; the same image correctly processed is 60–150KB — a 20–40× reduction with no perceptible quality loss. Getting images right is the highest-leverage performance change for most apps.

## Format selection in 2024

| Format | When to use | Browser support |
|--------|------------|-----------------|
| AVIF | New projects, modern browsers | 90%+ globally (2024) |
| WebP | Broad compatibility needed | 97%+ |
| JPEG | Fallback only | Universal |
| PNG | Screenshots, icons, exact transparency | Universal |
| SVG | Icons, illustrations, logos | Universal |

AVIF has measurably better compression than WebP — 30–50% smaller at the same visual quality. Serve it as the first `<source>` in a `<picture>` element with WebP and JPEG as fallbacks.

## `<picture>` with format negotiation

```html
<picture>
  <!-- Browser picks the first matching source -->
  <source type="image/avif" srcset="/product.avif" />
  <source type="image/webp" srcset="/product.webp" />
  <img src="/product.jpg" alt="Ceramic coffee mug" width="800" height="600" />
</picture>
```

The `type` attribute is the MIME type; the browser will skip a `<source>` whose type it doesn't support without downloading anything.

## Responsive images with `srcset` and `sizes`

Sending a 1920px wide image to a 390px phone screen is one of the most common performance mistakes. The browser must decode a 6× larger image than needed, wasting memory and bandwidth.

```html
<img
  src="/product-800.webp"
  srcset="
    /product-400.webp  400w,
    /product-800.webp  800w,
    /product-1600.webp 1600w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  alt="Ceramic coffee mug"
  width="800"
  height="600"
/>
```

`sizes` tells the browser what rendered width to expect at each breakpoint — the `w` descriptors in `srcset` tell it the actual pixel width of each source. The browser picks the source whose `w` value is closest to (rendered width × DPR). On a 390px screen at 2× DPR: 390 × 2 = 780px → browser picks `800w`.

## `loading="lazy"` — defer below-fold images

```html
<!-- ❌ All images load eagerly, even those far below the fold -->
<img src="/article-thumbnail.webp" alt="Article thumbnail" width="300" height="200" />

<!-- ✅ Only loads when the image is close to the viewport -->
<img
  src="/article-thumbnail.webp"
  alt="Article thumbnail"
  width="300"
  height="200"
  loading="lazy"
  decoding="async"
/>
```

`loading="lazy"` is supported in all modern browsers. Never use it on the LCP image — it will delay the most important image. Always pair it with explicit `width` and `height` to prevent layout shifts when the image loads.

## React patterns

### Wrapping `<img>` in a component

Enforce consistent defaults project-wide:

```tsx
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;  // sets fetchpriority="high" for LCP candidates
}

function Image({ src, alt, width, height, priority = false, ...rest }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? undefined : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      {...rest}
    />
  );
}

// Usage — LCP candidate
<Image src="/hero.webp" alt="Product hero" width={1200} height={600} priority />

// Usage — below fold
<Image src="/thumbnail.webp" alt="Article" width={300} height={200} />
```

### Avoiding layout shift in React grids

```tsx
// ❌ Images without dimensions cause CLS as they load
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

// ✅ Aspect-ratio reserve prevents reflow
const ProductCard = styled.div`
  .image-wrapper {
    aspect-ratio: 1;  /* square images — adjust to your ratio */
    overflow: hidden;
    background: ${theme.colors.surface};  /* placeholder color while loading */
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
```

## CDN image transformation

Manually generating 3 sizes × 3 formats = 9 files per image doesn't scale. CDN image transformation APIs handle this at request time.

**Cloudflare Images URL pattern:**

```
https://imagedelivery.net/{account}/{image-id}/w=800,format=auto,quality=80
```

**Cloudinary URL pattern:**

```
https://res.cloudinary.com/{cloud}/{type}/upload/f_auto,q_auto,w_800/{public_id}.jpg
```

`f_auto` selects the best format per browser (`Accept` header). `q_auto` targets a quality level that looks good, not a fixed compression percentage.

**Imgix + React pattern for dynamic URLs:**

```ts
function buildImageUrl(src: string, { width, quality = 80 }: { width: number; quality?: number }): string {
  const url = new URL(src);
  url.searchParams.set('fm', 'auto');  // AVIF/WebP based on Accept
  url.searchParams.set('w', String(width));
  url.searchParams.set('q', String(quality));
  return url.toString();
}
```

## `decoding="async"` vs `decoding="sync"`

`decoding="async"` tells the browser it can decode the image off-main-thread, allowing layout and other painting to proceed in parallel. For LCP images, `decoding="sync"` (or omitting the attribute) ensures the image is decoded before the next paint — avoiding a frame where the layout is painted but the image is missing.

## Common mistakes

1. **Lazy-loading the LCP image** — adds 100–300ms to LCP. Never `loading="lazy"` above the fold.
2. **Missing `width` / `height`** — browser can't reserve space, causes CLS.
3. **`srcset` without `sizes`** — browser assumes 100vw, always picks the largest image.
4. **PNG for photographs** — PNG is lossless and will be 5–10× larger than an equivalent JPEG/WebP.
5. **Inlining large images as base64** — prevents caching, bloats the HTML document, delays parsing.

## Related

- See also: [Performance → LCP Deep Dive](#/codex/performance-lcp-deep-dive) for how image discovery timing affects LCP.
- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for CLS — the other metric that image dimensions directly affect.

## Sources

- [web.dev — Use modern image formats](https://web.dev/articles/uses-webp-images)
- [web.dev — Lazy loading images](https://web.dev/articles/lazy-loading-images)
- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [web.dev — Image CDNs](https://web.dev/articles/image-cdns)
