## 2025-05-14 - Fix Gemini API Key Exposure

**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle via Vite's `define` configuration. This made the secret key accessible to anyone inspecting the frontend code.

**Learning:** Using `define` or `import.meta.env.VITE_*` in Vite for sensitive keys is dangerous as they are baked into the static assets. For AI-powered apps, this also exposes the system instructions (prompt engineering) to the client.

**Prevention:** Always use a server-side proxy (like a Vercel Function or a custom backend) to interact with sensitive APIs. Keep system instructions on the server to prevent prompt manipulation and protect intellectual property.
