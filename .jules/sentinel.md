# Sentinel Security Journal

## 2025-03-06 - Securing AI Assist API Integration, Input Size and Environment ReferenceErrors
**Vulnerability:**
1. Lack of input length restriction on the AI architect interface, presenting potential payload size Denial of Service (DoS) risks.
2. In browser-based environments, text substitution via Vite config (`define`) for `process.env.*` can trigger a runtime `ReferenceError` if code attempts to dynamically evaluate or interact with `process` without a `try/catch` block.
3. Unsanitized developer logs (`console.error`) leaking raw Gemini API keys and system prompts if the client API errors out.

**Learning:**
- Clients should never trust raw outputs from internal API libraries directly into console outputs, as internal client libraries (like `@google/genai`) often concatenate the active API key inside the exception or URL string.
- Vite's textual substitution only applies to exact matches. If the matching fails or is run in a context where `process` is evaluated, the application throws a fatal JS ReferenceError, crashing the front-end application.

**Prevention:**
- Always wrap `process` evaluations in a try/catch block for safe degradation in pure browser bundles.
- Validate and reject payloads exceeding 4000 characters at both the UI layer (using HTML validation attributes) and service layer (using procedural assertions).
- Implement string sanitization on catch blocks before printing debug messages to developer logs or console pipelines.
