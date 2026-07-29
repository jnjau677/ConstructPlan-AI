# Bolt's Journal

## 2026-03-02 - Initial Setup
**Learning:** Initiated journal file for Bolt optimizations in this React app.
**Action:** Ready to profile and identify performance bottlenecks.

## 2026-07-29 - Code Splitting & Dynamic Imports
**Learning:** The initial production bundle contribution was heavily dominated by sub-modules (e.g., recharts in `Dashboard`, react-markdown in `AiDesignAssistant`). Loading them eagerly blocked the main thread and bloated the entry chunk to 960.15kB.
**Action:** Implemented React.lazy and Suspense boundaries for all tab views. This successfully split the monolithic bundle into discrete chunks, reducing the main entry chunk size down to 337.83kB (a whopping ~64.8% reduction!). Future heavy libraries should always be lazy-loaded in separate modules to keep the initial render fast.
