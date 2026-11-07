# Sentinel Security Journal

## 2026-05-25 - AI Assistant Input Length Restriction and Error Sanitization
**Vulnerability:** Unbounded user input in the AI Architect chat allows sending arbitrarily large payloads to the backend AI service, causing client memory inflation, unexpected API billing spikes, and potential denial of service. Additionally, logging raw error objects directly to console (`console.error("Gemini API Error:", error)`) risks leaking sensitive API or configuration parameters.
**Learning:** Browser-based AI interfaces need defense-in-depth protection: UI constraints (`maxLength`) enhance UX and prevent large accidental pastes, while service-level validation guarantees enforcement even if UI boundaries are bypassed.
**Prevention:** Always pair client-side input boundaries with service-level payload validation and sanitize error messages before logging or surfacing them.
