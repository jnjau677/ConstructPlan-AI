## 2025-05-15 - Prevented API Key Exposure via Server-Side Proxy
**Vulnerability:** Critical exposure of GEMINI_API_KEY in client-side bundles.
**Learning:** Vite's `define` configuration performs static string replacement, baking sensitive environment variables directly into the minified production JavaScript, making them easily retrievable by anyone with access to the frontend assets.
**Prevention:** Always use server-side proxies (like Vercel Edge Functions) for external API calls requiring sensitive keys. Use native `fetch` in edge functions to keep the bundle size small and avoid unnecessary dependencies. Sanitize error messages to avoid leaking internal stack traces or configuration details.
