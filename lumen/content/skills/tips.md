# Tips & Anti-Patterns

A grab-bag of the lessons that come from actually living with skills for a while.

## Tips

### 1. Lead with the strongest constraint

The first sentence of your skill body sets the frame. Lead with the *hard rule*:

> **Always run typecheck before reporting success.** [Then list steps.]

The model weights early instructions more.

### 2. Show the output before the steps

If you can describe the output exactly — even paste a sample — the model will reverse-engineer the steps. Output spec > algorithm.

### 3. Use "Do / Don't" pairs

```markdown
## Examples

DO: "Added a dark-mode toggle to Settings."
DON'T: "Refactored ThemeContext (commit a3b2c1)."
```

Two examples beat ten paragraphs of theory.

### 4. Reference team docs with `@`

If your skill needs the team's full code-review checklist, don't paste it. Reference it:

```markdown
Follow the checklist at @docs/code-review.md.
```

The harness will pull that file in. Keeps the skill body lean.

### 5. Use `allowed-tools` to fail safe

A `read-only` skill should be `allowed-tools: Read, Bash(git diff*), Bash(git log*)`. Then there's no chance of an accidental edit during exploration.

### 6. Make skills accept arguments

`$1`, `$2`, … capture positional args. Use them. `/scaffold-component Toggle` is better than typing the component name into a follow-up turn.

### 7. Keep one example file per skill

`examples/sample-output.md` shows what "done" looks like. Reference it from the body. Future you, six months later, will read the example before the spec.

### 8. Version-control all team skills

Skills go in `.claude/skills/` next to the code. Treat changes like any code change: PR review, CI check, tests if the skill calls scripts.

### 9. Prefer composition over mega-skills

A `release` mega-skill that bumps version, generates changelog, opens PR, and runs CI is too much. Split into `bump-version`, `changelog`, `pr`. Compose by chaining: `/bump-version && /changelog && /pr`.

### 10. Iterate from real failures

After every use, ask: *"What did I have to manually fix?"* That fix belongs in the skill. Three iterations from real use beats ten iterations from imagination.

## Anti-patterns

### ❌ Vague descriptions

```yaml
description: Helps with code-related tasks.
```

The model can't decide when to fire. This skill never gets used.

### ❌ Missing anti-triggers

A skill that fires too often is worse than one that doesn't fire enough — you fight it instead of using it. Always specify what *not* to fire on.

### ❌ Multi-purpose mega-skills

A skill that does PR review *and* test scaffolding *and* changelog *and* dependency upgrades is a slash command, not a skill. Split.

### ❌ Skills that depend on prior context

```
Continue from where we left off in the prior session.
```

Skills run with their own context window. There is no prior session. Spell out the inputs.

### ❌ Skills that try to be agentic without saying so

A skill that loops, retries, calls subagents — without declaring it — surprises the user. State up front: *"This skill spawns N subagents in parallel."*

### ❌ Hardcoding paths to `/Users/me/...`

Use repo-relative paths. Skills get committed.

### ❌ Skills that ignore your conventions

The whole point of a skill is to encode your team's way of doing things. If your skill scaffolds Tailwind classes when your codebase is Emotion, the skill is a liability.

### ❌ Letting skills grow

A `SKILL.md` longer than 200 lines is doing too much. Split. Refactor. Reference external docs.

### ❌ Building skills before you've done the task by hand

You don't know what the recipe is yet. **Do it three times manually first.** Then skill the third version.

## Practice

Open every skill in `.claude/skills/` (yours and your team's). Score each: *"Would I install this if I saw it for the first time?"* Fix or delete the ones below 4/5.
