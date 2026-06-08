## 2026-06-08 - Large Bundle Bottleneck in React Single-Page Application
**Learning:** The application had a monolithic initial bundle of ~958kB, largely driven by heavy dependencies in non-critical views (e.g., `recharts` in Dashboard, `react-markdown` in AI Assistant).
**Action:** Use `React.lazy` and `Suspense` for component-level code splitting at the main layout level. This successfully reduced the initial bundle size by ~64% (from ~958kB to ~338kB) by deferring the loading of heavy modules until the user navigates to those tabs.
