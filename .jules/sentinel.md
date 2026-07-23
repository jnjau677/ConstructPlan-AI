## 2026-07-23 - Single-Page App LLM Integration Protection
**Vulnerability:** Single-page applications calling external third-party LLM APIs directly from the client can leak sensitive API keys or credentials in logs/stack traces if the API fails, and are vulnerable to Denial of Service (DoS) and resource abuse if input lengths are not strictly restricted at both the UI and service boundaries.
**Learning:** Even with client-side environment variables, raw error objects logged to the console via `console.error` can dump request headers or query parameters containing active API keys. Furthermore, restricting input length on HTML textareas (`maxLength`) can easily be bypassed; service-level limits are necessary to provide defense-in-depth.
**Prevention:**
1. Always parse error messages and use high-entropy regex filters to replace credentials/tokens with `[REDACTED]` before printing them to the console or logs.
2. Implement symmetric length restrictions on both the UI component (`maxLength`) and the service-level boundary (`askAiArchitect`) to fail fast and prevent large payload resource abuse.
