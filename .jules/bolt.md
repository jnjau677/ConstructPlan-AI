## 2026-06-17 - Stabilized LiDAR Point Cloud Visualization
**Learning:** Using non-deterministic functions like `Math.random()` directly in the render loop for styling properties causes visual jitter (layout instability) and unnecessary recalculations on every re-render. This is especially problematic for components with complex visual overlays or frequent state updates.
**Action:** Always memoize random or expensive calculated values using `useMemo` when they are used for styling or positioning elements that should remain stable across re-renders.
