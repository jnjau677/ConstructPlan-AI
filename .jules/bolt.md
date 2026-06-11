## 2026-06-11 - Route-based Code Splitting
**Learning:** Large monolithic bundles significantly impact TTI. Splitting by tab/route in a multi-module dashboard is a high-impact, low-risk optimization.
**Action:** Use `React.lazy` and `Suspense` for primary view components in future SPA projects to keep the initial payload light.
