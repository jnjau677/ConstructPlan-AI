## 2025-05-10 - Framer Motion AnimatePresence with Dynamic React.lazy Code Splitting
**Learning:** When using Framer Motion's `AnimatePresence` with lazy-loaded components (`React.lazy`), placing the `Suspense` boundary inside `motion.div` ensures tab enter/exit transitions execute cleanly while secondary JS bundle chunks load asynchronously.
**Action:** Always wrap dynamically imported sub-modules inside `<Suspense>` within the `motion.div` wrapper child when using `AnimatePresence`.
