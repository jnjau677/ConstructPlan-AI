## 2025-05-24 - [LiDAR Visualization Jitter]
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary layout recalculations on every re-render.
**Action:** Use `useMemo` to stabilize non-deterministic values across renders to improve performance and UI stability.
