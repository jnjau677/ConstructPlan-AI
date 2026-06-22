## 2025-05-15 - [Securing Gemini API Key]
**Vulnerability:** The `GEMINI_API_KEY` was exposed in the client-side bundle via Vite's `define` configuration.
**Learning:** Vite's `define` performs static replacement, baking environment variables into the build. Even if not directly used in the code, it can be leaked if not handled carefully.
**Prevention:** Always use a backend proxy for sensitive API keys. Ensure the proxy correctly loads environment variables (e.g., using `dotenv.config()`) and maintains the integrity of AI persona instructions.
