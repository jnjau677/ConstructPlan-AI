# Bolt Journal

## 2026-07-26 - Stabilizing Dynamic Render Attributes and Code Splitting
**Learning:** Generating random values on-the-fly inside components driven by high-frequency interactions (like toggling map layers/overlays) causes massive layout thrashing and severe visual jitter on every render, as seen in the LiDAR point cloud boxes. Furthermore, huge monolithic bundle chunks (~960 kB) degrade FCP/TTI dramatically.
**Action:** Always wrap style-altering random computations or layout variables in `useMemo` with appropriate dependency arrays to preserve stable values between renders. Always bundle-split non-critical path tab modules using React lazy/Suspense to drop the main entry chunk down.
