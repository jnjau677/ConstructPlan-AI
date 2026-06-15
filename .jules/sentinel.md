## 2025-06-15 - Hardcoded API Key Leak via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration. This makes the API key visible in the minified production JavaScript files.

**Learning:** Vite's `define` performs static string replacement at build time. Any sensitive environment variables placed here are baked into the frontend code and can be easily extracted by anyone with access to the website.

**Prevention:** Never use Vite's `define` or `import.meta.env.VITE_*` for sensitive secrets. Always route requests through a secure server-side proxy (like Vercel Edge Functions or a backend server) that holds the API key and never exposes it to the client.
