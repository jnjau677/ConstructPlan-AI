# Bolt's Performance Journal

## 2025-05-15 - Stabilize non-deterministic renders in SiteAnalysis
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render. This is especially problematic with `motion` components which may trigger multiple renders during animations.
**Action:** Always stabilize non-deterministic values using `useMemo` when they need to persist across renders within a component.
