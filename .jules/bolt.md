## 2026-03-01 - Code Splitting for Heavy BIM Modules
**Learning:** Found that our single-page application bundled all heavyweight modules (Dashboard with Recharts, AiDesignAssistant with ReactMarkdown, etc.) into a single static 960.15kB asset, resulting in excessive initial load latency. Implementing dynamic imports using `React.lazy` and matching them with React `Suspense` inside our custom Framer Motion transition block (`AnimatePresence`) successfully split the application into separate, smaller dynamic chunks (down to 337.75kB main chunk size - a ~64.8% reduction!).
**Action:** Next time, always check if modules contain heavy library packages (such as Recharts or Markdown parsers) and implement proactive code splitting on lazy-loaded modules. Make sure the `Suspense` boundary is kept inside the transition container so motion animations aren't disrupted during chunk loading.

## 2026-03-01 - Stabilize LiDAR Rendering via useMemo
**Learning:** Found that layout shifts and element jitter occurred within SiteAnalysis.tsx because the randomized coordinates and sizes of the 15 LiDAR point elements were regenerated from scratch on every component render.
**Action:** Use `useMemo` with an empty dependency array to pre-calculate and stabilize the randomly generated styles, preventing runtime recalculations and visual jumpiness.
