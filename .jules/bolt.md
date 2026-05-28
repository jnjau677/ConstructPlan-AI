## 2026-05-28 - [Code Splitting for Tabbed Navigation]
**Learning:** In a tabbed dashboard architecture, static imports of all tab components cause a large initial bundle size because heavy libraries used only in specific tabs (like `recharts` for Dashboards or `@google/genai` for AI assistants) are loaded upfront. Implementing `React.lazy` with `React.Suspense` isolates these dependencies into separate chunks, significantly reducing the entry JS bundle size.
**Action:** Always use code splitting for major UI components that are not visible on the initial landing state of the application.
