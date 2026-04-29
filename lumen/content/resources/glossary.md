# Glossary

Quick definitions, alphabetical. If you only know one of these, learn the rest.

**Agent** — An LLM running in a loop with tools, deciding what to do next on its own.

**Agent SDK** — Anthropic's library that packages the agent loop, tools, permissions, and conversation management. Same engine as Claude Code.

**Anthropic SDK** — Official client libraries for the Claude API (Python, TypeScript, etc.).

**API key** — Secret token authenticating you to the Anthropic API. Set as `ANTHROPIC_API_KEY` env var.

**Batch API** — Submit many independent requests; processed within 24h at 50% off. Async.

**Cache breakpoint** — A `cache_control` marker that tells the API "everything up to here is cacheable." Up to 4 per request.

**Cache hit / miss** — Hit: prefix matched, billed at ~10%. Miss: paid full price; cache filled.

**Chain-of-Thought (CoT)** — Asking the model to "think step by step" before answering. Improves multi-step accuracy.

**`CLAUDE.md`** — Project-level instructions Claude Code reads at the start of every session. Repo's "briefing for Claude."

**Claude Code** — Anthropic's official CLI / IDE agent. Edits files, runs shell commands, supports skills/hooks/MCP.

**Compaction** — Summarising old conversation history to keep token usage bounded in long sessions.

**Context window** — The total input + output tokens the model can attend to in a single inference. Claude Opus 4.7 supports up to 1M.

**Eval** — A small test suite for a prompt: inputs + expected behaviour + scoring. The non-vibes way to iterate.

**Extended Thinking** — API mode where the model produces a separate reasoning trace before its answer.

**Few-shot** — Including 2–10 example input/output pairs in your prompt so the model picks up the pattern.

**Files API** — Upload files once, reference by `file_id` across many calls.

**Hallucination** — Model produces plausible but incorrect content. Mitigated by tools, retrieval, and explicit uncertainty prompts.

**Hook** — Shell command the harness runs in response to an event (`PreToolUse`, `Stop`, etc.). For policy / context injection.

**LLM** — Large Language Model. Function from a token sequence to a probability distribution over the next token.

**MCP (Model Context Protocol)** — Open protocol for plugging external systems (DBs, APIs, design tools) into Claude as tools.

**Message** — A single turn in a conversation: `{ role: "user" | "assistant", content: ... }`.

**Messages API** — The single Anthropic endpoint behind all features (chat, tools, vision, streaming, thinking).

**Plan-then-act** — Agent pattern: first generate a plan (no tools), then execute (tools allowed).

**Prompt caching** — Anthropic feature that caches stable prompt prefixes; up to 90% input cost savings.

**Prompt injection** — An attacker putting "ignore previous instructions" into data the agent will read. Defence: tag external data, sanitise, validate.

**Permission mode** — Claude Code's policy: `default` / `acceptEdits` / `plan` / `bypassPermissions`.

**ReAct** — Pattern interleaving Reason + Act tokens. The native shape of tool-using agents.

**Reflection** — Asking the model (or a critic agent) to review and refine its own output.

**Role / system prompt** — Setting the model's "voice" / rules ("You are a senior engineer. Be precise.").

**Sampling** — Picking the next token from the model's output distribution. Controlled by `temperature`, `top_p`, `top_k`.

**Schema** — JSON Schema describing a tool's input. Models respect schemas — use them.

**Skill** — Markdown file (`SKILL.md`) declaring a reusable capability for Claude. Plus optional scripts and examples.

**Slash command** — Saved prompt invoked by typing `/`. Lives in `.claude/commands/`.

**Stop sequence** — A string that, when produced by the model, ends generation immediately.

**Stop reason** — How the model finished a turn: `end_turn` / `max_tokens` / `tool_use` / `stop_sequence` / `pause_turn`.

**Streaming** — Receiving tokens as they're generated, instead of waiting for the full response.

**Subagent** — A separate Claude session spawned from your main one with its own context window.

**System prompt** — Persistent role / rules applied to every turn of the conversation.

**Temperature** — Sampling knob (0–1). 0 = deterministic; 1 = high variance.

**Token** — Chunk of text the tokenizer splits inputs into. ~3–4 chars of English. Pricing is per-token.

**Tool** — A function you define with a JSON schema. The model decides when to call it; you execute and return the result.

**Tool result** — The block you send back containing a tool's output. Must reference the `tool_use_id` that requested it.

**Tool use** — A `tool_use` block the model emits requesting a function call. Your loop executes and replies.

**Top-p / nucleus sampling** — Sample only from the smallest token set whose cumulative probability ≥ p.

**Tool choice** — Force the model to call a specific tool, any tool, or none.

**Worktree** — A separate working directory tied to the same git repo. Useful for sandboxed agent runs.
