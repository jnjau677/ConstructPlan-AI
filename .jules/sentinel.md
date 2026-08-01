# Sentinel Journal

This journal documents critical security learnings, vulnerability patterns, and prevention strategies specific to this codebase.

## 2026-08-01 - Input Limitation and Log Sanitization
**Vulnerability:** Large payload input risks (potential Denial of Service or LLM exploitation) and potential credential leaks (API keys) via raw console error logging.
**Learning:** External library error messages or API response errors can sometimes bubble up and include environment configuration details or secrets (such as the `GEMINI_API_KEY`) in their stack traces or error text. Also, unbounded user inputs on AI chat prompts could lead to excessive processing latency or server-side exploitation.
**Prevention:**
1. Enforce a strict input character limit (e.g., 4000 characters) both at the UI (textarea `maxLength`) and at the service logic layer.
2. Implement a logging sanitizer helper function that intercepts errors and redacts any occurrence of highly sensitive strings (like `GEMINI_API_KEY`) before outputting to any console or logging system.
