## 2025-07-03 - Visual Stability via useMemo
**Learning:** Using Math.random() directly in the render loop for visual elements (like the LiDAR boxes in SiteAnalysis.tsx) causes jarring visual jitter on every re-render, as well as redundant calculations.
**Action:** Stabilize random visual properties using useMemo with an empty dependency array. This ensures visual consistency across renders and reduces computational overhead.
