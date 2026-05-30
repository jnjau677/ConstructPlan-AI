# Sentinel Security Journal 🛡️

This journal records critical security learnings, vulnerability patterns, and reusable security patterns specific to the ConstructPlan AI project.

## 2025-05-15 - Sanitize Error Logs
**Vulnerability:** Accidental leakage of API keys and internal implementation details in the browser console through default error logging.
**Learning:** React/Vite environments often expose process.env variables, and passing raw error objects to `console.error` can reveal sensitive configuration if the library (like @google/genai) includes them in the error object.
**Prevention:** Always extract only the `message` property from error objects and throw generic user-facing errors in services.
