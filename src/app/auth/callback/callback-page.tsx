"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";
import { SpinnerGap } from "@phosphor-icons/react";
import { PhoenixMark } from "@/components/brand/PhoenixLogo";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const searchSchema = z.object({
  code: z.string().optional(),
  error: z.string().optional(),
  error_code: z.string().optional(),
  error_description: z.string().optional(),
  redirect: z.string().optional(),
});

export function AuthCallbackPage() {
  const searchParams = useSearchParams();
  const search = useMemo<z.infer<typeof searchSchema>>(() => {
    const parsed = searchSchema.safeParse(Object.fromEntries(searchParams.entries()));
    return parsed.success ? parsed.data : {};
  }, [searchParams]);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function handleCallback() {
      // 1. Check if OAuth provider returned an error parameter (e.g. user cancelled)
      if (search.error || search.error_description) {
        const message =
          search.error === "access_denied"
            ? "Google authentication was cancelled."
            : search.error_description || "Google authentication failed.";

        if (active) {
          setErrorMessage(message);
          toast.error(message);
          setTimeout(() => {
            router.replace("/auth?mode=login");
          }, 1500);
        }
        return;
      }

      // 2. Process authorization code if present
      // The client exchanges ?code automatically on load (detectSessionInUrl);
      // getSession() waits for that. Only exchange by hand if it didn't happen.
      const { data: initial } = await supabase.auth.getSession();
      if (search.code && !initial.session) {
        try {
          const { error } = await supabase.auth.exchangeCodeForSession(search.code);
          if (error) {
            console.error("[OAuth Callback Error]:", error);
            if (active) {
              setErrorMessage(error.message || "Failed to complete authentication code exchange.");
              toast.error(error.message || "Authentication failed.");
              setTimeout(() => {
                router.replace("/auth?mode=login");
              }, 1500);
            }
            return;
          }
        } catch (err: unknown) {
          console.error("[OAuth Exception]:", err);
        }
      }

      // 3. Check existing session
      const { data: { session } } = await supabase.auth.getSession();

      // The auth listener in AuthProvider loads the profile; no need to do it here too.
      if (session) {
        if (active) {
          toast.success("Signed in successfully with Google.");
          const target = search.redirect || "/dashboard";
          router.replace(target);
        }
      } else {
        // Fallback: wait briefly for session initialization
        setTimeout(async () => {
          const { data: { session: retrySession } } = await supabase.auth.getSession();
          if (retrySession) {
            if (active) {
              toast.success("Signed in successfully.");
              router.replace(search.redirect || "/dashboard");
            }
          } else if (active) {
            toast.error("Could not establish authentication session.");
            router.replace("/auth?mode=login");
          }
        }, 1000);
      }
    }

    void handleCallback();

    return () => {
      active = false;
    };
  }, [search, router]);

  return (
    <main className="min-h-screen bg-paper px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[560px]" role="status" aria-live="polite">
          <PhoenixMark className="h-9 w-9 text-ink" />
          {errorMessage ? (
            <>
              <h1 className="mt-8 text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">
                Sign in didn&apos;t complete
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                {errorMessage} Taking you back to sign in.
              </p>
              <Button asChild className="mt-8">
                <Link href="/auth?mode=login">Back to sign in</Link>
              </Button>
            </>
          ) : (
            <>
              <h1 className="mt-8 text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">
                Signing you in
              </h1>
              <p className="mt-3 flex items-center gap-3 text-lg text-muted-foreground">
                <SpinnerGap size={22} className="shrink-0 animate-spin text-ink" aria-hidden />
                This takes a moment.
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
