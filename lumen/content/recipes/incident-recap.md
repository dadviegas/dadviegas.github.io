# Recipe — Incident recap drafter

After an incident, the post-mortem is the thing nobody wants to write but everyone needs. Draft it from a Slack thread + git log in 30 seconds.

## What you'll build

A skill that takes a Slack thread URL (or pasted text) + a time window, reads the git log for that window, and produces a post-mortem ready for editing.

```bash
$ /incident-recap https://slack.com/archives/C123/p1735000000

# Incident recap — 2026-04-22, login outage

## Summary
Users could not sign in for ~14 minutes (14:32–14:46 UTC) after a deploy
that introduced a regression in OAuth callback handling.

## Timeline (UTC)
- 14:30  Deploy `auth@v3.4.1` shipped (commit a1b2c3d)
- 14:32  First Sentry alert: `redirect_uri_mismatch` spike
- 14:34  @joana acknowledges in #incidents
- 14:38  Rollback initiated (`@dadviegas`, commit revert d4e5f6g)
- 14:46  Login restored; alert clears
- 15:10  Forward-fix opened in PR #1042

## Root cause
Commit a1b2c3d removed the trailing slash from `OAUTH_CALLBACK_URL`,
which broke the strict URI match in the IdP. The original assumption —
that the IdP normalised trailing slashes — was wrong.

## Why our process didn't catch it
- No staging environment that replays real OAuth traffic.
- Tests mock the IdP; the real strict-match wasn't covered.

## Action items
- [ ] @dadviegas: add an OAuth callback E2E test against the IdP sandbox.
- [ ] @joana: document trailing-slash invariants in `auth/README.md`.
- [ ] @team: add an alert on `redirect_uri_mismatch` count > 5/min.

## What went well
- Detection-to-rollback was 14 minutes; runbook worked.
- @joana paged on first alert; no Slack-noise debate.
```

## The skill

`.claude/skills/incident-recap/SKILL.md`:

```markdown
---
name: incident-recap
description: |
  Draft an incident post-mortem from a Slack thread + git log + (optionally) a Sentry link.
  TRIGGER on: "post-mortem", "incident recap", "RCA", "write up the incident".
  SKIP for: minor bugs, day-to-day. This is for actual incidents (downtime, data loss, security events).
allowed-tools: Bash, Read, WebFetch
---

# Incident recap

Draft a post-mortem in our standard template. Concrete, blameless, actionable.

## Inputs you need

- A Slack thread URL or pasted thread text (timeline source)
- Approximate window (e.g. "around 14:30 UTC on April 22")
- Repo root (where to read git log)

If any are missing, ask the user once and stop.

## Steps

1. Read the Slack thread (WebFetch if URL; otherwise pasted text).
2. Identify the incident window from the thread timestamps.
3. Run `git log --since='<start>' --until='<end>+30min' --pretty=format:'%h %s (%an, %cr)'`
   in the repo root. Identify deploy commits and rollbacks.
4. Cross-reference: which commit caused the problem? which fixed it?
5. Extract the timeline from Slack — first detection, first ack, mitigation, resolution.
6. Identify root cause from the diff of the offending commit.

## Output — Markdown

Use this exact structure:

  # Incident recap — <DATE>, <ONE-LINE SUBJECT>

  ## Summary
  <2–3 sentences. Impact, duration, what users experienced.>

  ## Timeline (UTC)
  - <HH:MM>  <event>
  - …

  ## Root cause
  <Why it happened. Cite commits.>

  ## Why our process didn't catch it
  <2–4 bullets. Honest gaps.>

  ## Action items
  - [ ] @owner: <specific, time-bound>
  - [ ] …

  ## What went well
  <1–3 bullets. Don't pad — only real positives.>

## Hard rules

- Blameless. Use roles/usernames for *attribution*, never blame.
- "Action items" must be specific and have an owner. No "we should think about…".
- "What went well" is real or omitted. Cargo-culted positives erode trust.
- All times in UTC.
```

## Why this skill works

- **Concrete inputs.** Skill asks for what it needs; doesn't fabricate.
- **Cross-references Slack timeline + git log** — the two sources you'd manually correlate yourself.
- **Hard structural template.** The post-mortem template is your team's; the skill enforces it.
- **Blameless rule in hard rules.** Models drift toward "X did Y wrong" if not held to it.
- **Action items have owners.** The most common post-mortem failure is unowned items. Skill prevents it.

## Variations

- **Pipe to Notion / Confluence.** Add a step that creates a draft page via API.
- **Link to relevant code.** Have the skill `Read` the offending commit's files to cite specific lines in the root cause.
- **Severity classifier.** Add a tool call that records SEV1/2/3 + scope, written to a spreadsheet for trend analysis.

## Practice

Find an old Slack incident thread. Run this skill against it. Compare to the post-mortem your team actually wrote. Where the skill is weaker — that's your prompt iteration target.
