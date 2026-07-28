## 2026-07-28 - Dynamic code-splitting with Framer Motion AnimatePresence
**Learning:** When using Framer Motion's `AnimatePresence` with lazy-loaded components, placing the `Suspense` boundary outside of the dynamic `motion.div` component can lead to glitches or broken exit animations during module loading. Placing `Suspense` directly inside the `motion.div` preserves correct entry/exit transitions.
**Action:** Always wrap the dynamically rendered lazy component with `<Suspense>` inside the `<motion.div>` wrapper when animating tab/module transitions.
