## 2025-05-22 - API Key Exposure via Client-Side Injection
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` property, making it accessible to anyone via browser tools.
**Learning:** Vite's `define` is a compile-time replacement that bakes values into the static JS assets. For sensitive keys, a backend proxy is the only secure way to handle authentication.
**Prevention:** Always use a backend proxy for external AI APIs that require secret keys. Keep sensitive configuration like `systemInstruction` on the server to prevent prompt injection or leakage of business logic.
