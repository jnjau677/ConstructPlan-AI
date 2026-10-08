## 2026-10-08 - Dynamic Code Splitting for Secondary BIM Modules
**Learning:** Dynamic dynamic code splitting using `React.lazy` for secondary routes/components in heavy SPA applications (such as BIM/CAD viewports with Markdown and complex calculators) significantly reduces the initial main chunk bundle size (from ~960 kB down to ~734 kB, a ~23.5% reduction) without degrading initial LCP or UX when paired with standard `<Suspense>` fallback.
**Action:** Always keep main landing views (like Dashboard) eagerly imported, and lazy-load non-critical or feature-heavy secondary modules.
