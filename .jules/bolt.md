## 2025-05-15 - Monolithic Component Loading Bottleneck
**Learning:** The application was loading heavy dependencies like `recharts` (~385kB) and `react-markdown` (~181kB) in the initial bundle, even though they are only used in specific tabs. This resulted in a ~951kB initial JS payload.
**Action:** Use `React.lazy` and `Suspense` for all top-level tab components to ensure code is only fetched when needed, significantly improving initial load time.
