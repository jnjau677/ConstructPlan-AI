## 2026-08-11 - React.lazy Code Splitting on BIM Sub-modules

**Learning:** Static imports of heavy components like recharts (Dashboard.tsx) and react-markdown (AiDesignAssistant.tsx) drag the initial index bundle up to ~960 kB. By dynamically importing sub-modules with `React.lazy` and matching them with a high-fidelity `<Suspense>` boundary inside Framer Motion's `<motion.div>`, we successfully split the bundle without breaking route entry/exit animations.

**Action:** Always identify heavy dependencies and routes to split with lazy loading. Place Suspense boundaries inside `motion.div` in Vite/Framer Motion environments to maintain animation continuity.
