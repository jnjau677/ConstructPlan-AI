## 2025-05-18 - Client-Side API Key Exposure Fix
**Vulnerability:** GEMINI_API_KEY was exposed to the browser bundle via Vite's `define` config and used directly in the frontend SDK.
**Learning:** Using `define` in Vite performs static replacement, baking environment variables into the JS assets, which is insecure for sensitive secrets.
**Prevention:** Always route LLM or third-party API traffic through a server-side proxy (e.g., Vercel Edge Functions or an Express middleware) to keep secrets off the client and protect system instructions.
