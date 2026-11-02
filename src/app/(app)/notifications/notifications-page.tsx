"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Bell } from "@phosphor-icons/react";
import { PageHeader, TextLink } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/phoenix/auth";
import {
  listNotifications,
  markAllNotificationsRead,
  markNotificationRead,
} from "@/lib/phoenix/api";
import { labelize, timeAgo } from "@/lib/phoenix/constants";
import type { AppNotification } from "@/lib/phoenix/constants";

export function NotificationsPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => listNotifications(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 30000,
  });

  const refresh = () => queryClient.invalidateQueries({ queryKey: ["notifications"] });

  const readOne = useMutation({
    mutationFn: (id: string) => markNotificationRead(id),
    onSuccess: () => void refresh(),
  });
  const readAll = useMutation({
    mutationFn: () => markAllNotificationsRead(user!.id),
    onSuccess: () => void refresh(),
  });

  const unread = notifications.filter((item) => !item.is_read).length;
  const ranked = [...notifications].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return (
    <>
      <PageHeader
        title="Notifications"
        description={
          unread ? `${unread} unread update${unread === 1 ? "" : "s"}` : "You're all caught up."
        }
        action={
          unread ? (
            <Button variant="outline" onClick={() => readAll.mutate()} disabled={readAll.isPending}>
              Mark all as read
            </Button>
          ) : undefined
        }
      />

      {notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No notifications"
          description="Alerts about your SOS activity and incident reports will appear here."
        />
      ) : (
        <ol className="max-w-[860px] border-t-2 border-ink">
          {ranked.map((item: AppNotification) => (
            <li
              key={item.id}
              className="grid grid-cols-[12px_1fr] gap-x-4 border-b border-border py-4 sm:grid-cols-[12px_1fr_auto]"
            >
              <span className="pt-2">
                {!item.is_read ? (
                  <span
                    className="block h-2.5 w-2.5 bg-signal outline outline-1 outline-ink"
                    aria-hidden
                  />
                ) : null}
              </span>
              <div className="min-w-0">
                <p className={cn(item.is_read ? "font-medium" : "font-bold")}>
                  {!item.is_read ? <span className="sr-only">Unread: </span> : null}
                  {item.title}
                </p>
                <p className="mt-1 text-[15px] text-muted-foreground">{item.message}</p>
                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span>{labelize(item.type)}</span>
                  <time dateTime={item.created_at} className="tabular-nums sm:hidden">
                    {timeAgo(item.created_at)}
                  </time>
                  {item.link ? <TextLink href={item.link}>View details</TextLink> : null}
                  {!item.is_read ? (
                    <Button
                      variant="link"
                      size="sm"
                      className="text-[15px] font-semibold"
                      onClick={() => readOne.mutate(item.id)}
                      disabled={readOne.isPending && readOne.variables === item.id}
                    >
                      Mark as read
                    </Button>
                  ) : null}
                </div>
              </div>
              <time
                dateTime={item.created_at}
                className="hidden whitespace-nowrap pt-0.5 text-right text-[15px] text-muted-foreground tabular-nums sm:block"
              >
                {timeAgo(item.created_at)}
              </time>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
