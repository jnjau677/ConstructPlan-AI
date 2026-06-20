## 2025-05-15 - [Stabilizing LiDAR Random Styles]
**Learning:** Using `Math.random()` directly in the render loop for component styling causes visual jitter and unnecessary recalculations on every re-render, even if the relevant data hasn't changed.
**Action:** Wrap non-deterministic styling values in `useMemo` to ensure stability across renders and improve perceived performance.
