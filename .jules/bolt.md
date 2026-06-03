## 2025-05-15 - Route-based code splitting
**Learning:** Implementing `React.lazy` for heavy tab components significantly reduces the initial bundle size, especially when those components pull in large third-party libraries (like `react-markdown` for the AI assistant). Maintaining the default tab as a static import ensures no perceived regression in initial load speed.
**Action:** Always check the main bundle size using `pnpm build` before and after implementing code splitting to verify impact. Aim to keep the entry chunk as lean as possible.
