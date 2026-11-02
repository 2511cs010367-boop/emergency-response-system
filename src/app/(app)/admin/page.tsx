import type { Metadata } from "next";
import { AdminPage } from "./admin-page";

export const metadata: Metadata = {
  title: "Command Center — PHOENIX",
  description: "Monitor live SOS alerts, incident reports and users.",
  openGraph: {
    title: "Command Center — PHOENIX",
    description: "Monitor live SOS alerts and incident reports.",
  },
};

export default function Page() {
  return <AdminPage />;
}
