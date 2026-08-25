## 2025-05-18 - Dynamic React.lazy Code-Splitting for BIM Modules

**Learning:** Heavy libraries like `recharts` (used in `Dashboard`) and `react-markdown` (used in `AiDesignAssistant`) were causing a massive initial JS bundle size of ~960 kB when loaded synchronously on initial page render. Splitting route sub-modules into dynamic chunks via `React.lazy()` reduced initial bundle chunk size down to ~337 kB (~65% reduction), significantly improving initial page load time.

**Action:** When working on tabbed or multi-view single page applications with heavy dependencies, always dynamically import module components using `React.lazy` and fallback with a themed `<Suspense>` indicator.
