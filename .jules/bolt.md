# Bolt Performance Journal

## 2026-03-31 - React.lazy Code Splitting for Secondary BIM Modules
**Learning:** In a single-page React app with multiple heavy views (such as Markdown renderers, charts, and complex BIM tool components), eagerly importing all tab views inflates the initial bundle size to ~960 kB. Keeping the initial landing tab (Dashboard) eagerly loaded while dynamically importing secondary tabs (`React.lazy()`) and rendering them inside a `Suspense` boundary nested within Framer Motion `AnimatePresence` reduces the initial JS bundle chunk size from 960 kB to ~734 kB (~23.5% reduction).

**Action:** Always code-split secondary application tabs and heavy sub-modules using `React.lazy()` while preserving instant initial page renders for the default tab.
