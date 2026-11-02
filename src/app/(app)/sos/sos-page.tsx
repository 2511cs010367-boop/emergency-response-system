"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MapPin, ShieldWarning, Siren, SpinnerGap } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { SOS_PATH, StepRail } from "@/components/phoenix/StepRail";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/phoenix/auth";
import {
  createSos,
  getActiveSos,
  listContacts,
  listMyEmergencyAlerts,
  listMySos,
  listSosHistory,
  sendEmergencyAlertEmail,
  updateProfile,
  updateSosStatus,
} from "@/lib/phoenix/api";
import { getCurrentPosition, reverseGeocode } from "@/lib/phoenix/geolocation";
import {
  EMERGENCY_TYPES,
  SOS_STATUS_TONE,
  formatDateTime,
  labelize,
  timeAgo,
} from "@/lib/phoenix/constants";

interface Located {
  latitude: number;
  longitude: number;
  accuracy: number;
  address: string | null;
}

function emailTone(status: string) {
  if (status === "sent") return "success" as const;
  if (status === "failed") return "emergency" as const;
  return "warning" as const;
}

export function SosPage() {
  const { user, profile, refreshProfile } = useAuth();
  const queryClient = useQueryClient();
  const [type, setType] = useState<string>("GENERAL");
  const [message, setMessage] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [quickName, setQuickName] = useState("");
  const [quickEmail, setQuickEmail] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  const [holdProgress, setHoldProgress] = useState(0);
  const [location, setLocation] = useState<Located | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const holdTimer = useRef<number | null>(null);

  const saveQuickContact = useMutation({
    mutationFn: async () => {
      if (!quickName.trim()) throw new Error("Please enter contact name.");
      if (!quickEmail.trim() || !quickEmail.includes("@"))
        throw new Error("Please enter a valid email address.");
      await updateProfile(user!.id, {
        full_name: profile?.full_name || "User",
        phone: profile?.phone ?? null,
        emergency_contact_name: quickName.trim(),
        emergency_contact_email: quickEmail.trim(),
        emergency_contact_phone: quickPhone.trim() || null,
      });
      await refreshProfile();
    },
    onSuccess: () => {
      toast.success("Emergency contact saved. You can now send an SOS.");
      setQuickContactOpen(false);
      void queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const captureLocation = async () => {
    setLocating(true);
    setLocationError(null);
    try {
      const position = await getCurrentPosition();
      const address = await reverseGeocode(position.latitude, position.longitude);
      setLocation({ ...position, address });
    } catch (error) {
      setLocationError(error instanceof Error ? error.message : "Could not get your location.");
    } finally {
      setLocating(false);
    }
  };

  useEffect(() => {
    void captureLocation();
  }, []);

  const { data: active } = useQuery({
    queryKey: ["sos-active", user?.id],
    queryFn: () => getActiveSos(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 15000,
  });

  // Kept warm for other screens that read the same cache key.
  useQuery({
    queryKey: ["sos-history", user?.id],
    queryFn: () => listMySos(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: emergencyEmailAlerts = [] } = useQuery({
    queryKey: ["emergency-alerts-history", user?.id],
    queryFn: () => listMyEmergencyAlerts(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: contacts = [] } = useQuery({
    queryKey: ["contacts", user?.id],
    queryFn: () => listContacts(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: timeline = [] } = useQuery({
    queryKey: ["sos-timeline", active?.id],
    queryFn: () => listSosHistory(active!.id),
    enabled: Boolean(active?.id),
    refetchInterval: 15000,
  });

  // Effective emergency contact email
  const configuredEmail =
    profile?.emergency_contact_email?.trim() ||
    contacts.find((c) => c.email)?.email?.trim() ||
    null;

  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: ["sos-active"] });
    void queryClient.invalidateQueries({ queryKey: ["sos-history"] });
    void queryClient.invalidateQueries({ queryKey: ["emergency-alerts-history"] });
    void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    void queryClient.invalidateQueries({ queryKey: ["notifications"] });
  };

  const trigger = useMutation({
    mutationFn: async () => {
      // 1. Create SOS record
      const sosAlert = await createSos(user!.id, {
        emergency_type: type,
        latitude: location?.latitude ?? null,
        longitude: location?.longitude ?? null,
        accuracy: location?.accuracy ?? null,
        address: location?.address ?? null,
        message: message.trim() ? message.trim().slice(0, 500) : null,
      });

      // 2. Send the emergency email
      let emailResult;
      try {
        emailResult = await sendEmergencyAlertEmail({
          message:
            message.trim() ||
            `Emergency ${type} alert triggered by ${profile?.full_name || "user"}.`,
          latitude: location?.latitude ?? null,
          longitude: location?.longitude ?? null,
        });
      } catch (err: unknown) {
        // Expected when the email provider rejects the send; the toast tells the user.
        console.warn("Emergency email failed:", err);
        const errMsg = err instanceof Error ? err.message : "Failed to send the email alert";
        toast.error(`The SOS was raised, but the email could not be sent: ${errMsg}`);
      }

      return { sosAlert, emailResult };
    },
    onSuccess: (data) => {
      if (data.emailResult?.success) {
        toast.success(`SOS sent. We emailed ${data.emailResult.alert.email_sent_to}.`);
      } else {
        toast.success("SOS sent.");
      }
      setMessage("");
      invalidate();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const cancel = useMutation({
    mutationFn: async () =>
      updateSosStatus(active!, "CANCELLED", "Cancelled by the user.", user!.id),
    onSuccess: () => {
      toast.success("SOS cancelled.");
      invalidate();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const openQuickContact = () => {
    setQuickName(profile?.emergency_contact_name || "");
    setQuickEmail(profile?.emergency_contact_email || "");
    setQuickPhone(profile?.emergency_contact_phone || "");
    setQuickContactOpen(true);
  };

  /** Checks shared by the pointer hold and the keyboard path. */
  const canArm = () => {
    if (active) return false;
    if (!user) {
      toast.error("Please login before using the emergency feature.");
      return false;
    }
    if (!configuredEmail) {
      toast.error("Please configure an emergency contact before using this feature.");
      openQuickContact();
      return false;
    }
    return true;
  };

  const startHold = () => {
    if (!canArm()) return;
    const started = Date.now();
    holdTimer.current = window.setInterval(() => {
      const progress = Math.min((Date.now() - started) / 1200, 1);
      setHoldProgress(progress);
      if (progress >= 1) {
        stopHold();
        setConfirmOpen(true);
      }
    }, 30);
  };

  const stopHold = () => {
    if (holdTimer.current) window.clearInterval(holdTimer.current);
    holdTimer.current = null;
    setHoldProgress(0);
  };

  // Keyboard users can't "hold"; Enter / Space opens the confirm dialog directly.
  // Key repeat is ignored, and the dialog's confirm button stays the safety step.
  const onControlKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    if (event.repeat || confirmOpen) return;
    if (canArm()) setConfirmOpen(true);
  };

  useEffect(() => () => stopHold(), []);

  const recipientLine = configuredEmail
    ? `We'll email ${configuredEmail} with your location.`
    : "Add an emergency contact so someone is emailed when you send an SOS.";

  return (
    <>
      <PageHeader
        title="Emergency SOS"
        description={
          active
            ? "Your SOS is live. Your contacts have been told where you are."
            : "Hold the red button for one second. We'll ask you to confirm before anything is sent."
        }
      />

      {!configuredEmail ? (
        <div
          role="status"
          className="mb-10 flex flex-col items-start gap-4 bg-tag-yellow p-5 text-tag-yellow-ink sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <ShieldWarning size={24} className="mt-0.5 shrink-0" aria-hidden />
            <div>
              <p className="font-bold text-ink">You have no emergency contact</p>
              <p className="mt-1 text-[15px]">
                Nobody will be emailed when you send an SOS until you add one.
              </p>
            </div>
          </div>
          <Button variant="outline" className="shrink-0" onClick={openQuickContact}>
            Add a contact
          </Button>
        </div>
      ) : null}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
        <div className="min-w-0">
          {active ? (
            <section aria-labelledby="active-heading">
              <StatusBadge status={active.status} tone={SOS_STATUS_TONE[active.status]} />
              <h2
                id="active-heading"
                className="mt-4 text-[28px] font-extrabold leading-tight sm:text-[32px]"
              >
                {labelize(active.emergency_type)} emergency {labelize(active.status).toLowerCase()}
              </h2>
              <p className="mt-2 text-[15px] text-muted-foreground tabular-nums">
                Raised {timeAgo(active.created_at)} · {active.contacts_notified} contact
                {active.contacts_notified === 1 ? "" : "s"} notified
              </p>
              {active.address ? (
                <p className="mt-4 flex items-start gap-2">
                  <MapPin size={20} className="mt-0.5 shrink-0" aria-hidden />
                  <span>{active.address}</span>
                </p>
              ) : null}

              <div className="mt-8 border-t-2 border-ink pt-6">
                <StepRail
                  path={SOS_PATH}
                  status={active.status}
                  history={timeline}
                  {...(active.status === "CANCELLED" ? { stoppedLabel: "Cancelled" } : {})}
                />
              </div>

              <Button
                variant="outline"
                className="mt-8"
                onClick={() => cancel.mutate()}
                disabled={cancel.isPending}
              >
                {cancel.isPending ? (
                  <SpinnerGap size={18} className="animate-spin" aria-hidden />
                ) : null}
                I'm safe — cancel SOS
              </Button>
            </section>
          ) : (
            <>
              <button
                type="button"
                aria-label="Hold to send SOS. Keyboard users: press Enter to open the confirmation."
                aria-describedby="sos-hold-hint"
                onPointerDown={startHold}
                onPointerUp={stopHold}
                onPointerLeave={stopHold}
                onPointerCancel={stopHold}
                onContextMenu={(event) => event.preventDefault()}
                onKeyDown={onControlKeyDown}
                className="relative flex min-h-[260px] w-full touch-none select-none flex-col justify-between overflow-hidden bg-emergency p-6 text-left text-emergency-foreground transition-colors hover:bg-emergency-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:min-h-[320px] sm:p-8"
              >
                <Siren size={48} weight="fill" aria-hidden />
                <span className="block text-[32px] font-extrabold leading-none tracking-[-0.02em] sm:text-[40px]">
                  Hold to send SOS
                </span>
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-2 bg-ink/30">
                  <span
                    className="block h-full bg-paper"
                    style={{ width: `${holdProgress * 100}%` }}
                  />
                </span>
              </button>
              <p id="sos-hold-hint" className="mt-3 text-[15px] text-muted-foreground">
                Press and hold for one second, or press Enter. You'll confirm before it's sent.
              </p>
            </>
          )}
        </div>

        <div className="min-w-0 space-y-10">
          <section aria-labelledby="details-heading">
            <SectionHeading id="details-heading" title="Alert details" />
            <div className="space-y-5 pt-4">
              <div className="space-y-2">
                <Label htmlFor="sos-type">Emergency type</Label>
                <Select value={type} onValueChange={setType} disabled={Boolean(active)}>
                  <SelectTrigger id="sos-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EMERGENCY_TYPES.map((value) => (
                      <SelectItem key={value} value={value}>
                        {labelize(value)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sos-message">Message (optional)</Label>
                <p id="sos-message-hint" className="text-sm text-muted-foreground">
                  Anything your contacts should know. Up to 500 characters.
                </p>
                <Textarea
                  id="sos-message"
                  aria-describedby="sos-message-hint"
                  value={message}
                  maxLength={500}
                  disabled={Boolean(active)}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="location-heading">
            <SectionHeading
              id="location-heading"
              title="Your location"
              action={
                <Button variant="link" size="sm" onClick={captureLocation} disabled={locating}>
                  {locating ? <SpinnerGap size={16} className="animate-spin" aria-hidden /> : null}
                  {locating ? "Locating…" : "Refresh"}
                </Button>
              }
            />
            <div className="pt-3" aria-live="polite">
              {location ? (
                <>
                  <p className="font-medium">{location.address ?? "Coordinates captured"}</p>
                  <p className="mt-1 text-sm text-muted-foreground tabular-nums">
                    {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)} · ±
                    {Math.round(location.accuracy)}m
                  </p>
                </>
              ) : (
                <p className="text-muted-foreground">{locationError ?? "Getting your position…"}</p>
              )}
              {locationError ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  You can still send an SOS. The email will say your location was unavailable.
                </p>
              ) : null}
            </div>
          </section>

          <section aria-labelledby="recipient-heading">
            <SectionHeading id="recipient-heading" title="Who gets the email" />
            <p className="pt-3">{recipientLine}</p>
            {!configuredEmail ? (
              <Button variant="link" className="mt-1" onClick={openQuickContact}>
                Add a contact
              </Button>
            ) : null}
          </section>
        </div>
      </div>

      {emergencyEmailAlerts.length ? (
        <section aria-labelledby="email-history-heading" className="mt-16">
          <SectionHeading id="email-history-heading" title="Email alerts sent" />
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-ink text-[15px]">
                  <th scope="col" className="py-3 pr-4 font-bold">
                    Sent
                  </th>
                  <th scope="col" className="py-3 pr-4 font-bold">
                    Recipient
                  </th>
                  <th scope="col" className="hidden py-3 pr-4 font-bold md:table-cell">
                    Message
                  </th>
                  <th scope="col" className="py-3 pr-4 font-bold">
                    Location
                  </th>
                  <th scope="col" className="py-3 font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {emergencyEmailAlerts.map((alert) => {
                  const hasLoc = alert.latitude !== null && alert.longitude !== null;
                  return (
                    <tr key={alert.id} className="border-b border-border align-top">
                      <td className="whitespace-nowrap py-3 pr-4 text-[15px] tabular-nums">
                        <time dateTime={alert.created_at}>{formatDateTime(alert.created_at)}</time>
                      </td>
                      <td className="max-w-[220px] truncate py-3 pr-4 text-[15px]">
                        {alert.email_sent_to || "—"}
                      </td>
                      <td className="hidden max-w-[280px] truncate py-3 pr-4 text-[15px] text-muted-foreground md:table-cell">
                        {alert.message || "—"}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4 text-[15px]">
                        {hasLoc ? (
                          <a
                            href={`https://www.google.com/maps?q=${alert.latitude},${alert.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link underline underline-offset-4 tabular-nums hover:text-ink hover:decoration-2"
                          >
                            {alert.latitude?.toFixed(4)}, {alert.longitude?.toFixed(4)}
                            <span className="sr-only"> (opens map in a new tab)</span>
                          </a>
                        ) : (
                          <span className="text-muted-foreground">Unavailable</span>
                        )}
                      </td>
                      <td className="py-3">
                        <StatusBadge status={alert.status} tone={emailTone(alert.status)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send SOS now?</AlertDialogTitle>
            <AlertDialogDescription>
              This raises a live {labelize(type).toLowerCase()} SOS and emails{" "}
              <strong className="text-foreground">{configuredEmail}</strong> with your location.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "emergency" })}
              onClick={() => trigger.mutate()}
            >
              {trigger.isPending ? (
                <SpinnerGap size={18} className="animate-spin" aria-hidden />
              ) : null}
              Send SOS
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={quickContactOpen} onOpenChange={setQuickContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add an emergency contact</DialogTitle>
            <DialogDescription>
              This person is emailed with your location whenever you send an SOS.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveQuickContact.mutate();
            }}
            className="space-y-5 py-2"
          >
            <div className="space-y-2">
              <Label htmlFor="quick_name">Full name</Label>
              <Input
                id="quick_name"
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                autoComplete="off"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quick_email">Email</Label>
              <Input
                id="quick_email"
                type="email"
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                autoComplete="off"
                maxLength={255}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="quick_phone">Phone (optional)</Label>
              <Input
                id="quick_phone"
                type="tel"
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                autoComplete="off"
                maxLength={20}
              />
            </div>

            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setQuickContactOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saveQuickContact.isPending}>
                {saveQuickContact.isPending ? (
                  <SpinnerGap size={18} className="animate-spin" aria-hidden />
                ) : null}
                Save contact
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
