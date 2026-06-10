## 2025-06-10 - Tab-level Code Splitting Impact
**Learning:** The initial bundle was heavily inflated by modular components containing large third-party libraries (recharts, react-markdown). Implementing code splitting at the tab-switcher level yielded a ~64% reduction in the initial JS payload (from 958kB to 338kB).
**Action:** Prioritize code splitting for modular dashboard-style applications with distinct, dependency-heavy views.
