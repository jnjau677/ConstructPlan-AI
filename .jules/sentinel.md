## 2025-02-15 - [API Key Exposure in Built Assets]
**Vulnerability:** The client-side application had its third-party API key (`GEMINI_API_KEY`) exposed directly to the public/browser inside production bundle assets, as it was injected via Vite's `define` config option during build time.
**Learning:** Hardcoding or embedding API keys using client-side definitions (`define` in Vite/Webpack) is insecure because any client-side bundle is fully readable by anyone.
**Prevention:** Always move third-party API integrations that require secret keys to the server side (e.g., Vercel serverless functions), and proxy requests from the client. Ensure that the serverless endpoints do not leak stack traces or config details on failure.
