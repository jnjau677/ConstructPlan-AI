## 2025-05-14 - Stabilizing LiDAR Point Rendering
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations (~60 calls per render) on every re-render.
**Action:** Always memoize random or non-deterministic values used for rendering styles with `useMemo` at the top level of the component to ensure visual stability and reduce CPU overhead.
