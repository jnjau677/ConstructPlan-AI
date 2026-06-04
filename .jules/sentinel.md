## 2025-05-15 - API Key Leak via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was exposed to the client-side bundle because it was included in Vite's `define` configuration. This performed a static string replacement that baked the secret directly into the production JavaScript files.
**Learning:** Even if a variable is intended for "server-side" use, Vite's `define` or `loadEnv` used in `vite.config.ts` without prefixing (like `VITE_`) can still lead to accidental exposure if they are explicitly mapped to `process.env` in the `define` block.
**Prevention:** Always use a server-side proxy (like Vercel Edge Functions) for sensitive API calls. Never pass secrets to the client-side build process through `define`. Use a strictly server-only environment for handling keys.
