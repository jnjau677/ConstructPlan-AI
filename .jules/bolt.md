# Bolt's Performance Journal

## 2025-05-14 - Code Splitting with React.lazy
**Learning:** Significant initial bundle size (960kB) was caused by heavy third-party libraries (recharts, date-fns, react-markdown) being bundled into the main entry point. Code splitting at the module/tab level is a high-impact, low-risk way to defer loading these assets until needed.
**Action:** Always check bundle size with `npm run build` early to identify "chunky" components that are good candidates for `React.lazy`.
