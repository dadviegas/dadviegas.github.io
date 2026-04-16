# Prompt Lab — How to Get Your API Keys

Prompt Lab lets you test and compare prompts across multiple AI models. All you need is a free API key from one or more providers. Keys are stored locally in your browser — never sent to our servers.

---

## Groq (Recommended)

Groq offers the **fastest inference** and a generous free tier with no credit card required.

**Free tier limits:**
- 30 requests per minute
- 14,400 requests per day
- 500,000 tokens per day

**Models available:** Llama 3.3 70B, Llama 3.1 8B, Mixtral 8x7B

### Steps

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google or GitHub (no credit card needed)
3. Click **API Keys** in the left sidebar
4. Click **Create API Key**
5. Give it a name (e.g. "Atlantis") and copy the key
6. Paste it in Prompt Lab → Settings → Groq

> **Tip:** The Groq key is also used by **Image Gen** to enhance prompts with AI before generating images.

---

## Google Gemini

Google AI Studio provides free access to Gemini models with a generous daily limit.

**Free tier limits:**
- 60 requests per minute (Gemini 2.0 Flash)
- 1,500 requests per day

**Models available:** Gemini 2.0 Flash, Gemini 1.5 Pro

### Steps

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Select a Google Cloud project (or create one — it's free)
5. Copy the generated key
6. Paste it in Prompt Lab → Settings → Google Gemini

---

## Hugging Face

Hugging Face gives you access to thousands of open-source models via their Inference API.

**Free tier limits:**
- Rate-limited (varies by model popularity)
- Some models may need to "warm up" on first request (15–30s delay)

**Models available:** Mistral 7B, Llama 2 7B, and many more

### Steps

1. Go to [huggingface.co](https://huggingface.co) and create a free account
2. Go to [Settings → Access Tokens](https://huggingface.co/settings/tokens)
3. Click **New token**
4. Name it (e.g. "Atlantis"), select **Read** permission
5. Copy the token
6. Paste it in Prompt Lab → Settings → Hugging Face

---

## Which provider should I start with?

| Provider | Speed | Quality | Ease of setup |
|----------|-------|---------|---------------|
| **Groq** | Fastest | Great (Llama 3.3) | Easiest — no credit card |
| **Gemini** | Fast | Great (Gemini 2.0) | Easy — needs Google account |
| **Hugging Face** | Slower | Good (open-source) | Easy — models may need warm-up |

**Our recommendation:** Start with **Groq**. It's the fastest, the free tier is the most generous, and the key also powers the AI prompt enhancement in Image Gen.

---

## Security notes

- API keys are stored in your browser's local storage (`atlantis:promptlab:keys`)
- Keys are sent directly from your browser to the provider's API — they never pass through our servers
- You can remove your keys at any time in Prompt Lab → Settings
- Each provider's free tier has rate limits that protect against accidental overuse
