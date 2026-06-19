## 2025-06-19 - Hardcoded API Key Leak in Client Bundle
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration. This makes the secret accessible to anyone who inspects the compiled JavaScript in the browser.
**Learning:** Vite's `define` performs static string replacement, baking environment variables into the production artifacts. Using this for secrets is a major security risk.
**Prevention:** Always route sensitive API calls through a backend proxy server where environment variables remain secure. Use `vite.config.ts` proxy settings for development and a proper server (like Express) for production to serve the app and handle API requests.
