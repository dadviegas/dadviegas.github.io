# WCAG Essentials

WCAG (Web Content Accessibility Guidelines) defines how to make web content accessible to people with disabilities. Conformance is organized into levels A, AA, and AAA. Level AA is the legal and practical standard: it's what most accessibility laws reference, and it's achievable without extreme constraints.

## The four principles (POUR)

Every WCAG criterion falls under one of four principles:

1. **Perceivable** — information must be presentable in ways users can perceive. Content that only exists visually (no alt text, no captions) fails users who can't see.
2. **Operable** — interface components must be operable. Everything must work with a keyboard. Nothing should cause seizures.
3. **Understandable** — content and operation must be understandable. Form errors must identify what's wrong and how to fix it.
4. **Robust** — content must be robust enough to be interpreted by assistive technologies. Valid semantic HTML matters.

## What every component must have

### Text alternatives (1.1.1)

Every non-text content — images, icons, decorative graphics — needs a text alternative or must be explicitly marked as decorative:

```tsx
// ❌ Screen reader reads nothing or the file name
<img src="/user-avatar.jpg" />

// ✅ Alt text describes the content
<img src="/user-avatar.jpg" alt="Profile photo of Ada Lovelace" />

// ✅ Decorative image — screen reader skips it
<img src="/decorative-swirl.svg" alt="" aria-hidden="true" />

// ✅ Icon with a visible label — icon is decorative
<button>
  <Icon name="save" aria-hidden="true" />
  Save document
</button>

// ✅ Icon-only button — icon needs an accessible name
<button aria-label="Save document">
  <Icon name="save" />
</button>
```

### Keyboard access (2.1.1)

Every feature must be reachable and operable with a keyboard alone:

- All `<button>`, `<a>`, `<input>`, `<select>` are keyboard-accessible by default — don't replace them with `<div onClick>` unless you add `tabIndex={0}` + `onKeyDown` for Enter/Space.
- Focus order must follow the visual reading order.
- Nothing should be keyboard-only accessible either (keyboard-only features are operable but not perceivable by mouse users — use it rarely and intentionally).

```tsx
// ❌ Not keyboard accessible — div captures clicks but not keyboard events
<div className="button" onClick={handleSubmit}>
  Submit
</div>

// ✅ Use a real button — keyboard access included
<button onClick={handleSubmit}>Submit</button>

// ✅ If you must use a div (rare), add full keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleSubmit}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSubmit();
    }
  }}
>
  Submit
</div>
```

### Focus visibility (2.4.7)

The focused element must be visually distinguishable. Never `outline: none` without a replacement:

```css
/* ❌ Kills focus visibility for keyboard users */
:focus { outline: none; }

/* ✅ Remove the browser default only if you provide a custom indicator */
:focus { outline: none; }
:focus-visible { outline: 2px solid #58a6ff; outline-offset: 2px; }
```

`:focus-visible` shows the focus indicator for keyboard navigation but not for mouse clicks — the modern approach that satisfies keyboard users without distracting mouse users.

### Color contrast (1.4.3)

Text must have a contrast ratio of at least 4.5:1 against its background (3:1 for large text — 18pt or 14pt bold). This is the most commonly failed criterion.

| Text size | Minimum contrast (AA) |
|-----------|----------------------|
| Normal text (< 18pt) | 4.5:1 |
| Large text (≥ 18pt regular or ≥ 14pt bold) | 3:1 |
| UI components and graphical objects | 3:1 |

```css
/* Check: does mainTextMuted (#8b949e) pass 4.5:1 on mainBg (#0d1117)? */
/* #8b949e on #0d1117 = 4.7:1 — passes AA for normal text ✅ */

/* What about a muted label at smaller size? Same check applies. */
```

Tools: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/), Figma's accessibility plugin, browser DevTools accessibility panel.

### Error identification (3.3.1)

When a form error occurs, the error must be described in text — not just by color:

```tsx
// ❌ Error indicated only by red color
<input className={hasError ? 'input-error' : ''} />

// ✅ Error described in text, associated with the input
<div>
  <label htmlFor="amount">Amount</label>
  <input
    id="amount"
    aria-describedby={hasError ? 'amount-error' : undefined}
    aria-invalid={hasError}
  />
  {hasError && (
    <span id="amount-error" role="alert">
      Enter a valid amount greater than 0
    </span>
  )}
</div>
```

`aria-describedby` connects the error message to the input in the accessibility tree. `role="alert"` causes screen readers to announce the error when it appears.

## Testing accessibility

**Automated tools catch ~40% of issues:**
- `axe-core` via `@axe-core/react` (dev mode overlay) or `jest-axe` (in tests)
- Browser extensions: Axe DevTools, WAVE

```tsx
// jest-axe — automated WCAG checks in tests
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<ExpenseForm />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

**Manual testing catches the other 60%:**
- Tab through the entire page. Can you reach every interactive element?
- Screen reader test: NVDA (Windows) or VoiceOver (macOS/iOS). Navigate by headings, then by links, then by form controls.
- 200% zoom: does the layout work? Does any content get clipped?
- Remove CSS (WebAIM Wave → "toggle styles"): does the document structure make sense?

## Related

- See also: [Accessibility → ARIA Patterns and Anti-Patterns](#/codex/accessibility-aria-patterns-and-anti-patterns) for the specific ARIA attributes used to enhance component accessibility.
- See also: [Testing → React Testing Library Philosophy](#/codex/testing-react-testing-library-philosophy) for why role-based queries (`getByRole`) produce accessible components naturally.

## Sources

- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/)
- [MDN — Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [web.dev — Accessibility](https://web.dev/learn/accessibility)
- [a11yproject — Checklist](https://www.a11yproject.com/checklist/)
