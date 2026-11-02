"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PhoenixMark } from "@/components/brand/PhoenixLogo";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-paper px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[560px]">
          <PhoenixMark className="h-9 w-9 text-ink" />
          <h1 className="mt-8 text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">
            This page didn&apos;t load
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Something went wrong on our side. Try again, or go back to the start.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button
              onClick={() => {
                router.refresh();
                reset();
              }}
            >
              Try again
            </Button>
            <Link
              href="/"
              className="text-[15px] font-semibold text-link underline underline-offset-4 hover:text-ink hover:decoration-2"
            >
              Go to the home page
            </Link>
          </div>
          <p className="mt-12 border-t border-border pt-4 text-sm text-muted-foreground">
            In immediate danger, always call your local emergency number first.
          </p>
        </div>
      </div>
    </main>
  );
}
