# Sentinel's Security Journal

## 2025-05-14 - Security Header Enhancement & Log Sanitization
**Vulnerability:** Potential XSS/Clickjacking due to missing security headers; potential API key leakage in error logs.
**Learning:** Default Vercel configurations might lack strict security headers; logging raw error objects in the frontend can expose environment variables like `GEMINI_API_KEY` if they are accidentally included in the error metadata.
**Prevention:** Always implement a strict CSP and sanitize frontend error logs.
