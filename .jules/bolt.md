## 2026-03-01 - Code Splitting for Large BIM Module Components
**Learning:** The application has several highly interactive, library-heavy components (like `Dashboard` importing `recharts` and `date-fns`, and `AiDesignAssistant` importing `react-markdown`) which contributes over 960kB to the initial JS bundle. By using `React.lazy` and `Suspense`, we successfully split the app into smaller, on-demand chunks.
**Action:** Always inspect the main entrypoint chunk size during production builds and identify heavy sub-modules that can be lazily loaded to minimize the initial load latency.
