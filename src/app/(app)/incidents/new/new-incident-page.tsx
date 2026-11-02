"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { Crosshair, SpinnerGap, UploadSimple } from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "@/components/phoenix/AppShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/lib/phoenix/auth";
import { createIncident, uploadIncidentMedia, validateUpload } from "@/lib/phoenix/api";
import { getCurrentPosition, reverseGeocode } from "@/lib/phoenix/geolocation";
import { INCIDENT_CATEGORIES, labelize } from "@/lib/phoenix/constants";
import type { IncidentCategory } from "@/lib/phoenix/constants";
import { cn } from "@/lib/utils";

const schema = z.object({
  category: z.string().min(1, "Choose a category"),
  title: z.string().trim().min(5, "Give the report a clear title").max(120),
  description: z.string().trim().min(20, "Describe what happened (20+ characters)").max(2000),
  occurred_at: z.string().min(1, "When did this happen?"),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  additional_details: z.string().trim().max(1000).optional().or(z.literal("")),
});

function FieldError({ id, message }: { id: string; message?: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} className="text-[15px] font-semibold text-emergency">
      {message}
    </p>
  );
}

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  return `${Math.max(1, Math.round(bytes / 1024))}KB`;
}

export function NewIncidentPage() {
  const { user } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [category, setCategory] = useState<IncidentCategory>("ACCIDENT");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = useState("");
  const [locating, setLocating] = useState(false);
  const [dragging, setDragging] = useState(false);

  const useMyLocation = async () => {
    setLocating(true);
    try {
      const position = await getCurrentPosition();
      setCoords({ latitude: position.latitude, longitude: position.longitude });
      const resolved = await reverseGeocode(position.latitude, position.longitude);
      if (resolved) setAddress(resolved);
      toast.success("Location attached to this report.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not get your location.");
    } finally {
      setLocating(false);
    }
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next: File[] = [];
    for (const file of Array.from(list)) {
      try {
        validateUpload(file);
        next.push(file);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Invalid file.");
      }
    }
    setFiles((current) => [...current, ...next].slice(0, 5));
  };

  const submit = useMutation({
    mutationFn: async (values: z.infer<typeof schema>) => {
      const incident = await createIncident(user!.id, {
        category: values.category as IncidentCategory,
        title: values.title,
        description: values.description,
        occurred_at: new Date(values.occurred_at).toISOString(),
        location: values.location ? values.location : address || null,
        latitude: coords?.latitude ?? null,
        longitude: coords?.longitude ?? null,
        additional_details: values.additional_details ? values.additional_details : null,
      });
      if (files.length) await uploadIncidentMedia(user!.id, incident.id, files);
      return incident;
    },
    onSuccess: (incident) => {
      toast.success(`Report ${incident.reference} submitted.`);
      void queryClient.invalidateQueries({ queryKey: ["incidents"] });
      void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      router.push(`/incidents/${incident.id}`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      category,
      title: String(form.get("title") ?? ""),
      description: String(form.get("description") ?? ""),
      occurred_at: String(form.get("occurred_at") ?? ""),
      location: String(form.get("location") ?? ""),
      additional_details: String(form.get("additional_details") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    submit.mutate(parsed.data);
  };

  const invalid = (key: string) => (errors[key] ? true : undefined);
  const describedBy = (key: string, hint?: string) =>
    [hint, errors[key] ? `${key}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <>
      <PageHeader
        title="Report an incident"
        description="Give responders the details they need. You can follow the report once it is filed."
      />

      <form onSubmit={handleSubmit} className="max-w-[640px] space-y-12" noValidate>
        <section aria-labelledby="what-heading" className="space-y-6">
          <SectionHeading id="what-heading" title="What happened" />

          <fieldset
            className="space-y-2"
            aria-describedby={errors["category"] ? "category-error" : undefined}
          >
            <legend className="mb-2 text-[15px] font-semibold text-ink">Category</legend>
            <FieldError id="category-error" message={errors["category"]} />
            <div className="grid gap-2 sm:grid-cols-2">
              {INCIDENT_CATEGORIES.map((value) => {
                const selected = category === value;
                return (
                  <label
                    key={value}
                    className={cn(
                      "flex min-h-[52px] cursor-pointer items-center gap-3 font-medium transition-colors focus-within:outline focus-within:outline-[3px] focus-within:outline-signal",
                      selected
                        ? "border-2 border-ink px-[15px] py-[11px]"
                        : "border border-input px-4 py-3 hover:border-ink hover:bg-surface",
                    )}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={value}
                      checked={selected}
                      onChange={() => setCategory(value)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden
                      className={cn(
                        "block h-5 w-5 shrink-0 border-2 border-ink",
                        selected ? "bg-ink" : "bg-paper",
                      )}
                    />
                    {labelize(value)}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <p id="title-hint" className="text-sm text-muted-foreground">
              A short summary, for example “Two-car collision on Bridge Road”.
            </p>
            <FieldError id="title-error" message={errors["title"]} />
            <Input
              id="title"
              name="title"
              maxLength={120}
              aria-invalid={invalid("title")}
              aria-describedby={describedBy("title", "title-hint")}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <p id="description-hint" className="text-sm text-muted-foreground">
              What happened, who was involved and whether anyone was hurt. At least 20 characters.
            </p>
            <FieldError id="description-error" message={errors["description"]} />
            <Textarea
              id="description"
              name="description"
              rows={6}
              maxLength={2000}
              aria-invalid={invalid("description")}
              aria-describedby={describedBy("description", "description-hint")}
              className="aria-[invalid=true]:border-2 aria-[invalid=true]:border-emergency"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="additional_details">Additional details (optional)</Label>
            <p id="additional-hint" className="text-sm text-muted-foreground">
              Vehicle numbers, descriptions of people, anything else that may help.
            </p>
            <FieldError id="additional_details-error" message={errors["additional_details"]} />
            <Textarea
              id="additional_details"
              name="additional_details"
              rows={3}
              maxLength={1000}
              aria-invalid={invalid("additional_details")}
              aria-describedby={describedBy("additional_details", "additional-hint")}
              className="aria-[invalid=true]:border-2 aria-[invalid=true]:border-emergency"
            />
          </div>
        </section>

        <section aria-labelledby="where-heading" className="space-y-6">
          <SectionHeading id="where-heading" title="Where and when" />

          <div className="space-y-1.5">
            <Label htmlFor="occurred_at">When did it happen?</Label>
            <FieldError id="occurred_at-error" message={errors["occurred_at"]} />
            <Input
              id="occurred_at"
              name="occurred_at"
              type="datetime-local"
              className="max-w-[280px] tabular-nums"
              aria-invalid={invalid("occurred_at")}
              aria-describedby={describedBy("occurred_at")}
              defaultValue={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .slice(0, 16)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location">Location</Label>
            <p id="location-hint" className="text-sm text-muted-foreground">
              Street, area or landmark.
            </p>
            <FieldError id="location-error" message={errors["location"]} />
            <Input
              id="location"
              name="location"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              maxLength={200}
              aria-invalid={invalid("location")}
              aria-describedby={describedBy("location", "location-hint")}
            />
          </div>

          <div className="space-y-2">
            <Button type="button" variant="outline" onClick={useMyLocation} disabled={locating}>
              {locating ? (
                <SpinnerGap size={18} className="animate-spin" aria-hidden />
              ) : (
                <Crosshair size={18} aria-hidden />
              )}
              Use my current location
            </Button>
            {coords ? (
              <p className="text-sm text-muted-foreground tabular-nums">
                Attached: {coords.latitude.toFixed(5)}, {coords.longitude.toFixed(5)}
              </p>
            ) : null}
          </div>
        </section>

        <section aria-labelledby="evidence-heading" className="space-y-4">
          <SectionHeading id="evidence-heading" title="Evidence" />
          <p className="text-sm text-muted-foreground">
            Optional. Up to 5 photos or videos, 25MB each. Only you and the response team can see them.
          </p>

          <label
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              addFiles(event.dataTransfer.files);
            }}
            className={cn(
              "flex cursor-pointer flex-col items-start gap-2 border-2 border-dashed px-5 py-6 transition-colors focus-within:outline focus-within:outline-[3px] focus-within:outline-signal sm:flex-row sm:items-center sm:gap-3",
              dragging ? "border-ink bg-surface" : "border-input hover:border-ink hover:bg-surface",
            )}
          >
            <UploadSimple size={24} aria-hidden />
            <span>
              <span className="font-semibold text-link underline underline-offset-4">Choose files</span>{" "}
              <span className="text-muted-foreground">or drag them here</span>
            </span>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              className="sr-only"
              onChange={(event) => addFiles(event.target.files)}
            />
          </label>

          {files.length ? (
            <ul className="border-t border-border">
              {files.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{file.name}</span>
                    <span className="block text-sm text-muted-foreground tabular-nums">
                      {formatSize(file.size)}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setFiles((current) => current.filter((_, i) => i !== index))}
                    className="shrink-0 text-[15px] font-semibold text-link underline underline-offset-4 hover:text-ink"
                  >
                    Remove<span className="sr-only"> {file.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <div className="flex flex-wrap items-center gap-6 border-t border-border pt-8">
          <Button type="submit" size="lg" disabled={submit.isPending}>
            {submit.isPending ? <SpinnerGap size={18} className="animate-spin" aria-hidden /> : null}
            Submit report
          </Button>
          <Link
            href="/incidents"
            className="text-[15px] font-semibold text-link underline underline-offset-4 hover:text-ink"
          >
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
