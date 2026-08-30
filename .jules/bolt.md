## 2025-05-18 - Dynamic Code Splitting for Sub-Modules

**Learning:** Implementing React.lazy dynamic imports for sub-module components (especially heavy components incorporating libraries like recharts and react-markdown) reduced the main initial JS bundle chunk size from ~960 kB to ~337 kB (~65% reduction).

**Action:** When designing tabbed or multi-view single page apps with heavy dependency sub-views, wrap view components in React.lazy dynamic imports with a Suspense fallback to keep initial page load fast and efficient.
