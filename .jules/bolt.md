# Bolt Performance Journal

## 2025-05-15 - Stabilize LiDAR point styles
**Learning:** Calling `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize non-deterministic values that are used for rendering but don't need to change between re-renders unless their dependencies change.
