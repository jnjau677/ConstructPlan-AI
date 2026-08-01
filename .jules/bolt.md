## 2026-03-05 - Code Splitting for Heavy BIM Modules
**Learning:** In browser-based Vite/React applications, importing third-party libraries (e.g., `recharts`, `date-fns`, `react-markdown`) eagerly inside main-level layout tabs results in a bloated single JS bundle (~960kB), which increases time-to-interactive and initial loading latency.
**Action:** Use `React.lazy` and `Suspense` inside `App.tsx` tab routes to split these heavy packages into dynamic chunks, ensuring they are only loaded when the user switches to the respective BIM modules.
