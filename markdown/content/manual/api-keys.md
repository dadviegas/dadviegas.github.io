# API Keys — Como obter e configurar / How to Get & Configure API Keys

Atlantis integrates with several external services. All keys are stored **locally in your browser** (IndexedDB) and are never sent to our servers. When you sign in, keys sync securely to your account across devices via Supabase.

Go to **Settings** (the cog icon in the top bar) to paste your keys.

---

## TMDB — The Movie Database

Used by the **Movies & Series** app to fetch trending films, search, trailers, and recommendations.

**Free tier:** Unlimited requests — no credit card required.

### Steps

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/signup)
2. Go to your profile → [Settings → API](https://www.themoviedb.org/settings/api)
3. Click **Create** → choose **Developer** (personal/non-commercial use)
4. Fill in the form (any URL, e.g. `http://localhost`)
5. Copy the **API Read Access Token** (long `eyJ…` string — not the shorter API Key)
6. In Atlantis → **Settings → API Keys → TMDB**, paste the token

> **Note:** The Movies app falls back gracefully to a limited mode without a key, but posters, search, and trailers require it.

---

## Groq — Fast AI Inference

Used by the **Ask** app, **Prompt Lab**, and the AI prompt enhancer in **Image Gen**. Groq runs open-weight models (Llama 3, Mixtral) at very high speed.

**Free tier:**
- 30 requests/minute
- 14,400 requests/day
- 500,000 tokens/day
- No credit card required

### Steps

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up with Google or GitHub
3. Click **API Keys** in the left sidebar
4. Click **Create API Key** → name it (e.g. "Atlantis") → copy the key
5. In Atlantis → **Settings → API Keys → Groq**, paste the key

**Available models:** Llama 3.3 70B Versatile, Llama 3.1 8B Instant

---

## Google Gemini — Multimodal AI

Used by **Prompt Lab** and **Image Gen** for Gemini model access (text + vision).

**Free tier:**
- 60 requests/minute (Gemini 2.0 Flash)
- 1,500 requests/day
- No credit card required

### Steps

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Select a Google Cloud project (or create one — it's free)
5. Copy the generated key
6. In Atlantis → **Settings → API Keys → Google Gemini**, paste the key

---

## Finnhub — Stock & Market Data

Used by the **Bolsa** widget and planned **StockPulse** app for real-time stock quotes, market data, and company fundamentals.

**Free tier:**
- 60 API calls/minute
- End-of-day data, basic quotes
- No credit card required

### Steps

1. Create a free account at [finnhub.io](https://finnhub.io)
2. After login, your API key is shown on the [dashboard](https://finnhub.io/dashboard)
3. Copy the key
4. In Atlantis → **Settings → API Keys → Finnhub**, paste the key

---

## YouTube Data API v3

Used by the **YouTube Safe Feed** app — a curated, age-adapted feed sourced from allowlisted channels, Shorts filtered out, no algorithm-driven virality.

**Free tier:**
- 10,000 units/day (no billing required)
- `playlistItems.list` = 1 unit (efficient — used for channel uploads)
- `videos.list` = 1 unit (batch detail fetch)
- `search.list` = 100 units (not used by the Safe Feed — avoid)

### Steps

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Go to **APIs & Services → Library** and enable **YouTube Data API v3**
4. Go to **APIs & Services → Credentials → Create Credentials → API key**
5. (Optional but recommended) Restrict the key to the YouTube Data API v3 and your site's hostname
6. Copy the API key
7. In Atlantis → **Settings → API Keys → YouTube Data API v3**, paste the key

---

## Hugging Face — Open-Source Models

Used by **Prompt Lab** for access to thousands of open-source models.

**Free tier:**
- Rate-limited (varies by model popularity)
- Some models need a "warm-up" on first request (15–30s delay)

### Steps

1. Create a free account at [huggingface.co](https://huggingface.co)
2. Go to [Settings → Access Tokens](https://huggingface.co/settings/tokens)
3. Click **New token** → name it (e.g. "Atlantis") → select **Read** permission
4. Copy the token
5. In Atlantis → **Settings → API Keys → Hugging Face**, paste the token

---

## Security / Segurança

- All keys are stored in **IndexedDB** locally (key `atlantis:api-keys`) — not in cookies or plain localStorage
- When signed in, keys sync to your Supabase account — encrypted in transit
- Keys are sent directly from your browser to each provider's API — never through Atlantis servers
- You can remove any key at any time via **Settings → API Keys**
- Each provider's free tier has rate limits that protect against accidental overuse

---

## Which keys do I need? / De que chaves preciso?

| App / Widget | Key required | Free? |
|---|---|---|
| Movies & Series | TMDB Read Access Token | ✓ Free, unlimited |
| Ask (chat) | Groq | ✓ Free |
| Prompt Lab | Groq and/or Gemini and/or Hugging Face | ✓ All free |
| Image Gen | Groq (prompt enhance) + Gemini (image) | ✓ Free |
| Bolsa widget | Finnhub | ✓ Free |
| YouTube Safe Feed | YouTube Data API v3 | ✓ Free, 10k units/day |
