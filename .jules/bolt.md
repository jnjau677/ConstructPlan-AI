# Bolt's Performance Journal

## 2026-08-12 - Prevent Continuous Layout Shifts & Jitter in LiDAR Point Cloud rendering
**Learning:** Components containing dynamic visual overlays (such as LiDAR scanning simulations or randomized visual blocks) that rely on random values (`Math.random()`) inside the render block cause severe performance degradation. Without memoization, every minor state or tab update triggers component re-renders that recalculate visual sizes and offsets. This results in heavy layout shifts (CLS), continuous browser DOM repaints, and high CPU usage.
**Action:** Always memoize coordinates, sizes, or random arrays used in design mockups or visual graphs with `useMemo` (empty dependency array) to stabilize positioning and dimensions across re-renders.
