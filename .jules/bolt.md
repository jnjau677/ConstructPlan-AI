## 2025-05-14 - Initial Bundle Size Optimization
**Learning:** The application was serving a single monolithic bundle (~960kB) containing all view components (recharts, react-markdown, etc.), even if the user only viewed the dashboard.
**Action:** Implement code splitting using `React.lazy` and `Suspense` for all major view modules to reduce the entry chunk size and improve initial load performance.

**Metrics:**
- Main entry chunk size reduced from **960.15 kB** to **337.61 kB** (~65% reduction).
- Heavy dependencies like `recharts` and `react-markdown` moved to async chunks (`Dashboard.js` and `AiDesignAssistant.js` respectively).
