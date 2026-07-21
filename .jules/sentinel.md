# Sentinel Security Journal

## 2026-07-22 - Client-Side API Key Leakage via Vite Build Define Injection
**Vulnerability:** The application was directly calling the Gemini API from the client-side browser using `@google/genai`. During production builds, Vite was configured with a `define` block that statically inlined the `GEMINI_API_KEY` directly into the bundled assets. Anyone downloading or loading the compiled client-side JavaScript could easily extract the active Gemini API key from the browser bundle.

**Learning:** When developing Single-Page Applications (SPAs) with modern build tools like Vite, the developer must never use `define` or frontend environment prefixes (like `VITE_`) to inject private backend API keys. Any build-time or runtime environment variables exposed directly to the client are bundled into the static JS code. Moving AI operations to serverless proxy handlers on backend platforms (like Vercel functions under `/api/`) secures keys completely and has the secondary benefit of keeping system prompts/instructions/personas completely confidential.

**Prevention:** Always implement a backend proxy endpoint for sensitive third-party APIs. Eliminate all build-time define/env injections for backend secrets, and use post-build `grep` verification checks to ensure secret patterns are absent from compiled output assets (`dist/`).
