## 2026-05-28 - [Security Headers & Error Sanitization]
**Vulnerability:** Potential XSS, Clickjacking, and Information Leakage.
**Learning:** The application was missing standard security headers and logged full error objects from external API calls to the console.
**Prevention:**
- Implement a strict Content-Security-Policy (CSP) in 'vercel.json', specifically allowing connections to 'https://generativelanguage.googleapis.com' for Gemini API access.
- Always sanitize error logs by extracting only the 'message' property from Error objects to prevent leaking internal stack traces or secrets to the client console.
