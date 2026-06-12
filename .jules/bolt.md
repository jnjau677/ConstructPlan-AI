## 2025-06-12 - Component-level Code Splitting for Multi-tab Architecture

**Learning:** In a tabbed dashboard interface where each tab imports heavy domain-specific libraries (e.g., Recharts for analytics, React-Markdown for AI, Google Generative AI), static imports lead to a massive entry bundle. Implementing React.lazy at the component level for each tab's main entry point significantly reduces the initial JS payload, even if all components are eventually used.

**Action:** Always prefer lazy-loading for primary feature modules in multi-view applications to optimize Time to Interactive (TTI) and avoid loading heavy libraries until they are actually required by the user's navigation path.
