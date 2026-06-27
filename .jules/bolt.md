## 2026-06-27 - [LiDAR Visualization Stabilization]
**Learning:** Using 'Math.random()' directly in the render loop for styling causes significant visual jitter and unnecessary re-computations on every state change.
**Action:** Use 'useMemo' to stabilize random values used for layout or styling in high-frequency render components.
