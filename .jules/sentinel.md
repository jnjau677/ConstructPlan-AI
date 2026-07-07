## 2025-05-15 - Secret Exposure via Vite 'define'
**Vulnerability:** GEMINI_API_KEY was exposed to the client bundle through Vite's `define` configuration.
**Learning:** Using `JSON.stringify` to inject environment variables in `vite.config.ts` bakes them into the static assets, making them accessible to anyone via the browser.
**Prevention:** Always handle sensitive API keys on the server-side. Use server-side proxy handlers (e.g., Vercel Functions) to interact with sensitive third-party APIs.
