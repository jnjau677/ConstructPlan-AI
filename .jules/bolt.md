## 2025-05-14 - Route-based Code Splitting Success
**Learning:** Implementing `React.lazy` and `Suspense` for main route modules resulted in a significant reduction of the initial bundle size (~960kB to ~337kB, a ~65% decrease). This was especially effective because the app contained several heavy components like `Dashboard.tsx` (using `recharts`) and `AiDesignAssistant.tsx` (using `react-markdown`).
**Action:** Always check for large third-party dependencies in route components and prioritize lazy loading for them to improve Initial Page Load metrics.
