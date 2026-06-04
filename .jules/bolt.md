## 2025-05-15 - Stabilizing Randomized Visuals with useMemo
**Learning:** Using `Math.random()` directly in the render body of a React component causes visual jitter and redundant layout/style recalculations on every re-render, as every state change (like toggling an unrelated overlay) triggers new random values.
**Action:** Always memoize randomized display data using `useMemo` to ensure visual stability and reduce GC pressure and layout overhead during component updates.
