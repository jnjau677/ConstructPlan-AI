# Bolt Journal - Critical Performance Learnings

## 2026-07-21 - Framer Motion AnimatePresence & Lazy-Loaded Suspense Integration
**Learning:** When using Framer Motion's `<AnimatePresence>` for page/tab-based transitions alongside React `<Suspense>` and `React.lazy` code-splitting, placing the `<Suspense>` wrapper outside the transition `<motion.div>` will break exit transitions and cause flash-of-unstyled-content or missing animation frames.
**Action:** Always place the `<Suspense>` boundary inside the `<motion.div>` child component of `<AnimatePresence>`. This ensures Framer Motion can track the active key during exit transitions and that the lazy-loaded components resolve and animate smoothly during route/tab changes.
