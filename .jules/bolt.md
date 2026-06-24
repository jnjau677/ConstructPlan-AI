## 2025-05-15 - Stabilizing Non-deterministic UI Rendering
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and redundant re-calculations on every re-render, even when the data hasn't conceptually changed.
**Action:** Always move non-deterministic or expensive style/data calculations into `useMemo` hooks or pre-calculate them outside the component if possible. Stabilization of UI state is a key performance win in highly interactive apps.
