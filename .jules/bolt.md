## 2025-05-20 - React.lazy Code Splitting for Sub-Modules

**Learning:** Heavy secondary modules like `AiDesignAssistant` (which imports `react-markdown`) were being bundled into the initial main JavaScript chunk, inflating initial load time to 960 kB. Eager loading only the `Dashboard` and dynamic importing (`React.lazy`) for secondary tabs splits out ~226 kB into separate chunks, dropping the main bundle to ~734 kB.
**Action:** Always lazy-load secondary tab views and non-critical sub-modules in SPA routing/tabbing architectures, leaving only the landing view eagerly loaded.
