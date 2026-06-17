## 2025-05-15 - Stabilized LiDAR Point Cloud Styles

**Learning:** Using `Math.random()` directly in the render loop for component styling (width, height, position) causes visual jitter and performance degradation. Every re-render (even from unrelated state changes) generates new random values, forcing the browser to perform unnecessary layout recalculations and repaints.

**Action:** Always wrap non-deterministic style or data generation in a `useMemo` hook with appropriate dependencies (or an empty array for static-but-random values) to ensure stability across re-renders.
