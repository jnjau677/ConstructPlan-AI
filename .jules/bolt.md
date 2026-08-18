## 2026-08-18 - Dynamic Code Splitting & LiDAR Coordinate Memoization

**Learning:** Combining Framer Motion's `AnimatePresence` with `React.lazy` requires placing the `Suspense` boundary *inside* the motion wrapper element (`motion.div`) rather than outside. Placing `Suspense` outside `AnimatePresence` breaks transition exit animations during chunk loads.

**Action:** When lazy-loading tab views in animated layouts, always maintain `<AnimatePresence><motion.div key={activeTab}><Suspense fallback={...}>{content}</Suspense></motion.div></AnimatePresence>`.
