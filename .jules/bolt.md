## 2026-09-06 - Dynamic Code Splitting with React.lazy and Framer Motion AnimatePresence
**Learning:** When using Framer Motion `AnimatePresence` around tab views, placing the `Suspense` boundary inside the `motion.div` wrapper ensures seamless transition animations while sub-modules load asynchronously on demand.
**Action:** Always wrap dynamically imported route/tab components in `<Suspense>` within the animated container to prevent initial bundle bloat (reduced main JS chunk by ~65%).
