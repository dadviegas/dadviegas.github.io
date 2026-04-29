# The AI-native Mindset

The biggest gap between engineers who get a 2× speedup from Claude and engineers who get a 0.2× speedup is **mindset**, not tooling. Here's the operating model.

## 1. Treat Claude as a smart, fresh colleague

Not as a search engine. Not as autocomplete. As a colleague who is brilliant, fast, and **just walked into the room**. They don't know the file paths, they don't know last quarter's incident, they don't know your conventions. Brief them like one.

> "Smart, fresh colleague" — write that on a sticky note.

## 2. Specify the *why*, not just the *what*

A prompt that says "rename `getCwd` to `getCurrentWorkingDirectory`" gets you a rename. A prompt that says "rename for clarity, this is shipped public API, follow the convention in `naming.md`" gets you a rename **plus** a flagged migration note for the changelog. Same effort, ten times the value.

## 3. Verify, don't trust

Claude is a probabilistic system. It hallucinates file paths, invents APIs that look right, and sometimes mis-summarises the diff it just made. **Read the diff. Run the test. Don't ship on vibes.**

## 4. Work in tight loops

Bad: "build me an entire app, here's a paragraph." Good: "draft the data model" → review → "now the store" → review → "now the React hook" → review. Each loop is small enough that a wrong turn is cheap.

## 5. Use evals, not vibes

If a prompt matters, write a tiny test for it. Five inputs, expected outputs, a one-line script. The first time a prompt regresses silently you'll be glad you did.

## 6. Skills, hooks, and subagents are levers

The default setup gets you 70%. The remaining 30% lives in *configuration*: a tight `CLAUDE.md`, two custom slash commands, three skills, one hook that catches your most common mistake. That's the difference between a power user and someone who watches the agent type.

## 7. Don't outsource judgement

The model can write code. It cannot decide which trade-offs your team is willing to live with. Architecture, scope, deprecation, prioritisation — those are still yours. Use Claude to expand your reach, not replace your taste.

## 8. The work changes shape

You will write fewer lines of code by hand. You will read **far more** diffs. Reviewing well becomes the senior skill. So does writing tight, specific specs. So does saying *no* — to scope creep, to over-abstraction, to half-finished code that compiles but isn't right.

That's the whole game.
