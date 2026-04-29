# What is an LLM?

A **Large Language Model** is a neural network — usually a transformer — trained to predict the next token given the tokens that came before it. That's it. Everything else (chatting, coding, reasoning) is an emergent behaviour of doing that prediction extremely well at scale.

## The one-sentence version

> An LLM is a function: `tokens → probability distribution over the next token`.

You sample from that distribution, append, and repeat. Out comes prose, code, JSON — whatever pattern the training data taught the model to continue.

## Why it feels like reasoning

The model has been trained on enough text (and code, and math, and conversations) that the *most likely continuation* of "Solve this bug step by step:" is, in fact, a reasonable diagnosis. The model isn't running your code; it's running a learned simulator of what an engineer would write next. Often that's enough.

## What it actually knows

- **Patterns from training data** — syntax, idioms, common APIs, named entities up to a knowledge cutoff (Claude Opus 4.7 cuts off January 2026).
- **Patterns from your prompt** — anything you put in the context window is fair game.
- **Tool outputs** — when wired with tools (file reads, web fetches, code execution), it can pull in fresh facts on demand.

## What it doesn't know

- Your codebase, unless you put it in context (or wire a tool).
- Anything that happened after the cutoff.
- Whether its own answer is correct (it has *calibration*, not certainty).

## Why this matters for prompting

Once you internalise "the model is continuing the most likely text," prompting becomes obvious:

- Want code? Show code in the prompt — the most likely continuation of code is more code.
- Want JSON? Start the assistant turn with `{`. Or ask for JSON in `<output_format>` tags. Or use the API's `response_format`.
- Want reasoning? Say "think step by step" — the most likely continuation of that phrase is a chain of reasoning.

Prompts are not commands. They are **contexts that make the answer you want the most likely continuation**.

## Why hallucinations exist

When the model is asked something it doesn't know, the *most likely continuation* is still a plausible-sounding sentence. "I don't know" is a rare token in training data; confident assertions are common. So the model fills the gap. Mitigations: tools (fetch the truth), retrieval (put the truth in context), evals (catch it), and uncertainty prompts ("if you're not sure, say so").

## Practice

Open a new chat. Ask Claude: *"What does the function `getCurrentWorkingDirectory` do in my project?"* — without giving it any context. Watch what happens. Then attach the file. Compare.
