# Tokens & Context Window

The model doesn't see characters or words. It sees **tokens** — chunks of text the tokenizer splits the input into. Once you understand tokens, half of "the model is acting weird" stops being mysterious.

## What a token is

A token is roughly **3–4 characters of English** or **~0.75 of a word**. `"Hello, world!"` is about 4 tokens. `"unbelievable"` is one token. `"色々"` (Japanese) might be 3–6 tokens because the tokenizer wasn't optimised for it.

Rule of thumb: **1,000 tokens ≈ 750 English words ≈ 4,000 characters**.

## Why this matters

- **Cost.** API pricing is per-token (input and output, separately). 100k input tokens of cached context is dramatically cheaper than 100k uncached.
- **Latency.** Output tokens generate one at a time. 4,000 tokens of output ≈ 4× the latency of 1,000.
- **Limits.** Models have a max **context window** (input + output). Claude Opus 4.7 supports up to 1M tokens. That's a *lot* — you can fit a whole codebase. But you still pay for it.
- **Truncation.** When you blow past the limit, oldest tokens get dropped. Long-running agents need an explicit compaction strategy.

## The context window

Everything the model sees in a single inference call is the context window:

```
[ system prompt ]
[ tool definitions ]
[ message history ]
[ files / tool results ]
[ your latest user turn ]
[ ← model writes its response here → ]
```

All of that has to fit. The model attends to *every* token simultaneously (cost is roughly quadratic in older transformers, near-linear in modern ones with FlashAttention etc.) — but **practical attention degrades on irrelevant noise**. A 200k-token context full of unrelated code makes answers worse, not better.

## Token-aware prompting

- **Prune.** Don't dump 50 files when 3 will do. Specificity > volume.
- **Cache.** Anything that doesn't change between calls (system prompt, big spec, library code) goes behind a `cache_control` block. See `API → Prompt Caching`.
- **Summarise long histories.** Rolling summary > raw transcript for long sessions.
- **Chunk + retrieve.** For corpora bigger than the window, embed and retrieve relevant slices. (RAG.)
- **Watch for tokenization quirks.** Numbers, code with rare characters, and non-Latin scripts use more tokens than you'd expect.

## Counting tokens

Anthropic's SDK has a `count_tokens` endpoint. For quick sanity-checks, the tokenizer for Claude is the standard `tiktoken`-style BPE — `~chars/4` is close enough for budgeting.

## Practice

Take the longest prompt you sent Claude this week. Estimate the token count (`chars / 4`). Now identify what fraction of those tokens were actually relevant to the answer. That's your bloat ratio. Cut it in half next time.
