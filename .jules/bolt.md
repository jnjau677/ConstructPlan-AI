## 2025-05-15 - Dynamic Module Chunking
**Learning:** In this architecture, heavy libraries like `recharts` and `react-markdown` were concentrated in specific leaf components. Code splitting at the route level in `App.tsx` reduced the initial payload by ~65% because the entry chunk no longer includes these dependencies.
**Action:** Always check `npm run build` output for large chunks (>500kB) and identify which modules can be lazily loaded to defer cost.
