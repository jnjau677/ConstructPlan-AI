## 2026-07-25 - Secure Proxying of Gemini API Key
**Vulnerability:** The Gemini API Key was being injected into the client-side bundle via Vite's `define` configuration (`process.env.GEMINI_API_KEY`), allowing any client visiting the page to extract the secret key.
**Learning:** Initializing third-party AI or cloud SDKs on the frontend with hardcoded/injected secrets results in API key exposure. Moving critical API key usage to serverless/backend endpoints protects the credentials.
**Prevention:** Always proxy API calls that require sensitive secrets through a serverless backend function. Do not expose secrets via build-time bundler plugins on the client.
