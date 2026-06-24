## 2025-05-14 - [CRITICAL] API Key Exposure via Client-Side Injections
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client bundle via Vite's `define` configuration, making it visible to anyone who inspects the frontend code or monitors network traffic.
**Learning:** Frontend-only architectures that use direct SDK calls to external AI services often leak secrets if not properly proxied. Even if the key is stored in `.env`, tools like Vite can accidentally "bake" it into the production build if configured to do so.
**Prevention:** Always use a backend proxy for sensitive API calls. Ensure that secrets are only accessed in server-side environments (Node.js, edge functions) and never passed to the client-side `define` or `provide` mechanisms in build tools.
