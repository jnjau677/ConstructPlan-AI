## 2025-05-22 - [CRITICAL] Leaked API Key in Client Bundle
**Vulnerability:** The `GEMINI_API_KEY` is injected into the client-side bundle via Vite's `define` configuration and accessed directly in the frontend service.
**Learning:** Using `define` in `vite.config.ts` to make environment variables available to the frontend effectively hardcodes them into the generated JavaScript, making them public.
**Prevention:** Always use a server-side proxy or edge function to handle sensitive API requests that require secrets. Never expose secrets to the client-side environment.
