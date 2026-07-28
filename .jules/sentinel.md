## 2025-07-28 - Browser ReferenceError on direct process.env access
**Vulnerability:** A potential ReferenceError where `process` is not defined in the browser, causing the application's fallback error handler to hard-crash rather than displaying user-friendly error messages or failing securely.
**Learning:** In browser-based Vite applications, references to `process.env` are textually replaced during compilation. However, dynamic runtime checks or references in fallback catch blocks may still trigger ReferenceErrors if `process` is completely undefined in the browser window context.
**Prevention:** Always wrap accesses to `process.env` in `try/catch` blocks or use `typeof process !== 'undefined'` checks before accessing variables to ensure absolute safety and graceful failures.
