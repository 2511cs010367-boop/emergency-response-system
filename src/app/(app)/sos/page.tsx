import type { Metadata } from "next";
import { SosPage } from "./sos-page";

export const metadata: Metadata = {
  title: "Emergency SOS — PHOENIX",
  description: "Trigger a one-tap emergency SOS with live GPS location and email alerts.",
  openGraph: {
    title: "Emergency SOS — PHOENIX",
    description: "One-tap emergency SOS with live GPS location and email alerts.",
  },
};

export default function Page() {
  return <SosPage />;
}
