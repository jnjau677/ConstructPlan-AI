## 2026-03-31 - Code-splitting secondary views with React.lazy in single-page BIM dashboard

**Learning:** Heavy libraries like `react-markdown` (used in `AiDesignAssistant`) and secondary calculator/analysis tools significantly inflate the initial entry bundle (`index.js` was ~960 kB) even when users only land on the primary Dashboard. Splitting secondary components into lazy-loaded chunks using `React.lazy()` reduces initial main bundle size to ~734 kB (~23.5% reduction) without degrading the eager render performance of `Dashboard`.

**Action:** Keep core landing views (e.g., `Dashboard`) eagerly imported, while lazy-loading secondary sub-modules via `React.lazy()` wrapped in `React.Suspense` with an animated `LoadingModule` fallback inside Framer Motion's `AnimatePresence`.
