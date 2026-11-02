import type { Metadata } from "next";
import { ProfilePage } from "./profile-page";

export const metadata: Metadata = {
  title: "Your Profile — PHOENIX",
  description: "Manage your PHOENIX account details and emergency contacts.",
  openGraph: {
    title: "Your Profile — PHOENIX",
    description: "Manage your account details and emergency contacts.",
  },
};

export default function Page() {
  return <ProfilePage />;
}
