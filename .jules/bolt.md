## 2026-03-31 - Dynamic Code Splitting with React.lazy and Framer Motion AnimatePresence
**Learning:** When using Framer Motion's `AnimatePresence` mode="wait" with `React.lazy` loaded sub-modules, placing `<Suspense>` inside `<motion.div>` ensures transition animations handle module loading without layout snapping or unmount glitches.
**Action:** Always wrap `<Suspense>` inside the inner motion element when animating route or tab transitions in React applications using Framer Motion.
