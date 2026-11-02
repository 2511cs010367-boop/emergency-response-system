"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Bell, List, SignOut, Siren, X } from "@phosphor-icons/react";
import { PhoenixLogo, PhoenixMark } from "@/components/brand/PhoenixLogo";
import { useAuth } from "@/lib/phoenix/auth";
import { getActiveSos, listNotifications } from "@/lib/phoenix/api";
import { labelize, timeAgo } from "@/lib/phoenix/constants";
import { cn } from "@/lib/utils";

interface NavItem {
  to: string;
  label: string;
}

const NAV: NavItem[] = [
  { to: "/dashboard", label: "Overview" },
  { to: "/sos", label: "SOS" },
  { to: "/incidents", label: "Incidents" },
  { to: "/contacts", label: "Contacts" },
  { to: "/map", label: "Map" },
  { to: "/notifications", label: "Notifications" },
];

function isActive(pathname: string, to: string) {
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { profile, user, isAdmin, signOut } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => listNotifications(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 30000,
  });
  const unread = notifications.filter((item) => !item.is_read).length;

  const { data: activeSos } = useQuery({
    queryKey: ["sos-active", user?.id],
    queryFn: () => getActiveSos(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 15000,
  });

  const items = isAdmin ? [...NAV, { to: "/admin", label: "Command center" }] : NAV;
  const name = profile?.full_name ?? user?.email ?? "Your profile";

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await signOut();
    router.replace("/auth");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-signal focus:px-3 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 bg-ink text-paper">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-6 px-4 sm:px-8 xl:gap-8">
          <Link href="/dashboard" className="shrink-0" aria-label="PHOENIX overview">
            <PhoenixLogo className="hidden sm:flex" />
            <PhoenixMark className="sm:hidden" />
          </Link>

          <nav className="hidden h-full items-stretch gap-5 lg:flex xl:gap-6" aria-label="Primary">
            {items.map((item) => {
              const active = isActive(pathname, item.to);
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold transition-colors",
                    active ? "text-paper" : "text-paper/70 hover:text-paper",
                  )}
                >
                  {item.label}
                  {item.to === "/notifications" && unread > 0 ? (
                    <span className="tabular-nums text-signal">{unread}</span>
                  ) : null}
                  {active ? (
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-signal" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <Link
              href="/profile"
              aria-current={isActive(pathname, "/profile") ? "page" : undefined}
              className={cn(
                "max-w-[160px] truncate whitespace-nowrap text-[15px] font-semibold underline-offset-4 hover:underline",
                isActive(pathname, "/profile") ? "text-signal" : "text-paper/85",
              )}
            >
              <span className="xl:hidden">Profile</span>
              <span className="hidden xl:inline">{name}</span>
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold text-paper/70 hover:text-paper"
            >
              <SignOut size={18} aria-hidden /> Sign out
            </button>
          </div>

          <div className="ml-auto flex items-center gap-1 lg:hidden">
            <Link
              href="/sos"
              className="flex h-10 items-center gap-1.5 bg-emergency px-3 text-sm font-bold text-emergency-foreground"
            >
              <Siren size={18} weight="fill" aria-hidden /> SOS
            </Link>
            <Link
              href="/notifications"
              className="relative grid h-10 w-10 place-items-center text-paper"
              aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
            >
              <Bell size={22} />
              {unread > 0 ? (
                <span className="absolute right-2 top-2 h-2 w-2 bg-signal" aria-hidden />
              ) : null}
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-paper"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="border-t border-paper/15 bg-ink px-4 pb-4 lg:hidden"
          >
            <ul>
              {[...items, { to: "/profile", label: "Profile" }].map((item) => {
                const active = isActive(pathname, item.to);
                return (
                  <li key={item.to} className="border-b border-paper/10">
                    <Link
                      href={item.to}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between py-3.5 text-base font-semibold",
                        active ? "text-signal" : "text-paper",
                      )}
                    >
                      {item.label}
                      {item.to === "/notifications" && unread > 0 ? (
                        <span className="tabular-nums text-signal">{unread} unread</span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-3 flex items-center gap-2 py-2 text-base font-semibold text-paper/75"
            >
              <SignOut size={18} aria-hidden /> Sign out
            </button>
          </nav>
        ) : null}

        {activeSos && pathname !== "/sos" ? (
          <Link
            href="/sos"
            className="block bg-emergency text-emergency-foreground hover:bg-emergency-deep"
          >
            <span className="mx-auto flex max-w-[1240px] items-center gap-3 px-4 py-2.5 text-[15px] font-semibold sm:px-8">
              <span className="live-dot h-2.5 w-2.5 shrink-0 bg-paper" aria-hidden />
              <span className="min-w-0 truncate">
                Your {labelize(activeSos.emergency_type).toLowerCase()} SOS is{" "}
                {labelize(activeSos.status).toLowerCase()} · raised {timeAgo(activeSos.created_at)}
              </span>
              <span className="ml-auto flex shrink-0 items-center gap-1 underline underline-offset-4">
                Open <ArrowRight size={16} aria-hidden />
              </span>
            </span>
          </Link>
        ) : null}
      </header>

      <main id="main" className="mx-auto w-full max-w-[1240px] flex-1 px-4 py-8 sm:px-8 lg:py-12">
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2 px-4 py-5 text-sm text-muted-foreground sm:px-8">
          <span>PHOENIX is a safety companion.</span>
          <span>In a life-threatening situation, always call your local emergency number first.</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  description,
  action,
  back,
}: {
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <div className="mb-10">
      {back ? (
        <Link
          href={back.href}
          className="mb-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink underline underline-offset-4 hover:decoration-2"
        >
          <ArrowLeft size={16} aria-hidden /> {back.label}
        </Link>
      ) : null}
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="min-w-0">
          <h1 className="text-[32px] font-extrabold leading-[1.1] sm:text-[40px]">{title}</h1>
          {description ? (
            <p className="mt-3 max-w-[60ch] text-lg text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {action ? <div className="flex flex-wrap gap-3">{action}</div> : null}
      </div>
    </div>
  );
}

/** A section heading with an optional trailing link or action, ruled in ink. */
export function SectionHeading({
  title,
  action,
  id,
}: {
  title: string;
  action?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-1 flex items-baseline justify-between gap-4 border-b-2 border-ink pb-2">
      <h2 id={id} className="text-xl font-bold">
        {title}
      </h2>
      {action}
    </div>
  );
}

/** Underlined text link in the civic style. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-[15px] font-semibold text-link underline underline-offset-4 hover:text-ink hover:decoration-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}
