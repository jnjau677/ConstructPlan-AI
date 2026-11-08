## 2025-05-18 - Route-level code splitting with Framer Motion AnimatePresence
**Learning:** When using Framer Motion's `AnimatePresence` with `mode="wait"`, wrapping the dynamic content inside `motion.div` with `<Suspense>` ensures that exit animations finish before the new chunk is suspended and fetched, avoiding broken exit transitions and layout jumps.
**Action:** Always place `<Suspense>` inside the animated container (`motion.div`) rather than outside `AnimatePresence` when lazy-loading tab panels.
