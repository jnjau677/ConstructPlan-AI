## 2026-08-19 - Memoize Random UI Coordinate Generators in Visualizers
**Learning:** Components rendering pseudo-random data arrays (e.g. 15 LiDAR point cloud visualization blocks) without `useMemo` execute `Math.random()` on every state change in parent or local components. This causes visual jittering and unnecessary style recalculations.
**Action:** Always wrap procedural/random geometry and coordinates in `useMemo` with an empty dependency array when they should remain static across re-renders.
