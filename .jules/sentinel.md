## 2025-05-22 - API Key Leakage via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration. This resulted in the API key being hardcoded into the minified production JavaScript files, making it accessible to anyone who inspects the frontend code.

**Learning:** Vite's `define` performs static string replacement at build time. While it's useful for environment constants, it should never be used for sensitive secrets in a public-facing frontend application.

**Prevention:** Always use a server-side proxy (like a Vercel Edge Function or a dedicated backend) to handle requests to external APIs that require secret keys. The frontend should never have access to the raw API key.
