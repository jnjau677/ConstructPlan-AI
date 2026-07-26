## 2026-07-26 - React.lazy & useMemo Optimization
**Learning:** Code splitting with React.lazy can reduce main entry bundle size by ~65%, shifting heavy dependency loads to async chunks. Furthermore, using useMemo on heavy dynamic renders like random coordinate grids prevents costly visual shifts and math re-calculations.
**Action:** Use React.lazy for larger, tab-based views to maintain a lightweight entry bundle and wrap dynamic visual structures in useMemo.
