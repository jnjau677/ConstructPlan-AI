## 2026-03-31 - Dynamic React.lazy Code Splitting for Tab Modules

**Learning:** Implementing `React.lazy()` dynamic imports for tab sub-modules reduced the main application bundle from ~960 kB (`index.js`) down to ~337 kB (`index.js`), with individual module chunks (`AiDesignAssistant`, `Dashboard`, etc.) loaded asynchronously on demand. Wrapping lazy-loaded components in `<Suspense>` within Framer Motion's `AnimatePresence` ensured smooth tab transitions without visual glitches.

**Action:** For large React SPA applications with multiple views/tabs importing heavy dependencies (like Recharts or Markdown parsers), always code-split sub-module components using `React.lazy()` and provide a lightweight, styled `Suspense` fallback.
