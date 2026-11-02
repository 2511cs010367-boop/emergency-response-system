declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_SUPABASE_URL?: string;
    readonly NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
    readonly NEXT_PUBLIC_CLOUDRAILS_URL?: string;
    readonly NEXT_PUBLIC_CLOUDRAILS_PROJECT?: string;
    readonly NEXT_PUBLIC_APP_URL?: string;
    readonly SUPABASE_URL?: string;
    readonly SUPABASE_PUBLISHABLE_KEY?: string;
    readonly SUPABASE_SERVICE_ROLE_KEY?: string;
    readonly DATABASE_URL?: string;
  }
}
