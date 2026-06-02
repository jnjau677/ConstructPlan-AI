## 2026-06-02 - Consolidated redundant features array in SystemCapabilities.tsx
**Learning:** Hardcoded arrays defined within a component body (or JSX) are recreated on every render, leading to unnecessary memory allocations and increased GC pressure, especially for components that re-render frequently or have large data structures.
**Action:** Move static data arrays to module-level constants or use `useMemo` if the data depends on props/state to ensure stable references across renders.
