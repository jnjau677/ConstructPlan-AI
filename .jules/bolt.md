## 2025-05-25 - [Code Splitting for Tabbed Dashboard]
**Learning:** In a dashboard-style application with multiple heavy views (charts, AI interfaces, 3D mocks), loading everything upfront significantly bloats the initial bundle. Using React.lazy and Suspense provides an easy way to split these into separate chunks without breaking AnimatePresence transitions.
**Action:** Always consider lazy loading for components that are hidden behind tabs or conditional rendering to improve TTI (Time to Interactive).
