## 2026-10-06 - React.lazy dynamic code splitting for secondary tab modules

**Learning:** Static imports of heavy secondary modules (such as `react-markdown` in `AiDesignAssistant.tsx`) in root `App.tsx` bloated the initial main bundle to ~960 kB. Dynamically code-splitting non-landing tab modules with `React.lazy` and rendering `<Suspense>` inside `AnimatePresence`'s `motion.div` reduced initial main JS bundle chunk size to ~735 kB (~23.5% reduction) without breaking tab transitions or animations.

**Action:** When working with multi-tab or multi-route React dashboards, keep the primary landing view eagerly imported while lazily dynamic-importing heavy secondary sub-modules. Ensure `<Suspense>` is nested inside the motion container if tab switching uses Framer Motion `AnimatePresence`.
