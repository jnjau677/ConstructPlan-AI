## 2025-06-22 - [Stable Rendering]
**Learning:** Using `Math.random()` directly in the render loop for styling (like absolute positions/sizes) causes visual jitter and redundant layout/paint cycles on every re-render.
**Action:** Use `useMemo` to stabilize non-deterministic values used in rendering and extract static configuration objects outside the component to prevent redundant re-allocations.
