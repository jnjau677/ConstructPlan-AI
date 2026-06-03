# Bolt's Journal - Critical Learnings

## 2025-05-15 - [Route-based Code Splitting Impact]
**Learning:** In a dashboard-style application where each tab pulls in heavy specialized libraries (e.g., `recharts` for data viz, `react-markdown` for AI chat), static imports in the main entry point cause massive initial bundle bloat. Implementing `React.lazy` at the tab level reduced the main entry chunk from ~957kB to ~338kB (~64.7% reduction).
**Action:** Always prefer `React.lazy` for top-level navigation components that encapsulate distinct, heavy dependency trees.
