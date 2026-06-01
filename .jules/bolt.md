## 2025-05-15 - [Anti-pattern: Math.random() in render loop]
**Learning:** Using `Math.random()` inside the component render loop for styling/positioning causes visual instability and layout shifts on every re-render (e.g., when toggling state like overlays). This is particularly noticeable in high-frequency interaction components.
**Action:** Always memoize random data generation using `useMemo` with an empty dependency array to ensure stability across re-renders.
