## 2025-05-14 - Move sensitive API logic to server-side
**Vulnerability:** API keys (GEMINI_API_KEY) were being injected into the client-side bundle via Vite's `define` property.
**Learning:** Even when using environment variables, injecting them into the frontend build makes them publicly accessible in the source code or browser memory.
**Prevention:** Always proxy sensitive API requests through a server-side handler (like a Vercel Function) to keep secrets secure on the server.
