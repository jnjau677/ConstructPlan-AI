## 2025-05-14 - Secure API Key Handling via Server-Side Proxy
**Vulnerability:** GEMINI_API_KEY was exposed to the client-side bundle via Vite's `define` configuration, making it accessible to anyone inspecting the frontend assets.
**Learning:** Using `define` in `vite.config.ts` to inject environment variables into the client bundle is dangerous for sensitive secrets, as they are baked into the static build artifacts.
**Prevention:** Always use server-side proxies (like Vercel Functions) for sensitive API calls. For local development, Vite's `configureServer` middleware combined with `server.ssrLoadModule` can be used to mock the production serverless environment and securely handle TypeScript API handlers without exposing keys to the client.
