## 2025-05-18 - Memoize dynamic visual properties in render loops
**Learning:** In components rendering point clouds or data visualizations (like LiDAR blocks), generating inline styles with `Math.random()` directly inside JSX causes layout shifts, visual jitter, and redundant style re-computations on every component state update (e.g., toggle overlays or tab switches).
**Action:** Always wrap randomly generated coordinates and layout bounds in `useMemo` with empty dependency arrays to stabilize the rendered elements across state changes.
