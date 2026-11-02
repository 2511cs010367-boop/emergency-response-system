import type { Metadata } from "next";
import { IncidentsPage } from "./incidents-page";

export const metadata: Metadata = {
  title: "My Incident Reports — PHOENIX",
  description: "Track every incident you reported and its current status.",
  openGraph: {
    title: "My Incident Reports — PHOENIX",
    description: "Track your reported incidents and their status.",
  },
};

export default function Page() {
  return <IncidentsPage />;
}
