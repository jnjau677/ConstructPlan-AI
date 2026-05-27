## 2025-05-14 - Code Splitting heavy Dashboard views
**Learning:** For a single-page application with distinct heavy views (e.g., charts, complex forms, markdown editors), initial bundle size can grow rapidly. React.lazy and Suspense provide a high-impact, low-risk optimization to defer loading of these modules.
**Action:** Always evaluate the potential for code splitting in the main app router or tab manager when entry bundles exceed 500kB.
