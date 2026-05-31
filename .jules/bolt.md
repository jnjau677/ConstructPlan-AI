## 2025-05-15 - [AnimatePresence vs Suspense Interaction]
**Learning:** When using Framer Motion's (motion/react) `AnimatePresence` with `mode="wait"` alongside `React.lazy` and `Suspense`, the `Suspense` fallback (loading spinner) will not appear until the *exit* animation of the previous component is completely finished. This can create a perceived delay where nothing happens before the loader appears.
**Action:** Be mindful of exit animation durations when implementing code splitting in tab-based layouts to ensure the UI feels responsive.
