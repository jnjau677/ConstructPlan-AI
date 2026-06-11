## 2025-06-11 - Exposed API Key via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being exposed to the client-side bundle because it was defined in `vite.config.ts` using the `define` property. Vite perform static string replacement, baking the environment variable value directly into the minified production JavaScript files.

**Learning:** Vite's `define` property should never be used for sensitive secrets or API keys that must remain private. Anything in `define` or prefixed with `VITE_` (by default) is intended for the client and will be visible in the source code.

**Prevention:** Move sensitive API interactions to a server-side proxy (e.g., Vercel Edge Functions in the `api/` directory). This keeps the secret on the server and allows for additional security measures like request sanitization and rate limiting. For local development, use Vite's `server.proxy` to route requests to the local proxy server.
