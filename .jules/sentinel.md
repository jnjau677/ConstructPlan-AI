## 2025-05-15 - [Vite Define Leak]
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration, making it accessible to anyone inspecting the static assets.
**Learning:** Vite's `define` property performs literal string replacement at build time. While useful for public configuration, it is dangerous for sensitive secrets.
**Prevention:** Never use `vite.config.ts` `define` for secrets. Always use a server-side proxy (e.g., Vercel Functions) to handle sensitive API keys.
