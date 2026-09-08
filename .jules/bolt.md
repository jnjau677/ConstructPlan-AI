# Bolt's Journal

## 2025-09-08 - Dynamic Code Splitting for Secondary BIM Modules
**Learning:** React sub-modules loaded synchronously in `App.tsx` pull heavy libraries like Lucide icons, complex SVGs, and sub-components into the initial JS bundle chunk (~960 kB). Splitting non-primary view components using `React.lazy` and `Suspense` allows Vite/Rollup to emit separate async chunks, drastically reducing initial bundle size and initial parse/evaluation time.
**Action:** Use `React.lazy` and `Suspense` with an accessible loading fallback component for secondary tabs in top-level view rotators.
