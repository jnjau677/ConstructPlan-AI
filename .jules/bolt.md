## 2026-07-17 - AnimatePresence and Lazy-Loaded Suspense Boundaries
**Learning:** When using Framer Motion's `AnimatePresence` with lazy-loaded components via `React.lazy`, placing the `<Suspense>` boundary outside of the `<motion.div>` wrapper breaks the exit and enter transitions during component resolution. This causes layout jumping or missing transition states.
**Action:** Always place the `<Suspense>` boundary directly inside the animated `<motion.div>` child rather than wrapping the entire animation block, ensuring transitions and lazy loading resolve in the correct sequence.
