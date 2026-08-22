## 2026-08-22 - React.lazy Code Splitting for Sub-Modules

**Learning:** Heavy dependencies like `recharts` and `react-markdown` in single tab components cause large initial bundle chunks (~960 kB) if statically imported in `App.tsx`. Splitting sub-modules into dynamic `React.lazy` chunks slashes the initial entry point bundle size down to ~337 kB (~65% reduction) without modifying third-party packages or complex bundler options.

**Action:** Wrap top-level route/tab view components in `React.lazy()` with a Suspense boundary inside Framer Motion's `AnimatePresence` to optimize initial load times across SPA applications.
