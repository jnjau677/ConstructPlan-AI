## 2026-07-06 - Route-based Code Splitting
**Learning:** Code splitting major feature modules in a single-page application (SPA) can drastically reduce the initial bundle size, especially when features are large and complex (like BIM/CAD visualization modules). In this case, it reduced the main entry chunk from ~960kB to ~337kB.
**Action:** Always check the initial bundle size of SPAs and consider `React.lazy` and `Suspense` for non-critical path components or tabbed interfaces to improve TTI (Time To Interactive).
