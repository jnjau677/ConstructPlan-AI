## 2025-05-15 - Stabilizing Random Values in Render Loop
**Learning:** Using `Math.random()` directly within a component's render loop or styling properties causes the component to be non-deterministic. This leads to visual "jitter" on every re-render and forces React to perform unnecessary DOM updates even if the underlying data hasn't changed.
**Action:** Always wrap non-deterministic value generation (like random positions, sizes, or IDs) in `useMemo` with appropriate dependencies (or an empty array if they should be stable for the lifetime of the component).
