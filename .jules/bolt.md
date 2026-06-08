## 2025-05-15 - Component-level Code Splitting
**Learning:** Large monolithic bundles in React apps with heavy secondary features (like AI or complex charting) significantly delay initial load. In this app, `recharts` and `react-markdown` were bloating the main bundle to nearly 1MB.
**Action:** Use `React.lazy` and `Suspense` to move feature-specific dependencies into separate chunks, allowing the main bundle to stay light (~338kB).
