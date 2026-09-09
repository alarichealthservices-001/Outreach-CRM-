"use client";

import {
  LayoutDashboard,
  Users,
  Megaphone,
  FileText,
  Inbox,
  Clock,
  BarChart3,
  ShieldCheck,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Leads", icon: Users },
  { name: "Campaigns", icon: Megaphone },
  { name: "Templates", icon: FileText },
  { name: "Inbox", icon: Inbox },
  { name: "Follow-ups", icon: Clock },
  { name: "Reports", icon: BarChart3 },
  { name: "Suppression", icon: ShieldCheck },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: "24px 16px",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "32px",
          padding: "0 12px",
        }}
      >
        Outreach CRM
      </div>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                marginBottom: "4px",
                borderRadius: "8px",
                color:
                  item.name === "Dashboard" ? "#fff" : "#94a3b8",
                background:
                  item.name === "Dashboard"
                    ? "#2563eb"
                    : "transparent",
              }}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
