## 2026-07-10 - Secret Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration, making it visible in the production JavaScript assets.
**Learning:** Vite's `define` property performs static replacement, which means any environment variables included there are baked into the frontend code and exposed to anyone visiting the site.
**Prevention:** Never use `define` or `import.meta.env` for sensitive secrets on the frontend. Always use a server-side proxy (like a Vercel Function) to interact with sensitive APIs, keeping the API keys strictly server-side.
