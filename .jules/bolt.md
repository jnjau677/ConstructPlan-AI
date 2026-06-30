## 2025-05-15 - Route-based Code Splitting Strategy
**Learning:** In this architecture, components like `Dashboard.tsx` and `AiDesignAssistant.tsx` carry heavy dependencies (`recharts`, `react-markdown`). Implementing `React.lazy` at the `App.tsx` level effectively decouples these heavy modules from the initial entry bundle, reducing it by ~65%.
**Action:** Always check for heavy third-party libraries in leaf components and consider route-based or tab-based lazy loading to maintain a slim initial bundle.

## 2025-05-15 - Render Jitter in Data Visualizations
**Learning:** Using `Math.random()` or other non-deterministic functions within the render loop for styling (e.g., LiDAR point positions) causes visual "jitter" and unnecessary re-renders.
**Action:** Stabilize non-deterministic visual data using `useMemo` with an empty dependency array (or relevant triggers) to ensure visual consistency and prevent redundant calculations.
