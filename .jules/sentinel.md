## 2026-06-28 - Secure API Key Handling with Vercel Functions
**Vulnerability:** Gemini API key was exposed in the client-side bundle via Vite's `define` configuration.
**Learning:** Even if a key is intended to be used in an environment variable, Vite's `define` or `import.meta.env` will bake it into static assets if not carefully managed. A backend proxy is the only secure way to handle sensitive keys in a frontend application.
**Prevention:** Always use server-side proxies or serverless functions for sensitive API calls. Avoid injecting secrets into the client-side build process.
