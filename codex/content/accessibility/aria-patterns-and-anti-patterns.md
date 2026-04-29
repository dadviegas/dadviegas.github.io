# ARIA Patterns and Anti-Patterns

ARIA (Accessible Rich Internet Applications) attributes annotate HTML elements with semantic information that the visual presentation doesn't convey. The first rule of ARIA is to not use ARIA — use semantic HTML instead. The second rule is: if you must use ARIA, use it correctly.

## The first rule: semantic HTML first

Many accessibility problems disappear by using the correct HTML element:

```tsx
// ❌ A div with ARIA — works for screen readers, still doesn't get keyboard handling
<div role="button" tabIndex={0} aria-pressed={active} onClick={toggle}>
  Toggle
</div>

// ✅ A button — accessible semantics, keyboard handling, and styling all free
<button aria-pressed={active} onClick={toggle}>
  Toggle
</button>
```

The browser implements the interaction contract for semantic elements. Using `role="button"` on a `<div>` requires you to re-implement everything: `tabIndex`, `onKeyDown` for Enter/Space, pressed state, disabled state, focus management. Do this only when a custom element is genuinely necessary (scrollable virtual list, drag-and-drop handle, combobox).

## Naming elements: the accessible name calculation

Every interactive element needs an accessible name — what the screen reader announces when the user focuses it. The accessible name comes from (in priority order):

1. `aria-labelledby` — points to another element whose text is the name
2. `aria-label` — an inline string
3. The element's inner text content
4. `<label>` associated via `for` / `htmlFor`
5. `alt` attribute (for images)
6. `title` attribute (last resort — only use if the element has no other name)

```tsx
// 1. aria-labelledby — the modal's heading names the dialog
<div role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Deletion</h2>
  {/* … */}
</div>

// 2. aria-label — icon-only button with no visible text
<button aria-label="Close dialog">
  <Icon name="close" aria-hidden="true" />
</button>

// 3. Inner text — simple, preferred when text is present
<button>Delete Expense</button>

// 4. Label element — best for form fields
<label htmlFor="search-input">Search expenses</label>
<input id="search-input" type="search" />
```

## Modal dialogs

A modal dialog must:
- Have `role="dialog"` and `aria-modal="true"`
- Have an accessible name via `aria-labelledby` or `aria-label`
- Trap focus within the dialog while it's open
- Return focus to the trigger element when it closes

```tsx
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      firstFocusableRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <h2 id={titleId}>{title}</h2>
      {children}
      <button ref={closeButtonRef} onClick={onClose}>Close</button>
    </div>
  );
}
```

Focus trapping requires cycling Tab/Shift+Tab within the dialog. Libraries like `@radix-ui/react-dialog` implement this correctly — prefer them over hand-rolling focus management.

## Live regions

Content that updates asynchronously — status messages, notifications, loading states — must be announced to screen readers via live regions:

```tsx
// aria-live="polite" — announces when the user is idle (most updates)
<div aria-live="polite" aria-atomic="true">
  {status && <span>{status}</span>}
</div>

// aria-live="assertive" — announces immediately, interrupts current speech
// Use only for errors that require immediate attention
<div aria-live="assertive" role="alert">
  {error && <span>Error: {error.message}</span>}
</div>
```

`aria-atomic="true"` means the entire region is announced as a unit when any part changes. Without it, screen readers may announce only the changed part, which can be confusing.

`role="status"` is equivalent to `aria-live="polite"`. `role="alert"` is equivalent to `aria-live="assertive"`.

## Disclosure patterns (expand/collapse)

Accordion headers, details panels, and collapsible sections:

```tsx
// ❌ Screen reader has no information about the panel's state
<button onClick={toggle}>See details</button>
<div hidden={!isExpanded}>Content</div>

// ✅ Screen reader announces "See details, collapsed, button"
<button
  aria-expanded={isExpanded}
  aria-controls="details-panel"
  onClick={toggle}
>
  See details
</button>
<div id="details-panel" hidden={!isExpanded}>
  Content
</div>
```

`aria-expanded` communicates the state. `aria-controls` connects the button to the panel it controls (optional but useful).

## Common anti-patterns

### 1. `aria-hidden` on focusable elements

```tsx
// ❌ Screen reader skips the element, but keyboard users can still Tab to it
// → keyboard users hit an invisible, inaccessible element
<button aria-hidden="true" tabIndex={0}>Sort</button>

// ✅ Use tabIndex={-1} to remove from focus order too
<button aria-hidden="true" tabIndex={-1}>Sort</button>
// Or: don't use aria-hidden on interactive elements at all
```

### 2. Redundant ARIA

```tsx
// ❌ <button> already has role="button" — adding it again changes nothing
<button role="button">Click me</button>

// ❌ <h2> already has the correct heading role
<h2 role="heading" aria-level="2">Title</h2>
```

### 3. Overriding semantic roles

```tsx
// ❌ Destroys the table's semantic structure for AT
<table role="presentation">
  <tbody>
    <tr><td>Expense data</td></tr>
  </tbody>
</table>
// Use a div grid instead of a semantic table if you don't want table semantics
```

### 4. `tabIndex > 0`

```tsx
// ❌ Creates a custom tab order that overrides the natural DOM order
<button tabIndex={3}>First</button>
<button tabIndex={1}>Second</button>
<button tabIndex={2}>Third</button>

// ✅ Fix the DOM order instead
<button>Second</button>
<button>Third</button>
<button>First</button>
```

Positive `tabIndex` values are a maintenance hazard — the tab order becomes disconnected from the visual order and breaks whenever new elements are inserted.

## Testing ARIA implementations

After implementing ARIA, test with a real screen reader:
- macOS: VoiceOver (`Cmd+F5` to toggle), navigate with `Tab` and `VO+Right`
- Windows: NVDA (free), navigate with `H` for headings, `B` for buttons, `F` for forms
- iOS: VoiceOver + Safari — swipe right to navigate, double-tap to activate

For automated testing, `jest-axe` + RTL's `getByRole` catch the most common issues before manual testing.

## Related

- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for the WCAG principles that ARIA patterns are implementing.
- See also: [Testing → React Testing Library Philosophy](#/codex/testing-react-testing-library-philosophy) for how RTL's role-based queries enforce correct ARIA structure.

## Sources

- [W3C — ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [MDN — ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Inclusive Components](https://inclusive-components.design/)
- [Deque — ARIA role guide](https://dequeuniversity.com/library/)
