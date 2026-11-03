# Sentinel Security Journal

## 2026-11-03 - Input Validation and Console Error Leakage in AI Architect Service
**Vulnerability:** The AI Architect prompt textarea and `geminiService.ts` permitted unbounded text payloads and logged raw API error objects directly to the browser console. Unbounded inputs expose the backend to excessive token/quota consumption, denial of service (DoS), and cost bloat, while raw error logging risks dumping request metadata, auth tokens, or network topology.
**Learning:** Direct SDK invocations in frontend applications often overlook payload bounds and uncaught error object structures, inadvertently leaking internal details in console outputs.
**Prevention:** Enforce defense-in-depth input constraints on both UI components (`maxLength`) and service entrypoints, and sanitize error messages before logging or propagating to users.
