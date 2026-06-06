## 2025-05-14 - Fix Hardcoded API Key Exposure

**Vulnerability:** The `GEMINI_API_KEY` was exposed to the client-side bundle via Vite's `define` configuration. This allowed any user to see the API key in the browser's source code or network tabs.

**Learning:** Vite's `define` performs static string replacement at build time. When used for secrets like API keys, it bakes the actual value into the production JavaScript bundle, making it accessible to anyone who can download the script.

**Prevention:** Always move API interactions that require sensitive keys to a server-side environment (like Vercel Edge Functions or a backend API). Use these server-side endpoints as a proxy for the frontend, keeping the keys securely on the server and accessed only through environment variables.
