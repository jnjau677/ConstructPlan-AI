## 2025-05-15 - [Lidar Point Cloud Instability]
**Learning:** In `SiteAnalysis.tsx`, LiDAR point cloud data is recalculated on every render using `Math.random()` within the render loop. This causes visual jitter (layout shifts) whenever any state change occurs (e.g., toggling an overlay), and introduces unnecessary GC pressure.
**Action:** Use `useMemo` to stabilize random data and ensure it only regenerates when explicitly needed.
