import type { Metadata } from "next";
import { Landing } from "./landing-page";

export const metadata: Metadata = {
  title: "PHOENIX — When every second matters",
  description: "PHOENIX is a smart public safety platform: one-tap emergency SOS, live location sharing, incident reporting and nearby emergency services.",
  openGraph: {
    title: "PHOENIX — When every second matters",
    description: "One-tap emergency SOS, live location sharing, incident reporting and nearby emergency services.",
  },
};

export default function Page() {
  return <Landing />;
}
