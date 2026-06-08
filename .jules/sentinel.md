## 2025-05-22 - GEMINI_API_KEY exposure in client-side bundle

**Vulnerability:** The `GEMINI_API_KEY` was being baked into the client-side production bundle via Vite's `define` configuration. This makes the API key visible to anyone who inspects the application's JavaScript files in the browser.

**Learning:** Vite's `define` performs static string replacement at build time. Even if the key is loaded from an environment variable on the build server, it is replaced by its literal value in the final source code.

**Prevention:** Never use Vite's `define` for sensitive secrets. Instead, use a secure server-side proxy (like Vercel Edge Functions or a dedicated backend) to handle requests to external APIs that require authentication.
