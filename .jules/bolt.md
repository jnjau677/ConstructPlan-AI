## 2025-05-22 - Route-based code splitting impact
**Learning:** In this BIM-focused application, individual feature modules carry heavy specialized dependencies (e.g., `recharts` for Dashboard, `react-markdown` for AI Assistant). Implementing route-based code splitting yielded a ~64% reduction in initial bundle size because these heavy nodes were isolated into their own chunks.
**Action:** Always prioritize lazy loading for feature-specific modules that pull in large third-party visualization or processing libraries.
