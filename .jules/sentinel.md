## 2025-05-15 - Securing Client-Side API Keys via Edge Proxy
**Vulnerability:** The Gemini API key was leaked to the client bundle via Vite's `define` configuration, making it visible in minified production code.
**Learning:** Vite's `define` performs static string replacement, which is unsuitable for sensitive secrets. Standard React/Vite environments require a backend proxy for secure API interactions.
**Prevention:** Always implement a Vercel Edge Function proxy for external AI APIs to keep secrets server-side and reduce client bundle size.
