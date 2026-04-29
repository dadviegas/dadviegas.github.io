# Recipe — Morning standup digest

A `/wakeup` skill that, every Monday morning, gives you a 5-line summary of what you did last week, what's still in flight, and the one thing you should do today.

## What you'll build

```
$ /wakeup

Last week:
  • Shipped Forma weekly digest (PR #142, merged Thu)
  • Started Lumen blog scaffolding — 25 of ~50 pages drafted
  • Reviewed 4 PRs

In flight:
  • Lumen content for Skills + Drills sections (last touched Fri)
  • PR #138 has a comment from Joana waiting for response

Today:
  → Finish Drills section (5 pages). Smallest blocker on the critical path.

Heads-up: 2 PRs assigned for review since Fri.
```

## Why this is the highest-leverage skill on this site

You'll run it every workday. If it saves 10 minutes of "wait, where was I?" — that's 40 hours a year.

## The skill

`~/.claude/skills/wakeup/SKILL.md` (personal, not committed):

```markdown
---
name: wakeup
description: |
  Morning briefing — last week's git activity, in-flight branches, open PRs assigned
  to me, and the single most important thing to do today.
  TRIGGER on: "/wakeup", "morning briefing", "what was I doing".
allowed-tools: Bash, Read
---

# Morning briefing

Generate a focused, honest morning briefing.

## Steps

1. Run `git log --since='7 days ago' --author=$(git config user.email) --pretty=format:'%h %s (%cr)'`
   in each of the user's primary repos (~/work/*).
2. Run `git branch -a --sort=-committerdate | head -20` to find recent branches.
3. Run `gh pr list --author @me --state open` for the user's open PRs.
4. Run `gh pr list --search 'review-requested:@me state:open'` for incoming reviews.
5. Read ~/notes/today.md if it exists (carry-over notes).

## Output

Markdown, max ~250 words, exactly this shape:

  Last week:
    • <2-4 bullets, one line each, only material work>

  In flight:
    • <branch / PR + last activity timestamp>
    • <…>

  Today:
    → <ONE thing, the smallest unblocking step on the critical path>

  Heads-up:
    <0-2 lines: review queue, blockers, deadlines you should know about>

Rules:
- No work-novel; "shipped X" not "did extensive work on X".
- The "Today" line is ONE thing. Not five. Not a checklist.
- If nothing's in flight, say so. Don't pad.
- Past tense for last week, present for in-flight, imperative for today.
```

## The pattern this teaches

- **Personal vs team skills.** This one lives in `~/.claude/skills/`, not the repo. Your daily rhythm is yours.
- **Read-only tools** — `Bash`, `Read`, no write. The skill informs; you decide.
- **Hard structural template.** "Exactly this shape" prevents prose-novel output.
- **One thing, not a checklist.** The single most useful constraint on a morning briefing is "one priority."
- **Past / present / imperative tense rule.** Sounds trivial; the output reads twice as clean.

## Schedule it

Pair with the `schedule` skill (built-in) so it runs automatically Monday at 09:00 and pings you with the briefing.

```
/schedule "wakeup briefing" 0 9 * * 1
```

(Cron: minute=0, hour=9, every day-of-week=Monday.)

## Variations

- **Friday wrap-up:** invert the prompt — "what got done this week, what's the weekend reading queue, what's at risk."
- **End of day:** "5 lines: what shipped, what's left for tomorrow morning, any debt incurred."
- **Per-project:** scope the git log + PR list to one repo. Useful when you have multiple unrelated projects.

## Practice

Build it. Run it tomorrow morning. Honest test: did it tell you anything you didn't already know? If yes, keep iterating the prompt to surface more signal. If no, you've nailed it — the skill replaces 10 minutes of `git log` poking.
