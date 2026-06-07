# Bolt Journal

## 2025-05-14 - Non-deterministic Renders in SiteAnalysis
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize random values or move them outside the component if they don't need to change.
