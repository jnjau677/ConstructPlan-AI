## 2025-05-15 - Gemini API Key Exposure
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` property and used directly in the browser via the `@google/genai` SDK.
**Learning:** Using `define` in Vite to inject environment variables makes them available in the production build's static assets, even if they are not prefixed with `VITE_`.
**Prevention:** Always proxy sensitive API requests through a server-side handler. Use Vercel Functions or a similar backend to keep secrets out of the client-side code.
