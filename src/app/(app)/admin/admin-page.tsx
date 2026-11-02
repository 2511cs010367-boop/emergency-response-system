"use client";

import { useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ShieldStar } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { Figures } from "@/components/phoenix/Figures";
import { IncidentLedger } from "@/components/phoenix/IncidentLedger";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import {
  adminDashboard,
  adminListRoles,
  adminSetUserActive,
  updateIncidentStatus,
  updateSosStatus,
} from "@/lib/phoenix/api";
import {
  INCIDENT_STATUSES,
  SOS_STATUSES,
  SOS_STATUS_TONE,
  formatDateTime,
  labelize,
} from "@/lib/phoenix/constants";
import type { Incident, IncidentStatus, SosAlert, SosStatus } from "@/lib/phoenix/constants";

const LIVE_SOS: SosStatus[] = ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"];

export function AdminPage() {
  const { user, isAdmin } = useAuth();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: adminDashboard,
    enabled: isAdmin,
    refetchInterval: 20000,
  });

  const { data: roles = [] } = useQuery({
    queryKey: ["admin-roles"],
    queryFn: adminListRoles,
    enabled: isAdmin,
  });

  const setSos = useMutation({
    mutationFn: ({ alert, status }: { alert: SosAlert; status: SosStatus }) =>
      updateSosStatus(alert, status, null, user!.id),
    onSuccess: () => {
      toast.success("SOS status updated.");
      void queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const setIncident = useMutation({
    mutationFn: ({ incident, status }: { incident: Incident; status: IncidentStatus }) =>
      updateIncidentStatus(incident, status, null),
    onSuccess: () => {
      toast.success("Report status updated.");
      void queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const setActive = useMutation({
    mutationFn: ({ userId, isActive }: { userId: string; isActive: boolean }) =>
      adminSetUserActive(userId, isActive),
    onSuccess: (_profile, { isActive }) => {
      toast.success(isActive ? "User activated." : "User deactivated.");
      void queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const alerts = useMemo(() => {
    const all = data?.alerts ?? [];
    const live = all.filter((alert) => LIVE_SOS.includes(alert.status));
    const rest = all.filter((alert) => !LIVE_SOS.includes(alert.status));
    return [...live, ...rest].slice(0, Math.max(25, live.length));
  }, [data?.alerts]);

  const roleByUser = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const row of roles as { user_id: string; role: string }[]) {
      map.set(row.user_id, [...(map.get(row.user_id) ?? []), row.role]);
    }
    return map;
  }, [roles]);

  if (!isAdmin) {
    return (
      <EmptyState
        icon={ShieldStar}
        title="Admins only"
        description="You don't have permission to view the command center."
      />
    );
  }

  const incidents = data?.incidents ?? [];
  const users = data?.users ?? [];

  return (
    <>
      <PageHeader title="Command center" description="Live safety operations across all users." />

      {isLoading ? (
        <Skeleton className="h-24" />
      ) : (
        <Figures
          items={[
            { label: "Total users", value: data?.totalUsers ?? 0 },
            { label: "Active users", value: data?.activeUsers ?? 0 },
            { label: "Open incidents", value: data?.pendingIncidents ?? 0 },
            { label: "Resolved", value: data?.resolvedIncidents ?? 0 },
            {
              label: "Active SOS",
              value: data?.activeSos ?? 0,
              alert: (data?.activeSos ?? 0) > 0,
            },
            { label: "Total SOS", value: data?.totalSos ?? 0 },
          ]}
        />
      )}

      <Tabs defaultValue="sos" className="mt-10">
        <div className="overflow-x-auto">
          <TabsList className="w-full">
            <TabsTrigger value="sos">
              Live SOS alerts
              {data?.activeSos ? (
                <span className="tabular-nums text-emergency">{data.activeSos}</span>
              ) : null}
            </TabsTrigger>
            <TabsTrigger value="incidents">
              Incidents <span className="tabular-nums text-muted-foreground">{incidents.length}</span>
            </TabsTrigger>
            <TabsTrigger value="users">
              Users <span className="tabular-nums text-muted-foreground">{users.length}</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="sos">
          {alerts.length ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-ink text-sm">
                    <th scope="col" className="py-2.5 pr-4 font-bold">Emergency</th>
                    <th scope="col" className="hidden py-2.5 pr-4 font-bold md:table-cell">Location</th>
                    <th scope="col" className="hidden py-2.5 pr-4 font-bold sm:table-cell">Raised</th>
                    <th scope="col" className="py-2.5 pr-4 font-bold">Status</th>
                    <th scope="col" className="py-2.5 font-bold">Change status</th>
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((alert) => (
                    <tr key={alert.id} className="border-b border-border align-middle">
                      <td className="py-3 pr-4">
                        <span className="flex items-center gap-2 font-medium">
                          {alert.status === "ACTIVE" ? (
                            <span
                              className="live-dot h-2.5 w-2.5 shrink-0 bg-emergency"
                              aria-label="Live"
                            />
                          ) : null}
                          {labelize(alert.emergency_type)}
                        </span>
                        <span className="block text-sm text-muted-foreground tabular-nums sm:hidden">
                          {formatDateTime(alert.created_at)}
                        </span>
                      </td>
                      <td className="hidden max-w-[280px] py-3 pr-4 text-[15px] text-muted-foreground md:table-cell">
                        <span className="line-clamp-2">{alert.address ?? "No address"}</span>
                      </td>
                      <td className="hidden whitespace-nowrap py-3 pr-4 text-[15px] text-muted-foreground tabular-nums sm:table-cell">
                        <time dateTime={alert.created_at}>{formatDateTime(alert.created_at)}</time>
                      </td>
                      <td className="py-3 pr-4">
                        <StatusBadge status={alert.status} tone={SOS_STATUS_TONE[alert.status]} />
                      </td>
                      <td className="py-3">
                        <Select
                          value={alert.status}
                          onValueChange={(value) =>
                            setSos.mutate({ alert, status: value as SosStatus })
                          }
                        >
                          <SelectTrigger
                            className="w-40"
                            aria-label={`Change status of ${labelize(alert.emergency_type)} SOS`}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {SOS_STATUSES.map((status) => (
                              <SelectItem key={status} value={status}>
                                {labelize(status)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="border-t border-border py-4 text-muted-foreground">
              {isLoading ? "Loading SOS alerts…" : "No SOS alerts recorded."}
            </p>
          )}
        </TabsContent>

        <TabsContent value="incidents">
          {incidents.length ? (
            <IncidentLedger
              incidents={incidents.slice(0, 50)}
              showProgress={false}
              extraColumn={{
                header: "Change status",
                alwaysVisible: true,
                render: (incident) => (
                  <div onClick={(event) => event.stopPropagation()}>
                    <Select
                      value={incident.status}
                      onValueChange={(value) =>
                        setIncident.mutate({ incident, status: value as IncidentStatus })
                      }
                    >
                      <SelectTrigger
                        className="w-44"
                        aria-label={`Change status of ${incident.reference}`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {INCIDENT_STATUSES.map((status) => (
                          <SelectItem key={status} value={status}>
                            {labelize(status)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ),
              }}
            />
          ) : (
            <p className="border-t border-border py-4 text-muted-foreground">
              {isLoading ? "Loading reports…" : "No incident reports yet."}
            </p>
          )}
        </TabsContent>

        <TabsContent value="users">
          {users.length ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-ink text-sm">
                    <th scope="col" className="py-2.5 pr-4 font-bold">Name</th>
                    <th scope="col" className="hidden py-2.5 pr-4 font-bold sm:table-cell">Email</th>
                    <th scope="col" className="hidden py-2.5 pr-4 font-bold md:table-cell">Role</th>
                    <th scope="col" className="hidden py-2.5 pr-4 font-bold md:table-cell">Joined</th>
                    <th scope="col" className="py-2.5 text-right font-bold">Active</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((profile) => {
                    const userRoles = roleByUser.get(profile.id) ?? ["user"];
                    const isSelf = profile.id === user?.id;
                    return (
                      <tr key={profile.id} className="border-b border-border align-middle">
                        <td className="py-3 pr-4">
                          <span className="block font-medium">
                            {profile.full_name || "Unnamed"}
                            {isSelf ? <span className="text-muted-foreground"> (you)</span> : null}
                          </span>
                          <span className="block truncate text-sm text-muted-foreground sm:hidden">
                            {profile.email}
                          </span>
                        </td>
                        <td className="hidden py-3 pr-4 text-[15px] sm:table-cell">
                          <span className="break-all">{profile.email}</span>
                        </td>
                        <td className="hidden py-3 pr-4 text-[15px] md:table-cell">
                          {userRoles.map(labelize).join(", ")}
                        </td>
                        <td className="hidden whitespace-nowrap py-3 pr-4 text-[15px] text-muted-foreground tabular-nums md:table-cell">
                          <time dateTime={profile.created_at}>{formatDateTime(profile.created_at)}</time>
                        </td>
                        <td className="py-3 text-right">
                          <Switch
                            checked={profile.is_active}
                            disabled={isSelf || setActive.isPending}
                            onCheckedChange={(checked) =>
                              setActive.mutate({ userId: profile.id, isActive: checked })
                            }
                            aria-label={`${profile.is_active ? "Deactivate" : "Activate"} ${profile.full_name || profile.email}`}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="border-t border-border py-4 text-muted-foreground">
              {isLoading ? "Loading users…" : "No users found."}
            </p>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
}
