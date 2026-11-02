import type { Metadata } from "next";
import { MapPage } from "./map-page";

export const metadata: Metadata = {
  title: "Nearby Emergency Services — PHOENIX",
  description: "Find police stations, hospitals and fire stations near you.",
  openGraph: {
    title: "Nearby Emergency Services — PHOENIX",
    description: "Find emergency services near your live location.",
  },
};

export default function Page() {
  return <MapPage />;
}
