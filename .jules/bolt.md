## 2025-05-15 - Visual Jitter in LiDAR Simulation
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes significant visual jitter when the component re-renders due to unrelated state changes (e.g., toggling UI overlays). This breaks the "simulation" feel and causes unnecessary layout recalculations.
**Action:** Always stabilize random simulation data using `useMemo` with an empty dependency array to ensure visual consistency across re-renders.
