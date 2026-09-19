## 2025-05-20 - Memoize visual elements with random properties in React components
**Learning:** When components render UI visualization elements (e.g. point cloud or background visual blocks) using `Math.random()` inside render methods, every state update recalculates random dimensions and offsets, causing layout jitter and unnecessary style computations on re-renders.
**Action:** Always wrap random visual style generation in `useMemo` with an empty dependency array to stabilize random properties across re-renders.
