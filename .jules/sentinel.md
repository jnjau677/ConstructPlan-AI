## 2024-03-20 - API Key Leak via Vite Define
**Vulnerability:** The Gemini API key was being leaked to the client-side bundle because it was included in the `define` block of `vite.config.ts`.
**Learning:** Vite's `define` property performs a global search-and-replace at build time, which means any value put there will be hardcoded into the production JavaScript artifacts and visible to anyone inspecting the code.
**Prevention:** Always route API requests through a server-side proxy when using sensitive keys. Never use Vite's `define` or `import.meta.env` for secrets that should remain on the server.
