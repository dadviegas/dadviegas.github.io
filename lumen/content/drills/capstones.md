# Capstone Projects

Pick **one**. Build it. Ship it. Until you've shipped one of these, all the prior reading is theatre.

## Capstone 1 — The personal CLI assistant

A `claude-helper` CLI you wire into your shell. It can:

- Summarise yesterday's git activity (`claude-helper recap`).
- Open the right Linear / Jira ticket for the current branch (`claude-helper ticket`).
- Drop into an interactive Q&A about the current repo (`claude-helper ask "where is X?"`).
- Generate a commit message from staged changes (`claude-helper commit`).

**Stack:** Claude Agent SDK in TypeScript. Tools: Bash, Read, web (for ticket lookup). Permissions: read-only by default, write only on `commit` after approval.

**Pass:** you reach for `claude-helper` more than `git log` within a week.

## Capstone 2 — Repo-aware doc generator

Agent that, given a function or class name, generates a deep-dive markdown page:

- What it does
- Inputs / outputs / errors
- Call graph (who calls it, what it calls)
- Edge cases
- A 5-line worked example

Outputs into `docs/api/<name>.md`. Idempotent.

**Stack:** Agent SDK; tools: `read_file`, `grep`, `list_dir`. Cache the system prompt + tokens reference.

**Pass:** running it on 10 functions produces 10 pages a teammate would actually read.

## Capstone 3 — On-call triage bot

Connects to Sentry / your error monitoring. For each new error:

1. Fetches the stack trace.
2. Reads the relevant repo files via tools.
3. Forms 3 hypotheses.
4. Posts a Slack thread with the hypotheses + suggested first investigation.

**Stack:** Agent SDK + MCP (Slack, Sentry). Subagent for the hypothesis-forming step.

**Pass:** real on-calls spend less time orienting; their first step is the bot's top hypothesis.

## Capstone 4 — Design-review agent

Triggered on every PR that touches frontend code. Uses vision: takes a Storybook screenshot of the changed component before and after, asks Claude to spot regressions, comments on the PR.

**Stack:** GitHub Action → Storybook build → Puppeteer screenshot → Claude vision call → `gh pr comment`.

**Pass:** catches one real visual regression in its first month.

## Capstone 5 — Component-from-mock pipeline

Drag a Figma frame export onto a CLI. The CLI:

1. Sends the image to Claude vision.
2. Generates the React + Emotion code matching your design system.
3. Drops the file into `packages/ui/src/<Name>/`.
4. Runs Storybook + screenshots back.
5. Compares input vs output via vision again ("does this match?").

**Stack:** TypeScript, Sharp for image, Anthropic SDK, your local design tokens.

**Pass:** end-to-end, image → working Storybook story, in under 60 seconds.

## Capstone 6 — Skill-driven team toolkit

For your team's repo: build 5 production skills (`pr`, `changelog`, `review`, `triage`, `incident-recap`). Commit. Train one teammate to use them. Track which skills get used over a month.

**Pass:** ≥ 3 of the 5 skills are used by ≥ 2 people regularly.

## Capstone 7 — Eval suite for a critical prompt

Find your team's most important prompt (the LLM call running in production with the most volume). Build a 50-case eval set. Run it nightly in CI. Block PRs that regress the score.

**Stack:** Vitest or pytest, Anthropic SDK, your existing CI.

**Pass:** prevents one real regression in its first month.

## Capstone 8 — RAG over your docs

Vector-index your team's internal docs. Build a CLI that takes a question, retrieves the top-k chunks, and asks Claude with the chunks as context.

**Stack:** any embedding model, PGVector or Chroma, Anthropic SDK. Cache the system prompt + chunked context.

**Pass:** answers questions your team's docs *should* answer in a single shot, with citations.

## How to pick

| You want… | Pick |
|---|---|
| A daily-driver tool you'll keep using | Capstone 1 |
| To deliver value to your team | Capstone 6 or 3 |
| To show off in an interview | Capstone 4 or 5 |
| To raise the prompt bar in production | Capstone 7 |
| To learn the most | Capstone 2 or 8 |

Whichever you pick — **ship it**. Polished and limited beats sprawling and abandoned.
