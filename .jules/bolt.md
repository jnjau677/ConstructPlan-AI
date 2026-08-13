# Bolt Performance Journal

## 2026-03-06 - Dynamic Code Splitting and Visual Stabilization
**Learning:** Initial chunk size was significantly bloated (~960 kB) due to heavy sub-modules (e.g., `recharts` on the Dashboard and `react-markdown` on the AI Assistant). Implementing `React.lazy` dynamic code splitting inside Framer Motion's `AnimatePresence` requires putting the `Suspense` boundary inside the `motion.div` child element to avoid breaking enter/exit transition animations. Furthermore, rendering elements with values from `Math.random()` on every render causes continuous layout shifts and visual jittering during unrelated state updates.
**Action:** Always code-split non-critical modules and nest `Suspense` properly within animation wrappers. Memoize random-driven visual components (like LiDAR points/blocks) with `useMemo` to stabilize them.
