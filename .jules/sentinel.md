## 2025-05-15 - API Key Leakage via Vite Define

**Vulnerability:** The Gemini API key was being leaked to the client-side production bundle through Vite's `define` configuration, which performs static string replacement during the build process.

**Learning:** Vite's `define` property should never be used for sensitive secrets because it bakes the values directly into the minified JavaScript artifacts, making them accessible to anyone who inspects the frontend code.

**Prevention:** Always use a server-side proxy or backend for sensitive API calls that require secrets. Secrets should only be accessed in server-side environments (Node.js, Edge Functions, etc.) and never exposed to the browser.
