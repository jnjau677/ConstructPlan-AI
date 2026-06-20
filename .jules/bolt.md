## 2025-06-20 - Stabilized Random UI Elements
**Learning:** Using `Math.random()` directly in a render loop for styling properties (like positions and sizes) causes distracting visual jitter because values change on every re-render, even if the data didn't change.
**Action:** Always wrap non-deterministic visual property generation in `useMemo` with an empty dependency array to ensure stability across re-renders.
