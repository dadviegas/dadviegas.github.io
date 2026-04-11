# Prompt Tips for Claude

Patterns and templates that consistently produce better results.

---

## The Golden Rules

1. **Role + Task + Context + Constraint** — most effective prompts have all four
2. **Show, don't tell** — include the actual code, error, or file rather than describing it
3. **One ask per message** — compound requests dilute focus
4. **Iterate** — a good first response is a starting point, not a final answer

---

## Prompt Templates

### Debugging

```
I'm getting this error:

[paste full error + stack trace]

Relevant code:

[paste the function/component]

What I've already tried:
- [thing 1]
- [thing 2]

The error only happens when [condition].
```

### Code Review

```
Review this code for:
- Correctness (edge cases, off-by-one, null handling)
- TypeScript type safety
- Performance with large inputs
- Security (if applicable)

Don't suggest style changes unless they affect correctness.

[paste code]
```

### Writing a Feature

```
Add [feature] to [file/component].

Requirements:
- [requirement 1]
- [requirement 2]

Constraints:
- Don't change the public API
- No new dependencies
- Must be tested

Existing related code for context:
[paste relevant snippets]
```

### Explaining Code

```
Explain what this code does. I'm familiar with TypeScript and React
but haven't worked with [webpack Module Federation / Emotion / etc.] before.
Focus on the parts that would surprise a developer new to this pattern.

[paste code]
```

### Refactoring

```
Refactor this function. Goals:
- [goal 1, e.g. "extract the fetch logic so it can be tested in isolation"]
- [goal 2]

Do NOT:
- Change the function signature
- Add new dependencies
- Change behavior

[paste code]
```

### Writing Tests

```
Write tests for [function/component].

Cover:
- Happy path
- [edge case 1]
- [edge case 2]
- Error handling

Use [Vitest / Jest / React Testing Library].
The existing test file for reference:
[paste existing test file if any]
```

---

## Useful Modifiers

Append these to any prompt to shape the response:

| Modifier | Effect |
|---------|--------|
| `Be concise. No explanations unless I ask.` | Reduces prose, gets straight to code |
| `Think step by step before answering.` | Better for logic-heavy problems |
| `Show only the changed lines, not the full file.` | Saves context space |
| `Don't refactor anything I didn't ask about.` | Keeps scope tight |
| `Explain your reasoning briefly after the code.` | Useful for learning |
| `If you're unsure, say so instead of guessing.` | Reduces hallucination |
| `List any assumptions you made.` | Surfaces hidden decisions |

---

## What to Avoid

### Vague requests
> "Make this better" — better how? Performance? Readability? Type safety?

### Describing code instead of showing it
> "I have a function that takes an array and..." — just paste the function.

### Asking Claude to guess your stack
> "Write a hook for data fetching" — specify React/SWR/React Query/plain fetch.

### Multi-step compound asks
> "Fix the bug, add tests, write a PR description, and update the README" — do these one at a time.

---

## Prompts for Specific Tasks

### Generate a commit message
```
Write a conventional commit message for this diff.
Use the format: type(scope): description
Types: feat, fix, refactor, chore, docs, test

[paste diff or describe changes]
```

### Write a PR description
```
Write a GitHub PR description for these changes.
Include: Summary (bullet points), what was changed and why, how to test.
Audience: engineers unfamiliar with this area.

Changes: [describe or paste diff]
```

### Understand a library
```
I'm using [library name] for the first time. Explain:
1. The core mental model (1-2 paragraphs)
2. The 3 most important APIs
3. The most common mistake beginners make

I'm coming from [familiar technology] background.
```

### Migration guide
```
I'm migrating from [old] to [new].
Show me the equivalent of these patterns:

Old:
[paste old code patterns]

Focus on the differences in mental model, not just syntax.
```
