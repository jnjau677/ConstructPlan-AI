## 2025-05-15 - Component-level code splitting
**Learning:** For SPAs with multiple heavy views (like Recharts or ReactMarkdown), `React.lazy` and `Suspense` can significantly reduce initial bundle size without much complexity. Initial chunk size was reduced by ~64.7% in this project.
**Action:** Always consider code-splitting for main route or tab components in SPAs.
