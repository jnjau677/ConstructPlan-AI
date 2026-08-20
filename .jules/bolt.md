## 2025-05-18 - Dynamic Code Splitting with Suspense inside Framer Motion AnimatePresence

**Learning:** Static top-level imports of all sub-modules loaded heavy dependencies (`recharts`, `date-fns`, `react-markdown`) into a monolithic 960 kB initial JS bundle. Dynamic code-splitting with `React.lazy` isolated module chunks and reduced the main initial JS chunk to ~337 kB (~65% reduction). Placing `<Suspense>` inside `motion.div` ensures seamless tab transitions with `AnimatePresence`.

**Action:** Always lazy load heavy sub-modules in multi-tab SPAs and ensure Suspense boundaries reside within individual animated container wrappers.
