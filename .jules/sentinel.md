## 2025-05-15 - [CRITICAL] API Key Exposure via Vite Define
**Vulnerability:** The `GEMINI_API_KEY` was being injected into the client-side bundle using Vite's `define` configuration property.
**Learning:** Using `define` in Vite (or similar tools like Webpack's `DefinePlugin`) for sensitive environment variables bakes them directly into the minified JavaScript assets, making them easily discoverable by anyone viewing the source.
**Prevention:** Never use `define` for secrets. Always use a server-side proxy (like a Vercel Function or a dedicated backend) to handle communication with third-party APIs that require authentication.
