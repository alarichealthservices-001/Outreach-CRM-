export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "8px",
          }}
        >
          Outreach CRM
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "32px",
          }}
        >
          Lead management and email automation dashboard
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          <DashboardCard title="Total Leads" value="0" />
          <DashboardCard title="Valid Emails" value="0" />
          <DashboardCard title="Active Campaigns" value="0" />
          <DashboardCard title="Emails Sent" value="0" />
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          color: "#0f172a",
          fontSize: "28px",
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );
}
