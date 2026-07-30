## 2026-03-01 - React Code Splitting and Random Prop Memoization
**Learning:** Code splitting with React.lazy and Suspense significantly reduces the entry chunk size (from 960kB down to 337kB, a ~64.8% reduction). Additionally, generating layout properties using Math.random() inside render blocks causes continuous React layout reflows and flickering, which was resolved by stabilizing coordinates using `useMemo` with an empty dependency array.
**Action:** Always lazy load heavy tabs/routes and use `useMemo` to stabilize random mock visual properties in interactive views.
