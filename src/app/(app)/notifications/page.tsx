import type { Metadata } from "next";
import { NotificationsPage } from "./notifications-page";

export const metadata: Metadata = {
  title: "Notifications — PHOENIX",
  description: "Real-time updates on your SOS alerts and incident reports.",
  openGraph: {
    title: "Notifications — PHOENIX",
    description: "Real-time updates on your emergencies and reports.",
  },
};

export default function Page() {
  return <NotificationsPage />;
}
