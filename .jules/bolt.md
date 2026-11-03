## 2026-11-03 - Dynamic Code Splitting for Secondary BIM Modules

**Learning:** When using Framer Motion's `AnimatePresence` with `mode="wait"`, wrapping the dynamic content inside `motion.div` with a `<Suspense fallback={<LoadingModule />}>` boundary ensures that tab exit/entry animations work seamlessly while splitting heavy components (such as markdown renderers and secondary tools) out of the main initial JavaScript bundle. Eagerly loading the default `Dashboard` avoids any flash of loading on first render, while reducing the initial JS chunk size by ~23.5% (from ~960 kB down to ~735 kB).

**Action:** Keep primary/default route eagerly imported while lazy-loading secondary heavy tab views with React.lazy and Suspense placed inside the motion transition wrapper.
