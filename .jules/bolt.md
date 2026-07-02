## 2025-05-14 - Stabilizing Stochastic UI Elements
**Learning:** Using `Math.random()` directly in the render loop for styling (e.g., positioning elements) causes visual jitter/flickering on every re-render, even when the underlying data hasn't changed.
**Action:** Always stabilize stochastic UI data with `useMemo` to ensure visual consistency and prevent unnecessary re-calculations.
