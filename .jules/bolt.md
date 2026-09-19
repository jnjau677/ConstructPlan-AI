## 2026-03-30 - Dynamic Code Splitting for React Sub-modules

**Learning:** Static imports in `App.tsx` pull heavy dependencies (like `react-markdown` in `AiDesignAssistant`) into the main entry bundle. Using `React.lazy` for secondary tabs while keeping the primary view (`Dashboard`) eager reduced the main entry chunk from ~960 kB to ~735 kB (~23.5% reduction).
**Action:** Always check top-level imports in route/tab container components for opportunities to lazily load secondary tabs using `React.lazy` and a lightweight `Suspense` fallback.
