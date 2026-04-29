# Flexbox vs Grid

Both flexbox and grid are one-dimensional vs two-dimensional — that distinction is real but incomplete. The more useful question is: does the layout decision come from the *content*, or from the *grid*?

## The fundamental difference

**Flexbox** is *content-out*: items negotiate their size based on what they contain, then flex fills remaining space. Use it when items should size themselves.

**Grid** is *layout-in*: the grid is defined first, then items are placed into it. Use it when you have a layout that items must conform to.

```css
/* Flexbox — items wrap naturally based on their content width */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
/* Each tag is as wide as its text. They flow and wrap freely. */

/* Grid — columns are defined; items must fit into them */
.dashboard {
  display: grid;
  grid-template-columns: 260px 1fr 320px;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
/* Sidebar, main, inspector are always their defined widths. */
```

## Flexbox: the properties that matter most

`flex` is shorthand for `flex-grow flex-shrink flex-basis`. Understanding these eliminates most flexbox confusion:

```css
/* flex: 1 = flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
/* Item takes all available space proportionally */
.main-content { flex: 1; }

/* flex: 0 0 260px = don't grow, don't shrink, start at 260px */
/* Item is fixed-width regardless of parent size */
.sidebar { flex: 0 0 260px; }

/* flex: 0 1 auto = don't grow, may shrink, size from content */
/* Default browser behaviour */
.badge { flex: 0 1 auto; }
```

`align-items` vs `justify-content`: `justify` aligns along the main axis (the direction of flex-direction), `align` aligns along the cross axis.

```css
.toolbar {
  display: flex;
  flex-direction: row;           /* main axis: horizontal */
  justify-content: space-between; /* horizontal distribution */
  align-items: center;           /* vertically center items */
}
```

## Grid: named areas for complex layouts

Named grid areas make layout readable without coordinates:

```css
.app-shell {
  display: grid;
  grid-template-areas:
    "topbar  topbar"
    "sidebar main"
    "sidebar footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: 56px 1fr auto;
  height: 100dvh;
}

.topbar  { grid-area: topbar; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; overflow-y: auto; }
.footer  { grid-area: footer; }
```

## Auto-fill vs auto-fit — the key responsive trick

```css
/* auto-fill: creates as many columns as fit; empty columns remain */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* auto-fit: empty columns collapse to zero width */
/* With a small number of items, they stretch to fill the row */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
```

`auto-fill` is usually what you want for card grids — columns exist even when items don't fill them, preventing the last row's items from stretching to full-width when there are fewer items than columns.

## Nesting: use both together

Grid and flexbox are not mutually exclusive. The outer layout is typically grid; inner components use flexbox:

```css
/* Page structure — grid */
.page {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 56px 1fr;
}

/* Widget card — flexbox for internal alignment */
.widget {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Common mistakes

**Using flexbox for two-dimensional layouts:**
```css
/* ❌ Flexbox doesn't know about columns — items wrap freely, not to a grid */
.photo-grid {
  display: flex;
  flex-wrap: wrap;
}
/* Items wrap but don't align across rows */

/* ✅ Grid aligns items in both dimensions */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
```

**Using grid for a horizontal list of variable-width items:**
```css
/* ❌ Grid forces a rigid column structure — tags become equal-width */
.tag-list {
  display: grid;
  grid-auto-flow: column;
}

/* ✅ Flexbox lets each tag be its natural width */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
```

## Subgrid — aligning across component boundaries

CSS Subgrid (now widely supported) lets a grid item's children align to the parent grid:

```css
.page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Each card participates in the parent's column grid */
.card {
  display: grid;
  grid-column: span 1;
  grid-template-rows: subgrid;
  row-gap: 0;
}
/* Card image, title, and description align across all three cards in a row */
```

## Related

- See also: [CSS → Container Queries](#/codex/css-container-queries) for grid layouts that respond to component size rather than viewport.
- See also: [CSS → Logical Properties & i18n](#/codex/css-logical-properties-and-i18n) for writing direction-aware flex/grid properties.
