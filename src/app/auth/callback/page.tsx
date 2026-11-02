import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthCallbackPage } from "./callback-page";

export const metadata: Metadata = {
  title: "Authenticating — PHOENIX",
  description: "Completing Google OAuth authentication.",
};

export default function Page() {
  return (
    <Suspense>
      <AuthCallbackPage />
    </Suspense>
  );
}
