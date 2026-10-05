## 2025-02-23 - Code Splitting Secondary BIM Modules with React.lazy

**Learning:** Implementing React.lazy dynamic code splitting for secondary sub-modules in `src/App.tsx` combined with the `LoadingModule` fallback component reduced the initial main JS bundle chunk size from ~960 kB to ~735 kB (~23.5% reduction) while keeping Dashboard eagerly loaded.

**Action:** Keep primary entry points (e.g., Dashboard) eagerly imported while lazily loading heavy secondary modules and third-party libraries (e.g. `react-markdown` in `AiDesignAssistant`). Place `<Suspense>` boundaries inside Framer Motion's `AnimatePresence` wrapper for smooth transitions.
