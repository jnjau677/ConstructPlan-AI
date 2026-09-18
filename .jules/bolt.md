## 2025-05-18 - Memoize Random Geometry/Coordinates in Render Loops
**Learning:** Visual components with mock generative elements (like LiDAR point clouds) can trigger 60+ calls to `Math.random()` and create fresh inline style object references on every render. When users interact with toggles or overlays, this causes unexpected layout shifts, Framer Motion re-triggering, and unnecessary DOM recalculations.
**Action:** Always wrap generative position/coordinate calculations in `useMemo` with empty dependency arrays when random visual elements only need to be initialized once on mount.
