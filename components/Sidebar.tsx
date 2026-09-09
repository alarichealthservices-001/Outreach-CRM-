"use client";

import Sidebar from "@/components/Sidebar";

const stats = [
  { title: "Total Leads", value: "0", color: "#2563eb" },
  { title: "Valid Emails", value: "0", color: "#16a34a" },
  { title: "Active Campaigns", value: "0", color: "#7c3aed" },
  { title: "Emails Sent", value: "0", color: "#0891b2" },
  { title: "Replies", value: "0", color: "#ea580c" },
  { title: "Follow-ups Due", value: "0", color: "#dc2626" },
];

export default function HomePage() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <div className="content-wrapper">
          <header className="page-header">
            <h1>Dashboard</h1>
            <p>Welcome to your Outreach CRM</p>
          </header>

          <section className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.title}>
                <div
                  className="stat-dot"
                  style={{ background: stat.color }}
                />
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
              </div>
            ))}
          </section>

          <section className="content-grid">
            <div className="panel">
              <h2>Campaign Performance</h2>
              <div className="empty-state">
                No campaign data yet.
              </div>
            </div>

            <div className="panel">
              <h2>Recent Activity</h2>
              <div className="empty-state">
                No recent activity.
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
