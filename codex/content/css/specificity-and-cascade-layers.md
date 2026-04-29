# Specificity & Cascade Layers

CSS specificity is a scoring system that determines which rule wins when multiple selectors target the same element. Cascade layers (`@layer`) are a newer mechanism that lets you control which stylesheet wins *before* specificity even kicks in. Misunderstanding the difference leads to specificity wars and `!important` accumulation.

## How specificity is calculated

Specificity is a three-part tuple `(a, b, c)`:
- `a` — ID selectors (`#header`)
- `b` — class selectors (`.btn`), attribute selectors (`[type="submit"]`), pseudo-classes (`:hover`)
- `c` — type selectors (`div`, `p`), pseudo-elements (`::before`)

```css
/* (0, 0, 1) — element selector */
p { color: gray; }

/* (0, 1, 0) — class selector */
.text { color: blue; }

/* (0, 1, 1) — class + element */
p.text { color: green; }

/* (1, 0, 0) — ID selector */
#main { color: red; }

/* (0, 2, 1) — two classes + element  */
p.text.large { color: purple; }
```

The `(1, 0, 0)` ID rule beats all class rules regardless of how many classes you stack. This is the root cause of specificity wars in large CSS codebases.

## `!important` — a specificity nuclear option

`!important` moves a declaration to a separate layer *above* all normal declarations. It breaks the cascade and makes overriding styles require another `!important`, which escalates quickly:

```css
/* day 1 */
.btn { color: blue !important; }

/* day 30 — trying to override from a more specific component */
.modal .btn { color: red !important; }

/* day 60 — both are !important; now specificity inside !important determines winner */
```

Prefer architectural solutions (cascade layers, BEM, CSS modules) over `!important` patches.

## `@layer` — cascade layers

`@layer` declares named layers. Styles in later-declared layers beat earlier ones, *regardless of specificity*. This is the key: a class in `components` beats an ID in `base` because of layer order, not specificity.

```css
@layer base, components, utilities;

@layer base {
  #main-content { color: gray; }  /* (1,0,0) specificity, but in a lower layer */
}

@layer components {
  .card { color: blue; }  /* (0,1,0) specificity, but in a higher layer — WINS */
}

@layer utilities {
  .text-red { color: red; }  /* highest layer — always wins over base/components */
}
```

**Unlayered styles always beat layered styles.** This lets you adopt `@layer` incrementally — existing unlayered styles continue to win over layered library code:

```css
@layer bootstrap;
@import 'bootstrap.css' layer(bootstrap);  /* bootstrap styles in the bootstrap layer */

/* This class beats any bootstrap style, even lower-specificity */
.my-component { padding: 0; }  /* unlayered — beats bootstrap's layered selectors */
```

## Practical architecture with layers

```css
/* Design system stylesheet — layers in priority order */
@layer reset, tokens, base, components, variants, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
}

@layer tokens {
  :root {
    --color-text: #e6edf3;
    --color-surface: #161b22;
    --radius-md: 6px;
  }
}

@layer components {
  .btn {
    border-radius: var(--radius-md);
    padding: 6px 12px;
    cursor: pointer;
  }
}

@layer variants {
  .btn--primary { background: var(--color-accent); color: white; }
  .btn--ghost   { background: transparent; border: 1px solid currentColor; }
}

@layer utilities {
  .mt-auto { margin-top: auto; }
  .sr-only  { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); }
}
```

With this architecture, a utility class beats a component style without needing a higher specificity selector or `!important`.

## The `:is()` and `:where()` specificity difference

`:is()` takes the highest specificity of its arguments. `:where()` always has zero specificity:

```css
/* (0,1,0) — :is() takes the specificity of .error */
:is(.error) p { color: red; }

/* (0,0,1) — :where() has zero specificity, p contributes (0,0,1) */
:where(.error) p { color: red; }
```

Use `:where()` in library code to keep specificity intentionally low, making it easy for consumers to override.

## Inline styles and the specificity ceiling

Inline styles have specificity `(1,0,0,0)` — above all stylesheet rules but below `!important`. Avoid using them for stylistic choices; reserve them for computed values that genuinely need to come from JavaScript (animation values, CSS custom property overrides).

## Related

- See also: [CSS → Custom Properties & Theming](#/codex/css-custom-properties-and-theming) for using cascade layers with design tokens.
- See also: [Emotion → Runtime vs Compile-time](#/codex/emotion-runtime-vs-compile-time) for how CSS-in-JS interacts with specificity.

## Sources

- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [MDN — @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [MDN — Cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [web.dev — Cascade layers](https://web.dev/articles/cascade-layers)
