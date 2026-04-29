# Responsive Design Patterns

Responsive design is not "make it work on mobile too". It's designing for every viewport from the start, using fluid layouts that adapt rather than fixed breakpoints that snap. The goal is a continuous experience, not a set of distinct sizes.

## The fluid-first approach

Prefer fluid techniques over fixed breakpoints:

```css
/* ❌ Fixed breakpoints — brittle, fights content */
.grid { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }

/* ✅ auto-fill + minmax — wraps naturally at any size */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
  gap: clamp(12px, 2vw, 24px);
}
```

`auto-fill` + `minmax(min(240px, 100%), 1fr)` means: create as many columns as fit with a minimum of 240px each. On a 320px screen, that's one column. On 1440px, it's five. No media query needed.

## `clamp()` for fluid typography and spacing

```css
/* Typography that scales from 16px at 320px to 20px at 1440px */
body { font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem); }

/* Hero number: 36px on mobile, up to 64px on desktop */
.hero-value { font-size: clamp(2.25rem, 4vw + 1rem, 4rem); }

/* Padding that scales with viewport, not snaps */
.card { padding: clamp(16px, 3vw, 32px); }
```

## Container queries — component-level responsiveness

Container queries let components respond to their container's size, not the viewport. This is critical for components that appear in different-width columns:

```css
.widget-wrapper {
  container-type: inline-size;
  container-name: widget;
}

/* Widget at full width: show 3-column grid */
@container widget (min-width: 480px) {
  .widget-inner { grid-template-columns: repeat(3, 1fr); }
}

/* Widget in narrow sidebar: single column */
@container widget (max-width: 479px) {
  .widget-inner { grid-template-columns: 1fr; }
}
```

## Touch targets — minimum 44px

Every interactive element needs a minimum 44×44px tap target, regardless of visual size:

```css
/* Small icon button with adequate tap target */
.icon-btn {
  width: 24px;
  height: 24px;
  /* Extend tap area without affecting layout */
  position: relative;
}
.icon-btn::after {
  content: '';
  position: absolute;
  inset: -10px;  /* extends to 44px total */
}

/* Or use padding */
.chip {
  padding: 10px 16px;  /* 10px × 2 = 20px + content ≥ 44px height */
  min-height: 44px;
}
```

## Mobile navigation patterns

```tsx
// Sidebar that collapses to bottom sheet or hamburger on mobile
function AppLayout({ sidebar, children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop: persistent sidebar */}
      <DesktopSidebar>{sidebar}</DesktopSidebar>

      {/* Mobile: hamburger button */}
      <MobileMenuBtn onClick={() => setMobileOpen(true)} />

      {/* Mobile: slide-over drawer */}
      {mobileOpen && (
        <MobileDrawer onClose={() => setMobileOpen(false)}>
          {sidebar}
        </MobileDrawer>
      )}

      <Main>{children}</Main>
    </>
  );
}

// CSS: hide/show based on breakpoint (no JS needed for visibility)
const DesktopSidebar = styled.aside`
  display: none;
  @media (min-width: ${theme.breakpoints.md}) { display: flex; }
`;
const MobileMenuBtn = styled.button`
  @media (min-width: ${theme.breakpoints.md}) { display: none; }
`;
```

## Viewport meta tag

```html
<!-- Required on every mobile page — never omit this -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Never use user-scalable=no — breaks accessibility -->
<!-- ❌ <meta name="viewport" content="..., user-scalable=no"> -->
```

## Related

- See also: [CSS → Flexbox vs Grid](#/codex/css-flexbox-vs-grid) for layout primitives.
- See also: [CSS → Container Queries](#/codex/css-container-queries) for component-level responsiveness.
- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for touch target requirements.

## Sources

- [web.dev — Responsive design](https://web.dev/learn/design)
- [MDN — Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [web.dev — Container queries](https://web.dev/articles/container-queries)
- [Ahmad Shadeed — Responsive design deep dives](https://ishadeed.com/)
