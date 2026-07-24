# Bolt's Performance Journal

## 2026-02-15 - BIM Module Code Splitting
**Learning:** Large third-party libraries (such as recharts, date-fns, and react-markdown) are concentrated in specific tabs like Dashboard and AiDesignAssistant, causing a massive initial bundle size (960.15 kB). Since only one tab is viewed at a time, code splitting using React.lazy and React.Suspense is highly effective and can reduce the main entry chunk size to under 340 kB.
**Action:** Lazy load all tab content components with React.lazy, place Suspense inside motion.div to ensure Framer Motion exits transition properly, and provide a high-fidelity LoadingModule component as the fallback.
