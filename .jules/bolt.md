## 2025-05-15 - Entry-point bundle reduction via Code Splitting
**Learning:** In a single-page application with multiple heavy feature modules (like 3D viz, charts, and AI assistants), static imports in the main App component lead to a bloated initial bundle that delays Time to Interactive. Code splitting the conditional content area using `React.lazy` and `Suspense` reduced the main bundle size by ~65% in this architecture.
**Action:** Prioritize lazy loading for any component that is hidden behind navigation or user interaction (tabs, modals, side drawers) to keep the initial load lean.
