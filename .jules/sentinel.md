## 2025-02-18 - Enforcing Input Boundaries and API Key Sanitization
**Vulnerability:** Unrestricted input payload sizes leading to potential denial of service (DoS) and risk of exposing raw Gemini API credentials in un-sanitized console error logs.
**Learning:** Applications integrating third-party GenAI SDKs often pass raw errors or config objects (which contain API keys) to standard logs, risking key leaks in production logs or error reporting services. Large unsanitized inputs also strain system performance and trigger excessive API usage fees.
**Prevention:** Always enforce payload size boundaries (e.g., 4000-character limit) on both the client (UI) and service layers, and actively scrub any sensitive API tokens from console error messages and stack traces before logging.
