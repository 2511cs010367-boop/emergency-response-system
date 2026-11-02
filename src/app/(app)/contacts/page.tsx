import type { Metadata } from "next";
import { ContactsPage } from "./contacts-page";

export const metadata: Metadata = {
  title: "Emergency Contacts — PHOENIX",
  description: "Manage the trusted contacts notified when you raise an SOS.",
  openGraph: {
    title: "Emergency Contacts — PHOENIX",
    description: "Manage the trusted contacts notified during emergencies.",
  },
};

export default function Page() {
  return <ContactsPage />;
}
