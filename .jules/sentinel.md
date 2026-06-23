## 2025-06-23 - API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being exposed to the client bundle through Vite's `define` configuration.
**Learning:** Using `define` in `vite.config.ts` performs a static find-and-replace during build time, which bakes the secret directly into the publicly accessible JavaScript bundle.
**Prevention:** Always use a backend proxy for sensitive API calls and handle environment variables only on the server side.
