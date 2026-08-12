# Sentinel Security Journal

## 2026-08-12 - Prevent Credential Leakage in AI Error Logs and Limit Input Payloads
**Vulnerability:** The AI architect assistant input was not bounded by length limits, posing a Potential Denial of Service (DoS) or payload size issue. Additionally, any API error caught in the service layer was dumped directly to `console.error` via the exception object, which could contain the sensitive `GEMINI_API_KEY` credential in full.
**Learning:** Raw API errors from SDK calls often include configuration details, full URLs, or key parameters in their stack traces or messages. Failing to sanitize these prior to logging can lead to security key exposures in monitoring dashboards or server log outputs.
**Prevention:** Always sanitize exception logs by removing or redacting any loaded API keys and enforce rigid payload size constraints (such as 4000 characters) on both client and service interfaces before dispatching external API requests.
