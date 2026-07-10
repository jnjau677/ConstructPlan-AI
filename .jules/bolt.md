## 2025-05-15 - Route-based code splitting efficiency
**Learning:** In this "ArcSystem" architecture, core modules like Dashboard (using Recharts) and AI Assistant (using React-Markdown) account for over 60% of the total bundle size. Standard React.lazy/Suspense at the route level reduced the entry chunk from 960kB to 337kB.
**Action:** Always prioritize lazy loading for heavy visualization and markdown-parsing modules in this ecosystem to maintain fast First Contentful Paint.
