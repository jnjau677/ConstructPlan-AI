## 2025-07-11 - API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected directly into the client-side bundle using Vite's `define` property.
**Learning:** Vite's `define` property bakes values into static assets during build time, making them visible to anyone who inspects the network traffic or source code in the browser. This is a common pattern for public config but should never be used for sensitive secrets.
**Prevention:** Always use a server-side proxy (like a Vercel Function) to handle requests to sensitive third-party APIs. Keep secrets on the server and only expose non-sensitive endpoints to the frontend.
