## 2025-05-18 - React.lazy Code-Splitting for BIM Modules

**Learning:** Heavy dynamic dependencies like `recharts`, `date-fns`, and `react-markdown` bundled in main index JS can inflate initial load sizes to ~960 kB. By utilizing `React.lazy` and wrapping module switches inside `<Suspense>` within Framer Motion `motion.div`, sub-modules are split into standalone chunks, reducing initial bundle size to ~337 kB (~65% reduction).

**Action:** Wrap sub-module tabs in `React.lazy` and `Suspense` inside `motion.div` to ensure enter/exit transitions render properly while keeping initial entry chunks small.
