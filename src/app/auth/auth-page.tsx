"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Eye, EyeSlash, GoogleLogo, SpinnerGap } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoenixLogo } from "@/components/brand/PhoenixLogo";
import { useAuth } from "@/lib/phoenix/auth";

const searchSchema = z.object({
  mode: z.enum(["login", "register"]).optional(),
  redirect: z.string().optional(),
});

const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(100),
    email: z.string().trim().email("Enter a valid email").max(255),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number")
      .max(20)
      .regex(/^[+0-9()\-\s]+$/, "Phone can only contain digits and + ( ) -"),
    password: z
      .string()
      .min(8, "Use at least 8 characters")
      .max(72)
      .regex(/[A-Za-z]/, "Include a letter")
      .regex(/[0-9]/, "Include a number"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(1, "Enter your password"),
});

type Errors = Record<string, string>;

export function AuthPage() {
  const searchParams = useSearchParams();
  const search = useMemo<z.infer<typeof searchSchema>>(() => {
    const parsed = searchSchema.safeParse(Object.fromEntries(searchParams.entries()));
    return parsed.success ? parsed.data : {};
  }, [searchParams]);
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();
  const [mode, setMode] = useState<"login" | "register">(search.mode ?? "login");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setMode(search.mode ?? "login");
  }, [search.mode]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace(search.redirect ?? "/dashboard");
    }
  }, [loading, isAuthenticated, router, search.redirect]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setErrors({});

    if (mode === "register") {
      const parsed = registerSchema.safeParse({
        fullName: String(form.get("fullName") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        password: String(form.get("password") ?? ""),
        confirm: String(form.get("confirm") ?? ""),
      });
      if (!parsed.success) {
        const next: Errors = {};
        for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
        setErrors(next);
        return;
      }
      setSubmitting(true);
      try {
        const { data: sbData, error: sbError } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: parsed.data.fullName, phone: parsed.data.phone },
          },
        });

        if (sbError) {
          toast.error(
            sbError.message.includes("already registered")
              ? "That email already has an account. Try logging in."
              : sbError.message,
          );
          return;
        }

        // Auto-seed profile with name and phone
        if (sbData?.user) {
          await supabase.from("profiles").upsert({
            id: sbData.user.id,
            full_name: parsed.data.fullName,
            email: parsed.data.email,
            phone: parsed.data.phone,
          });
        }

        // Email confirmation is on in Supabase, so sign-up usually returns no
        // session yet. Don't send the user into the app until they confirm.
        if (!sbData?.session) {
          toast.success("Account created. Check your email to confirm it, then sign in.");
          router.replace("/auth?mode=login");
          return;
        }

        toast.success("Account created successfully. Welcome to PHOENIX.");
        window.location.href = search.redirect ?? "/dashboard";
      } catch (err: any) {
        toast.error(err?.message || "Registration failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const parsed = loginSchema.safeParse({
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
    });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setSubmitting(true);
    try {
      const { error: sbError } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
      });

      if (sbError) {
        toast.error(
          sbError.message.includes("Invalid login")
            ? "Incorrect email or password."
            : sbError.message.includes("Email not confirmed")
              ? "Confirm your email first. Check your inbox for the link."
              : sbError.message,
        );
        return;
      }

      toast.success("Welcome back.");
      window.location.href = search.redirect ?? "/dashboard";
    } catch (err: any) {
      toast.error(err?.message || "Sign in failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setSubmitting(true);
    const redirectParam = search.redirect ? `?redirect=${encodeURIComponent(search.redirect)}` : "";
    const callbackUrl = `${window.location.origin}/auth/callback${redirectParam}`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl,
        skipBrowserRedirect: true,
      },
    });
    if (error || !data?.url) {
      setSubmitting(false);
      toast.error(error?.message || "Google sign-in failed. Please try again.");
      return;
    }

    // Supabase answers a misconfigured provider with a JSON error instead of a
    // redirect to Google. Check first so the user sees a message, not raw JSON.
    try {
      const probe = await fetch(data.url, { redirect: "manual" });
      if (probe.type !== "opaqueredirect" && !probe.ok) {
        const body = (await probe.json().catch(() => null)) as { msg?: string } | null;
        setSubmitting(false);
        const missingSecret = body?.msg?.includes("missing OAuth secret");
        toast.error(
          missingSecret
            ? "Google sign-in isn't set up yet: the Google client secret is missing in Supabase."
            : body?.msg || "Google sign-in is unavailable right now.",
        );
        return;
      }
    } catch {
      // A network/CORS hiccup on the probe shouldn't block the real redirect.
    }
    window.location.assign(data.url);
  };

  const demoSignIn = async (
    email: string,
    password: string,
    successMessage: string,
    fallbackTarget: string,
    failureMessage: string,
  ) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw new Error(
          error.message.includes("Invalid login")
            ? "Demo account not found in Supabase. Run supabase/setup-remote.sql first."
            : error.message,
        );
      }
      toast.success(successMessage);
      window.location.href = search.redirect ?? fallbackTarget;
    } catch (err: any) {
      toast.error(err?.message || failureMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <header className="bg-ink px-4 py-4 text-paper sm:px-8 lg:hidden">
        <Link href="/" aria-label="PHOENIX home" className="inline-flex">
          <PhoenixLogo />
        </Link>
      </header>

      <aside className="sticky top-0 hidden h-screen flex-col justify-between bg-ink p-12 text-paper lg:flex xl:p-16">
        <Link href="/" aria-label="PHOENIX home" className="inline-flex self-start">
          <PhoenixLogo subtitle />
        </Link>
        <p className="max-w-[16ch] text-[44px] font-extrabold leading-[1.08] tracking-[-0.02em] xl:text-[52px]">
          When every second matters, help should be one deliberate action away.
        </p>
        <p className="max-w-[44ch] text-[15px] text-paper/75">
          PHOENIX is a safety companion. In immediate danger, always call your local emergency
          number first.
        </p>
      </aside>

      <main className="flex flex-1 items-start px-4 py-10 sm:px-8 lg:items-center lg:px-16 lg:py-16">
        <div className="w-full max-w-[420px]">
          <h1 className="text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">
            {mode === "login" ? "Sign in" : "Create your account"}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {mode === "login"
              ? "Sign in to reach your safety overview."
              : "Set up PHOENIX so help can find you fast."}
          </p>

          <div role="tablist" aria-label="Account" className="mt-8 flex gap-6 border-b border-border">
            {(["login", "register"] as const).map((value) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={mode === value}
                suppressHydrationWarning
                onClick={() => {
                  setErrors({});
                  router.replace(`/auth?mode=${value}`);
                }}
                className={`-mb-px h-11 border-b-4 text-[15px] font-semibold transition-colors ${
                  mode === value
                    ? "border-ink text-ink"
                    : "border-transparent text-muted-foreground hover:text-ink"
                }`}
              >
                {value === "login" ? "Sign in" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
            {mode === "register" ? (
              <Field id="fullName" label="Full name" error={errors["fullName"]}>
                <Input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={errors["fullName"] ? true : undefined}
                  aria-describedby={errors["fullName"] ? "fullName-error" : undefined}
                />
              </Field>
            ) : null}
            <Field id="email" label="Email address" error={errors["email"]}>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={255}
                aria-invalid={errors["email"] ? true : undefined}
                aria-describedby={errors["email"] ? "email-error" : undefined}
              />
            </Field>
            {mode === "register" ? (
              <Field
                id="phone"
                label="Phone number"
                hint="Include your country code, for example +1 555 0100."
                error={errors["phone"]}
              >
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={20}
                  aria-invalid={errors["phone"] ? true : undefined}
                  aria-describedby={errors["phone"] ? "phone-error" : "phone-hint"}
                />
              </Field>
            ) : null}
            <Field
              id="password"
              label="Password"
              hint={
                mode === "register" ? "At least 8 characters, with a letter and a number." : undefined
              }
              error={errors["password"]}
            >
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  maxLength={72}
                  className="pr-12"
                  aria-invalid={errors["password"] ? true : undefined}
                  aria-describedby={
                    errors["password"]
                      ? "password-error"
                      : mode === "register"
                        ? "password-hint"
                        : undefined
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 grid w-12 place-items-center text-muted-foreground hover:text-ink"
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </Field>
            {mode === "register" ? (
              <Field id="confirm" label="Confirm password" error={errors["confirm"]}>
                <Input
                  id="confirm"
                  name="confirm"
                  type="password"
                  autoComplete="new-password"
                  maxLength={72}
                  aria-invalid={errors["confirm"] ? true : undefined}
                  aria-describedby={errors["confirm"] ? "confirm-error" : undefined}
                />
              </Field>
            ) : null}

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? <SpinnerGap size={18} className="animate-spin" aria-hidden /> : null}
              {mode === "login" ? "Sign in" : "Create account"}
            </Button>
          </form>

          <div className="mt-8 border-t border-border pt-8">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleGoogle}
              disabled={submitting}
            >
              <GoogleLogo size={20} weight="bold" aria-hidden /> Continue with Google
            </Button>
          </div>

          <section aria-labelledby="demo-heading" className="mt-8 bg-surface p-5">
            <h2 id="demo-heading" className="font-bold">
              Try the demo
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in instantly with a sample account.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                disabled={submitting}
                onClick={() =>
                  demoSignIn(
                    "user@phoenix-safety.com",
                    "User@123",
                    "Signed in as Demo User (Alex Mercer)",
                    "/dashboard",
                    "Demo login failed",
                  )
                }
              >
                Demo user
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={submitting}
                onClick={() =>
                  demoSignIn(
                    "admin@phoenix-safety.com",
                    "Admin@123",
                    "Signed in as Safety Admin",
                    "/admin",
                    "Demo admin login failed",
                  )
                }
              >
                Demo admin
              </Button>
            </div>
          </section>

          <p className="mt-8 text-[15px]">
            {mode === "login" ? "New to PHOENIX?" : "Already have an account?"}{" "}
            <Link
              href={`/auth?mode=${mode === "login" ? "register" : "login"}`}
              className="font-semibold text-link underline underline-offset-4 hover:text-ink hover:decoration-2"
            >
              {mode === "login" ? "Create an account" : "Sign in"}
            </Link>
          </p>

          <p className="mt-10 text-sm text-muted-foreground lg:hidden">
            In immediate danger, always call your local emergency number first.
          </p>
        </div>
      </main>
    </div>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1 font-semibold text-emergency">
          {error}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
    </div>
  );
}
