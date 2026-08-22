## 2026-03-31 - React.lazy Code Splitting for Sub-Modules

**Learning:** Implementing React.lazy dynamic code splitting for sub-modules in `src/App.tsx` combined with a high-fidelity `LoadingModule` component successfully reduced the initial main JS bundle chunk size from ~960 kB to ~337 kB (~65% reduction).
**Action:** When working on modular tabbed/routed dashboard applications with heavy dependencies (such as Recharts or ReactMarkdown), default to dynamic imports (`React.lazy`) for secondary view modules to minimize initial page load times.
