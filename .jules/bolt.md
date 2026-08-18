## 2025-05-18 - Route-based Code Splitting with React.lazy and Framer Motion AnimatePresence

**Learning:** When using Framer Motion's `AnimatePresence` with `React.lazy` loaded components, placing `<Suspense>` inside the `motion.div` ensures seamless enter/exit transition animations while chunk splitting reduces main JS bundle footprint significantly (~960 kB down to ~337 kB, a ~65% reduction).

**Action:** Always wrap dynamically imported module components in `<Suspense>` inside animation boundaries when introducing route-level code splitting in Vite/React apps.
