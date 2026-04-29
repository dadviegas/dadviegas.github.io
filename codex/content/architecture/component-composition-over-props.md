# Component Composition Over Props

The prop-drilling problem starts small: a button needs to know whether it's disabled, a card needs to show a different icon, a list needs a custom empty state. The naive fix is adding props. The right fix — most of the time — is composition.

## The prop-drilling spiral

```tsx
// ❌ After 3 months of feature additions — 12 boolean props on one component
function ExpenseRow({
  expense,
  showCheckbox,
  showDeleteButton,
  showReimbursableTag,
  showMemberAvatar,
  showSplitIcon,
  showCategory,
  compact,
  selected,
  onSelect,
  onDelete,
  onReimburse,
}: ExpenseRowProps) {
  // 150 lines of branching render logic
}
```

This component becomes a god-component: impossible to understand in isolation, untestable without fabricating a full props object, and hard to extend without touching the component itself.

## Compound components — the composition pattern

Instead of a list of boolean props, expose slots that callers fill:

```tsx
// ✅ Caller controls the content — the component controls the layout
function ExpenseRow({ expense, leading, trailing, children }: ExpenseRowProps) {
  return (
    <Row>
      {leading}
      <RowBody>
        <RowTitle>{expense.description}</RowTitle>
        <RowMeta>{children}</RowMeta>
      </RowBody>
      {trailing}
    </Row>
  );
}

// Usage — compact read-only view
<ExpenseRow expense={expense} />

// Usage — list view with checkbox and delete
<ExpenseRow
  expense={expense}
  leading={<Checkbox checked={selected} onChange={onToggle} />}
  trailing={<IconButton onClick={onDelete}><Icon name="trash" /></IconButton>}
>
  <CategoryBadge category={expense.categoryId} />
</ExpenseRow>

// Usage — member view with avatar
<ExpenseRow
  expense={expense}
  leading={<MemberAvatar member={member} />}
  trailing={<ReimbursableTag />}
/>
```

The component has no knowledge of checkboxes, delete buttons, or avatars. It provides the structure; callers provide the content.

## Children as a composition slot

`children` is the simplest slot. When a component's content varies but its chrome stays consistent, `children` avoids the need for any content-related props:

```tsx
// ❌ Props for every content variation
function WidgetShell({ title, content, footer, hasError, errorMessage }: Props) {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      {hasError ? <ErrorState message={errorMessage} /> : content}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

// ✅ Composition — caller decides what fills each zone
function WidgetShell({ title, accessory, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <span>{title}</span>
        {accessory}
      </CardHeader>
      {children}
    </Card>
  );
}

// Error state is just children too
<WidgetShell title="Finance">
  <ErrorState message="Couldn't load data" />
</WidgetShell>

<WidgetShell title="Finance" accessory={<Badge tone="live">LIVE</Badge>}>
  <MetricRow label="Weekly spend" value="€234" />
</WidgetShell>
```

## Render props

Render props pass a function as a prop, letting the consumer control rendering while the component controls behavior:

```tsx
// The Dropdown controls open/close logic; the caller controls trigger rendering
function Dropdown({ trigger, children }: {
  trigger: (isOpen: boolean) => React.ReactNode;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen((v) => !v)}>
        {trigger(isOpen)}
      </button>
      {isOpen && <DropdownMenu>{children}</DropdownMenu>}
    </div>
  );
}

// Caller renders the trigger with access to open state
<Dropdown
  trigger={(isOpen) => (
    <span>Options {isOpen ? '▲' : '▼'}</span>
  )}
>
  <DropdownItem>Edit</DropdownItem>
  <DropdownItem>Delete</DropdownItem>
</Dropdown>
```

## When props ARE the right choice

Not everything should be a slot. Props are appropriate for:
- Primitive values that drive layout decisions (`size: 'sm' | 'md' | 'lg'`, `align: 'left' | 'right'`)
- Callbacks that the parent needs to respond to (`onSubmit`, `onClose`)
- Data that is truly just data (`label: string`, `count: number`)
- Accessibility attributes that must be passed to the underlying element

The heuristic: if the prop is configuring what the component *looks like*, it's probably a layout prop (fine). If it's configuring what the component *contains*, it's probably better as a slot.

## Context for deep injection

When a value needs to reach many components in a subtree without passing through every intermediate layer, Context is the right tool:

```tsx
// ✅ Locale flows through the whole tree via Context — no prop threading
const LocaleContext = createContext<Locale>('en');

function App() {
  const [locale, setLocale] = useState<Locale>('en');
  return (
    <LocaleContext.Provider value={locale}>
      <Dashboard />  {/* doesn't need locale as a prop */}
    </LocaleContext.Provider>
  );
}

function ExpenseRow() {
  const locale = useContext(LocaleContext);  // reads without prop drilling
  return <span>{formatAmount(expense.amount, locale)}</span>;
}
```

Context is for values that are genuinely cross-cutting — not an excuse to avoid defining component interfaces.

## The 3-prop rule

Before adding a fourth or fifth prop to a component, ask: is this component doing too much? Often the right answer is to split:

- `ExpenseRow` for display
- `SelectableExpenseRow` for selection behavior
- `EditableExpenseRow` for edit/delete

Three focused components with 3 props each is better than one component with 12.

## Related

- See also: [Architecture → Design Systems and Tokens](#/codex/architecture-design-systems-and-tokens) for when to encode component variants as tokens vs. props vs. composition.
- See also: [React → Context Patterns](#/codex/react-context-patterns) for the Context-based composition variant and its re-render implications.

## Sources

- [React docs — Composition vs Inheritance](https://legacy.reactjs.org/docs/composition-vs-inheritance.html)
- [React docs — Passing JSX as children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [Kent C. Dodds — Inversion of Control](https://kentcdodds.com/blog/inversion-of-control)
