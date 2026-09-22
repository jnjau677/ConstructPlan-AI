## 2026-09-22 - Dynamic Code Splitting for Sub-Modules in App.tsx

**Learning:** Secondary tab components like `AiDesignAssistant` pull heavy libraries (`react-markdown`, etc.) into the main bundle when imported synchronously. Using `React.lazy` for sub-modules while keeping the primary `Dashboard` component eagerly imported reduces the initial entry bundle size by ~23.5% (from 960 kB down to 734 kB). Placing `<Suspense>` inside `AnimatePresence`'s `motion.div` avoids transition glitching when dynamic chunks are loaded.

**Action:** Eagerly import default views and lazily import secondary tabs inside `<Suspense>` to keep the initial page load fast.
