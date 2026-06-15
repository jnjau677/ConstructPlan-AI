## 2026-06-15 - Production build analysis confirms heavy dependencies
**Learning:** Initial bundle analysis (~951kB) showed that heavy dependencies like `recharts` (~385kB) and `react-markdown` (~181kB) were being loaded upfront, even though they are only used in specific, non-default tabs.
**Action:** Use component-level code splitting with `React.lazy` and `Suspense` for all major tab components to ensure users only download the code for the modules they actually interact with.
