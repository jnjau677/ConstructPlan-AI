# Bolt Performance Journal

## 2026-07-19 - Code Splitting & Visual Data Memoization
**Learning:**
1. When using Framer Motion's `<AnimatePresence>` with lazy-loaded components in a tabbed application, putting the `<Suspense>` boundary *outside* the `<motion.div>` can disrupt exit transitions because the lazy components are loaded outside the animated wrapper. Placing `<Suspense>` *inside* the `<motion.div>` ensures that enter/exit transitions behave correctly during module resolution.
2. In React applications rendering heavy visual elements (like LiDAR simulations, point clouds, or background grids) driven by random data, inline calculations using `Math.random()` in the render loop trigger layout shifts, visual flickering, and expensive recalculations upon any state update (e.g. toggling sidebars or overlays). Wrapping these in `useMemo` with an empty dependency array stabilizes the UI and saves CPU cycles.

**Action:**
1. Always wrap lazy-loaded tab contents in `<Suspense>` *inside* `<motion.div>` if `<AnimatePresence>` is handling layout transitions.
2. Ensure any render-time randomized coordinates, sizes, or styling properties are memoized to avoid visual jitter and layout thrashing.
