"use client";

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { SpinnerGap } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/phoenix/auth";
import { updatePassword, updateProfile } from "@/lib/phoenix/api";

const profileSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only")
    .optional()
    .or(z.literal("")),
  emergency_contact_name: z.string().trim().min(2, "Enter emergency contact name").max(100),
  emergency_contact_email: z.string().trim().email("Enter a valid email address").max(255),
  emergency_contact_phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only")
    .optional()
    .or(z.literal("")),
});

const passwordSchema = z
  .object({
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

function initialsOf(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

/** Label, optional hint, error, then the control: the civic field order. */
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
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {hint ? (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-[15px] font-semibold text-emergency">
          {error}
        </p>
      ) : null}
      {children}
    </div>
  );
}

function describedBy(id: string, hint: boolean, error?: string | undefined) {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});

  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [contactName, setContactName] = useState(profile?.emergency_contact_name ?? "");
  const [contactEmail, setContactEmail] = useState(profile?.emergency_contact_email ?? "");
  const [contactPhone, setContactPhone] = useState(profile?.emergency_contact_phone ?? "");

  useEffect(() => {
    if (profile) {
      if (profile.full_name) setFullName(profile.full_name);
      if (profile.phone) setPhone(profile.phone);
      if (profile.emergency_contact_name) setContactName(profile.emergency_contact_name);
      if (profile.emergency_contact_email) setContactEmail(profile.emergency_contact_email);
      if (profile.emergency_contact_phone) setContactPhone(profile.emergency_contact_phone);
    }
  }, [profile]);

  const saveProfile = useMutation({
    mutationFn: (values: z.infer<typeof profileSchema>) =>
      updateProfile(user!.id, {
        full_name: values.full_name,
        phone: values.phone || null,
        emergency_contact_name: values.emergency_contact_name,
        emergency_contact_email: values.emergency_contact_email,
        emergency_contact_phone: values.emergency_contact_phone || null,
      }),
    onSuccess: async () => {
      await refreshProfile();
      void queryClient.invalidateQueries({ queryKey: ["contacts"] });
      void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Profile and emergency contact saved successfully.");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const savePassword = useMutation({
    mutationFn: (password: string) => updatePassword(password),
    onSuccess: () => toast.success("Password updated successfully."),
    onError: (error: Error) => toast.error(error.message),
  });

  const displayName = profile?.full_name || "Your profile";
  const avatarUrl = profile?.avatar_url ?? null;

  const submitProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = profileSchema.safeParse({
      full_name: fullName,
      phone: phone,
      emergency_contact_name: contactName,
      emergency_contact_email: contactEmail,
      emergency_contact_phone: contactPhone,
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    saveProfile.mutate(parsed.data);
  };

  const saveButton = (
    <Button type="submit" disabled={saveProfile.isPending}>
      {saveProfile.isPending ? <SpinnerGap size={18} className="animate-spin" aria-hidden /> : null}
      Save details
    </Button>
  );

  return (
    <div className="max-w-[720px]">
      <PageHeader
        title="Profile"
        description="Keep your details and your email alert contact current, so help reaches the right people."
      />

      <div className="mb-12 flex items-center gap-5">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="" className="h-16 w-16 shrink-0 object-cover" />
        ) : (
          <span
            aria-hidden
            className="flex h-16 w-16 shrink-0 items-center justify-center bg-surface text-xl font-bold text-ink"
          >
            {initialsOf(profile?.full_name || user?.email || "")}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-lg font-bold">{displayName}</p>
          <p className="truncate text-[15px] text-muted-foreground">{user?.email}</p>
        </div>
      </div>

      <form noValidate onSubmit={submitProfile} className="space-y-12">
        <section aria-labelledby="details-heading" className="space-y-6">
          <SectionHeading id="details-heading" title="Your details" />
          <Field id="full_name" label="Full name" error={errors["full_name"]}>
            <Input
              id="full_name"
              name="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              maxLength={100}
              aria-invalid={Boolean(errors["full_name"])}
              aria-describedby={describedBy("full_name", false, errors["full_name"])}
            />
          </Field>
          <Field
            id="phone"
            label="Phone number (optional)"
            hint="Include your country code, for example +1 555 019 2834."
            error={errors["phone"]}
          >
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={20}
              className="max-w-[320px] tabular-nums"
              aria-invalid={Boolean(errors["phone"])}
              aria-describedby={describedBy("phone", true, errors["phone"])}
            />
          </Field>
        </section>

        <section aria-labelledby="alert-contact-heading" className="space-y-6">
          <SectionHeading id="alert-contact-heading" title="Emergency contact for email alerts" />
          <p className="text-muted-foreground">
            This person is emailed straight away when you raise an SOS.
          </p>
          <Field id="emergency_contact_name" label="Their name" error={errors["emergency_contact_name"]}>
            <Input
              id="emergency_contact_name"
              name="emergency_contact_name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              maxLength={100}
              aria-invalid={Boolean(errors["emergency_contact_name"])}
              aria-describedby={describedBy("emergency_contact_name", false, errors["emergency_contact_name"])}
            />
          </Field>
          <Field
            id="emergency_contact_email"
            label="Their email address"
            hint="The SOS alert is sent here."
            error={errors["emergency_contact_email"]}
          >
            <Input
              id="emergency_contact_email"
              name="emergency_contact_email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              maxLength={255}
              aria-invalid={Boolean(errors["emergency_contact_email"])}
              aria-describedby={describedBy("emergency_contact_email", true, errors["emergency_contact_email"])}
            />
          </Field>
          <Field
            id="emergency_contact_phone"
            label="Their phone number (optional)"
            error={errors["emergency_contact_phone"]}
          >
            <Input
              id="emergency_contact_phone"
              name="emergency_contact_phone"
              type="tel"
              inputMode="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              maxLength={20}
              className="max-w-[320px] tabular-nums"
              aria-invalid={Boolean(errors["emergency_contact_phone"])}
              aria-describedby={describedBy("emergency_contact_phone", false, errors["emergency_contact_phone"])}
            />
          </Field>
          <div className="pt-2">{saveButton}</div>
        </section>
      </form>

      <section aria-labelledby="password-heading" className="mt-12 space-y-6">
        <SectionHeading id="password-heading" title="Password" />
        <form
          className="space-y-6"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const parsed = passwordSchema.safeParse({
              password: String(form.get("password") ?? ""),
              confirm: String(form.get("confirm") ?? ""),
            });
            if (!parsed.success) {
              const next: Record<string, string> = {};
              for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
              setPasswordErrors(next);
              return;
            }
            setPasswordErrors({});
            savePassword.mutate(parsed.data.password);
            event.currentTarget.reset();
          }}
        >
          <Field
            id="password"
            label="New password"
            hint="At least 8 characters, including a letter and a number."
            error={passwordErrors["password"]}
          >
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              maxLength={72}
              className="max-w-[420px]"
              aria-invalid={Boolean(passwordErrors["password"])}
              aria-describedby={describedBy("password", true, passwordErrors["password"])}
            />
          </Field>
          <Field id="confirm" label="Confirm new password" error={passwordErrors["confirm"]}>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              maxLength={72}
              className="max-w-[420px]"
              aria-invalid={Boolean(passwordErrors["confirm"])}
              aria-describedby={describedBy("confirm", false, passwordErrors["confirm"])}
            />
          </Field>
          <div className="pt-2">
            <Button type="submit" disabled={savePassword.isPending}>
              {savePassword.isPending ? <SpinnerGap size={18} className="animate-spin" aria-hidden /> : null}
              Update password
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
