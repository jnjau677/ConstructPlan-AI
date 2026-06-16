## 2026-06-16 - Stabilized Non-deterministic Render Values
**Learning:** Using 'Math.random()' directly in the render loop for styling properties (width, height, positioning) causes visual jitter and unnecessary layout recalculations on every re-render, as the values change even when the specific component logic hasn't.
**Action:** Always use 'useMemo' to stabilize non-deterministic values that should remain constant for the lifetime of the component or until specific dependencies change.
