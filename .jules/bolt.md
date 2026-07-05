## 2025-03-24 - [Rules of Hooks and Conditional Memoization]
**Learning:** Calling `useMemo` (or any Hook) inside a conditional block or inline in JSX violates the Rules of Hooks. This causes React to throw runtime errors because the order/count of Hooks must be identical across every render.
**Action:** Always declare Hooks at the top level of the component. If the computation is only needed for a specific condition, still declare the Hook at the top level and handle the conditional logic inside the Hook or in the returned value.
