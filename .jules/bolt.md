## 2025-06-29 - [Large Main Bundle Bottleneck]
**Learning:** The application was bundling all seven major feature modules into a single 970kB JavaScript file, significantly impacting initial load performance.
**Action:** Apply route-based code splitting with `React.lazy` and `Suspense` to ensure that only the critical code for the initial view is loaded upfront, with other modules fetched on demand.
