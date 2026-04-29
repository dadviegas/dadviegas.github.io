# Reconciliation & Keys

React's reconciler decides what changed between renders and applies the minimal set of DOM mutations. Getting this wrong — especially in lists — causes subtle bugs ranging from inputs keeping the wrong state to animations triggering on the wrong element.

## How the diff algorithm works

React compares the previous and next virtual DOM trees element by element. It makes two assumptions to keep this O(n) instead of O(n³):

1. **Different types produce different trees.** If `<div>` becomes `<section>`, React unmounts the div subtree entirely and mounts the section subtree fresh — no attempt to reconcile children.
2. **Keys identify list children.** Without keys, React matches children by index. With keys, React matches by key value.

```tsx
// ❌ Type change — full unmount/remount of the subtree
{isExpanded ? <div className="panel">{content}</div> : <section className="panel">{content}</section>}

// ✅ Same type — React reuses the DOM node and just updates attributes
{isExpanded ? <div className="panel expanded">{content}</div> : <div className="panel">{content}</div>}
```

## Key stability in lists

```tsx
// ❌ Index as key — removing or reordering items confuses reconciliation
{items.map((item, index) => (
  <CommentRow key={index} comment={item} />
))}

// What happens when item[0] is deleted:
// React sees key=0 still exists → reuses the DOM node for item[1]
// Controlled inputs keep their value from the old item[0]

// ✅ Stable, unique key from the data
{items.map((item) => (
  <CommentRow key={item.id} comment={item} />
))}
```

Index keys are safe only when the list is static (never reordered, filtered, or had items removed/added in the middle).

## `key` as a reset mechanism

`key` is not only for lists — it's the React way to force a component to remount from scratch:

```tsx
// Reset the form when the selected customer changes
<CustomerForm key={selectedCustomerId} customerId={selectedCustomerId} />
```

When `selectedCustomerId` changes, React sees a different `key` and unmounts the old `CustomerForm` completely, then mounts a fresh one. All internal state (including uncontrolled inputs) is reset. This is often cleaner than a `useEffect` that resets state fields manually.

## Common anti-patterns

**Generating keys at render time:**

```tsx
// ❌ New key on every render — every item remounts every time the list re-renders
{items.map((item) => (
  <ItemRow key={Math.random()} item={item} />
))}
```

**Using index keys with filtering:**

```tsx
const filtered = todos.filter((t) => !t.done);

// ❌ After filtering, indices shift — wrong components keep their local state
{filtered.map((todo, index) => <TodoRow key={index} todo={todo} />)}
```

**Missing keys on fragment children:**

```tsx
// ❌ Each fragment needs a key when in a list
{items.flatMap((item) => [
  <dt>{item.term}</dt>,
  <dd>{item.definition}</dd>,
])}

// ✅ Key on the fragment
{items.map((item) => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </React.Fragment>
))}
```

## Related

- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for how component identity affects hook state.
- See also: [React → Memoization: When & Why](#/codex/react-memoization-when-and-why) for how reconciliation interacts with `React.memo`.
