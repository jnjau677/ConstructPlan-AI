# Bolt Journal

## 2025-05-15 - Stabilizing Random Visuals
**Learning:** Using `Math.random()` directly in the render loop for styling (like in `SiteAnalysis.tsx`) causes visual jitter on every re-render and is an inefficient use of resources.
**Action:** Use `useMemo` to stabilize random properties for decorative elements that don't need to change every frame.
