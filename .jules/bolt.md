## 2025-05-15 - [React Performance Patterns]
**Learning:** Code splitting with React.lazy and Suspense significantly reduces the main entry chunk size (from 960kB to 337kB, ~65% reduction), especially when using heavy libraries like Recharts and ReactMarkdown. Additionally, stabilizing visual elements that use random data (e.g., LiDAR points) with useMemo prevents visual jitter and unnecessary layout shifts during re-renders.
**Action:** Always check bundle size for large components and use memoization for components that rely on random properties or heavy calculations.
