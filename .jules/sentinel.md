# SENTINEL'S JOURNAL - CRITICAL SECURITY LEARNINGS

## 2026-05-31 - [Exposed API Key and Missing Security Headers]
**Vulnerability:** The Gemini API key is injected into the client-side bundle via Vite's `define` configuration, making it accessible to anyone who can view the browser's source or network logs. Additionally, the application lacks essential security headers like CSP and X-Frame-Options.
**Learning:** Using `define` in Vite for sensitive secrets like API keys is a common but dangerous pattern as it hardcodes the value in the final JS artifact. Missing headers expose the app to XSS and clickjacking.
**Prevention:** Secrets should be handled server-side. For static deployments, use proxy functions (e.g., Vercel Functions) to keep keys secret. Always define a strict CSP and other security headers in the deployment configuration (e.g., `vercel.json`).

## 2026-05-31 - [Securing AI Integration via Server-Side Proxy]
**Vulnerability:** Moving AI logic to the server side prevents API key leakage and keeps system instructions confidential.
**Learning:** Even if the API key is secured, exposing system instructions can allow attackers to understand and potentially bypass AI safeguards.
**Prevention:** Always implement a server-side gateway for LLM requests. This ensures that only authorized prompts are sent and that sensitive configurations remain protected.
