# Skills You Should Know

Curated list of skills (built-in, plugin, and DIY) that earn their slot in your toolbox. Install or build the ones that match your work.

## Already shipped with Claude Code

These come out of the box. Try them today:

| Skill | What it does |
|---|---|
| `init` | Scaffolds / refreshes `CLAUDE.md` for the current repo. |
| `review` | Reviews a pull request — pulls the diff, audits, comments. |
| `security-review` | Runs a structured security audit on pending changes. |
| `simplify` | Reviews changed code for reuse, quality, efficiency, then fixes. |
| `update-config` | Edits `settings.json` correctly (hooks, permissions, env). |
| `keybindings-help` | Customises `~/.claude/keybindings.json`. |
| `find-skills` | Helps discover and install agent skills. |
| `fewer-permission-prompts` | Scans transcripts and adds a sane allowlist. |
| `frontend-design` | Creates distinctive, production-grade frontend interfaces. |
| `claude-api` | Builds, debugs, and migrates Claude API / SDK code. |
| `loop` | Run a prompt or slash command on a recurring interval. |
| `schedule` | Create / manage scheduled remote agents. |

> Run `/help` to see what's installed in *your* CLI today — the list grows.

## Build these for your team

Standard daily-driver skills you'll want in every repo's `.claude/skills/`:

| Skill | What it does | Why |
|---|---|---|
| `changelog` | Drafts release notes from the diff | Saves 10 minutes per PR. |
| `scaffold-component` | New component with tests + index | Locks in conventions across team. |
| `extract-i18n` | Finds hardcoded strings, moves to translations | Catches what code review misses. |
| `audit-deps` | Reports outdated deps + breaking changes | Weekly hygiene. |
| `pr` | Opens a PR with the team's template | One command, every time. |
| `triage` | Reads issue tracker, proposes priority order | Mondays. |
| `coverage` | Runs tests with coverage + flags drops | Pre-merge gate. |
| `bump-version` | Bumps semver, updates lockfile, writes commit | Releases. |
| `runbook` | Generates an on-call runbook from `docs/` + code | Onboarding. |
| `incident-recap` | Drafts a post-mortem from a Slack thread + git log | After fires. |

## Build these for yourself

| Skill | What it does | Why |
|---|---|---|
| `wakeup` | Reads your last session's notes, summarises, plans today | Morning ritual. |
| `journal` | Logs a 5-line journal entry to a dated file | End of day. |
| `learn` | Picks a topic from a queue, generates a deep-dive page | Daily learning. |
| `repo-tour` | Self-hosted "what is this repo" intro for new clones | First contact. |

## Build these for AI-native frontend work

| Skill | What it does |
|---|---|
| `component-from-fig` | Takes a description / sketch, scaffolds a Storybook + tests |
| `accessibility-audit` | Runs WCAG checks against staged changes |
| `tokens-from-design` | Extracts design tokens from a Figma export |
| `responsive-check` | Tests a screen at 375 / 768 / 1280 and reports issues |
| `i18n-coverage` | Confirms every user-visible string is translated |

## Build these for prompt-engineering work

| Skill | What it does |
|---|---|
| `eval` | Runs a prompt against a dataset and scores it |
| `cache-this` | Wraps a long prompt with `cache_control` blocks |
| `prompt-diff` | Compares two prompts against the same inputs |
| `redact-pii` | Scrubs PII from a transcript before sharing |

## Where to find more

- `find-skills` skill (built-in) — *"is there a skill for X?"*
- The Anthropic skills marketplace (in-product, browse via `find-skills`).
- Open-source registries on GitHub — search `claude-skill` topic.

## Install discipline

Don't hoard. Five well-used skills > fifty installed-but-forgotten.

After 30 days, audit:

- Which skills did I use 3+ times? **Keep.**
- Which did I use once? **Edit or delete.**
- Which did I never use? **Delete.**

## Practice

Pick three skills from this page. Install or build them today. Use each one tomorrow. Note which actually saves time vs. which is theatre.
