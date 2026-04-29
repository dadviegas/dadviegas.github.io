# Semantic HTML & Forms

Semantic HTML is not about following a style guide — it provides structure that assistive technologies, search engines, and browser features depend on. Forms in particular have rich native behaviour that's easy to accidentally disable.

## Landmarks and document structure

HTML landmark elements map to ARIA roles and give screen reader users a way to jump to major sections:

| Element | Implicit role | Usage |
|---------|--------------|-------|
| `<header>` | `banner` | One per page, for site-level header |
| `<nav>` | `navigation` | Primary and secondary navigation |
| `<main>` | `main` | Primary page content, one per page |
| `<aside>` | `complementary` | Related but non-essential content |
| `<footer>` | `contentinfo` | Site-level footer |
| `<section>` | `region` (only if named) | Thematic grouping; add `aria-label` for the role to apply |
| `<article>` | `article` | Self-contained content that could stand alone |

Having multiple `<nav>` elements is fine; distinguish them with `aria-label="Primary"` and `aria-label="Footer"`.

## Native form submission

HTML forms submit on `Enter` in a single-input form and on a `type="submit"` button click. Intercepting with `onSubmit` while keeping native behaviour:

```tsx
function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents full-page reload
    const data = new FormData(e.currentTarget);
    sendMessage(Object.fromEntries(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <button type="submit">Send</button>
    </form>
  );
}
```

`FormData` gives you all named inputs without manually reading each ref. `e.currentTarget` is type-safe when typed correctly.

## `<button type="button">` — the footgun

A `<button>` inside a `<form>` defaults to `type="submit"`. This means any button without an explicit type will submit the form:

```tsx
// ❌ Submits the form unintentionally
<form onSubmit={handleSubmit}>
  <button onClick={clearFields}>Clear</button>   {/* type defaults to 'submit' */}
  <button>Send</button>
</form>

// ✅ Explicit types
<form onSubmit={handleSubmit}>
  <button type="button" onClick={clearFields}>Clear</button>
  <button type="submit">Send</button>
</form>
```

This is a frequent bug in React where `onClick` handlers on form buttons trigger unexpected submissions.

## File inputs

```tsx
function FileUpload() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    files.forEach((file) => uploadFile(file));
  };

  return (
    <label>
      Upload files
      <input
        type="file"
        accept=".pdf,.docx"
        multiple
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </label>
  );
}
```

Wrapping the input in a `<label>` makes the label the clickable area without needing `htmlFor`. `accept` filters the file picker — it does not validate server-side. Always validate file type on the server.

To reset a file input after upload: the only reliable way is to set `key` to force a React remount, or set `element.value = ''` imperatively via a ref.

## Fieldset and legend for grouped controls

```tsx
<fieldset>
  <legend>Notification preferences</legend>
  <label>
    <input type="checkbox" name="notifyEmail" /> Email
  </label>
  <label>
    <input type="checkbox" name="notifyPush" /> Push notifications
  </label>
</fieldset>
```

`<fieldset>` + `<legend>` groups related controls and announces the group name to screen readers before each control. Do not use it purely for visual grouping — the semantic meaning is the point.

## Related

- See also: [Accessibility → WCAG Essentials](#/codex/accessibility-wcag-essentials) for focus management requirements.
- See also: [Accessibility → ARIA Patterns & Anti-Patterns](#/codex/accessibility-aria-patterns-and-anti-patterns) for when to add `role` vs relying on native semantics.

## Sources

- [MDN — HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C — HTML5 Accessibility](https://www.w3.org/TR/html-aria/)
- [MDN — The HTML form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [web.dev — Learn Forms](https://web.dev/learn/forms/)
