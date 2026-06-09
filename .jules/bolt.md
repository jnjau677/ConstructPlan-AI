## 2025-05-14 - Component-level Code Splitting
**Learning:** The application had a large initial bundle (~958kB) due to heavy dependencies like `recharts` and `react-markdown` being imported in components that are not immediately visible.
**Action:** Use `React.lazy` and `Suspense` for main tab components to drastically reduce the entry bundle size and improve TTI.
