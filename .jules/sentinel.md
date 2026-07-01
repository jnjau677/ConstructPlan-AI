## 2025-05-14 - Exposed Gemini API Key via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property in `vite.config.ts`. This made the secret available in plain text within the production JavaScript assets.
**Learning:** Using `define` or `import.meta.env` for sensitive keys in a frontend-only context is a major security risk as these values are baked into the static build.
**Prevention:** Always use a server-side proxy (e.g., Vercel Functions, Express) to handle API requests that require sensitive keys. Keep the keys strictly on the server and use native `fetch` or server-side SDKs to communicate with external APIs.
