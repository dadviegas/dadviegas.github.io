# Claude — Best Practices

Getting the most out of Claude for software engineering, architecture, and day-to-day development work.

---

## General Principles

### Give context, not just commands

Claude performs significantly better when it understands the **why** behind a request.

| Instead of | Try |
|-----------|-----|
| "Fix this bug" | "This function returns undefined when the array is empty — fix it without changing the return type" |
| "Write tests" | "Write unit tests for `parseNav()`. It should handle missing `file`, nested `children`, and empty arrays" |
| "Refactor this" | "Extract the fetch logic into a custom hook. Keep the component dumb — no business logic in JSX" |

### Be specific about constraints

```
- Don't change the function signature
- Keep it under 20 lines
- No new dependencies
- Must work in Node 18
```

### Point to files and line numbers

> "Look at `apps/markdown/src/components/MarkdownViewer.tsx:98` — the fetch uses a relative URL which breaks in federated contexts"

Claude can reason about your actual code much better than hypothetical code.

---

## Working with Code

### Show the full error

Always paste the **full stack trace**, not a summary. The most useful information is often buried in the middle.

### Include the relevant types

If you're asking about a TypeScript issue, include the interfaces and types involved — not just the implementation.

### Ask for one thing at a time

Claude does better with focused requests. Instead of "refactor, add tests, and document this file", break it into three separate requests.

### Iteration beats perfection

Get a working draft first, then refine:
1. "Write a first draft of X"
2. "Now add error handling for Y"
3. "Make the types stricter"
4. "Add tests for edge cases"

---

## Code Review

Use Claude as a first-pass reviewer before human review:

```
Review this diff for:
- Security issues (XSS, injection, exposed secrets)
- Edge cases the tests don't cover
- TypeScript type safety gaps
- Performance issues with large inputs
```

---

## Architecture Decisions

Claude works well as a thinking partner for architecture:

```
I'm deciding between these two approaches for [problem]:

Option A: [description]
Option B: [description]

My constraints:
- Must support X
- Can't depend on Y
- Team is unfamiliar with Z

What are the tradeoffs?
```

---

## Claude Code (CLI) Tips

### CLAUDE.md

Add a `CLAUDE.md` at the repo root to give Claude persistent context about your project — conventions, testing approach, forbidden patterns, deployment process.

### Use `/memory` sparingly

Save preferences that apply across sessions: code style, things to avoid, team conventions. Don't save things already in `CLAUDE.md` or derivable from the code.

### Let it explore before acting

For unfamiliar codebases, say "explore the codebase and explain how X works before making any changes". Claude will build a mental model first.

### Break large tasks into steps

For large features, use `EnterPlanMode` / agree on a plan before any code is written. Catch misunderstandings early.

---

## Things Claude Does Well

- Explaining unfamiliar code or libraries
- Writing boilerplate (configs, types, test scaffolding)
- Finding bugs in logic with a clear description
- Translating between languages/frameworks
- Writing clear commit messages and PR descriptions
- Migrating APIs (e.g., updating to a new library version)

## Things to Double-Check

- Generated regex — always test with edge cases
- Security-sensitive code (auth, crypto, input validation)
- Performance-critical paths — verify with actual benchmarks
- Anything interacting with external APIs — test against real endpoints
