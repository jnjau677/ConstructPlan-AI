## 2025-05-14 - [React Code Splitting & Animation Interaction]
**Learning:** In a tabbed dashboard using `motion/react`'s `AnimatePresence` with `mode="wait"`, the `Suspense` fallback will only appear after the exit animation of the previous tab completes. This ensures a clean visual transition without overlapping layout shifts.
**Action:** Always wrap `React.lazy` components in a `Suspense` boundary inside the `motion.div` to maintain smooth tab-switching animations while benefiting from reduced bundle sizes.
