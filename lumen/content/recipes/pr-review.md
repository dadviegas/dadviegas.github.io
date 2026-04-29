# Recipe — PR review automation

A skill that reviews the current branch like a senior engineer. Cite file:line, group by severity, propose patches.

## What you'll build

```bash
$ /review-pr

VERDICT: changes-requested

[CRIT] src/auth/login.ts:42 — SQL injection: raw string concat in query.
       Suggested: parameterise with `db.query(sql, [email])`.
[HIGH] src/auth/login.ts:78 — No rate-limit on login endpoint.
[MED]  src/utils/range.ts:15 — Off-by-one when `start === end`.
[LOW]  src/components/Header.tsx:8 — Hardcoded color; use theme.colors.accent.

PRAISE: tests for the rate-limit middleware are excellent.
```

## The skill

`.claude/skills/review-pr/SKILL.md`:

```markdown
---
name: review-pr
description: |
  Senior code review of the current branch (vs main). Cite file:line.
  TRIGGER on: "review", "PR review", "code review", "what's wrong with this branch".
  SKIP for: refactors, simple fixes, single-line edits — those should be done directly.
allowed-tools: Bash, Read
---

# Senior PR review

You are reviewing the current branch as a senior engineer who must approve
this merge to main.

## Context-gathering

1. Run `git log --oneline main..HEAD` to see the change set.
2. Run `git diff --stat main...HEAD` for breadth.
3. Run `git diff main...HEAD` to see the full diff.
4. For non-trivial files, `Read` them in full to understand context the diff lacks.

## Audit dimensions

For every change, evaluate:

1. **Correctness.** Edge cases, error paths, off-by-one, null/empty handling.
2. **Security.** Injection, auth bypass, secrets, unsafe deserialisation, prototype pollution.
3. **Concurrency.** Race conditions, missing locks, async ordering.
4. **Performance.** O(n²) over user data, missing indices, layout thrash, blocking I/O.
5. **Tests.** Are new behaviours covered? Will refactors regress silently?
6. **Conventions.** Theme tokens, translations, file structure, naming.
7. **Scope creep.** Did this PR touch things outside the stated goal?
8. **Reversibility.** Migrations, breaking changes, deprecations.

## Output

Markdown. Group findings by severity. **Cite file:line for every finding.**

Verdict (one of): SHIP / CHANGES_REQUESTED / BLOCK

[CRIT]    must fix before merge
[HIGH]    should fix before merge
[MED]     fix soon
[LOW]     polish
[OPTIONAL] nice-to-have

For each finding, propose the smallest patch that fixes it.

End with a `PRAISE:` line if anything is genuinely well done. No fluff.
```

## Why this skill works

- **Description has trigger and anti-trigger.** The model picks it up only when you actually want a review.
- **Numbered audit dimensions.** Forces the model to think across the whole space, not just the obvious bug.
- **`allowed-tools` whitelist.** No accidental edits during review.
- **Severity grouping.** Reviewable in 30 seconds; you act on CRIT/HIGH first.
- **Patches, not vibes.** "Fix it like this" beats "consider improving."

## Compose with `/changelog`

After the review passes, run `/changelog` (from `Skills → Create Your First`) to draft the PR body. Two skills, full PR loop, ten seconds of typing.

## CI variant — agent-as-reviewer

For repos that want this on every PR, wrap the same prompt in a GitHub Action:

```yaml
- name: Claude review
  run: |
    git fetch origin main
    npx tsx scripts/ai-review.ts > review.md
- uses: peter-evans/create-or-update-comment@v3
  with:
    issue-number: ${{ github.event.pull_request.number }}
    body-path: review.md
```

`scripts/ai-review.ts` runs the same prompt via the API, posts as a PR comment.

## Anti-patterns

- **Vague descriptions** ("Helps with code reviews") — skill never fires.
- **No `allowed-tools`** — model can accidentally edit "while reviewing".
- **No file:line requirement** — reviews become unactionable prose.
- **Skipping the praise line** — reviewers who only criticise burn out the team.

## Practice

Build it. Run on a real branch you wrote this week. Honest test: would the review have caught the last bug you shipped?
