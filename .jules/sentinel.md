## 2026-06-03 - [Secure API Key Handling]
**Vulnerability:** GEMINI_API_KEY was exposed in the client-side bundle via Vite's 'define' configuration.
**Learning:** Vite's 'define' performs static replacement, making secrets visible in minified production assets.
**Prevention:** Move sensitive logic to server-side proxies (e.g., Vercel Edge Functions) and access secrets via server-side environment variables.
