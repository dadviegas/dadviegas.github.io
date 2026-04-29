# Your First Session

This is your "I just installed it, now what" walkthrough. 15 minutes from zero to *actually useful*.

## 0. Install

```bash
# any of:
curl -fsSL https://claude.ai/install.sh | sh
brew install claude
npm i -g @anthropic-ai/claude-code
```

Sign in once: `claude /login`.

## 1. cd into a real repo

Don't experiment in `/tmp/hello`. Use a project where you'd recognise good and bad answers.

```bash
cd ~/work/my-real-app
claude
```

## 2. The first prompt — orientation

```
> What does this repo do? Read package.json, README.md, and the
> top-level src tree. Reply in 5 bullets.
```

The model will read those files (you'll see permission prompts the first time — approve them) and summarise. **Read the answer carefully.** It's also a sanity check: if Claude misreads the project, your `README` is wrong, not Claude.

## 3. Generate a CLAUDE.md

```
/init
```

This generates a `CLAUDE.md` in the repo root — Claude's "first thing it reads in every future session." You'll edit it later. For now, accept the draft.

## 4. A real micro-task

Pick something small but real:

```
> Add a `--version` flag to scripts/cli.ts that prints the version
> from package.json. Add a unit test. Don't change anything else.
```

Watch what happens:

1. Claude reads `scripts/cli.ts` and `package.json`.
2. Proposes an edit. You see a diff. Approve or reject.
3. Adds a test, runs the test, confirms it passes.
4. Reports back: "Done. Added 12 lines. Tests pass."

Now `git diff` and review like a PR. Did it touch anything it shouldn't have? Is the style consistent? **This review skill is the senior skill in AI-native work.**

## 5. The escape valves

While Claude is running:

| Key | Effect |
|---|---|
| `Esc` | Interrupt. Claude stops, you get the prompt back. |
| `Ctrl+C` | Cancel one tool call, keep the session. |
| `/clear` | New session, drop the context. |
| `/resume` | Pick up the last session. |

## 6. Five prompts that always work

```
> /init
> What changed on this branch? Summarise commit-by-commit.
> Run pnpm test and fix the failures.
> Read X. Now refactor it for Y. One file at a time.
> Open a PR. Title and body should follow the convention in CONTRIBUTING.md.
```

## Common first-day mistakes

- **Asking for a giant change in one prompt.** "Build me an entire OAuth flow." Break it down. Draft → review → refine.
- **Ignoring permission prompts.** They're your kill switch. Read what's about to happen.
- **Not reading the diff.** The summary at the end is what Claude *thinks* it did. The diff is what it *actually* did.
- **Letting it improvise the file path.** If you know the file, name it: `Read src/auth/login.ts`, not `Read the auth file`.

## Practice

Pick one real bug (not a test bug, a real one). Solve it with Claude in one session, end-to-end: read code, propose fix, run tests, write commit message. Time it. That's your new baseline.
