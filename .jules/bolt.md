## 2025-07-15 - Route-based Code Splitting Success
**Learning:** Significant portion of the bundle size was tied to heavyweight libraries used in specific routes: Recharts/date-fns in Dashboard (~400kB) and React-Markdown in AI Assistant (~180kB). Combining these into the main chunk forced all users to download them regardless of the initial page.
**Action:** Always check the 'dist/assets' after a build to identify "whale" chunks and isolate them via React.lazy to keep the entry-point (index.js) lean.
