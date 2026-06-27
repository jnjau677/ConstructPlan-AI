## 2025-05-14 - Visual Stability as Performance
**Learning:** Using `Math.random()` directly in the render loop for styling (e.g., positions of point cloud boxes) causes visual jitter on every re-render, creating a perceived performance issue and UX instability.
**Action:** Use `useMemo` to stabilize non-deterministic style values that should remain constant across renders, ensuring visual stability and reducing per-render computation.
