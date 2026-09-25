## 2026-09-25 - React.lazy Code Splitting and Framer Motion AnimatePresence
**Learning:** When using Framer Motion `AnimatePresence` with React `lazy` loaded sub-modules, placing `<Suspense>` inside the `motion.div` transition wrapper ensures tab switch transitions remain smooth without throwing component state errors during module loading.
**Action:** Always wrap dynamically imported tab views inside `<Suspense>` within the animation container when code splitting React route-like tab interfaces.
