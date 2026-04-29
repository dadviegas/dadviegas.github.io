# Senior and Staff Engineer Mindset

The gap between a senior engineer and a staff engineer isn't about knowing more syntax. It's about operating at a different scope: from shipping features to enabling a team to ship features, from solving problems to preventing entire classes of problems.

## What changes at the senior level

A senior engineer is independently effective. Given a task, they break it down, identify risks, and ship it well without close supervision. They write code that other engineers can maintain. They ask good questions before starting.

The core skills:
- **Technical clarity** — writing code that the next engineer (including future you) can understand six months later without asking. Variable names, function scope, module boundaries.
- **Judgment under ambiguity** — making reasonable decisions when specs are incomplete rather than waiting for perfect information.
- **Skepticism about complexity** — resisting the urge to build a full abstraction when a `useState` would do.
- **Testing as a natural part of delivery** — not a separate phase added at the end.

## What changes at the staff level

Staff engineers work across teams and influence direction. The visible output shifts from code to systems, processes, and other engineers' trajectories.

The mental model shift: **from solving problems to preventing classes of problems**.

A senior engineer fixes the null pointer dereference. A staff engineer adds the ESLint rule that prevents null pointer dereferences across the codebase. A senior engineer writes the migration guide. A staff engineer identifies that migrations will keep happening and builds a codemod tool.

**Three modes of staff impact:**

1. **Technical strategy** — making architectural decisions that will constrain or enable the codebase for years. Module Federation adoption, monorepo migration, design system investment. These decisions are reversible in principle but very costly to reverse in practice.

2. **Raising the floor** — improving the experience for every engineer through shared tooling, docs, and conventions. A staff engineer who writes the `createConfig` factory so apps don't each maintain their own webpack config is unblocking every future app developer.

3. **Enabling others** — code review that teaches, not just approves. Architecture feedback that explains the reasoning, not just the verdict. A staff engineer's most leveraged output is often helping three senior engineers each do their best work.

## The "what problem are we actually solving" habit

Before any substantial implementation, write down in one sentence what problem the change is solving. Then ask: is this the simplest possible solution to that problem?

```
Problem: finance widgets re-render too often, causing jank on the home dashboard.

Naive solution: wrap every widget component in React.memo.

Better question: WHY are they re-rendering? Profile first. If the re-renders
are caused by parent state changes that are unrelated to the widget, the fix
is moving that state down — not wrapping every component in a memoization
wrapper that trades heap allocations for render savings.
```

The habit prevents the most common senior-engineer trap: applying a known technique to a problem without verifying the technique matches the actual root cause.

## When NOT to abstract

Abstractions have a cost: they require understanding before they can be modified. A premature abstraction can be harder to work with than duplicated code.

The rule for extracting:
- **Duplicated code** — if two places do the same thing, note it. If three do, extract.
- **Stable interface** — if the right interface is unclear (you've only seen one use case), you'll build the wrong abstraction. Wait for the second or third use case to reveal the natural shape.
- **Documented decision** — when you abstract, add a comment explaining what it abstracts and why. Future engineers can't see the alternatives you considered.

```ts
// One component does this — don't abstract yet
function FinanceWidget() {
  const accent = '#7fb77e';
  // …
}

// Two do — make a note
function FinanceWidget() { const accent = '#7fb77e'; /* TODO: extract? */ }
function FormaWidget()   { const accent = '#7fb77e'; /* TODO: extract? */ }

// Three do — extract
const SUITE_ACCENTS: Record<string, string> = {
  finance: '#7fb77e',
  forma: '#7fb77e',
  daily: '#34d399',
};
// AND: document in docs/widgets.md that useAppAccent() is the accessor
```

## Communicating tradeoffs

Every technical decision involves tradeoffs. Staff-level communication names the tradeoffs explicitly rather than advocating for one solution as obviously correct.

Format for technical decisions:
1. **What we're deciding** — one sentence.
2. **Options considered** — brief description of 2–3 alternatives.
3. **Tradeoffs** — what each option gives up. Not "Option A is better" — "Option A has lower runtime cost but higher bundle size."
4. **Recommendation** — which option and why, given the current constraints.

This format forces you to consider alternatives you might not prefer and makes the reasoning auditable. When a decision turns out to be wrong six months later, the team can understand why it seemed right at the time.

## The "make it obvious" principle

The most maintainable code makes the correct path obvious and makes mistakes hard. This is different from making code "clever":

```ts
// ❌ Clever — saving two lines at the cost of understandability
const result = data?.expenses?.reduce((s, e) => e.reimbursable ? s + e.amount : s, 0) ?? 0;

// ✅ Obvious — readable without pausing to parse
const reimbursableExpenses = data?.expenses?.filter((e) => e.reimbursable) ?? [];
const totalReimbursable = reimbursableExpenses.reduce((sum, e) => sum + e.amount, 0);
```

"Make it obvious" scales: obvious function signatures, obvious module boundaries, obvious naming, obvious error messages. When the next engineer (who may be you in six months) reads the code, they should be able to understand not just what it does but why it's structured this way.

## On rewrites

The rewrite instinct is strong. An existing codebase accumulates decisions that made sense at the time but are now constraints. The rewrite promise: clean slate, no legacy debt.

The rewrite reality: by the time you finish, the requirements have changed, the new codebase has accumulated its own debt, and you've lost six months of compounding product improvements.

The alternative: incremental improvement guided by a target state. Document what the code should look like. Each PR moves it a step closer. After twelve months, you have something close to the target without the disruption.

The exception: when the architecture is fundamentally wrong in a way that can't be incremented toward the target (wrong data model, wrong consistency semantics). In that case, rewrite the specific layer with the wrong foundation, not the entire system.

## Related

- See also: [Architecture → Component Composition Over Props](#/codex/architecture-component-composition-over-props) for the "simplest correct design" principle applied to component APIs.
- See also: [Architecture → Design Systems and Tokens](#/codex/architecture-design-systems-and-tokens) for "raise the floor" thinking applied to UI primitives.

## Sources

- [Tanya Reilly — The Staff Engineer's Path](https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/)
- [Will Larson — Staff Engineer](https://staffeng.com/book)
- [Dan Luu — Normalization of deviance](https://danluu.com/wat/)
- [Martin Fowler — Software Architecture Guide](https://martinfowler.com/architecture/)
