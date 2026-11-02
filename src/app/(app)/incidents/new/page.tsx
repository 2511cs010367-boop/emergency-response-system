import type { Metadata } from "next";
import { NewIncidentPage } from "./new-incident-page";

export const metadata: Metadata = {
  title: "Report an Incident — PHOENIX",
  description: "Report accidents, crimes, hazards and emergencies with evidence.",
  openGraph: {
    title: "Report an Incident — PHOENIX",
    description: "Submit a detailed incident report with photo or video evidence.",
  },
};

export default function Page() {
  return <NewIncidentPage />;
}
