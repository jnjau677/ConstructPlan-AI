## 2025-05-22 - Client-side Secret Leak via Vite Define

**Vulnerability:** The `GEMINI_API_KEY` was being leaked into the production JavaScript bundle because it was included in Vite's `define` configuration.

**Learning:** Vite's `define` performs static string replacement during the build process. Any environment variables included here are baked directly into the minified code and are visible to anyone inspecting the frontend assets.

**Prevention:** Never use Vite's `define` or `import.meta.env` (with the `VITE_` prefix) for sensitive secrets. Always use a server-side proxy (Edge Functions, Express, etc.) to handle API calls that require authentication, keeping the keys on the server.
