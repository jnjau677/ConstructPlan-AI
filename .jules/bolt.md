## 2025-05-18 - AnimatePresence with Lazy Loaded React Sub-modules
**Learning:** When combining React.lazy with Framer Motion's AnimatePresence, placing `<Suspense>` inside the key-based `<motion.div>` ensures enter/exit transition animations execute without premature layout unmounting or visual flickering during chunk fetching.
**Action:** Always wrap dynamically imported sub-modules with `<Suspense>` inside individual animated route/tab container elements when using Framer Motion.
