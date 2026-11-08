## 2025-05-18 - Dynamic Code Splitting Non-Critical BIM Modules

**Learning:** In this application, non-default modules (particularly `AiDesignAssistant` which pulls in `react-markdown` and `@google/genai`) contributed significantly to the main JS bundle (~226 kB uncompressed). Implementing `React.lazy` with `Suspense` inside `AnimatePresence` allows `Dashboard` to be eagerly rendered while keeping the initial entry chunk down by 23.5% (from 960.15 kB to 734.25 kB minified; gzip down from 291.38 kB to 226.69 kB).

**Action:** Whenever heavy dependencies (LLM SDKs, Markdown parsers, 3D/canvas viewers) reside in tabbed sub-modules, use `React.lazy` and position the `Suspense` fallback within the animated transition container to maintain seamless UI transitions and faster initial page loads.
