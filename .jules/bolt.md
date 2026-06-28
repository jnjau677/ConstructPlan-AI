## 2025-05-15 - [LiDAR Stability & Constant Hoisting]
**Learning:** Using `Math.random()` in the render loop for visualization components (like LiDAR point clouds) causes visual jitter during re-renders because properties change even when the specific visualization isn't the target of the update. Hoisting static data structures prevents redundant object allocations.
**Action:** Always memoize random visualization properties using `useMemo` and hoist static configuration arrays to the module level.
