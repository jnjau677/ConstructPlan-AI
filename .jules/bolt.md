## 2026-08-06 - Stable LiDAR Point Cloud Layouts
**Learning:** Rendering visual overlays with randomly generated inline styles directly inside a React rendering block leads to severe layout shifts, browser reflows, and visual jittering/flicker on every re-render of the component.
**Action:** Always memoize styling variables generated from `Math.random()` or dynamic calculation with `useMemo` so that the computed coordinates and dimensions remain stable during subsequent component updates, eliminating layout thrashing and improving visual performance.
