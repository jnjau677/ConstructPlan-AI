## 2025-07-08 - Visual Jitter from Render-Loop Randomness
**Learning:** Using `Math.random()` directly in the render loop for component styling (e.g., LiDAR point cloud mocks) causes visual jitter and instability because values change on every re-render, even if unrelated state changes occur in the parent.
**Action:** Isolate visual elements driven by random data into sub-components and stabilize the data using `useMemo` with an empty dependency array to ensure visual consistency across re-renders.
