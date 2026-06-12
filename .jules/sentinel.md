## 2026-06-12 - Secret leakage via Vite define
**Vulnerability:** GEMINI_API_KEY was exposed in the production bundle because Vite's `define` configuration performs static string replacement.
**Learning:** Never use Vite `define` for sensitive secrets as they are baked into the minified client-side JS. Direct use of AI SDKs on the client often forces this anti-pattern.
**Prevention:** Always proxy sensitive third-party API calls through a server-side function (Edge Function) to keep keys secure and reduce the frontend attack surface.
