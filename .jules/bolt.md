## 2025-05-15 - Component-level Code Splitting for Modular Dashboard

**Learning:** Large monolithic bundles in React applications with multiple complex views (charts, markdown, etc.) can be significantly reduced by applying `React.lazy` at the router/tab level. In this specific architecture, `recharts` and `react-markdown` were the primary contributors to a ~951kB initial bundle.

**Action:** Always check for component-level code splitting opportunities when building dashboard-style applications with distinct, heavy views. Using a consistent `Suspense` fallback that matches the app's aesthetic maintains a high-quality user experience while improving TTI (Time to Interactive).
