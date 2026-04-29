# Container Queries

Media queries respond to the *viewport* size. Container queries respond to the *parent container's* size. This distinction matters for every reusable component that can appear in different layout contexts — a card in a sidebar looks different from the same card in a full-width grid.

## The viewport vs container problem

```css
/* Media query — card layout depends on the viewport, not where the card lives */
@media (min-width: 768px) {
  .metric-card { flex-direction: row; }
}

/* Problem: the card is in a 300px sidebar on a 1440px viewport.
   The media query fires (viewport is 1440px), but the card has no room to go horizontal. */
```

Container queries solve this by measuring the card's *container*, not the window:

```css
.card-container {
  container-type: inline-size;  /* enables containment on the inline axis */
  container-name: card;         /* optional name for targeting */
}

@container card (min-width: 400px) {
  .metric-card { flex-direction: row; }
}

/* Now the card goes horizontal only when its container is ≥400px — 
   whether that's a sidebar at 400px or a full-width grid cell. */
```

## `container-type` values

| Value | Containment |
|-------|-------------|
| `inline-size` | Responds to the container's width (most common). |
| `size` | Responds to both width and height. Requires the container to have a defined height. |
| `normal` | No size containment — disables container queries on this element. |

`inline-size` is what you want 95% of the time. `size` is for things like a card in a fixed-height panel.

## Practical example: an adaptive widget

```css
.widget-wrapper {
  container-type: inline-size;
  container-name: widget;
}

/* Base (narrow): vertical stack */
.widget-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Medium container: header row + body */
@container widget (min-width: 320px) {
  .widget-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

/* Wide container: side-by-side chart + metrics */
@container widget (min-width: 540px) {
  .widget-content {
    flex-direction: row;
    align-items: stretch;
  }

  .widget-chart { flex: 1; }
  .widget-metrics { width: 180px; }
}
```

The same widget HTML works correctly in a 1-column layout (mobile), a 2-column grid (tablet), and a 4-column dashboard (desktop) — with no JavaScript and no viewport media queries.

## `cqi` and `cqb` units — size relative to the container

Like viewport units (`vw`, `vh`), container query units express size as a percentage of the container:

```css
.widget-wrapper {
  container-type: inline-size;
}

.metric-value {
  /* 8% of the container's inline size, clamped to 14–22px */
  font-size: clamp(14px, 8cqi, 22px);
}
```

| Unit | Description |
|------|-------------|
| `cqi` | 1% of container's inline size (usually width) |
| `cqb` | 1% of container's block size (usually height) |
| `cqw` / `cqh` | 1% of container's width / height (physical, not logical) |
| `cqmin` / `cqmax` | Smaller / larger of `cqi` and `cqb` |

## Nesting containers

Containers can nest. A child container query resolves against the nearest ancestor with `container-type` set:

```css
.grid {
  container-type: inline-size;
  container-name: grid;
}

.grid-cell {
  container-type: inline-size;
  container-name: cell;
}

/* Targets the grid container's size */
@container grid (min-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Targets the cell container's size — independent of the grid */
@container cell (max-width: 300px) {
  .card { font-size: 13px; }
}
```

## The containment side effect

`container-type: inline-size` creates a new containment context. This has layout implications: it establishes a new independent formatting context, which means `overflow`, `position: absolute`, and `z-index` stacking contexts are affected. Test float-based layouts (rare in 2025, but legacy codebases have them) after adding containment.

## Browser support and progressive enhancement

Container queries have been in all major browsers since 2023. For older targets, use a media query fallback:

```css
/* Mobile-first base that works everywhere */
.card { flex-direction: column; }

/* Progressive: container query for modern browsers */
@supports (container-type: inline-size) {
  .card-container { container-type: inline-size; }
  @container (min-width: 400px) {
    .card { flex-direction: row; }
  }
}
```

## Related

- See also: [CSS → Flexbox vs Grid](#/codex/css-flexbox-vs-grid) for the layout systems container queries control.
- See also: [CSS → Custom Properties & Theming](#/codex/css-custom-properties-and-theming) for token-driven responsive values inside container contexts.

## Sources

- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [MDN — @container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)
- [web.dev — Container queries](https://web.dev/articles/container-queries)
- [web.dev — Container query units](https://web.dev/articles/cq-units)
