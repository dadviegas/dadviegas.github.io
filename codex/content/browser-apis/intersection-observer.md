# Intersection Observer

The Intersection Observer API detects when an element enters or exits the viewport (or another element) asynchronously — without the scroll event overhead. It's the right tool for lazy loading, infinite scroll, animations on scroll, and read-tracking.

## Basic usage

```ts
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element entered the viewport
        loadImage(entry.target as HTMLImageElement);
        observer.unobserve(entry.target); // stop watching after first intersection
      }
    });
  },
  {
    root: null,           // null = viewport
    rootMargin: '200px',  // trigger 200px before edge (prefetch)
    threshold: 0,         // fire when any part is visible
  }
);

document.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img));

function loadImage(img: HTMLImageElement) {
  img.src = img.dataset.src ?? '';
  img.removeAttribute('data-src');
}
```

## React hook

```ts
function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return isIntersecting;
}

// Usage
function LazyCard() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersectionObserver(ref, { rootMargin: '100px' });

  return (
    <div ref={ref}>
      {visible ? <HeavyContent /> : <Skeleton />}
    </div>
  );
}
```

## Threshold — fine-grained visibility control

```ts
// Array of thresholds — fires at each crossing point
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // entry.intersectionRatio: 0..1 — how much is visible
      const opacity = entry.intersectionRatio;
      (entry.target as HTMLElement).style.opacity = String(opacity);
    });
  },
  { threshold: [0, 0.25, 0.5, 0.75, 1] } // fires at each 25% mark
);
```

## Read tracking / analytics

```ts
function trackReadDepth(article: HTMLElement) {
  const sections = article.querySelectorAll('[data-section]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          analytics.track('section_viewed', {
            section: (entry.target as HTMLElement).dataset.section,
          });
          observer.unobserve(entry.target); // once per session
        }
      });
    },
    { threshold: 0.5 } // at least 50% visible counts as "read"
  );

  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}
```

## Why not scroll events?

Scroll event handlers fire synchronously on every scroll tick — up to 60+ times per second — and accessing `getBoundingClientRect()` in a scroll handler forces synchronous layout (see Browser Rendering Pipeline). IntersectionObserver batches callbacks off the main thread and delivers them asynchronously at a consistent rate.

## Related

- See also: [Foundations → Browser Rendering Pipeline](#/codex/foundations-browser-rendering-pipeline) for layout thrash risks.
- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for CLS — lazy loading images needs explicit dimensions.
- See also: [Browser APIs → Web Workers and Offscreen Canvas](#/codex/browser-apis-web-workers) for off-thread processing.

## Sources

- [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [web.dev — Lazy loading images](https://web.dev/articles/lazy-loading-images)
- [web.dev — IntersectionObserver v2](https://web.dev/articles/intersectionobserver-v2)
