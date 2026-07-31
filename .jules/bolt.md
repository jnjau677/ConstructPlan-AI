## 2026-03-01 - Code Splitting for BIM Modules
**Learning:** Heavy modules (such as AiDesignAssistant using react-markdown and Dashboard using recharts/date-fns) were inflating the initial main entry chunk size to ~960kB. Using dynamic imports (`React.lazy`) and wrapping in `<Suspense>` splits them into separate asynchronous chunks.
**Action:** Always lazy-load large sub-components/modules to keep the main bundle thin and initial load latency low.
