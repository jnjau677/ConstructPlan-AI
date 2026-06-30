## 2025-05-15 - Route-based Code Splitting Bottleneck
**Learning:** In this React/Vite architecture, all major components and their dependencies (recharts, react-markdown, motion) were initially bundled into a single ~962kB file. This triggered Vite's chunk size warnings and increased initial TTI.
**Action:** Implement `React.lazy` and `React.Suspense` in `App.tsx` for all tab-based components to achieve a ~65% reduction in main bundle size.
