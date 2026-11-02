import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthPage } from "./auth-page";

export const metadata: Metadata = {
  title: "Sign in — PHOENIX Safety",
  description: "Log in or create your PHOENIX account to access emergency SOS and incident reporting.",
  openGraph: {
    title: "Sign in — PHOENIX Safety",
    description: "Access emergency SOS, live location sharing and incident reporting.",
  },
};

export default function Page() {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
}
