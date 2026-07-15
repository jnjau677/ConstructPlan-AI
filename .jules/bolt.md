## 2026-07-15 - Route-based Code Splitting for BIM Modules

**Learning:** The initial bundle size was 960kB, largely due to heavy dependencies like 'recharts' and 'react-markdown'. These were being loaded upfront even if the user never visited the corresponding tabs.

**Action:** Implement 'React.lazy' and 'Suspense' for all main tab components. This reduced the entry chunk to 338kB (~65% reduction) and improved initial load performance.
