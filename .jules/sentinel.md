## 2025-05-15 - API Key Leak via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was leaked into the client-side production bundle because it was passed to Vite's `define` configuration for static replacement.
**Learning:** Vite's `define` performs a direct string replacement during build, which is insecure for sensitive secrets as they become part of the minified assets.
**Prevention:** Always use a server-side proxy or edge function to handle external API requests that require secret keys. Ensure secrets never enter the client-side build pipeline.
