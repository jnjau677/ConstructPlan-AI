## 2025-05-18 - React.lazy Code Splitting for Secondary Modules

**Learning:** Separating secondary tab components (`AiDesignAssistant`, `SiteAnalysis`, `TakeoffEstimator`, `EngineeringCalculators`, `SchematicStudio`, `SystemCapabilities`) via `React.lazy` reduced the primary initial bundle from 960 kB to 734 kB (~23.5% reduction) while keeping the default `Dashboard` view eagerly loaded for fast First Contentful Paint.
**Action:** Always maintain lazy loading boundaries on secondary application views that import heavy sub-dependencies like `react-markdown` or domain calculation algorithms.
