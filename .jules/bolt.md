## 2025-05-15 - Stabilize non-deterministic render styles
**Learning:** Using `Math.random()` directly in the render loop for styling properties causes visual jitter and unnecessary recalculations on every re-render.
**Action:** Use `useMemo` to stabilize these values at the top level of the component.

## 2025-05-15 - Ineffective useCallback with inline arrow functions
**Learning:** Using `useCallback` to memoize a function that is then wrapped in an inline arrow function in JSX (e.g., `onClick={() => handler(id)}`) provides zero performance benefit because a new function reference is still created on every render.
**Action:** Avoid `useCallback` in these cases unless also refactoring to a memoized sub-component that accepts the handler and ID as props.
