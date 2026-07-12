## 2025-05-15 - Module-Level Bundle Bloat
**Learning:** Found that `recharts`, `date-fns` (in `Dashboard.tsx`) and `react-markdown` (in `AiDesignAssistant.tsx`) contribute to ~70% of the initial bundle size (960kB).
**Action:** Use route-based code splitting with `React.lazy` and `Suspense` to defer loading these heavy libraries until the respective tabs are accessed, reducing initial payload by ~65%.
