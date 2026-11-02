import Link from "next/link";
import { PhoenixMark } from "@/components/brand/PhoenixLogo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-paper px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[560px]">
          <PhoenixMark className="h-9 w-9 text-ink" />
          <h1 className="mt-8 text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">
            Page not found
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            If you typed the web address, check it is correct. The page may also have been moved.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Go to the home page</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
