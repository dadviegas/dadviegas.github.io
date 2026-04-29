# Controlled vs Uncontrolled Inputs

React supports two patterns for form inputs. Controlled inputs keep value in React state — the component is the single source of truth. Uncontrolled inputs keep value in the DOM — React reads it via a ref when needed. Each has a distinct performance profile and appropriate use case.

## Controlled inputs

```tsx
function SearchForm() {
  const [query, setQuery] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); search(query); }}>
      <input
        type="search"
        value={query}                            // controlled: React owns the value
        onChange={(e) => setQuery(e.target.value)} // every keystroke re-renders
        placeholder="Search…"
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

Every keystroke triggers a state update and re-render. This is fine for most inputs, but can cause performance problems in complex forms with expensive child trees. Mitigate with `memo` or form-library state isolation.

**When to use controlled:** live validation, derived state (character count, formatted input), value synchronisation between inputs.

## Uncontrolled inputs

```tsx
function ProfileForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value ?? '',
      email: emailRef.current?.value ?? '',
    };
    saveProfile(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" defaultValue="Ada" />   {/* uncontrolled */}
      <input ref={emailRef} type="email" defaultValue="ada@example.com" />
      <button type="submit">Save</button>
    </form>
  );
}
```

`defaultValue` sets the initial value without controlling it. No re-renders on every keystroke. Value is read from the DOM at submit time.

**When to use uncontrolled:** file inputs (always), large forms where performance matters, non-React library integration, forms you don't need to validate on every keystroke.

## File inputs are always uncontrolled

```tsx
const fileRef = useRef<HTMLInputElement>(null);

<input type="file" ref={fileRef} accept="image/*" />

// Read the file on submit
const file = fileRef.current?.files?.[0];
```

You cannot set a file input's value programmatically in browsers — this is a security restriction.

## React Hook Form — uncontrolled performance, controlled ergonomics

```tsx
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit((data) => login(data))}>
      <input
        type="email"
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register('password', { required: true, minLength: 8 })}
      />
      <button type="submit">Log in</button>
    </form>
  );
}
```

RHF registers inputs as uncontrolled by default — no re-renders on every keystroke. It batches validation and re-renders only on submit (or on blur/change if configured). This gives performance close to uncontrolled with the ergonomics of controlled.

## Related

- See also: [Forms → Validation Patterns](#/codex/forms-validation-patterns) for schema-based validation.
- See also: [React → Hooks Rules and Mental Model](#/codex/react-hooks-rules-and-mental-model) for useRef patterns.
- See also: [Performance → INP and Input Latency](#/codex/performance-inp-and-input-latency) for input latency from excessive re-renders.

## Sources

- [React docs — Controlled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [React docs — Uncontrolled components](https://legacy.reactjs.org/docs/uncontrolled-components.html)
- [React Hook Form docs](https://react-hook-form.com/get-started)
- [MDN — HTMLInputElement.value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value)
