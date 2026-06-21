## 2026-06-21 - LiDAR Visualization Performance and Stability
**Learning:** Using non-deterministic functions like `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render. In this codebase, the LiDAR point cloud visualization in `SiteAnalysis.tsx` was regenerating 15 point styles (~60 random calls) every time an overlay was toggled.
**Action:** Use `useMemo` to stabilize randomly generated styles and move static configuration data to top-level constants to reduce per-render overhead.
