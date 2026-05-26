## 2026-05-26 - [Route-based Code Splitting]
**Learning:** Large React applications with heavy dependencies (Recharts, React-Markdown, AI SDKs) in tab-based navigation benefit significantly from `React.lazy` and `Suspense`. Initial bundle size reduction improves First Contentful Paint (FCP) and Time to Interactive (TTI) for users who may only need specific modules.
**Action:** Always evaluate component-level code splitting for modules that wrap large external libraries or are not part of the critical initial view.

## 2026-05-26 - [Non-deterministic Render Loops]
**Learning:** Using `Math.random()` or other non-deterministic logic directly in the render path of a component causes visual instability (jitter) and unnecessary CPU load during re-renders.
**Action:** Memoize non-deterministic data (positions, sizes, initial states) using `useMemo` or `useState` to ensure visual consistency and performance across re-renders.
