## 2025-05-15 - Hardcoded API Key Exposure via Vite Define
**Vulnerability:** The Gemini API key was being injected into the client-side bundle using Vite's `define` configuration. This made the key visible in the minified production JavaScript files.
**Learning:** Vite's `define` performs static string replacement at build time. Anything put there is baked into the frontend code and is not secure for sensitive secrets.
**Prevention:** Always use a server-side proxy (like Vercel Edge Functions) to handle requests requiring sensitive API keys. Use the proxy to hide the key from the client and keep it in the server environment.
