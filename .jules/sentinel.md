## 2026-07-04 - Gemini API Key Leak via Vite define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via the `define` property in `vite.config.ts`. This made the key accessible to anyone inspecting the frontend assets.
**Learning:** Vite's `define` property performs static string replacement, effectively hardcoding the values into the production build. Even if the key is loaded from environment variables during the build process, it ends up in the final JavaScript chunks.
**Prevention:** Always use a backend proxy for sensitive API calls. Never use `define` or `import.meta.env` for secrets that must remain confidential. Use Vercel Functions or a similar backend to keep keys on the server.
