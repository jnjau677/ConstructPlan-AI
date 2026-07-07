## 2025-05-15 - Code splitting and visual stability
**Learning:** Large React bundles in this BIM-style application can be significantly reduced by lazy loading module-level components. Additionally, UI elements driven by random data (like LiDAR visualizations) cause visual jitter on re-render unless stabilized with useMemo.
**Action:** Always consider React.lazy for top-level feature components and use useMemo to stabilize random properties in visual effects to ensure a "pro" feel.
