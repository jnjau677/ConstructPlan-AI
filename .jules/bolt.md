# Bolt Journal

## 2026-03-05 - Lazy Loading BIM Modules with Motion Transitions
**Learning:** In React applications featuring high-volume, dynamic layout dependencies (such as heavy charts via `recharts` or markdown parsers like `react-markdown`), bundling all module views statically in the main entry creates a massive initial JS chunk (e.g. 960kB), hurting Time-To-Interactive (TTI). Implementing `React.lazy()` with `React.Suspense` isolates these libraries into standalone chunks. Crucially, when paired with Framer Motion's `AnimatePresence`, placing the `<Suspense>` boundary inside the `<motion.div>` wrapper is required to prevent animation interruption during lazy resolution.
**Action:** Always map heavy sub-views to lazy imports and encapsulate the `<Suspense>` wrapper directly inside each animated transition block rather than wrapping the transition container itself.
