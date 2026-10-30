## 2025-05-18 - Route Code Splitting for Secondary Subcomponents

**Learning:** In React single-page applications with tabbed navigation, synchronously importing heavy secondary components (containing libraries like recharts, react-markdown, or canvas editors) inflates the initial bundle size (~960 kB). Keeping the primary Dashboard eagerly imported while lazy-loading secondary routes via `React.lazy()` reduces the initial bundle size by ~23.5% down to ~735 kB.

**Action:** Place `React.Suspense` inside `motion.div` within `AnimatePresence` so Framer Motion tab transitions function cleanly alongside lazy-loaded modules.
