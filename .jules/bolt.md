## 2025-05-15 - [LiDAR Jitter Fix]
**Learning:** Using non-deterministic functions like `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize non-deterministic values and move static configuration arrays outside the component to reduce per-render allocations.
