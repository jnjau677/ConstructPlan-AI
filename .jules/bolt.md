## 2025-05-14 - Tab-level Code Splitting
**Learning:** Large monolithic bundles can significantly delay the first meaningful paint. By using `React.lazy` and `Suspense` for tab-level components, we can reduce the initial JS payload. In this project, the initial bundle size was reduced by approximately 65% (from 957kB to 338kB).
**Action:** Always consider route-level or tab-level code splitting for components that are not immediately visible on initial load.
