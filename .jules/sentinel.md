## 2025-05-15 - [API Key Exposure Mitigation]
**Vulnerability:** The Google Gemini API key was exposed to the client-side bundle via Vite's `define` configuration and direct SDK usage in the browser.
**Learning:** Hardcoding or injecting secrets into client-side code, even via environment variables at build time, makes them accessible to any user via the browser console or network tab.
**Prevention:** Always move sensitive logic and API keys to a server-side environment (like Vercel Edge Functions) and use the server as a proxy for client requests.

## 2025-05-15 - [Security Headers Implementation]
**Vulnerability:** The application was missing critical security headers, making it vulnerable to clickjacking, XSS, and other web-based attacks.
**Learning:** Default deployments often lack strict security policies. Explicitly defining headers like CSP and X-Frame-Options is essential for defense-in-depth.
**Prevention:** Include a `vercel.json` or equivalent configuration with a strict Content-Security-Policy and other security headers in all web projects.
