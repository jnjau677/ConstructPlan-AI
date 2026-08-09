## 2025-03-02 - React.lazy Code Splitting with AnimatePresence
**Learning:** Combining React.lazy dynamic imports with Framer Motion's AnimatePresence requires placing the Suspense boundary inside the motion.div child. If the Suspense boundary wraps the motion.div, exit transitions will fail to animate correctly because the child is unmounted immediately before the exit animation can run.
**Action:** Always wrap the lazy component itself inside the motion.div with a Suspense boundary when using exit transitions.

## 2025-03-02 - Stabilizing LiDAR Viz Layout with useMemo
**Learning:** Invoking Math.random() directly within JSX inline style objects for dynamic elements causes new layout coordinates and sizes to be generated on every single render. This triggers unexpected continuous layout shifts and visual jittering when any sibling or parent state updates.
**Action:** Memoize array generation of dynamic layout configurations using useMemo to ensure stable, performant coordinates across component updates.
