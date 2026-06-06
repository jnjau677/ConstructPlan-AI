# Bolt Journal - Performance Learnings

## 2025-05-15 - Stabilizing Randomness in Renders
**Learning:** Using non-deterministic functions like `Math.random()` directly in the render loop for styling properties causes visual jitter (layout instability) and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize these values when they should persist across re-renders of the same component instance.

## 2025-05-15 - Initial Bundle Optimization
**Learning:** Large monolithic bundles (~958kB) delay the "Time to Interactive" (TTI) and "First Contentful Paint" (FCP). Code splitting at the route or tab level is an effective way to reduce the critical path bundle size.
**Action:** Implement `React.lazy` and `Suspense` for heavy components that are not immediately visible on initial load. Resulted in ~64% reduction of initial JS bundle (958kB -> 338kB).
