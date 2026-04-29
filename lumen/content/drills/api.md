# API Drills

Twelve hands-on exercises against the live Claude API. Use throwaway scripts; you can paste them into `tmp/` and delete after.

## Drill 1 — Hello, Claude

A 10-line script that takes one CLI argument, calls `messages.create`, prints the answer. **Pass:** under 15 lines including imports.

## Drill 2 — Streaming hello

Convert Drill 1 to streaming. **Pass:** tokens print as they arrive; total time identical.

## Drill 3 — Multi-turn loop

A REPL that maintains a `messages` array across turns and lets you chat. **Pass:** type 5 turns; the model remembers turn 1 in turn 5.

## Drill 4 — System prompt with cache

Take Drill 3. Add a 5,000-token system prompt. Mark it cacheable. **Pass:** `cache_read_input_tokens > 0` from turn 2 onwards.

## Drill 5 — JSON output

A script that converts free-text descriptions into JSON `{ name, version, breaking: bool }`. Use a tool with that exact schema and `tool_choice: { type: "tool", name: "..." }`. **Pass:** 10 inputs, 10 valid JSON outputs.

## Drill 6 — Tool-using read agent

Define one tool `read_file(path: string)`. Wire the loop. Ask: "What does the function `parseRange` in `src/utils/range.ts` do?" — but don't paste the file. The agent must call `read_file` to find out. **Pass:** model issues 1+ `read_file` calls and answers correctly.

## Drill 7 — Vision

A script that takes an image path, base64-encodes it, sends it as input. Prompt: "List every UI element in this image." **Pass:** model lists ≥ 5 elements correctly.

## Drill 8 — Extended thinking

Pick a hard reasoning problem (architecture choice, math, planning). Run it with `thinking: { type: "enabled", budget_tokens: 5000 }`. **Pass:** answer is measurably better than vanilla; you can see the thinking trace.

## Drill 9 — Structured retrieval

A script: "Given this 50-page PDF, answer Q." Use the Files API to upload once; query 10 times. **Pass:** queries 2–10 reuse the file, no re-upload, with prompt caching active.

## Drill 10 — Error handling

Add proper handling: 401 (key wrong), 429 (rate limit, exponential backoff), `prompt_too_long`. **Pass:** script doesn't crash on any of the three; logs useful messages.

## Drill 11 — Batch

Write a script that submits 100 classification requests as a batch. Poll until done. Save results to a file. **Pass:** completes successfully; cost is roughly half what 100 individual calls would have been.

## Drill 12 — Cost monitor

Wrap your API client so every call logs `{model, input_tokens, output_tokens, cache_read, cost}` to a `requests.jsonl`. Run for a week. **Pass:** at week's end, you can answer "how much did I spend on Claude this week" with a single `awk` command.

## Capstone

Build a 200-line script that:

1. Takes a GitHub issue URL.
2. Fetches the issue (web tool, MCP, or direct API).
3. Reads relevant repo files (tool use).
4. Proposes a patch (extended thinking).
5. Runs the test suite (Bash tool).
6. Outputs a draft PR description.

That's a real agent. You wrote it. Production-shape.
