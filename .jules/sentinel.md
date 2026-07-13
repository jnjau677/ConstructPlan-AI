## 2025-05-15 - Gemini API Key Exposure in Client Bundle
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side JavaScript bundle using Vite's `define` property, making it accessible to anyone viewing the source code.
**Learning:** Vite's `define` property performs direct string replacement in the source code during build, which is dangerous for sensitive environment variables.
**Prevention:** Always handle sensitive API interactions on the server-side (e.g., via Vercel Functions) and never expose secrets to the client bundle.
