# Sentinel Security Journal

## 2026-07-26 - Chat Input Size Limit and Safe Error Logging in Gemini Integration
**Vulnerability:** Large payloads/inputs to Gemini models can cause server or client-side Denial of Service, or lead to excessive processing latency and API costs. Additionally, raw console error logging could leak the API Key (`GEMINI_API_KEY`) or internal system details/stack traces to client consoles or logs if an API request fails.
**Learning:** External API errors often reflect the request context or configuration parameters (including API keys/credentials). Without explicit error sanitization and redaction before logging, these secrets are easily leaked. Similarly, frontend UI length controls (like HTML attributes) must always be accompanied by programmatic checks in the API service/layer to ensure robust protection.
**Prevention:** Always sanitize, redact, and translate raw exception logs before printing or throwing them, and enforce consistent input size validations (e.g. 4000-character limit) on both UI inputs and the back-end/service API entry points.
