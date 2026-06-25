## 2025-06-25 - [LiDAR Jitter & Redundant Allocations]
**Learning:** Using `Math.random()` directly in the render loop for component styles causes visual jitter and forces React to update the DOM on every re-render, even if the parent state change is unrelated. Additionally, defining static arrays inside the component body leads to unnecessary re-allocations.
**Action:** Use `useMemo` to stabilize non-deterministic style values and move static configuration arrays to top-level constants.
