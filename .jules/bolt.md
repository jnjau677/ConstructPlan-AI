## 2026-06-14 - Component-Level Code Splitting
**Learning:** Implementing React.lazy/Suspense for top-level tabbed components reduced the initial JS bundle from ~951kB to ~338kB (~64% reduction). Heavy dependencies like 'recharts' (~385kB) and 'react-markdown' (~181kB) were successfully moved out of the critical path.
**Action:** Always prefer dynamic imports for non-critical modules or tabs that are not visible on initial mount to optimize Time to Interactive (TTI).
