## 2025-07-10 - Code Splitting for Modular Dashboard
**Learning:** In a modular dashboard architecture where users only see one module at a time, static imports cause significant initial load bloat. Implementing `React.lazy` and `Suspense` reduced the main entry chunk size from 960kB to 337kB (~65% reduction), drastically improving Time to Interactive (TTI) for initial users.
**Action:** Always prefer dynamic imports for top-level module components that are rendered conditionally based on navigation state.
