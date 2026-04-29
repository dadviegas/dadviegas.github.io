# Agent Drills

Each drill takes < 2 hours and produces a working agent. Build at least three before believing you "know agents."

## Drill 1 — Read-only repo Q&A

Build an agent that answers questions about *your* repo using only read-only tools (`read_file`, `grep`, `list_dir`). Force read-only via permissions.

```ts
permissions: { allow: ["Read(**)", "Bash(grep*)", "Bash(ls*)"], deny: ["Edit(*)", "Write(*)"] }
```

**Pass:** "Where is the rate-limit logic?" answered with a file:line citation, no hallucination.

## Drill 2 — Test-fixing agent

Agent loop: read failing test → propose fix → edit → re-run test → loop. Cap 10 turns.

**Pass:** runs in a sandbox worktree on a branch with one real failing test; ends with the test passing.

## Drill 3 — Dependency-upgrade agent

Goal: bump one minor version in `package.json`, run install, run tests, fix any breakage. If breakage is too large, revert.

**Pass:** safely bumps one minor dep with no human in the loop.

## Drill 4 — PR-review agent

Agent reads `git diff main...HEAD` and posts comments. Uses `gh pr comment` for the actual comment write.

**Pass:** comments are file:line specific and cite real issues, not generic advice.

## Drill 5 — Issue-triage agent

Reads new GitHub issues, classifies (bug/feature/duplicate), labels, links to the most likely related code file (using grep).

**Pass:** labels 10 issues with > 80% accuracy; file links are real.

## Drill 6 — Plan-then-act

Two-phase agent. Phase 1 produces a plan (no tools). Phase 2 executes the plan (tools allowed). Human approves between phases.

**Pass:** plan is concrete enough that execution is mechanical; you can detect a bad plan before any side effects.

## Drill 7 — Orchestrator + workers

Supervisor agent decomposes a goal ("audit this branch") into three subtasks ("audit deps", "audit tests", "audit perf"), each delegated to a subagent in parallel. Synthesises.

**Pass:** runs in < 60% of the wall-clock time of a sequential single-agent version.

## Drill 8 — Reflective loop

Agent produces an answer → critic agent reviews → original revises. Cap 3 cycles.

**Pass:** measurably better final answer on a hard task vs. one-shot.

## Drill 9 — Memory-augmented

Agent with read/write access to a `notes.md` file that persists across sessions. After each session, summarise key findings into the file. On startup, read the file.

**Pass:** session 2 noticeably benefits from session 1's notes.

## Drill 10 — Human-in-the-loop

Agent that runs autonomously until a "destructive" tool (e.g. `delete_file`, `git push`) — at which point it pauses for explicit approval.

**Pass:** never executes a destructive tool without approval; logs every approval.

## Drill 11 — Cost-budgeted agent

Agent with a per-task token budget. Tracks usage; if it would exceed budget on the next turn, it stops with a partial answer.

**Pass:** never exceeds budget; produces a usable partial answer when it stops.

## Drill 12 — Eval the agent

Pick one of the agents above. Build a 10-case eval (input → success criterion). Run after every change. Track score over time.

**Pass:** eval set is rich enough that a regression on a real change shows up in the score.

## Capstone

Pick a real annoyance in your work. Build the agent that does it for you. Hand it the task tomorrow morning, walk away, evaluate when you come back. Iterate until it's worth keeping.

The real test: would you trust this agent on a Friday afternoon while you're on holiday?
