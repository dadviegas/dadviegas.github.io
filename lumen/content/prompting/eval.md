# Evals: How to Test Prompts

If a prompt matters — if it's running in production, or running often, or running on data you can't watch — **you need evals.** Without them, you're shipping on vibes.

## What an eval is

A tiny test suite for a prompt. **Inputs + expected behaviour + a scoring function.** Run it, get a number, watch the number over time as you iterate.

```mermaid
flowchart LR
  Inputs[Test inputs] --> Run[Run prompt]
  Run --> Outputs[Outputs]
  Outputs --> Score[Score each]
  Score --> Number[Aggregate score]
  Number --> Compare[Compare to baseline]
```

## Minimum viable eval (10 minutes)

Five inputs. A boolean check. A script.

```python
CASES = [
    ("Login crashes on Firefox", "BUG"),
    ("Add SSO support", "FEATURE"),
    ("Bump dependencies", "CHORE"),
    ("Slow page load", "BUG"),
    ("Document the auth flow", "CHORE"),
]

correct = 0
for input_text, expected in CASES:
    output = call_claude(prompt=PROMPT, input=input_text).strip()
    if output == expected:
        correct += 1
    else:
        print(f"WRONG: {input_text!r} → got {output!r}, expected {expected!r}")

print(f"Score: {correct}/{len(CASES)}")
```

That's it. Five lines. Now you can iterate the prompt and watch the score move.

## Three eval styles

### 1. Exact match

Best for: classification, extraction, structured output.

```python
assert output.strip() == expected
```

### 2. Schema check

Best for: JSON outputs.

```python
parsed = json.loads(output)
assert "summary" in parsed and len(parsed["summary"]) > 10
```

### 3. LLM-as-judge

Best for: subjective tasks (tone, helpfulness, code quality).

```python
verdict = call_claude(
    prompt=f"""
    Did the following answer fully address the user's question?
    Reply with PASS or FAIL only.

    Question: {input_text}
    Answer:   {output}
    """
).strip()
assert verdict == "PASS"
```

LLM-as-judge introduces noise — calibrate by spot-checking 20 verdicts yourself.

## What to evaluate

- **Accuracy** (correct answer rate)
- **Format compliance** (JSON parses, fields present)
- **Length** (within bounds)
- **Cost** (tokens used)
- **Latency** (time to last token)
- **Refusal rate** (model declined when it shouldn't)

For a production prompt, track all of these over time.

## Building a real eval set

Start with 5 cases. Grow to 50. Aim for:

- **Easy ground-truth cases** (the obvious ones).
- **Edge cases** (the ones that broke a previous version).
- **Adversarial cases** (input designed to confuse).
- **Drift cases** (representative of real production traffic).

Add a new case every time a real-world failure surprises you. Evals grow organically with your understanding.

## Regression testing

Before promoting a new prompt, run it against the eval set. Score must be ≥ baseline. Otherwise: keep iterating.

```bash
$ ./eval.py prompts/v3.txt
Score: 47/50  (baseline: 49/50, regression on 'edge case 14')
```

## Tools

- **Anthropic's prompt-evaluation tools** — the workbench supports running cases against prompts.
- **promptfoo** — open-source CLI for this.
- **DIY** — a Python script in your repo. Often enough.

## When evals are wrong

A passing eval set with bad real-world performance means your eval set isn't representative. Ship a small change → log a sample of real outputs → spot-check → add new cases. Iterate the eval set as much as the prompt.

## Practice

Pick the most important prompt you have. Build a 5-case eval. Run it. Now make one prompt change you've been considering and re-run. The number tells you whether the change is real or just felt nice.
