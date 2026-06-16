## 2025-05-14 - Leak of Secrets via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration. This makes the secret visible to anyone inspecting the production JavaScript files.

**Learning:** Vite's `define` performs static string replacement at build time. Any value passed to it will be baked into the final bundle, even if it originates from a server-side `.env` file. This is a common pitfall when trying to use environment variables in the frontend.

**Prevention:** Never use `define` or `import.meta.env` for sensitive secrets like API keys. Always route requests through a server-side proxy (like a Vercel Edge Function or a dedicated backend) that holds the secret securely.
