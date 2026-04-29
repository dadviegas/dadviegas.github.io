# useEffect vs useLayoutEffect

Both hooks run after React commits DOM changes. The difference is *when* relative to the browser's paint step. Choosing the wrong one causes either a visual flash or unnecessary synchronous work on the main thread.

## The timing difference

**`useEffect`** — runs asynchronously after paint. The browser has already shown the updated UI to the user. Side effects that don't need to interact with the DOM layout (data fetching, subscriptions, analytics) belong here.

**`useLayoutEffect`** — runs synchronously after DOM mutations but *before* paint. The browser has updated the DOM but hasn't rendered it to the screen yet. It behaves like `componentDidUpdate` from class components.

```
Component renders
    ↓
React commits DOM mutations
    ↓
useLayoutEffect runs (synchronously — blocks paint)
    ↓
Browser paints the screen
    ↓
useEffect runs (asynchronously — after paint)
```

## When `useLayoutEffect` is necessary

Use `useLayoutEffect` when you need to read layout *and* apply corrections before the user sees the result:

```tsx
function Tooltip({ anchor, children }: TooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = tooltipRef.current;
    const anchorRect = anchor.getBoundingClientRect();
    if (!el) return;

    // Read layout before paint
    const tooltipRect = el.getBoundingClientRect();
    const rightOverflow = anchorRect.right + tooltipRect.width - window.innerWidth;

    if (rightOverflow > 0) {
      // Correct position before the user ever sees the tooltip in the wrong place
      el.style.transform = `translateX(-${rightOverflow}px)`;
    }
  });

  return (
    <div ref={tooltipRef} className="tooltip">
      {children}
    </div>
  );
}
```

With `useEffect`, the tooltip renders in the wrong position for one frame (flash of incorrect content), then jumps to the corrected position.

## When `useEffect` is correct

```tsx
function DataWidget({ widgetId }: { widgetId: string }) {
  const [data, setData] = useState<WidgetData | null>(null);

  // ✅ useEffect — data fetching has no layout dependency
  useEffect(() => {
    const controller = new AbortController();
    fetchWidgetData(widgetId, { signal: controller.signal })
      .then(setData)
      .catch((err) => { if (err.name !== 'AbortError') setData(null); });
    return () => controller.abort();
  }, [widgetId]);

  return data ? <WidgetContent data={data} /> : <Skeleton />;
}
```

`useEffect` is appropriate for any side effect that doesn't need to read or mutate the DOM before paint.

## The SSR gotcha

`useLayoutEffect` runs only in the browser — it does nothing in server-side rendering. React prints a warning when `useLayoutEffect` is used in SSR: "Warning: useLayoutEffect does nothing on the server."

The fix for isomorphic code is to defer to `useEffect` on the server, or use a conditional:

```ts
// Safe hook that uses useLayoutEffect in the browser, useEffect on the server
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
```

## Performance implications

`useLayoutEffect` blocks paint. Long work inside it causes visible jank. If you're doing expensive computation (e.g. measuring 500 elements), consider:

1. Using `useEffect` and accepting a one-frame delay (usually imperceptible for small corrections).
2. Deferring the expensive calculation with `requestAnimationFrame` inside `useLayoutEffect`.
3. Using `ResizeObserver` or `IntersectionObserver` which fire asynchronously and don't block paint.

## Related

- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for the deps array contract.
- See also: [Foundations → Browser Rendering Pipeline](#/codex/foundations-browser-rendering-pipeline) for the paint step in context.

## Sources

- [React docs — useEffect](https://react.dev/reference/react/useEffect)
- [React docs — useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)
- [React docs — useInsertionEffect](https://react.dev/reference/react/useInsertionEffect)
