## 2025-05-25 - [MEDIUM] Error Information Leakage
**Vulnerability:** Raw Gemini API errors and stack traces were being logged to the browser console.
**Learning:** Raw errors from external APIs can contain sensitive metadata like project IDs, model names, or internal error reasons that shouldn't be exposed to users.
**Prevention:** Always catch and wrap external API errors in generic messages before they reach the client-side UI or console.
