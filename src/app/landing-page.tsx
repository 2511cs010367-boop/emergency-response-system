"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, List, MapPin, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { PhoenixLogo } from "@/components/brand/PhoenixLogo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useAuth } from "@/lib/phoenix/auth";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "What it does", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Your data", href: "#data" },
];

const FEATURES = [
  {
    title: "Emergency SOS",
    body: "Hold one control and confirm. Your GPS position is captured, your contacts are emailed, and a trackable alert is opened. It can't fire by accident.",
  },
  {
    title: "Live location",
    body: "Coordinates are captured with their accuracy radius the moment an emergency starts, and shared only while it is active.",
  },
  {
    title: "Incident reports",
    body: "Report accidents, theft, fire, harassment and hazards with photo or video evidence, then follow each report until it is resolved.",
  },
  {
    title: "Emergency contacts",
    body: "Rank the people who should hear from you first. The person at the top is always told.",
  },
  {
    title: "Nearby services",
    body: "Police stations, hospitals and fire stations around your position, from OpenStreetMap, with directions.",
  },
  {
    title: "Status updates",
    body: "A notification each time responders acknowledge, act on or close your case.",
  },
];

const STEPS = [
  { title: "Create an account", body: "Register with a verified email." },
  { title: "Add your contacts", body: "Choose who should hear from you first." },
  { title: "Raise an SOS or report", body: "Hold to send, or file a report with evidence." },
  { title: "Follow the response", body: "Every step from acknowledged to resolved." },
];

const EXAMPLE = [
  { label: "Active", time: "21:04", note: "Raised from Indiranagar, ±18 m" },
  { label: "Acknowledged", time: "21:05", note: "3 contacts emailed" },
  { label: "Responding", time: "21:09", note: "Responder on the way" },
  { label: "Resolved", time: "21:31", note: "Closed by responder" },
];

/** The SOS lifecycle, drawn with the product's own step rail. Example data, labelled as such. */
function ExampleAlert() {
  const reduced = useReducedMotion();
  const [reached, setReached] = useState(reduced ? 2 : 0);

  useEffect(() => {
    if (reduced) {
      setReached(2);
      return;
    }
    const timers = [1, 2].map((step) =>
      window.setTimeout(() => setReached(step), 700 + step * 900),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [reduced]);

  return (
    <figure className="border-t-4 border-ink bg-paper">
      <div className="flex items-start justify-between gap-4 border-b border-border py-5">
        <div>
          <p className="text-xl font-bold">Medical emergency</p>
          <p className="mt-1 flex items-center gap-1.5 text-[15px] text-muted-foreground">
            <MapPin size={16} aria-hidden /> 12.9716° N, 77.6412° E
          </p>
        </div>
        <strong
          className={cn(
            "px-2 py-0.5 text-[13px] font-bold uppercase leading-5 tracking-[0.04em] transition-colors duration-500",
            reached >= 2 ? "bg-tag-blue text-tag-blue-ink" : reached === 1 ? "bg-tag-yellow text-tag-yellow-ink" : "bg-tag-red text-tag-red-ink",
          )}
        >
          {EXAMPLE[reached]?.label}
        </strong>
      </div>
      <ol className="py-6">
        {EXAMPLE.map((step, i) => {
          const done = i < reached;
          const current = i === reached;
          return (
            <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
              {i < EXAMPLE.length - 1 ? (
                <span aria-hidden className="absolute bottom-0 left-[15px] top-8 w-[2px] bg-border">
                  <span
                    className="block w-full origin-top bg-ink transition-transform duration-700 ease-out"
                    style={{ height: "100%", transform: `scaleY(${done ? 1 : 0})` }}
                  />
                </span>
              ) : null}
              <span
                className={cn(
                  "relative z-10 grid h-8 w-8 shrink-0 place-items-center border-2 text-sm font-bold tabular-nums transition-colors duration-500",
                  current
                    ? "border-ink bg-signal text-ink"
                    : done
                      ? "border-ink bg-ink text-paper"
                      : "border-border bg-paper text-muted-foreground",
                )}
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <p className={cn("font-semibold", !done && !current && "text-muted-foreground")}>
                  {step.label}
                </p>
                <p
                  className={cn(
                    "text-[15px] text-muted-foreground transition-opacity duration-500",
                    i > reached && "opacity-0",
                  )}
                >
                  <span className="tabular-nums">{step.time}</span> · {step.note}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      <figcaption className="border-t border-border pt-3 text-sm text-muted-foreground">
        Example alert. Times and place are illustrative.
      </figcaption>
    </figure>
  );
}

export function Landing() {
  const { isAuthenticated } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-signal focus:px-3 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-ink text-paper">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-10 px-4 sm:px-8">
          <Link href="/" aria-label="PHOENIX home">
            <PhoenixLogo />
          </Link>
          <nav className="hidden h-full items-center gap-7 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-paper/75 hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="flex h-10 items-center gap-2 bg-paper px-4 text-[15px] font-semibold text-ink hover:bg-surface"
              >
                Open PHOENIX <ArrowRight size={16} aria-hidden />
              </Link>
            ) : (
              <>
                <Link href="/auth" className="text-[15px] font-semibold text-paper/85 hover:text-paper">
                  Sign in
                </Link>
                <Link
                  href="/auth?mode=register"
                  className="flex h-10 items-center bg-paper px-4 text-[15px] font-semibold text-ink hover:bg-surface"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
          <button
            type="button"
            className="ml-auto grid h-10 w-10 place-items-center lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="landing-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
        {menuOpen ? (
          <nav id="landing-menu" aria-label="Main" className="border-t border-paper/15 px-4 pb-5 lg:hidden">
            <ul>
              {NAV.map((item) => (
                <li key={item.href} className="border-b border-paper/10">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-base font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-3">
              <Link
                href={isAuthenticated ? "/dashboard" : "/auth?mode=register"}
                className="flex h-11 flex-1 items-center justify-center bg-paper font-semibold text-ink"
              >
                {isAuthenticated ? "Open PHOENIX" : "Create account"}
              </Link>
              {!isAuthenticated ? (
                <Link
                  href="/auth"
                  className="flex h-11 flex-1 items-center justify-center border border-paper/60 font-semibold"
                >
                  Sign in
                </Link>
              ) : null}
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main">
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1240px] gap-14 px-4 pb-20 pt-14 sm:px-8 lg:grid-cols-[1fr_420px] lg:gap-20 lg:pb-28 lg:pt-24">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-[12ch] text-[52px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-[76px] lg:text-[92px]">
                When every second matters.
              </h1>
              <p className="mt-8 max-w-[46ch] text-xl leading-relaxed text-muted-foreground">
                PHOENIX turns an emergency into one deliberate action: hold to send, and your
                location reaches the people you chose, with every step of the response in front of
                you.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button asChild size="lg">
                  <Link href={isAuthenticated ? "/dashboard" : "/auth?mode=register"}>
                    {isAuthenticated ? "Open PHOENIX" : "Create your account"}
                    <ArrowRight size={18} aria-hidden />
                  </Link>
                </Button>
                <a
                  href="#how-it-works"
                  className="text-[17px] font-semibold text-link underline underline-offset-4 hover:text-ink"
                >
                  See how it works
                </a>
              </div>
            </div>
            <ExampleAlert />
          </div>
        </section>

        <section id="features" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <h2 className="max-w-[14ch] text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
                Everything is real, and connected.
              </h2>
              <div>
                <p className="max-w-[60ch] text-lg text-muted-foreground">
                  Alerts, locations and reports persist in a live database and reach the safety
                  command center as they happen.
                </p>
                <dl className="mt-10 border-t-2 border-ink">
                  {FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="grid gap-2 border-b border-border py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
                    >
                      <dt className="text-lg font-bold">{feature.title}</dt>
                      <dd className="max-w-[58ch] text-muted-foreground">{feature.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 py-20 sm:px-8 lg:py-28">
            <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
              How it works
            </h2>
            <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
              <span aria-hidden className="absolute left-[15px] top-4 hidden h-[2px] w-[calc(100%-30px)] bg-ink md:block" />
              {STEPS.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 md:block">
                  <span
                    className={cn(
                      "relative z-10 grid h-8 w-8 shrink-0 place-items-center border-2 border-ink text-sm font-bold tabular-nums",
                      i === 2 ? "bg-signal text-ink" : "bg-ink text-paper",
                    )}
                  >
                    {i + 1}
                  </span>
                  <div className="md:mt-6 md:pr-6">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="data" className="scroll-mt-16 bg-surface">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-28">
            <h2 className="max-w-[14ch] text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
              Your location is never shared by default.
            </h2>
            <ul className="border-t-2 border-ink">
              {[
                ["Location", "Shared only while an emergency you raised is active. Never faked."],
                ["Access", "Role-based access and row-level database security: you see your data, responders see what they need."],
                ["Evidence", "Photos and videos you attach are kept in private storage, opened through short-lived links."],
                ["Accounts", "Credentials are hashed. PHOENIX staff can't read your password."],
              ].map(([title, body]) => (
                <li
                  key={title}
                  className="grid gap-2 border-b border-[#d4d1cb] py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
                >
                  <span className="text-lg font-bold">{title}</span>
                  <span className="max-w-[58ch] text-muted-foreground">{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 px-4 py-16 sm:px-8 lg:flex-row lg:items-end lg:py-20">
            <h2 className="max-w-[18ch] text-[36px] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
              Set up your contacts before you need them.
            </h2>
            <Link
              href={isAuthenticated ? "/contacts" : "/auth?mode=register"}
              className="flex h-12 shrink-0 items-center gap-2 bg-paper px-6 text-base font-semibold text-ink hover:bg-surface"
            >
              {isAuthenticated ? "Review your contacts" : "Create your account"}
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-4 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
          <PhoenixLogo subtitle />
          <p className="max-w-[52ch] text-[15px] text-muted-foreground">
            PHOENIX is a safety companion. In a life-threatening situation, always call your local
            emergency number first.
          </p>
        </div>
      </footer>
    </div>
  );
}
