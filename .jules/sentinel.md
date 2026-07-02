## 2026-07-02 - Gemini API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration. This made the secret visible in the static JavaScript assets served to all users.
**Learning:** Using `define` in `vite.config.ts` to pass environment variables to the frontend is unsafe for sensitive secrets, as Vite performs a literal string replacement that bakes the value into the production build.
**Prevention:** Always use a server-side proxy (e.g., Vercel Functions, Express middleware) to handle requests to external APIs that require sensitive keys. The frontend should communicate with the proxy, which then attaches the secret server-side.
