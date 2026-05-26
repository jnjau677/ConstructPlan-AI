## 2025-05-15 - [React Performance & Visual Stability]
**Learning:** Using `Math.random()` directly in the `style` prop within a render loop causes both a performance bottleneck (redundant style recalculations) and a visual anti-pattern (flickering/jumping elements on every re-render).
**Action:** Always memoize random visual data with `useMemo` when it needs to remain stable across renders.

## 2025-05-15 - [Initial Bundle Optimization]
**Learning:** Static imports for all feature modules in a tabbed dashboard architecture lead to a bloated initial bundle, as users download code for tabs they haven't visited.
**Action:** Implement component-level code splitting using `React.lazy` and `Suspense` for main navigation modules to significantly improve Time-to-Interactive (TTI) and reduce initial chunk size.
