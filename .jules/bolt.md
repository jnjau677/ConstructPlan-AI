## 2025-05-14 - [Initial Bundle Size Optimization]
**Learning:** The application had a monolithic bundle of ~960 kB, which exceeded the recommended 500 kB limit. Most of this was due to complex components (AiDesignAssistant, Dashboard) and their heavy dependencies (react-markdown, recharts) being loaded upfront even if not immediately needed.
**Action:** Implement code splitting at the route/tab level using React.lazy and Suspense to reduce initial entry payload. This reduced the main entry chunk from 960 kB to 338 kB.
