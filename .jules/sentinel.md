## 2025-05-15 - API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being hardcoded into the client-side bundle via the `define` property in `vite.config.ts`. This made the secret visible in production assets to anyone inspecting the source code.
**Learning:** Vite's `define` property bakes values into the static build. Even if pulled from environment variables at build time, the final string is included in the minified JavaScript.
**Prevention:** Always use server-side proxies for sensitive API calls. For local development, Vite middleware with `server.ssrLoadModule` can simulate these endpoints without requiring a separate backend process.
