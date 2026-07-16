## 2026-07-16 - API Key Leakage via Vite Build
**Vulnerability:** GEMINI_API_KEY was exposed in the client-side JavaScript bundle because it was defined in `vite.config.ts` using `define`.
**Learning:** Vite's `define` and `loadEnv` with an empty prefix can easily leak environment variables into production assets if not handled carefully. Even if used in a service that seems "internal" to the frontend, it becomes public upon build.
**Prevention:** Always proxy sensitive API calls through a server-side handler (like Vercel Functions) and keep secrets in `process.env` on the server only. Ensure `vite.config.ts` does not `define` any sensitive keys for the client.
