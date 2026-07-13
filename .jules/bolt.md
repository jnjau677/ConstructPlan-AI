# Bolt's Performance Journal

## 2025-05-15 - Route-based Code Splitting Effectiveness
**Learning:** Large libraries like `recharts` and `react-markdown` significantly bloat the initial entry bundle when imported statically in page components that are all rendered by a single `App` entry point.
**Action:** Always prefer `React.lazy` for top-level module components to keep the initial JS payload small and improve Time to Interactive.

## 2025-05-15 - Verification of Lazy Loaded Components
**Learning:** Automated Playwright scripts are essential for verifying that `lazy` components load correctly, as manual clicking through tabs is tedious and prone to missing broken dynamic imports.
**Action:** Include a multi-tab navigation check in verification scripts when implementing code splitting.
