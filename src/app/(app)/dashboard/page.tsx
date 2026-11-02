import type { Metadata } from "next";
import { DashboardPage } from "./dashboard-page";

export const metadata: Metadata = {
  title: "Safety Dashboard — PHOENIX",
  description: "Your live safety overview: SOS alerts, reports and contacts.",
  openGraph: {
    title: "Safety Dashboard — PHOENIX",
    description: "Your live safety overview in PHOENIX.",
  },
};

export default function Page() {
  return <DashboardPage />;
}
