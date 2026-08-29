## 2025-08-29 - Suspense boundaries with Framer Motion AnimatePresence
**Learning:** When dynamically importing React components with `React.lazy()` inside Framer Motion's `AnimatePresence` (mode="wait"), wrapping the component in `<Suspense>` inside the `<motion.div>` key wrapper prevents exit animation glitching and avoids premature unmounting during tab switches.
**Action:** Always place `<Suspense fallback={...}>` within the keyed `<motion.div>` element when code-splitting view components inside motion transitions.
