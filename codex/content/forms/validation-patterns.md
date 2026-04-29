# Form Validation Patterns

Validation runs in three places: real-time in the browser (immediate feedback), on submit (final check), and on the server (security). Never rely solely on client-side validation — it can be bypassed.

## Validation timing strategies

| Timing | Trigger | UX tradeoff |
|--------|---------|-------------|
| On blur | When field loses focus | Shows error after user leaves; less intrusive |
| On change (after first error) | Every keystroke, once field is dirty | Immediate feedback on correction |
| On submit | Form submit | No mid-typing errors; delayed feedback |
| On blur + on submit | Both | Most common pattern |

## Schema validation with Zod

Zod validates at runtime and derives TypeScript types from the schema — single source of truth:

```ts
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginInput = z.infer<typeof loginSchema>;
// { email: string; password: string }

// Parse — throws on failure
const parsed = loginSchema.parse({ email: 'ada@example.com', password: 'secret123' });

// SafeParse — returns result without throwing
const result = loginSchema.safeParse(formData);
if (!result.success) {
  const fieldErrors = result.error.flatten().fieldErrors;
  // { email: ['Invalid email address'], password: [...] }
}
```

## React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',  // validate on blur; re-validate on change after first error
  });

  async function onSubmit(data: LoginInput) {
    await registerUser(data);  // server call
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register('email')} aria-invalid={!!errors.email} />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </label>

      <label>
        Password
        <input type="password" {...register('password')} aria-invalid={!!errors.password} />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering…' : 'Register'}
      </button>
    </form>
  );
}
```

## Server-side validation (never trust the client)

```ts
// Next.js API route
export async function POST(req: Request) {
  const body = await req.json();

  const result = loginSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { errors: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { email, password } = result.data;
  // proceed with validated data
}
```

## Accessibility — don't forget ARIA

```tsx
// Link error messages to inputs via aria-describedby
<div>
  <input
    id="email"
    type="email"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? 'email-error' : undefined}
    {...register('email')}
  />
  {errors.email && (
    <span id="email-error" role="alert">
      {errors.email.message}
    </span>
  )}
</div>
```

- `aria-invalid="true"` — tells screen readers the field has an error.
- `aria-describedby` — points to the error message element.
- `role="alert"` — screen reader announces the error immediately.

## Related

- See also: [Forms → Controlled vs Uncontrolled Inputs](#/codex/forms-controlled-vs-uncontrolled) for React input patterns.
- See also: [Accessibility → ARIA Patterns and Anti-Patterns](#/codex/accessibility-aria-patterns-and-anti-patterns) for form accessibility.
- See also: [TypeScript → Narrowing and Control Flow](#/codex/typescript-narrowing-and-control-flow) for type-safe validation results.

## Sources

- [Zod docs](https://zod.dev/)
- [React Hook Form — Validation](https://react-hook-form.com/docs/useform#resolver)
- [MDN — Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [web.dev — Sign-in form best practices](https://web.dev/articles/sign-in-form-best-practices)
