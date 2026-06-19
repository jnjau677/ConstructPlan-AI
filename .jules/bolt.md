## 2025-05-14 - Stabilizing non-deterministic UI elements
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter on every re-render, creating a poor user experience and adding unnecessary computation (string concatenations and Math calls).
**Action:** Always memoize non-deterministic style values or data using `useMemo` when they are intended to be stable across re-renders.
