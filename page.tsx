import Sidebar from "../components/Sidebar";

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f8fafc",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "32px",
          overflow: "auto",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#0f172a",
                margin: 0,
              }}
            >
              Dashboard
            </h1>

            <p
              style={{
                color: "#64748b",
                marginTop: "8px",
              }}
            >
              Welcome to your Outreach CRM
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: stat.color,
                    marginBottom: "14px",
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  {stat.title}
                </p>

                <h2
                  style={{
                    margin: "8px 0 0",
                    fontSize: "28px",
                    color: "#0f172a",
                  }}
                >
                  {stat.value}
                </h2>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "20px",
            }}
          >
            <section
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 20px",
                  fontSize: "18px",
                  color: "#0f172a",
                }}
              >
                Campaign Performance
              </h2>

              <div style={{ color: "#64748b" }}>
                No campaign data yet.
              </div>
            </section>

            <section
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 20px",
                  fontSize: "18px",
                  color: "#0f172a",
                }}
              >
                Recent Activity
              </h2>

              <div style={{ color: "#64748b" }}>
                No recent activity.
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
