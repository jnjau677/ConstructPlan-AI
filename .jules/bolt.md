## 2025-06-23 - Optimizing SiteAnalysis with useMemo and constants
**Learning:** Non-deterministic rendering using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Always stabilize non-deterministic UI values using `useMemo` and extract static configuration data into top-level constants to prevent redundant re-allocations.
