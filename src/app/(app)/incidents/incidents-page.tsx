"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MagnifyingGlass, WarningCircle } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { IncidentLedger } from "@/components/phoenix/IncidentLedger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { listMyIncidents } from "@/lib/phoenix/api";
import {
  INCIDENT_CATEGORIES,
  INCIDENT_STATUSES,
  formatDateTime,
  labelize,
} from "@/lib/phoenix/constants";

export function IncidentsPage() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("ALL");
  const [category, setCategory] = useState("ALL");

  const { data: incidents = [], isLoading } = useQuery({
    queryKey: ["incidents", user?.id],
    queryFn: () => listMyIncidents(user!.id),
    enabled: Boolean(user?.id),
  });

  const filtered = useMemo(
    () =>
      incidents.filter((incident) => {
        const matchesQuery =
          !query ||
          incident.title.toLowerCase().includes(query.toLowerCase()) ||
          incident.reference.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status === "ALL" || incident.status === status;
        const matchesCategory = category === "ALL" || incident.category === category;
        return matchesQuery && matchesStatus && matchesCategory;
      }),
    [incidents, query, status, category],
  );

  return (
    <>
      <PageHeader
        title="Incidents"
        description="Every incident you have reported, and where each one has got to."
        action={
          <Button asChild>
            <Link href="/incidents/new">Report an incident</Link>
          </Button>
        }
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_200px_220px]">
        <div className="space-y-1.5">
          <Label htmlFor="incident-search">Search</Label>
          <div className="relative">
            <MagnifyingGlass
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              id="incident-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Title or reference"
              className="pl-10"
              maxLength={80}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="incident-status">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="incident-status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All statuses</SelectItem>
              {INCIDENT_STATUSES.map((value) => (
                <SelectItem key={value} value={value}>
                  {labelize(value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="incident-category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="incident-category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All categories</SelectItem>
              {INCIDENT_CATEGORIES.map((value) => (
                <SelectItem key={value} value={value}>
                  {labelize(value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-2">
          <Skeleton className="h-10" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={WarningCircle}
          title={incidents.length ? "No matching reports" : "No reports yet"}
          description={
            incidents.length
              ? "Try clearing the filters or searching a different term."
              : "Report accidents, crimes, hazards and emergencies with evidence."
          }
          action={
            incidents.length ? undefined : (
              <Button asChild>
                <Link href="/incidents/new">Report an incident</Link>
              </Button>
            )
          }
        />
      ) : (
        <>
          <p className="mb-3 text-sm text-muted-foreground tabular-nums">
            Showing {filtered.length} of {incidents.length}{" "}
            {incidents.length === 1 ? "report" : "reports"}
          </p>
          <IncidentLedger
            incidents={filtered}
            extraColumn={{
              header: "Occurred",
              render: (incident) => (
                <time dateTime={incident.occurred_at} className="whitespace-nowrap tabular-nums">
                  {formatDateTime(incident.occurred_at)}
                </time>
              ),
            }}
          />
        </>
      )}
    </>
  );
}
