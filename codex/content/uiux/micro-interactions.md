# Micro-interactions and Motion Design

Micro-interactions are the small, contained moments of interaction feedback that make software feel responsive and alive: a button that changes on click, a form field that animates on focus, a notification that slides in and out. Done right, they're invisible — you only notice them when they're missing.

## The motion budget

Before adding any animation, establish constraints:

- **Entry animation:** one `fadeIn` per surface — not per child.
- **Hover:** 120–160ms on `border-color`, `background-color`, `transform`. No more.
- **State change:** 150–200ms. Faster feels broken; slower feels sluggish.
- **Page transition:** 250–300ms max. Users are waiting.
- **No animation in `prefers-reduced-motion` media query.**

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeIn 0.25s ease both;
  transition: border-color 140ms ease, box-shadow 140ms ease, transform 140ms ease;
}

.card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (prefers-reduced-motion: reduce) {
  .card { animation: none; transition: none; }
}
```

## Staggered list animations

Stagger entry animations for lists to create visual flow — but keep total duration under 500ms:

```tsx
const items = data.map((item, i) => (
  <ListItem
    key={item.id}
    style={{ animationDelay: `${Math.min(i * 40, 240)}ms` }}
  >
    {item.label}
  </ListItem>
));

// Cap the delay so items beyond index 6 don't wait too long
// animationDelay: Math.min(index * 40, 240)ms
//   i=0: 0ms, i=1: 40ms, ..., i=6+: 240ms
```

## Button press feedback

```css
.button {
  transition: transform 100ms ease, background-color 140ms ease;
}

.button:active {
  transform: scale(0.97);
}

/* Or for icon buttons */
.icon-button:active {
  transform: scale(0.92);
}
```

## Loading states — skeleton screens

Skeletons reduce perceived wait time by showing the shape of incoming content:

```tsx
const Skeleton = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '16px'};
  background: linear-gradient(
    90deg,
    ${theme.colors.surface} 25%,
    ${theme.colors.border} 50%,
    ${theme.colors.surface} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: ${theme.borderRadius.sm};

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

function CardSkeleton() {
  return (
    <div>
      <Skeleton height="20px" width="60%" />
      <Skeleton height="13px" width="80%" />
      <Skeleton height="13px" width="40%" />
    </div>
  );
}
```

## Notification / toast animations

```tsx
const toastEnter = keyframes`
  from { opacity: 0; transform: translateX(100%); }
  to   { opacity: 1; transform: translateX(0); }
`;

const toastExit = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(100%); }
`;

const Toast = styled.div<{ exiting: boolean }>`
  animation: ${({ exiting }) => exiting ? toastExit : toastEnter} 0.25s ease both;
`;
```

## Respecting user preferences

```ts
// Check in JS for animation control
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// React hook
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}
```

## Related

- See also: [CSS → Custom Properties and Theming](#/codex/css-custom-properties-and-theming) for animation tokens.
- See also: [Performance → Runtime Perf Profiling](#/codex/performance-runtime-perf-profiling) for animation flame charts.
- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for `prefers-reduced-motion` requirements.

## Sources

- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [web.dev — Animation performance](https://web.dev/articles/animations-guide)
- [Material Design — Motion](https://m3.material.io/styles/motion/overview)
- [Val Head — Animation at Work](https://rosenfeldmedia.com/books/animation-at-work/)
