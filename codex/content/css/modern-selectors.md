# Modern CSS Selectors

CSS selectors have gained significant power in recent years. `:is()`, `:where()`, `:has()`, `:not()`, and `:nth-child(of S)` eliminate patterns that previously required class manipulation or JavaScript. Understanding them reduces DOM coupling and simplifies stylesheets.

## `:is()` — group selectors with proper specificity

`:is()` matches an element against a list of selectors. It takes the specificity of its *highest-specificity argument*:

```css
/* Old approach — repetitive and error-prone to maintain */
h1 a:hover, h2 a:hover, h3 a:hover, h4 a:hover { color: var(--accent); }

/* ✅ :is() deduplicates the pattern */
:is(h1, h2, h3, h4) a:hover { color: var(--accent); }

/* Specificity note: :is(h1, .title, #main) has specificity (1,0,0) — 
   the highest of h1(0,0,1), .title(0,1,0), #main(1,0,0) */
```

`:is()` is forgiving — an invalid selector inside the list is ignored, the rest still work. This is useful when targeting elements that may not exist in all browsers.

## `:where()` — zero-specificity grouping

`:where()` is identical to `:is()` but always has zero specificity. Use it in library or base stylesheets to make everything easy to override:

```css
/* Library reset — zero specificity, easy to override */
:where(ul, ol) { list-style: none; margin: 0; padding: 0; }

/* Consumer override — even element selectors beat :where() */
nav ul { list-style: disc; }  /* (0,0,1) > (0,0,0) — overrides the library reset */
```

## `:has()` — parent selector

`:has()` matches an element if it contains a descendant matching the argument. It's the closest CSS has ever come to a "parent selector":

```css
/* Style a card that contains an image differently from one that doesn't */
.card:has(img) {
  grid-row: span 2;
  padding: 0;
}

/* Highlight a form field that contains an invalid input */
.field:has(input:invalid) {
  border-color: var(--color-danger);
}
.field:has(input:invalid) label {
  color: var(--color-danger);
}

/* Style the article when the sidebar is open (sibling :has) */
.layout:has(.sidebar[aria-expanded="true"]) .main {
  margin-left: var(--sidebar-width);
}
```

`:has()` eliminates JavaScript state management for cases where only styling is needed — no class toggling required.

## `:not()` — exclusion with full selector power

Modern `:not()` accepts a full selector list (unlike the old CSS3 version which only accepted simple selectors):

```css
/* Exclude multiple classes */
.btn:not(.btn--disabled, .btn--loading) { cursor: pointer; }

/* Exclude elements without an attribute */
a:not([href]) { color: var(--text-muted); text-decoration: none; }

/* Exclude the first and last items */
.list-item:not(:first-child, :last-child) { border-block: 1px solid var(--border); }
```

## `:nth-child(An+B of S)` — filtered nth-child

Traditional `:nth-child(2n)` counts all siblings. The `of S` syntax lets you count only siblings matching a selector:

```css
/* Every other .highlight-row, ignoring non-highlighted rows */
.highlight-row:nth-child(2n of .highlight-row) {
  background: var(--surface-raised);
}
```

Without `of S`, you'd have to add a counter class in JavaScript to achieve this.

## `:focus-visible` — smart focus rings

`:focus` shows on both keyboard navigation and mouse clicks. `:focus-visible` shows only when the browser determines a visible focus ring is useful (keyboard nav, not mouse):

```css
/* Remove default outline for mouse users */
:focus:not(:focus-visible) { outline: none; }

/* Keep outline for keyboard users */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

## Logical selectors for writing direction

`:dir(ltr)` and `:dir(rtl)` match elements based on text directionality (works even for inherited direction, unlike `[dir]` attribute selectors):

```css
/* Style Arabic text differently from Latin text */
:dir(rtl) .text { font-size: 1.1em; line-height: 1.8; }
```

## Combining for real use cases

```css
/* Style a table row that contains a cell with a warning, 
   is not the first row, and is being hovered */
tr:not(:first-child):has(td.warning):hover {
  background: oklch(from var(--color-warning) l c h / 0.1);
}

/* A navigation item that is currently active and inside an open sidebar */
.sidebar:has([aria-expanded="true"]) .nav-item.active {
  background: var(--sidebar-active-bg);
  color: var(--sidebar-active-text);
}
```

## Browser support (2025)

`:is()`, `:where()`, `:not()` (modern form) — all major browsers.
`:has()` — all major browsers (Safari 15.4+, Chrome 105+, Firefox 121+).
`:nth-child(of S)` — Safari 9+ (original), Chrome 111+, Firefox 113+.
`:focus-visible` — all major browsers.

## Related

- See also: [CSS → Specificity & Cascade Layers](#/codex/css-specificity-and-cascade-layers) for how `:is()` and `:where()` affect specificity calculations.
- See also: [Accessibility → ARIA Patterns](#/codex/accessibility-aria-patterns-and-anti-patterns) for accessible keyboard navigation patterns that `:focus-visible` supports.
