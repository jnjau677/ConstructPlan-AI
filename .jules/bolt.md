## 2026-08-24 - React.lazy Code Splitting for BIM Sub-Modules

**Learning:** Heavy sub-module dependencies (such as `recharts`, `date-fns`, and markdown parsers) bundled in single entry points cause significant initial JavaScript payload bloat (>900 kB). Using `React.lazy` and dynamic imports splits these modules into separate chunks, drastically improving initial page load time.
**Action:** Always wrap dynamically imported tab modules with `React.Suspense` inside `AnimatePresence` or route containers to maintain smooth transitions and minimal initial bundle size.
