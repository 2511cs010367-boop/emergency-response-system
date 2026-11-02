import type { Metadata } from "next";
import { IncidentDetailPage } from "./incident-detail-page";

export const metadata: Metadata = {
  title: "Incident Report — PHOENIX",
  description: "Full details, evidence and status of your incident report.",
  openGraph: {
    title: "Incident Report — PHOENIX",
    description: "Full details and status of an incident report.",
  },
};

export default function Page() {
  return <IncidentDetailPage />;
}
