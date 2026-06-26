## 2025-05-14 - Fix Exposed API Key Pattern
**Vulnerability:** GEMINI_API_KEY was exposed in the client-side bundle via Vite's `define` configuration.
**Learning:** Even if a key is used in a server-like service file, Vite's `define` or `import.meta.env` will bake it into the static assets if configured to do so.
**Prevention:** Use a backend proxy (like Vercel Functions in `api/`) to handle sensitive API keys and ensure they never reach the client bundle.
