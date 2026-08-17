## 2025-08-17 - React.lazy Dynamic Code Splitting for Sub-Modules

**Learning:** Implementing React.lazy dynamic code splitting for sub-modules in `src/App.tsx` combined with a high-fidelity `LoadingModule` component successfully reduced the initial main JS bundle chunk size from ~960 kB to ~337 kB (~65% reduction).

**Action:** Wrap lazy-loaded components inside `<Suspense>` within Framer Motion `AnimatePresence` containers to maintain smooth enter/exit view transitions without bundle size inflation.
