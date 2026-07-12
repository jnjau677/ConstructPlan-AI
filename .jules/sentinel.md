## 2026-07-12 - [Critical] Gemini API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration. This made the key accessible to anyone visiting the site by inspecting the source code.
**Learning:** Using `define` in Vite to inject environment variables effectively hardcodes them into the static assets. For sensitive keys, a server-side proxy is necessary even in a frontend-heavy application.
**Prevention:** Always use a server-side handler (like Vercel Functions or an Express proxy) for third-party API calls that require sensitive credentials. Use `server.ssrLoadModule` in Vite's development server to mimic production serverless handlers.
