## 2026-05-30 - Component-level Code Splitting
**Learning:** React 19 and Vite 6 handle dynamic imports seamlessly with React.lazy. The main bundle size was reduced by ~65% (960kB -> 337kB) by splitting feature-heavy components into separate chunks. This is a high-impact, low-risk pattern for feature-rich dashboards.
**Action:** Always check the initial bundle size for large SPA projects and apply lazy loading to major route/tab components as a first-line performance optimization.
