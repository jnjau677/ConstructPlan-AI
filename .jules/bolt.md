# Bolt's Performance Journal

## 2025-05-15 - Stabilizing Randomness in Render
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize non-deterministic values that don't need to change across renders unless specific dependencies change.
