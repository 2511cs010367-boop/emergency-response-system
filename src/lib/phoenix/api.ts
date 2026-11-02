import { supabase } from "@/integrations/supabase/client";
import type {
  AppNotification,
  EmergencyAlert,
  EmergencyContact,
  Incident,
  IncidentCategory,
  IncidentMedia,
  IncidentStatus,
  Profile,
  SosAlert,
  SosStatus,
} from "./constants";
import { ALLOWED_UPLOAD_TYPES, MAX_UPLOAD_BYTES } from "./constants";

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

/* ---------------------------------- profile --------------------------------- */

export async function getProfile(userId: string): Promise<Profile | null> {
  return safeQuery(
    async () => {
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
      } as Profile;
    },
    null,
  );
}

export async function updateProfile(
  userId: string,
  values: {
    full_name?: string;
    phone?: string | null;
    avatar_url?: string | null;
    emergency_contact_name?: string | null;
    emergency_contact_email?: string | null;
    emergency_contact_phone?: string | null;
  },
): Promise<Profile> {
  // Use local session to get user ID. Falls back to the userId prop which is always
  // sourced from the auth context (React state), so it is safe even if getSession()
  // returns null due to the custom fetch interceptor swallowing a token-refresh error.
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;

  // 1. Update profiles table (only columns that belong to profiles)
  const profileData: {
    full_name?: string;
    phone?: string | null;
    avatar_url?: string | null;
  } = {};
  if (values.full_name !== undefined) profileData.full_name = values.full_name;
  if (values.phone !== undefined) profileData.phone = values.phone;
  if (values.avatar_url !== undefined) profileData.avatar_url = values.avatar_url;

  if (Object.keys(profileData).length > 0) {
    const { error: updateErr } = await supabase
      .from("profiles")
      .update(profileData)
      .eq("id", targetId);

    if (updateErr) {
      console.warn("[updateProfile] profile update fallback:", updateErr.message);
      await supabase.from("profiles").upsert({
        id: targetId,
        ...profileData,
      });
    }
  }

  // 2. Save emergency contact into Supabase emergency_contacts table
  const contactName = values.emergency_contact_name ? String(values.emergency_contact_name).trim() : null;
  const contactEmail = values.emergency_contact_email ? String(values.emergency_contact_email).trim() : null;
  const contactPhone = values.emergency_contact_phone ? String(values.emergency_contact_phone).trim() : "";

  if (contactName) {
    const { data: existingContacts } = await supabase
      .from("emergency_contacts")
      .select("id, is_primary, phone")
      .eq("user_id", targetId)
      .order("is_primary", { ascending: false })
      .limit(1);

    if (existingContacts && existingContacts.length > 0 && existingContacts[0]) {
      const contactId = existingContacts[0].id;
      const { error: contactErr } = await supabase
        .from("emergency_contacts")
        .update({
          name: contactName,
          email: contactEmail,
          phone: contactPhone || existingContacts[0].phone || "N/A",
          is_primary: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", contactId);

      if (contactErr) {
        console.error("[updateProfile] Error updating emergency contact:", contactErr);
        throw new Error(`Failed to update emergency contact: ${contactErr.message}`);
      }
    } else {
      const { error: insertErr } = await supabase
        .from("emergency_contacts")
        .insert({
          user_id: targetId,
          name: contactName,
          email: contactEmail,
          phone: contactPhone || "N/A",
          relationship: "Primary Contact",
          priority: 1,
          is_primary: true,
        });

      if (insertErr) {
        console.error("[updateProfile] Error saving emergency contact:", insertErr);
        throw new Error(`Failed to save emergency contact: ${insertErr.message}`);
      }
    }
  }

  // Fetch updated profile
  const { data: updatedProfile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", targetId)
    .maybeSingle();

  return {
    ...(updatedProfile || { id: targetId, full_name: values.full_name || "", email: "" }),
    emergency_contact_name: values.emergency_contact_name ?? null,
    emergency_contact_email: values.emergency_contact_email ?? null,
    emergency_contact_phone: values.emergency_contact_phone ?? null,
  } as Profile;
}

export async function updatePassword(password: string): Promise<void> {
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw new Error(error.message);
}

export async function uploadAvatar(userId: string, file: File): Promise<string> {
  validateUpload(file, ["image/jpeg", "image/png", "image/webp"], 5 * 1024 * 1024);
  const path = `${userId}/${crypto.randomUUID()}-${sanitizeName(file.name)}`;
  const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
  if (error) throw new Error(error.message);
  return path;
}

export async function signedUrl(bucket: string, path: string, seconds = 3600) {
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, seconds);
  if (error) throw new Error(error.message);
  return data.signedUrl;
}

/* ----------------------------- emergency contacts ---------------------------- */

export async function listContacts(userId: string): Promise<EmergencyContact[]> {
  return safeQuery(
    async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const targetId = sessionData?.session?.user?.id || userId;
      return unwrap(
        await supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", targetId)
          .order("is_primary", { ascending: false })
          .order("priority", { ascending: true }),
      );
    },
    [],
  );
}

export type ContactInput = {
  name: string;
  relationship: string;
  phone: string;
  email?: string | null;
  priority: number;
  is_primary: boolean;
};
export async function createContact(userId: string, input: ContactInput) {
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;
  if (input.is_primary) await clearPrimary(targetId);
  return unwrap(
    await supabase
      .from("emergency_contacts")
      .insert({
        name: input.name,
        relationship: input.relationship,
        phone: input.phone,
        email: input.email ?? null,
        priority: input.priority,
        is_primary: input.is_primary,
        user_id: targetId,
      })
      .select("*")
      .single(),
  );
}
export async function updateContact(userId: string, id: string, input: ContactInput) {
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;
  if (input.is_primary) await clearPrimary(targetId);
  return unwrap(
    await supabase
      .from("emergency_contacts")
      .update({
        name: input.name,
        relationship: input.relationship,
        phone: input.phone,
        email: input.email ?? null,
        priority: input.priority,
        is_primary: input.is_primary,
      })
      .eq("id", id)
      .select("*")
      .single(),
  );
}

export async function deleteContact(id: string) {
  const { error } = await supabase.from("emergency_contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

async function clearPrimary(userId: string) {
  await supabase
    .from("emergency_contacts")
    .update({ is_primary: false })
    .eq("user_id", userId)
    .eq("is_primary", true);
}

/* ------------------------------------ SOS ----------------------------------- */

export interface SosInput {
  emergency_type: string;
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  address: string | null;
  message: string | null;
}

export async function createSos(userId: string, input: SosInput): Promise<SosAlert> {
  const contacts = await listContacts(userId);
  const sosData = {
    id: crypto.randomUUID(),
    user_id: userId,
    emergency_type: input.emergency_type,
    status: "ACTIVE" as const,
    latitude: input.latitude,
    longitude: input.longitude,
    accuracy: input.accuracy,
    address: input.address,
    message: input.message,
    contacts_notified: contacts.length,
    resolved_at: null,
    resolution_notes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Supabase is the only store. If this insert fails the error must reach the
  // user: an SOS that silently didn't save is worse than a visible failure.
  const alert = unwrap(
    await supabase.from("sos_alerts").insert(sosData).select("*").single(),
  );
  await createNotification(userId, {
    type: "SOS",
    title: "Emergency SOS activated",
    message: `Your SOS alert is live. ${contacts.length} emergency contact(s) were notified with your location.`,
    link: `/sos`,
  });
  return alert;
}

/**
 * DEVELOPMENT notifier. Real deployments should replace this with an SMS/email
 * provider call (see README → "Replacing the development notifier").
 */
async function notifyContacts(alert: SosAlert, contacts: EmergencyContact[]) {
  if (!contacts.length) return;
  console.info(
    "[phoenix:dev-notifier] SOS %s dispatched to %s",
    alert.id,
    contacts.map((contact) => `${contact.name} <${contact.phone}>`).join(", "),
  );
}

export async function listMySos(userId: string): Promise<SosAlert[]> {
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
}

export async function getActiveSos(userId: string): Promise<SosAlert | null> {
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
}


export async function getSos(id: string): Promise<SosAlert | null> {
  return maybe(await supabase.from("sos_alerts").select("*").eq("id", id).maybeSingle());
}

export interface SendEmergencyEmailInput {
  message?: string;
  latitude?: number | null;
  longitude?: number | null;
}

export async function sendEmergencyAlertEmail(input: SendEmergencyEmailInput): Promise<{
  success: boolean;
  message: string;
  alert: EmergencyAlert;
}> {
  const { data, error } = await supabase.functions.invoke("send-emergency-email", {
    body: input,
  });

  if (error) {
    // supabase-js only says "non-2xx status code"; the function's JSON body
    // carries the real reason (e.g. the email provider rejected the key).
    let reason: string | undefined;
    const context = (error as { context?: unknown }).context;
    if (context instanceof Response) {
      const body = (await context.json().catch(() => null)) as { error?: string } | null;
      reason = body?.error;
    }
    throw new Error(reason || error.message || "Failed to trigger emergency email service");
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
}

export async function listMyEmergencyAlerts(userId: string): Promise<EmergencyAlert[]> {
  return unwrap(
    await supabase
      .from("emergency_alerts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
  );
}

export async function listSosHistory(sosId: string) {
  return unwrap(
    await supabase
      .from("sos_status_history")
      .select("*")
      .eq("sos_id", sosId)
      .order("created_at", { ascending: true }),
  );
}

export async function updateSosStatus(
  alert: SosAlert,
  status: SosStatus,
  note: string | null,
  actorId: string,
) {
  const closing = status === "RESOLVED" || status === "CANCELLED";
  const patch = {
    status,
    ...(closing ? { resolved_at: new Date().toISOString() } : {}),
    ...(closing && note ? { resolution_notes: note } : {}),
  };
  const updated = unwrap(
    await supabase.from("sos_alerts").update(patch).eq("id", alert.id).select("*").single(),
  );
  await supabase.from("sos_status_history").insert({
    sos_id: alert.id,
    status,
    note,
    changed_by: actorId,
  });
  await createNotification(alert.user_id, {
    type: "STATUS_UPDATE",
    title: `SOS ${status.toLowerCase()}`,
    message: note ?? `Your SOS alert status changed to ${status}.`,
    link: "/sos",
  });
  return updated;
}

/* --------------------------------- incidents -------------------------------- */

export interface IncidentInput {
  category: IncidentCategory;
  title: string;
  description: string;
  occurred_at: string;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  additional_details: string | null;
}

export async function createIncident(userId: string, input: IncidentInput): Promise<Incident> {
  const refCode = `INC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  const incidentData = {
    id: crypto.randomUUID(),
    reference: refCode,
    user_id: userId,
    category: input.category,
    title: input.title,
    description: input.description,
    occurred_at: input.occurred_at,
    status: "SUBMITTED" as const,
    location: input.location,
    latitude: input.latitude,
    longitude: input.longitude,
    additional_details: input.additional_details,
    admin_notes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const incident = unwrap(
    await supabase.from("incidents").insert(incidentData).select("*").single(),
  );
  await createNotification(userId, {
    type: "INCIDENT",
    title: "Incident report submitted",
    message: `Report ${incident.reference} was submitted and is awaiting review.`,
    link: `/incidents/${incident.id}`,
  });
  return incident;
}

export function validateUpload(
  file: File,
  allowed: string[] = ALLOWED_UPLOAD_TYPES,
  maxBytes: number = MAX_UPLOAD_BYTES,
) {
  if (!allowed.includes(file.type)) {
    throw new Error(`${file.name}: unsupported file type (${file.type || "unknown"}).`);
  }
  if (file.size > maxBytes) {
    throw new Error(`${file.name}: file is larger than ${Math.round(maxBytes / 1024 / 1024)}MB.`);
  }
  if (!/\.[a-z0-9]{2,5}$/i.test(file.name)) {
    throw new Error(`${file.name}: missing a valid file extension.`);
  }
}

function sanitizeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
}

export async function uploadIncidentMedia(userId: string, incidentId: string, files: File[]) {
  for (const file of files) {
    validateUpload(file);
    const path = `${userId}/${incidentId}/${crypto.randomUUID()}-${sanitizeName(file.name)}`;
    const { error } = await supabase.storage.from("incident-media").upload(path, file);
    if (error) throw new Error(error.message);
    const inserted = await supabase.from("incident_media").insert({
      incident_id: incidentId,
      user_id: userId,
      storage_path: path,
      mime_type: file.type,
      size_bytes: file.size,
    });
    if (inserted.error) throw new Error(inserted.error.message);
  }
}

export async function listMyIncidents(userId: string): Promise<Incident[]> {
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
}

export async function getIncident(id: string): Promise<Incident | null> {
  return safeQuery(
    async () => maybe(await supabase.from("incidents").select("*").eq("id", id).maybeSingle()),
    null,
  );
}

export async function listIncidentMedia(incidentId: string): Promise<IncidentMedia[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("incident_media")
          .select("*")
          .eq("incident_id", incidentId)
          .order("created_at", { ascending: true }),
      ),
    [],
  );
}

export async function updateIncident(id: string, input: Partial<IncidentInput>) {
  return unwrap(await supabase.from("incidents").update(input).eq("id", id).select("*").single());
}

export async function deleteIncident(id: string) {
  const { error } = await supabase.from("incidents").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function updateIncidentStatus(
  incident: Incident,
  status: IncidentStatus,
  adminNotes: string | null,
) {
  const updated = unwrap(
    await supabase
      .from("incidents")
      .update({ status, admin_notes: adminNotes })
      .eq("id", incident.id)
      .select("*")
      .single(),
  );
  await createNotification(incident.user_id, {
    type: "STATUS_UPDATE",
    title: `Report ${incident.reference} updated`,
    message: adminNotes
      ? `Status: ${status}. ${adminNotes}`
      : `Your report status changed to ${status}.`,
    link: `/incidents/${incident.id}`,
  });
  return updated;
}

/* ------------------------------- notifications ------------------------------ */

export async function createNotification(
  userId: string,
  input: { type: AppNotification["type"]; title: string; message: string; link?: string | null },
) {
  try {
    await supabase.from("notifications").insert({ ...input, user_id: userId });
  } catch {
    // Graceful fallback
  }
}

export async function listNotifications(userId: string): Promise<AppNotification[]> {
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
}

export async function markNotificationRead(id: string) {
  try {
    const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id);
    if (error) throw new Error(error.message);
  } catch {
    // Graceful fallback
  }
}

export async function markAllNotificationsRead(userId: string) {
  try {
    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("user_id", userId)
      .eq("is_read", false);
    if (error) throw new Error(error.message);
  } catch {
    // Graceful fallback
  }
}

/* ----------------------------------- admin ---------------------------------- */

export async function adminListUsers(): Promise<Profile[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      ),
    [],
  );
}

export async function adminListRoles() {
  return safeQuery(
    async () => unwrap(await supabase.from("user_roles").select("user_id, role")),
    [],
  );
}


export async function adminSetUserActive(userId: string, isActive: boolean) {
  return unwrap(
    await supabase
      .from("profiles")
      .update({ is_active: isActive })
      .eq("id", userId)
      .select("*")
      .single(),
  );
}

export async function adminListIncidents(): Promise<Incident[]> {
  return unwrap(
    await supabase.from("incidents").select("*").order("created_at", { ascending: false }),
  );
}

export async function adminListSos(): Promise<SosAlert[]> {
  return unwrap(
    await supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
  );
}

export interface AdminDashboard {
  totalUsers: number;
  activeUsers: number;
  totalIncidents: number;
  pendingIncidents: number;
  resolvedIncidents: number;
  activeSos: number;
  totalSos: number;
  users: Profile[];
  incidents: Incident[];
  alerts: SosAlert[];
}

export async function adminDashboard(): Promise<AdminDashboard> {
  const [users, incidents, alerts] = await Promise.all([
    adminListUsers(),
    adminListIncidents(),
    adminListSos(),
  ]);
  return {
    users,
    incidents,
    alerts,
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.is_active).length,
    totalIncidents: incidents.length,
    pendingIncidents: incidents.filter(
      (incident) => !["RESOLVED", "REJECTED"].includes(incident.status),
    ).length,
    resolvedIncidents: incidents.filter((incident) => incident.status === "RESOLVED").length,
    activeSos: alerts.filter((alert) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
    ).length,
    totalSos: alerts.length,
  };
}

export interface UserDashboard {
  incidents: Incident[];
  alerts: SosAlert[];
  contacts: EmergencyContact[];
  notifications: AppNotification[];
  totalReports: number;
  pendingReports: number;
  resolvedReports: number;
  activeSos: number;
}

export async function userDashboard(userId: string): Promise<UserDashboard> {
  const [incidents, alerts, contacts, notifications] = await Promise.all([
    listMyIncidents(userId),
    listMySos(userId),
    listContacts(userId),
    listNotifications(userId),
  ]);
  return {
    incidents,
    alerts,
    contacts,
    notifications,
    totalReports: incidents.length,
    pendingReports: incidents.filter(
      (incident) => !["RESOLVED", "REJECTED"].includes(incident.status),
    ).length,
    resolvedReports: incidents.filter((incident) => incident.status === "RESOLVED").length,
    activeSos: alerts.filter((alert) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
    ).length,
  };
}
