## 2025-05-14 - Stabilizing randomized render data
**Learning:** Using `Math.random()` directly in a component's render loop for styling properties (like positions and dimensions) causes visual jitter and unnecessary recalculations every time the component re-renders (e.g., when toggling UI state like overlays).
**Action:** Use `useMemo` to stabilize randomized data that should persist across re-renders but doesn't need to be global state.
