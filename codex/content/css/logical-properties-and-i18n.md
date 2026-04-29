# Logical Properties & i18n

Physical CSS properties (`margin-left`, `padding-top`, `border-right`) assume left-to-right, top-to-bottom writing. Logical properties (`margin-inline-start`, `padding-block-start`, `border-inline-end`) express the same concepts relative to the document's writing mode. For multilingual applications, logical properties are not optional — they're the only correct abstraction.

## Physical vs logical

| Physical | Logical equivalent | What it means |
|----------|-------------------|---------------|
| `margin-top` | `margin-block-start` | Margin at the start of the block axis |
| `margin-bottom` | `margin-block-end` | Margin at the end of the block axis |
| `margin-left` | `margin-inline-start` | Margin at the start of the inline axis |
| `margin-right` | `margin-inline-end` | Margin at the end of the inline axis |
| `width` | `inline-size` | Size along the inline axis |
| `height` | `block-size` | Size along the block axis |
| `top` | `inset-block-start` | Inset from block start edge |
| `left` | `inset-inline-start` | Inset from inline start edge |

In a left-to-right (LTR) document, inline-start = left. In a right-to-left (RTL) document (`dir="rtl"` or `direction: rtl`), inline-start = right. Logical properties flip automatically.

## The practical impact

```css
/* ❌ Physical — breaks in RTL layouts */
.nav-item {
  padding-left: 12px;
  border-left: 3px solid var(--accent);
  margin-right: 8px;
}

/* ✅ Logical — works in LTR and RTL */
.nav-item {
  padding-inline-start: 12px;
  border-inline-start: 3px solid var(--accent);
  margin-inline-end: 8px;
}
```

In an Arabic or Hebrew UI (`dir="rtl"`), the logical version automatically moves the left padding to the right side, the border from left to right, and the margin from right to left.

## Shorthand logical properties

```css
/* Block: vertical axis (top + bottom) */
.card { margin-block: 16px; }     /* margin-top + margin-bottom */
.card { padding-block: 12px 24px; } /* top 12px, bottom 24px */

/* Inline: horizontal axis (left + right in LTR) */
.container { margin-inline: auto; }  /* center horizontally — RTL safe */
.item { padding-inline: 16px; }

/* Inset: all four sides with logical order */
.overlay { inset: 0; }            /* top right bottom left = 0 */
.tooltip { inset-block: auto 8px; } /* top: auto, bottom: 8px */
```

## `writing-mode` — vertical text

Logical properties become essential with vertical writing modes (East Asian text):

```css
.vertical-text {
  writing-mode: vertical-rl;  /* inline axis is now vertical */
}

/* These follow the inline axis regardless of orientation */
.vertical-text .label {
  margin-inline-start: 8px;   /* in vertical-rl: this is the top */
  padding-inline: 4px;        /* in vertical-rl: this is top + bottom */
}
```

## When to use physical properties

Physical properties are correct when the value is genuinely physical — not relative to writing mode:

```css
/* Physical is correct here — the image is physically at the top of its container */
.hero-image {
  object-position: center top;  /* physical: top is always above */
}

/* Physical is correct here — border-radius has no writing-mode semantics */
.avatar {
  border-radius: 50%;
}

/* Physical is correct for scroll — scroll is always physical */
.panel {
  overflow-y: auto;
}
/* But prefer the logical form when it's equivalent: */
.panel {
  overflow-block: auto;  /* logical: block-axis overflow */
}
```

## Emotion and CSS-in-JS

CSS-in-JS libraries emit physical properties by default. Use logical property strings directly — they're just CSS:

```tsx
const NavItem = styled.li`
  padding-inline-start: ${theme.spacing.sm};
  border-inline-start: 2px solid transparent;
  margin-block: 2px;

  &[aria-current="page"] {
    border-inline-start-color: var(--accent);
  }
`;
```

For applications that serve multiple locales, set `dir` on the root element based on the active locale and let logical properties handle the rest — no RTL stylesheet duplication needed.

## Checking your work

The fastest test: add `dir="rtl"` to your `<html>` element and inspect the layout. Sidebars should appear on the right, text should align right, icon-before-text should become icon-after-text. If anything breaks, find the physical property and replace it.

```html
<!-- Test RTL without changing your locale detection code -->
<html lang="ar" dir="rtl">
```

## Related

- See also: [CSS → Flexbox vs Grid](#/codex/css-flexbox-vs-grid) — flex properties like `justify-content: flex-start` are already logical in LTR context; `margin-inline: auto` is the RTL-safe equivalent of centering.
- See also: [CSS → Custom Properties & Theming](#/codex/css-custom-properties-and-theming) for composing RTL-aware design tokens.
