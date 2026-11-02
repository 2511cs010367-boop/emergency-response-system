"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { SpinnerGap } from "@phosphor-icons/react";
import { AppShell } from "@/components/phoenix/AppShell";
import { useAuth } from "@/lib/phoenix/auth";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/auth?mode=login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <SpinnerGap size={30} className="animate-spin text-primary" />
      </div>
    );
  }

  return <AppShell>{children}</AppShell>;
}
