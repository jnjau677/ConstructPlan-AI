## 2025-05-18 - Route-level dynamic code splitting for secondary tabs

**Learning:** Secondary tab views (specifically AI assistant with `react-markdown` and math heavy modules) inflated the initial bundle to ~960 kB. By dynamically splitting all non-default tabs via `React.lazy()` and nesting `Suspense` inside `motion.div`, the initial entry chunk was trimmed by ~226 kB (~23.5% reduction) without breaking enter/exit transition animations.
**Action:** When working with animated tab panels (`AnimatePresence`), keep the initial landing view eager and lazy-load secondary views by placing `Suspense` inside the animated item to prevent layout glitches during tab switching.
