## 2025-06-21 - API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being statically baked into the client-side bundle via Vite's `define` configuration.
**Learning:** Using `define` in Vite performs a string replacement at build time, making environment variables accessible to the browser but also visible to anyone inspecting the source code or network traffic.
**Prevention:** Always use a backend proxy for sensitive API interactions. Secrets should only be accessed in server-side environments and never exposed to the client bundle.
