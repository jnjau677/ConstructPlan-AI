## 2025-05-18 - Code-Splitting and LiDAR Block Stabilization

**Learning:** Heavy libraries like `recharts` (used in Dashboard), `date-fns`, and `react-markdown` (used in AiDesignAssistant) inflated the single main JS bundle to ~938 KB. Implementing dynamic imports with `React.lazy()` for sub-modules in `src/App.tsx` reduced the initial JS bundle size to ~329.66 KB (~65% reduction in initial download and parse size). Placing the `<Suspense>` boundary inside the `<motion.div>` child ensured Framer Motion's `AnimatePresence` mode="wait" transitions remained smooth without visual layout jumpiness. In addition, memoizing randomly generated LiDAR coordinates in `SiteAnalysis.tsx` prevented unnecessary recalculation and DOM attribute updates during parent component re-renders.

**Action:** Always wrap `React.lazy` loaded sub-modules inside `<Suspense>` boundaries within Framer Motion animated containers, and isolate heavy view components (e.g. charts, markdown parsers) into dynamic chunks.
