import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard | MarkupPro",
  description: "Manage your trades and analyze the market with MarkupPro's advanced trading dashboard.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
