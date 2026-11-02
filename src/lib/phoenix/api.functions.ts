"use server";

/**
 * PHOENIX Server Functions
 *
 * All database mutations and queries are Next.js Server Actions that execute on
 * the server behind `requireSupabaseAuth`. Call them from the client with
 * `callWithSupabaseAuth` (`@/integrations/supabase/auth-attacher`).
 *
 * This gives us:
 *   1. Server-side JWT verification on every call
 *   2. RLS-authenticated Supabase client scoped to the calling user
 *   3. Server-side admin role checks for admin-only operations
 *   4. Validation before the database is touched
 */

import { authedServerFn, publicServerFn } from "./server-fn";
import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function unwrap<T>(result: { data: T; error: { message: string } | null }): NonNullable<T> {
  if (!result || result.error) throw new Error(result?.error?.message ?? "Query error");
  return result.data as NonNullable<T>;
}

function maybe<T>(result: { data: T; error: { message: string } | null }): T | null {
  if (!result || result.error) return null;
  return result.data ?? null;
}

async function safeQuery<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

async function assertAdmin(supabase: any, userId: string) {
  const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId);
  const roles = (data ?? []).map((r: { role: string }) => r.role);
  if (!roles.includes("admin")) {
    throw new Error("Forbidden: admin role required");
  }
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                   */
/* -------------------------------------------------------------------------- */

export const getProfileFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(async () => {
    const [profileRes, contactRes] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
      supabase
        .from("emergency_contacts")
        .select("*")
        .eq("user_id", userId)
        .order("is_primary", { ascending: false })
        .limit(1)
        .maybeSingle(),
    ]);
    const base = profileRes.data;
    if (!base) return null;
    const contact = contactRes.data;
    return {
      ...base,
      emergency_contact_name: contact?.name ?? (base as any).emergency_contact_name ?? null,
      emergency_contact_email: contact?.email ?? (base as any).emergency_contact_email ?? null,
      emergency_contact_phone: contact?.phone ?? (base as any).emergency_contact_phone ?? null,
    };
  }, null);
});

export const updateProfileFn = authedServerFn(
  z.object({
    full_name: z.string().min(1).max(100).optional(),
    phone: z.string().max(20).optional().nullable(),
    avatar_url: z.string().optional().nullable(),
    emergency_contact_name: z.string().max(100).optional().nullable(),
    emergency_contact_email: z.string().email().optional().nullable(),
    emergency_contact_phone: z.string().max(20).optional().nullable(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;

    // 1. Update profiles table (only known columns)
    const profileUpdate: {
      full_name?: string;
      phone?: string | null;
      avatar_url?: string | null;
    } = {};
    if (data.full_name !== undefined) profileUpdate.full_name = data.full_name;
    if (data.phone !== undefined) profileUpdate.phone = data.phone;
    if (data.avatar_url !== undefined) profileUpdate.avatar_url = data.avatar_url;

    if (Object.keys(profileUpdate).length > 0) {
      const { error } = await supabase.from("profiles").update(profileUpdate).eq("id", userId);
      if (error) {
        await supabase.from("profiles").upsert({ id: userId, ...profileUpdate });
      }
    }

    // 2. Save emergency contact in emergency_contacts table
    if (data.emergency_contact_name) {
      const { data: existing } = await supabase
        .from("emergency_contacts")
        .select("id")
        .eq("user_id", userId)
        .order("is_primary", { ascending: false })
        .limit(1);

      if (existing && existing.length > 0 && existing[0]) {
        await supabase
          .from("emergency_contacts")
          .update({
            name: data.emergency_contact_name,
            email: data.emergency_contact_email ?? null,
            phone: data.emergency_contact_phone ?? "N/A",
            is_primary: true,
            updated_at: new Date().toISOString(),
          })
          .eq("id", existing[0].id);
      } else {
        await supabase.from("emergency_contacts").insert({
          user_id: userId,
          name: data.emergency_contact_name,
          email: data.emergency_contact_email ?? null,
          phone: data.emergency_contact_phone ?? "N/A",
          relationship: "Primary Contact",
          priority: 1,
          is_primary: true,
        });
      }
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    return {
      ...(profile ?? { id: userId, full_name: data.full_name ?? "" }),
      emergency_contact_name: data.emergency_contact_name ?? null,
      emergency_contact_email: data.emergency_contact_email ?? null,
      emergency_contact_phone: data.emergency_contact_phone ?? null,
    };
  },
);

export const updatePasswordFn = authedServerFn(
  z.object({
    password: z
      .string()
      .min(8, "Use at least 8 characters")
      .max(72)
      .regex(/[A-Z]/, "Include an uppercase letter")
      .regex(/[a-z]/, "Include a lowercase letter")
      .regex(/[0-9]/, "Include a number")
      .regex(/[^A-Za-z0-9]/, "Include a special character"),
  }),
  async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.auth.updateUser({ password: data.password });
    if (error) throw new Error(error.message);
    return { success: true };
  },
);

export const uploadAvatarFn = authedServerFn(
  z.object({
    /** Base64-encoded file content */
    fileBase64: z.string(),
    fileName: z.string(),
    mimeType: z.string(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(data.mimeType)) {
      throw new Error("Unsupported file type. Use JPEG, PNG, or WebP.");
    }
    const buffer = Buffer.from(data.fileBase64, "base64");
    if (buffer.length > 5 * 1024 * 1024) {
      throw new Error("File too large. Maximum 5MB.");
    }
    const safeName = data.fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
    const path = `${userId}/${crypto.randomUUID()}-${safeName}`;
    const { error } = await supabase.storage
      .from("avatars")
      .upload(path, buffer, { contentType: data.mimeType, upsert: true });
    if (error) throw new Error(error.message);
    return { path };
  },
);

/* -------------------------------------------------------------------------- */
/*  Emergency Contacts                                                        */
/* -------------------------------------------------------------------------- */

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  relationship: z.string().min(1).max(50),
  phone: z.string().min(7).max(20),
  email: z.string().email().optional().nullable(),
  priority: z.number().int().min(1).max(10),
  is_primary: z.boolean(),
});

export const listContactsFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", userId)
          .order("is_primary", { ascending: false })
          .order("priority", { ascending: true }),
      ),
    [],
  );
});

export const createContactFn = authedServerFn(contactSchema, async ({ context, data }) => {
  const { supabase, userId } = context;
  if (data.is_primary) {
    await supabase
      .from("emergency_contacts")
      .update({ is_primary: false })
      .eq("user_id", userId)
      .eq("is_primary", true);
  }
  const contactData = {
    name: data.name,
    relationship: data.relationship,
    phone: data.phone,
    email: data.email ?? null,
    priority: data.priority,
    is_primary: data.is_primary,
    user_id: userId,
  };
  return unwrap(await supabase.from("emergency_contacts").insert(contactData).select("*").single());
});

export const updateContactFn = authedServerFn(
  z.object({ id: z.string().uuid() }).merge(contactSchema),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    const { id, ...values } = data;
    if (values.is_primary) {
      await supabase
        .from("emergency_contacts")
        .update({ is_primary: false })
        .eq("user_id", userId)
        .eq("is_primary", true);
    }
    const contactValues = {
      name: values.name,
      relationship: values.relationship,
      phone: values.phone,
      email: values.email ?? null,
      priority: values.priority,
      is_primary: values.is_primary,
    };
    return unwrap(
      await supabase
        .from("emergency_contacts")
        .update(contactValues)
        .eq("id", id)
        .select("*")
        .single(),
    );
  },
);

export const deleteContactFn = authedServerFn(
  z.object({ id: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.from("emergency_contacts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  },
);

/* -------------------------------------------------------------------------- */
/*  SOS Alerts                                                                */
/* -------------------------------------------------------------------------- */

export const createSosFn = authedServerFn(
  z.object({
    emergency_type: z.string().min(1),
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    accuracy: z.number().nullable(),
    address: z.string().nullable(),
    message: z.string().nullable(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;

    // Count contacts for the notification
    const contactsResult = await supabase
      .from("emergency_contacts")
      .select("id", { count: "exact" })
      .eq("user_id", userId);
    const contactCount = contactsResult.count ?? 0;

    const alert = unwrap(
      await supabase
        .from("sos_alerts")
        .insert({
          user_id: userId,
          emergency_type: data.emergency_type,
          status: "ACTIVE",
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: data.accuracy,
          address: data.address,
          message: data.message,
          contacts_notified: contactCount,
        })
        .select("*")
        .single(),
    );

    // Create notification
    await supabase.from("notifications").insert({
      user_id: userId,
      type: "SOS",
      title: "Emergency SOS activated",
      message: `Your SOS alert is live. ${contactCount} emergency contact(s) were notified with your location.`,
      link: "/sos",
    });

    return alert;
  },
);

export const listMySosFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("sos_alerts")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
      ),
    [],
  );
});

export const getActiveSosFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(
    async () =>
      maybe(
        await supabase
          .from("sos_alerts")
          .select("*")
          .eq("user_id", userId)
          .in("status", ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"])
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle(),
      ),
    null,
  );
});

export const getSosFn = authedServerFn(
  z.object({ id: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    return maybe(await supabase.from("sos_alerts").select("*").eq("id", data.id).maybeSingle());
  },
);

export const listSosHistoryFn = authedServerFn(
  z.object({ sosId: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    return unwrap(
      await supabase
        .from("sos_status_history")
        .select("*")
        .eq("sos_id", data.sosId)
        .order("created_at", { ascending: true }),
    );
  },
);

export const updateSosStatusFn = authedServerFn(
  z.object({
    alertId: z.string().uuid(),
    alertUserId: z.string(),
    status: z.enum(["ACTIVE", "ACKNOWLEDGED", "RESPONDING", "RESOLVED", "CANCELLED"]),
    note: z.string().nullable(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    const closing = data.status === "RESOLVED" || data.status === "CANCELLED";
    const patch: {
      status: "ACTIVE" | "ACKNOWLEDGED" | "RESPONDING" | "RESOLVED" | "CANCELLED";
      resolved_at?: string;
      resolution_notes?: string | null;
    } = { status: data.status };
    if (closing) patch.resolved_at = new Date().toISOString();
    if (closing && data.note) patch.resolution_notes = data.note;

    const updated = unwrap(
      await supabase.from("sos_alerts").update(patch).eq("id", data.alertId).select("*").single(),
    );

    await supabase.from("sos_status_history").insert({
      sos_id: data.alertId,
      status: data.status,
      note: data.note,
      changed_by: userId,
    });

    await supabase.from("notifications").insert({
      user_id: data.alertUserId,
      type: "STATUS_UPDATE",
      title: `SOS ${data.status.toLowerCase()}`,
      message: data.note ?? `Your SOS alert status changed to ${data.status}.`,
      link: "/sos",
    });

    return updated;
  },
);

/* -------------------------------------------------------------------------- */
/*  Incidents                                                                 */
/* -------------------------------------------------------------------------- */

const incidentInputSchema = z.object({
  category: z.enum([
    "ACCIDENT",
    "THEFT",
    "FIRE",
    "HARASSMENT",
    "SUSPICIOUS_ACTIVITY",
    "MEDICAL_EMERGENCY",
    "ROAD_HAZARD",
    "MISSING_PERSON",
    "OTHER",
  ]),
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().min(1, "Description is required").max(5000),
  occurred_at: z.string(),
  location: z.string().max(500).nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  additional_details: z.string().max(2000).nullable(),
});

export const createIncidentFn = authedServerFn(incidentInputSchema, async ({ context, data }) => {
  const { supabase, userId } = context;
  const incident = unwrap(
    await supabase
      .from("incidents")
      .insert({
        user_id: userId,
        category: data.category,
        title: data.title,
        description: data.description,
        occurred_at: data.occurred_at,
        status: "SUBMITTED",
        location: data.location,
        latitude: data.latitude,
        longitude: data.longitude,
        additional_details: data.additional_details,
      })
      .select("*")
      .single(),
  );

  await supabase.from("notifications").insert({
    user_id: userId,
    type: "INCIDENT",
    title: "Incident report submitted",
    message: `Report ${incident.reference} was submitted and is awaiting review.`,
    link: `/incidents/${incident.id}`,
  });

  return incident;
});

export const listMyIncidentsFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("incidents")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
      ),
    [],
  );
});

export const getIncidentFn = authedServerFn(
  z.object({ id: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    return safeQuery(
      async () =>
        maybe(await supabase.from("incidents").select("*").eq("id", data.id).maybeSingle()),
      null,
    );
  },
);

export const listIncidentMediaFn = authedServerFn(
  z.object({ incidentId: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("incident_media")
            .select("*")
            .eq("incident_id", data.incidentId)
            .order("created_at", { ascending: true }),
        ),
      [],
    );
  },
);

export const uploadIncidentMediaFn = authedServerFn(
  z.object({
    incidentId: z.string().uuid(),
    fileBase64: z.string(),
    fileName: z.string(),
    mimeType: z.string(),
    sizeBytes: z.number(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "video/mp4",
      "video/webm",
      "video/quicktime",
    ];
    if (!allowedTypes.includes(data.mimeType)) {
      throw new Error(`Unsupported file type: ${data.mimeType}`);
    }
    const buffer = Buffer.from(data.fileBase64, "base64");
    if (buffer.length > 25 * 1024 * 1024) {
      throw new Error("File too large. Maximum 25MB.");
    }
    const safeName = data.fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
    const path = `${userId}/${data.incidentId}/${crypto.randomUUID()}-${safeName}`;

    const { error: uploadErr } = await supabase.storage
      .from("incident-media")
      .upload(path, buffer, { contentType: data.mimeType });
    if (uploadErr) throw new Error(uploadErr.message);

    const { error: insertErr } = await supabase.from("incident_media").insert({
      incident_id: data.incidentId,
      user_id: userId,
      storage_path: path,
      mime_type: data.mimeType,
      size_bytes: data.sizeBytes,
    });
    if (insertErr) throw new Error(insertErr.message);

    return { path };
  },
);

export const updateIncidentFn = authedServerFn(
  z.object({ id: z.string().uuid() }).merge(incidentInputSchema.partial()),
  async ({ context, data }) => {
    const { supabase } = context;
    const { id, ...values } = data;
    return unwrap(
      await supabase
        .from("incidents")
        .update(values as any)
        .eq("id", id)
        .select("*")
        .single(),
    );
  },
);

export const deleteIncidentFn = authedServerFn(
  z.object({ id: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.from("incidents").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  },
);

export const updateIncidentStatusFn = authedServerFn(
  z.object({
    incidentId: z.string().uuid(),
    incidentUserId: z.string(),
    incidentReference: z.string(),
    status: z.enum([
      "SUBMITTED",
      "UNDER_REVIEW",
      "ACKNOWLEDGED",
      "IN_PROGRESS",
      "RESOLVED",
      "REJECTED",
    ]),
    adminNotes: z.string().nullable(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    // Verify admin role server-side
    await assertAdmin(supabase, userId);

    const updated = unwrap(
      await supabase
        .from("incidents")
        .update({ status: data.status, admin_notes: data.adminNotes })
        .eq("id", data.incidentId)
        .select("*")
        .single(),
    );

    await supabase.from("notifications").insert({
      user_id: data.incidentUserId,
      type: "STATUS_UPDATE",
      title: `Report ${data.incidentReference} updated`,
      message: data.adminNotes
        ? `Status: ${data.status}. ${data.adminNotes}`
        : `Your report status changed to ${data.status}.`,
      link: `/incidents/${data.incidentId}`,
    });

    return updated;
  },
);

/* -------------------------------------------------------------------------- */
/*  Notifications                                                             */
/* -------------------------------------------------------------------------- */

export const listNotificationsFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("notifications")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(100),
      ),
    [],
  );
});

export const markNotificationReadFn = authedServerFn(
  z.object({ id: z.string().uuid() }),
  async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  },
);

export const markAllNotificationsReadFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  const { error } = await supabase
    .from("notifications")
    .update({ is_read: true })
    .eq("user_id", userId)
    .eq("is_read", false);
  if (error) throw new Error(error.message);
  return { success: true };
});

/* -------------------------------------------------------------------------- */
/*  User Dashboard                                                            */
/* -------------------------------------------------------------------------- */

export const userDashboardFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;

  const [incidentsResult, alertsResult, contactsResult, notificationsResult] = await Promise.all([
    supabase
      .from("incidents")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
    supabase
      .from("sos_alerts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
    supabase
      .from("emergency_contacts")
      .select("*")
      .eq("user_id", userId)
      .order("is_primary", { ascending: false })
      .order("priority", { ascending: true }),
    supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  const incidents = incidentsResult.data ?? [];
  const alerts = alertsResult.data ?? [];
  const contacts = contactsResult.data ?? [];
  const notifications = notificationsResult.data ?? [];

  return {
    incidents,
    alerts,
    contacts,
    notifications,
    totalReports: incidents.length,
    pendingReports: incidents.filter(
      (i: { status: string }) => !["RESOLVED", "REJECTED"].includes(i.status),
    ).length,
    resolvedReports: incidents.filter((i: { status: string }) => i.status === "RESOLVED").length,
    activeSos: alerts.filter((a: { status: string }) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
    ).length,
  };
});

/* -------------------------------------------------------------------------- */
/*  Admin                                                                     */
/* -------------------------------------------------------------------------- */

export const adminDashboardFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);

  const [usersResult, incidentsResult, alertsResult] = await Promise.all([
    supabase.from("profiles").select("*").order("created_at", { ascending: false }),
    supabase.from("incidents").select("*").order("created_at", { ascending: false }),
    supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
  ]);

  const users = usersResult.data ?? [];
  const incidents = incidentsResult.data ?? [];
  const alerts = alertsResult.data ?? [];

  return {
    users,
    incidents,
    alerts,
    totalUsers: users.length,
    activeUsers: users.filter((u: { is_active: boolean }) => u.is_active).length,
    totalIncidents: incidents.length,
    pendingIncidents: incidents.filter(
      (i: { status: string }) => !["RESOLVED", "REJECTED"].includes(i.status),
    ).length,
    resolvedIncidents: incidents.filter((i: { status: string }) => i.status === "RESOLVED").length,
    activeSos: alerts.filter((a: { status: string }) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
    ).length,
    totalSos: alerts.length,
  };
});

export const adminListUsersFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);
  return safeQuery(
    async () =>
      unwrap(await supabase.from("profiles").select("*").order("created_at", { ascending: false })),
    [],
  );
});

export const adminListRolesFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);
  return safeQuery(
    async () => unwrap(await supabase.from("user_roles").select("user_id, role")),
    [],
  );
});

export const adminSetUserActiveFn = authedServerFn(
  z.object({
    targetUserId: z.string().uuid(),
    isActive: z.boolean(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return unwrap(
      await supabase
        .from("profiles")
        .update({ is_active: data.isActive })
        .eq("id", data.targetUserId)
        .select("*")
        .single(),
    );
  },
);

export const adminListIncidentsFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);
  return unwrap(
    await supabase.from("incidents").select("*").order("created_at", { ascending: false }),
  );
});

export const adminListSosFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);
  return unwrap(
    await supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
  );
});

export const adminUpdateSosStatusFn = authedServerFn(
  z.object({
    alertId: z.string().uuid(),
    alertUserId: z.string(),
    status: z.enum(["ACTIVE", "ACKNOWLEDGED", "RESPONDING", "RESOLVED", "CANCELLED"]),
    note: z.string().nullable(),
  }),
  async ({ context, data }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);

    const closing = data.status === "RESOLVED" || data.status === "CANCELLED";
    const patch: {
      status: "ACTIVE" | "ACKNOWLEDGED" | "RESPONDING" | "RESOLVED" | "CANCELLED";
      resolved_at?: string;
      resolution_notes?: string | null;
    } = { status: data.status };
    if (closing) patch.resolved_at = new Date().toISOString();
    if (closing && data.note) patch.resolution_notes = data.note;

    const updated = unwrap(
      await supabase.from("sos_alerts").update(patch).eq("id", data.alertId).select("*").single(),
    );

    await supabase.from("sos_status_history").insert({
      sos_id: data.alertId,
      status: data.status,
      note: data.note,
      changed_by: userId,
    });

    await supabase.from("notifications").insert({
      user_id: data.alertUserId,
      type: "STATUS_UPDATE",
      title: `SOS ${data.status.toLowerCase()}`,
      message: data.note ?? `Your SOS alert status changed to ${data.status}.`,
      link: "/sos",
    });

    return updated;
  },
);

export const adminAnalyticsFn = authedServerFn(null, async ({ context }) => {
  const { supabase, userId } = context;
  await assertAdmin(supabase, userId);

  const [incidentsResult, alertsResult, usersResult] = await Promise.all([
    supabase.from("incidents").select("*").order("created_at", { ascending: false }),
    supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
    supabase.from("profiles").select("id, is_active, created_at"),
  ]);

  const incidents = incidentsResult.data ?? [];
  const alerts = alertsResult.data ?? [];
  const users = usersResult.data ?? [];

  // Category breakdown
  const byCategory: Record<string, number> = {};
  for (const i of incidents) {
    byCategory[i.category] = (byCategory[i.category] || 0) + 1;
  }

  // Monthly trends (last 12 months)
  const monthlyTrends: { month: string; incidents: number; sos: number }[] = [];
  const now = new Date();
  for (let m = 11; m >= 0; m--) {
    const d = new Date(now.getFullYear(), now.getMonth() - m, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
    monthlyTrends.push({
      month: label,
      incidents: incidents.filter((i: { created_at: string }) => i.created_at.startsWith(key))
        .length,
      sos: alerts.filter((a: { created_at: string }) => a.created_at.startsWith(key)).length,
    });
  }

  // Status breakdown
  const byStatus: Record<string, number> = {};
  for (const i of incidents) {
    byStatus[i.status] = (byStatus[i.status] || 0) + 1;
  }

  const totalIncidents = incidents.length;
  const resolved = incidents.filter((i: { status: string }) => i.status === "RESOLVED").length;
  const resolutionRate = totalIncidents > 0 ? Math.round((resolved / totalIncidents) * 100) : 0;

  return {
    totalIncidents,
    totalSos: alerts.length,
    totalUsers: users.length,
    resolved,
    resolutionRate,
    byCategory,
    byStatus,
    monthlyTrends,
    activeSos: alerts.filter((a: { status: string }) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
    ).length,
  };
});

/* -------------------------------------------------------------------------- */
/*  Auth: Forgot / Reset Password                                             */
/* -------------------------------------------------------------------------- */

export const forgotPasswordFn = publicServerFn(
  z.object({ email: z.string().email() }),
  async ({ data }) => {
    // Use dynamic import so that the admin client (which reads env vars) is
    // only instantiated at runtime on the server, not at module-parse time.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/auth?mode=login`,
    });
    if (error) throw new Error(error.message);
    return { success: true };
  },
);
