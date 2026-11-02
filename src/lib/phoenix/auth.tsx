import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { clearStoredSession } from "@/integrations/cloudrails/client";
import type { AppRole, Profile } from "./constants";

interface AuthState {
  loading: boolean;
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  role: AppRole | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);

  const loadAccount = useCallback(async (userId: string | undefined) => {
    if (!userId) {
      setProfile(null);
      setRole(null);
      return;
    }
    try {
      const [profileResult, roleResult, contactResult] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", userId),
        supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", userId)
          .order("is_primary", { ascending: false })
          .order("priority", { ascending: true })
          .limit(1)
          .maybeSingle(),
      ]);

      // Right after sign-in a request can race the new session and get a 401;
      // the auth listener reloads moments later, so warn instead of erroring
      // and keep the previous role rather than downgrading an admin.
      if (profileResult.error) {
        console.warn("[AuthProvider] profile:", profileResult.error.message, profileResult.error.code);
      }
      if (roleResult.error) {
        console.warn("[AuthProvider] roles:", roleResult.error.message, roleResult.error.code);
        return;
      }

      const primaryContact = contactResult.data;
      const stored = profileResult.data as Profile | null;
      setProfile(
        stored
          ? {
              ...stored,
              emergency_contact_name: primaryContact?.name ?? stored.emergency_contact_name ?? null,
              emergency_contact_email: primaryContact?.email ?? stored.emergency_contact_email ?? null,
              emergency_contact_phone: primaryContact?.phone ?? stored.emergency_contact_phone ?? null,
            }
          : null,
      );
      const roles = (roleResult.data ?? []).map((entry) => entry.role);
      setRole(roles.includes("admin") ? "admin" : "user");
    } catch (err) {
      console.error("[AuthProvider] Error loading account:", err);
    }
  }, []);

  useEffect(() => {
    let active = true;

    // Tokens from the retired CloudRails login are no longer read; drop them.
    clearStoredSession();

    const initAuth = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (!active) return;
        setSession(data.session);
        await loadAccount(data.session?.user.id);
      } catch (err) {
        console.error("[AuthProvider] Error initializing auth:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    // Safety timeout: ensure loading screen is dismissed after at most 3 seconds
    const fallbackTimer = setTimeout(() => {
      if (active) setLoading(false);
    }, 3000);

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return;
      setSession(nextSession);
      setTimeout(() => {
        void loadAccount(nextSession?.user?.id).finally(() => active && setLoading(false));
      }, 0);
    });

    void initAuth();

    return () => {
      active = false;
      clearTimeout(fallbackTimer);
      subscription.subscription.unsubscribe();
    };
  }, [loadAccount]);

  const refreshProfile = useCallback(async () => {
    await loadAccount(session?.user?.id);
  }, [loadAccount, session?.user?.id]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setProfile(null);
    setRole(null);
    setSession(null);
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      loading,
      session,
      user: session?.user ?? null,
      profile,
      role,
      isAuthenticated: Boolean(session),
      isAdmin: role === "admin",
      refreshProfile,
      signOut,
    }),
    [loading, session, profile, role, refreshProfile, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}
