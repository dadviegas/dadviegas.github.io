# Create Your First Skill

We'll build a real, useful skill from scratch in 10 minutes: **`/changelog`** — generates a clean release-note bullet list from the diff on the current branch.

## 1. Pick something you do repeatedly

Good skill candidates: PR descriptions, changelog entries, post-mortems, security audits, dependency upgrades, weekly digests, on-call triage. The bar: **you've done it 3+ times by hand.**

## 2. Scaffold the file

```bash
mkdir -p .claude/skills/changelog
```

Create `.claude/skills/changelog/SKILL.md`:

```markdown
---
name: changelog
description: Generate a user-facing changelog from the diff on the current branch. Trigger when the user asks for "release notes", "changelog", or "what to put in the PR description". Skip for tiny one-line bug fixes.
---

# Generate a changelog

You are drafting a customer-visible release note from the changes on the current branch.

## Steps

1. Run `git log --oneline main..HEAD` to see commits.
2. Run `git diff --stat main...HEAD` for the breadth.
3. Skim the actual diff for the 3–5 most user-visible changes.
4. Group changes into:
   - **New** (added features, new APIs, new screens)
   - **Improved** (better UX, faster, smaller, prettier)
   - **Fixed** (real bugs the user could hit)
   - **Internal** (refactors, only mention if user-visible side effects)

## Output

Markdown. One line per item. Plain language. Past tense. No commit hashes.
Do not invent items not in the diff.

## Examples

GOOD:
- Added a dark-mode toggle to Settings.
- Fixed a crash when uploading PDFs over 50MB.

BAD:
- Refactored ThemeContext (commit a3b2c1).
- Improved code quality.   ← vague, not user-facing
```

## 3. Try it

```
> /changelog
```

Claude reads the file, runs the steps, outputs the changelog. Read the output. **Now iterate.**

## 4. Iterate (this is the real work)

Run it on three different branches. Each time you have to "fix" the output by hand, the fix belongs back in the `SKILL.md`. After three iterations:

- Did Claude over-include internal refactors? Add a clearer "skip" rule in the description.
- Did it pick uninspiring verbs? Add 5 examples of good past-tense phrasings.
- Did it miss a category? Add it.

A skill is a **living spec.** Treat it that way.

## 5. Anatomy of the metadata

```yaml
---
name: changelog                            # filesystem-safe id
description: <when to fire | when to skip> # the matching signal
allowed-tools: Bash, Read                  # optional whitelist
---
```

The `description` does double duty:

1. Helps the model match user intent to this skill.
2. Documents the skill for humans skimming `.claude/skills/`.

A great description has both **trigger signals** ("when the user asks for X") and **anti-signals** ("skip when Y").

## Pattern: skills with arguments

```markdown
---
name: scaffold-component
description: Scaffold a new React component. Trigger when the user says "new component" or "scaffold X".
---

# Scaffold a new component

The component name is `$1`. The props shape is `$2` (may be empty).

1. Create `packages/ui/src/$1/$1.tsx` following `packages/ui/src/Button/`.
2. Create `packages/ui/src/$1/$1.test.tsx` with one happy-path test.
...
```

`$1`, `$2` are positional arguments captured from the invocation.

## 6. Share it

Commit `.claude/skills/changelog/`. Now your whole team has it. Future you, six months later, doesn't have to re-derive the recipe.

## Practice

Build the `/changelog` skill above. Use it on a real branch. If you don't already have a branch, contrive one with two real commits. Iterate the skill until the output is something you'd paste into a PR without edits.
