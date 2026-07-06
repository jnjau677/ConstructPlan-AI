## 2025-03-24 - Code Splitting for Modular Navigation
**Learning:** Large React applications with tab-based navigation benefit significantly from code splitting. Statically importing all modules led to a ~960kB initial bundle, while lazy loading reduced the entry chunk to ~337kB, a ~65% reduction.
**Action:** Use `React.lazy` and `Suspense` for primary feature components that are not visible on the initial landing state.
