# Skills Drills

The fastest way to learn skills is to write 5 in a week. Here are 5.

## Drill 1 — `/changelog`

Build the skill from the "Create Your First Skill" page. Use it on a real branch. Iterate three times based on what you have to fix by hand.

**Pass:** running `/changelog` produces a release note you'd paste into a PR with at most one tiny edit.

## Drill 2 — `/scaffold-component`

```yaml
---
name: scaffold-component
description: Scaffold a new React component (file + test + index) matching the conventions in packages/ui/. Trigger when the user says "new component", "scaffold X", "create the X component". Skip if the component already exists.
---
```

Body: read references, generate three files, stop. Use it tomorrow.

**Pass:** the scaffolded component matches your team's style without manual edits.

## Drill 3 — `/audit-deps`

A skill that runs `pnpm outdated`, reads each major bump's CHANGELOG, and outputs a markdown table of breaking changes vs. safe updates.

**Pass:** running the skill saves you ≥ 30 minutes vs. doing it by hand.

## Drill 4 — `/incident-recap`

A skill that takes a Slack thread URL (or pasted thread text) + a time window, reads the relevant git log, and drafts a post-mortem in your team's template.

```yaml
---
name: incident-recap
description: Draft a post-mortem from a Slack thread + git log. Trigger when the user mentions "post-mortem", "incident recap", "RCA". Asks for the thread URL if not provided.
---
```

**Pass:** the draft has the structure right (timeline, root cause, contributing factors, action items) and only needs editing for tone, not structure.

## Drill 5 — `/wakeup`

A personal skill (`~/.claude/skills/wakeup/`) that:

1. Reads `git log --since=yesterday --author=$(git config user.email)`.
2. Reads any open PRs by you.
3. Reads notes you keep in `~/notes/today.md`.
4. Outputs a 5-line plan for today.

**Pass:** running it on Monday morning replaces 15 minutes of "what was I doing on Friday."

## Drill 6 — Audit your own skills

Open every skill in `.claude/skills/` (yours and your team's). For each, score:

- Discoverable? (1–5)
- Specific? (1–5)
- Self-contained? (1–5)
- Composable? (1–5)
- Maintained? (1–5)

Anything below 4/5 — fix or delete.

## Drill 7 — Convert a slash command into a skill

Pick one of your `.claude/commands/*.md` files. Promote it to a skill: structured frontmatter, examples folder, supporting docs, allowed-tools. Notice the difference in robustness.

## Drill 8 — Find an existing skill

Use the `find-skills` skill (built-in) to discover a public skill that matches a pain point. Install it. Use it twice. Decide if it earns its slot.

## Drill 9 — Add a skill to your repo

Pick a skill from the **Must-Know** page. Build it. Commit it to your repo's `.claude/skills/`. Mention it in `CLAUDE.md`. Now your whole team has it.

## Drill 10 — Skill spec, no body

Write a skill's frontmatter (`name`, `description`) for one routine you do every week — *without* writing the body yet. Make the description so good that the skill could be picked from intent alone. *Then* fill in the body.

This drill exists to teach you that the description is more than 50% of the value.
