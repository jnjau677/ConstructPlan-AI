## 2026-05-30 - [Memoizing Random UI Data]
**Learning:** Generating random values (like for LiDAR point clouds) directly in the render body causes visual jitter and performance overhead due to style recalculations on every re-render. Memoizing this data with `useMemo` ensures UI stability and efficiency.
**Action:** Always check for random/generative data in render paths and memoize them if they are meant to be stable decorative elements.
