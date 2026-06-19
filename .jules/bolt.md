## 2025-05-15 - Stabilizing random values in renders
**Learning:** Using non-deterministic functions like `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize these values at the top level of the component.
