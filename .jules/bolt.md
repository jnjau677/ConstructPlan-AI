## 2026-07-07 - Monolithic Bundle Bottleneck
**Learning:** The application's monolithic bundle reached nearly 1MB, significantly impacting initial load performance. Dynamic imports via React.lazy are highly effective here because the UI is organized into distinct, heavy modules (Site Analysis, Dashboard, AI Assistant) that are rarely all needed at once.
**Action:** Always check bundle composition in modular dashboard-style applications and implement route-based or component-based code splitting early to maintain a lightweight entry point.
