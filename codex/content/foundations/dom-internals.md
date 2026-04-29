# DOM Internals

The DOM is a live, mutable tree — not a static snapshot. Its live nature is both a power and a footgun. Understanding which operations are cheap and which trigger the rendering pipeline determines whether your code is smooth or janky.

## Live vs static node lists

`getElementsByClassName` and `getElementsByTagName` return *live* `HTMLCollection` objects. Mutating the DOM while iterating over one produces subtle bugs:

```ts
// ❌ Infinite loop — collection is live; removing first element shifts indices
const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  items[i].remove();
}

// ✅ Convert to static array first
const items = Array.from(document.getElementsByClassName('item'));
items.forEach((el) => el.remove());
```

`querySelectorAll` returns a *static* `NodeList` — safe to iterate while mutating. Prefer it for the predictability.

## Properties that trigger layout

Reading any of these forces the browser to flush pending layout changes (see Foundations → Browser Rendering Pipeline):

- `offsetWidth`, `offsetHeight`, `offsetTop`, `offsetLeft`
- `clientWidth`, `clientHeight`, `clientTop`, `clientLeft`
- `scrollWidth`, `scrollHeight`, `scrollTop`, `scrollLeft`
- `getBoundingClientRect()`
- `getComputedStyle()`
- `innerText` (but not `textContent`)

The cost is proportional to how many elements the browser needs to re-lay-out. On a complex page this can exceed 10ms per read.

## `getBoundingClientRect` cost

```ts
// ❌ Forces layout on every iteration — O(n) layout flushes
function measureAll(rows: HTMLElement[]) {
  return rows.map((row) => ({
    top: row.getBoundingClientRect().top,
    height: row.getBoundingClientRect().height, // second read = second flush if anything changed
  }));
}

// ✅ One read per element, all reads batched before any writes
function measureAll(rows: HTMLElement[]) {
  return rows.map((row) => {
    const rect = row.getBoundingClientRect(); // one layout flush for the batch
    return { top: rect.top, height: rect.height };
  });
}
```

Cache the `DOMRect` result. It's a snapshot — re-reading doesn't give you updated values unless the layout has actually changed.

## `requestAnimationFrame` batching

DOM mutations queued inside a single `rAF` callback are batched by the browser before the next paint. This is the correct pattern for updating many elements in sync:

```ts
function updatePositions(elements: HTMLElement[], offsets: number[]) {
  requestAnimationFrame(() => {
    elements.forEach((el, i) => {
      el.style.transform = `translateY(${offsets[i]}px)`;
    });
  });
}
```

All writes happen in the same frame. The browser calculates style and composites once, not once per element.

## `IntersectionObserver` for visibility

Polling `getBoundingClientRect` in a scroll handler to detect visibility is a performance anti-pattern. Use `IntersectionObserver`:

```ts
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadContent(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '200px' }, // start loading 200px before in view
);

lazyElements.forEach((el) => observer.observe(el));
```

`IntersectionObserver` callbacks run asynchronously and do not trigger layout.

## `MutationObserver` for structural changes

Listening to DOM mutations without polling:

```ts
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node instanceof HTMLElement && node.matches('[data-widget]')) {
        initWidget(node);
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });
```

Clean up on teardown: `observer.disconnect()`.

## Related

- See also: [Foundations → Browser Rendering Pipeline](#/codex/foundations-browser-rendering-pipeline) for the full layout → paint → composite sequence.
- See also: [Performance → Runtime Perf Profiling](#/codex/performance-runtime-perf-profiling) for identifying layout-heavy operations in a flame chart.
