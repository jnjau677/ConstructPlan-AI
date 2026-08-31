## 2025-05-18 - React.lazy Code Splitting for BIM Sub-modules

**Learning:** Static imports of heavy sub-modules in `src/App.tsx` (such as `Dashboard` with `recharts`/`date-fns` and `AiDesignAssistant` with `react-markdown`/`genai`) inflate the initial bundle chunk to ~960 kB. Wrapping sub-modules in `React.lazy()` with a `<Suspense>` fallback placed inside `motion.div` ensures Framer Motion animations function correctly while reducing the initial main chunk to ~338 kB (~65% reduction).

**Action:** Always place `<Suspense>` boundaries inside Framer Motion's `motion.div` animated wrapper when code-splitting animated routes or tabs.
