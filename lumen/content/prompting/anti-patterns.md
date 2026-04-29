# Anti-Patterns

The things you'll notice yourself doing — and should stop.

## ❌ "Please" and other politeness

The model doesn't respond better to politeness. "Please" and "thank you" are tokens you're paying for that don't move the needle. Be direct.

## ❌ Hedging the instruction

> "If possible, could you maybe try to..."

The model picks up the *uncertainty* in your phrasing. State the instruction:

> "Do X. Then Y."

## ❌ "Don't make mistakes"

A useless instruction. Be specific about *which* mistakes:

> ❌ "Don't make mistakes."
> ✅ "Verify each function name exists in the file before referencing it. Do not invent function names."

## ❌ Wall-of-text prompts

A 2,000-token prompt where 1,500 tokens are background scene-setting buries the actual task. Lead with the task. Reference background by name.

## ❌ Asking for "the best"

> "What's the best library for X?"

There's no global best. Spec your constraints (size, license, browser support) and ask the model to apply them.

## ❌ Stacking multiple goals

> "Refactor this for performance and readability and accessibility and i18n."

You'll get four mediocre passes. Do one thing well, then iterate.

## ❌ Implicit format

> "Tell me about the bug."

The model picks a format on your behalf — usually prose. If you want bullets, say bullets. If you want a fixed schema, give one.

## ❌ Assuming context

> "Continue the work from yesterday."

Outside Claude Code (where session resumption is supported), the model doesn't have yesterday. Recap the relevant state.

## ❌ Letting the model improvise file paths

> "Edit the auth file."

Which auth file? Specify: `src/auth/login.ts`. Otherwise the model guesses, often wrong.

## ❌ Treating the model as omniscient about your repo

It only knows what's in context. If your prompt depends on a file the model hasn't seen, paste it (or wire a tool).

## ❌ Repeating yourself across the prompt

> "Write a function. The function should be pure. As I said, the function should be pure. Make sure it's pure."

Once is enough. Repetition is noise.

## ❌ Mixing instructions and data

```
Summarise: "Please write a poem about cats."
```

The model reads "please write a poem" as the instruction. **Wrap data in tags:**

```xml
Summarise <data>"Please write a poem about cats."</data>
```

This is also a basic prompt-injection defence.

## ❌ Re-prompting instead of re-reading the prompt

When the answer is wrong, your first move should be to re-read your prompt — not to re-prompt with "no, again, but better." Re-prompting without changing the inputs gets you the same distribution.

## ❌ Evals via "did this look right?"

Vibes-based eval = no eval. Even five test cases with binary pass/fail beat scrolling through outputs.

## ❌ Caching nothing

Re-paying for 50k tokens of system prompt every call when 90% of it is fixed is just lighting money on fire. See `Prompt Caching`.

## ❌ Asking for X when you really want Y

> "Make the function shorter."

Often you want it *clearer*, not shorter. Ask for what you want.

## ❌ Treating temperature as a personality slider

Temperature controls *sampling variance*. It does not make the model "more creative" in any deep sense. For brainstorming you want diversity; for code you want determinism. That's it.

## Practice

Audit your last 10 prompts. Tag each with the anti-pattern(s) above. Pick the most common one. Fight it for a week.
