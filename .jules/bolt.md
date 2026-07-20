# Bolt's Journal - Critical Learnings

## 2026-03-01 - React.lazy and Framer Motion's AnimatePresence
**Learning:** Placing React's `Suspense` boundary *inside* Framer Motion's `<motion.div>` instead of outside is crucial when combining `React.lazy` and `AnimatePresence`. If `<Suspense>` is placed outside, exit animations can fail or break the tab transitions during chunk loading.
**Action:** Always wrap the lazy-loaded components in `<Suspense>` within the animated `<motion.div>` wrapper to guarantee correct enter/exit transition tracking.
