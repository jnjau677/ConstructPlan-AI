## 2026-07-04 - Stabilizing Generative UI with useMemo
**Learning:** Using Math.random() directly in a component's render loop for styling (e.g., positioning LiDAR points) causes extreme visual jitter and redundant layout calculations whenever any sibling state changes.
**Action:** Always wrap generative data or random properties in useMemo with a stable dependency array to ensure visual consistency and prevent unnecessary re-renders of complex motion elements.
