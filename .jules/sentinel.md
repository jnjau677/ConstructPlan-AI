## 2025-05-15 - API Key Exposure via Client-side Injection
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration.
**Learning:** Vite's `define` performing static replacement makes environment variables accessible to anyone inspecting the frontend code.
**Prevention:** Always use a backend proxy for sensitive API keys and remove any `define` blocks that expose secrets in `vite.config.ts`.
