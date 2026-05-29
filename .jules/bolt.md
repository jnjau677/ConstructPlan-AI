# Bolt's Performance Journal ⚡

## 2025-05-14 - Implementation of Route-based Code Splitting
**Learning:** Initial application bundle size was excessive (~960 kB) because all tab components (Dashboard, Site Analysis, etc.) were bundled into the main entry chunk. By implementing code splitting, the initial entry bundle size was reduced to ~337 kB, a ~65% reduction, which significantly improves "Time to Interactive" for new users.
**Action:** Always evaluate modular dashboard layouts for lazy-loading opportunities, especially when sub-components contain large libraries like `recharts` or complex UI logic.
