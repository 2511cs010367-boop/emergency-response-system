import "server-only";
import type { z } from "zod";
import {
  requireSupabaseAuth,
  type SupabaseAuthContext,
} from "@/integrations/supabase/auth-middleware";

/**
 * Input every Server Action in `api.functions.ts` receives. `accessToken` is
 * attached on the client by `callWithSupabaseAuth`.
 */
export type ServerFnInput<TData> = { data: TData; accessToken?: string | undefined };

type SchemaInput<S> = S extends z.ZodTypeAny ? z.input<S> : undefined;
type SchemaOutput<S> = S extends z.ZodTypeAny ? z.output<S> : undefined;

function parse<S extends z.ZodTypeAny | null>(schema: S, data: unknown): SchemaOutput<S> {
  return (schema ? schema.parse(data) : undefined) as SchemaOutput<S>;
}

/** Server Action that verifies the caller's Supabase JWT before running. */
export function authedServerFn<S extends z.ZodTypeAny | null, R>(
  schema: S,
  handler: (args: { context: SupabaseAuthContext; data: SchemaOutput<S> }) => Promise<R>,
) {
  return async (input: ServerFnInput<SchemaInput<S>>): Promise<R> => {
    const context = await requireSupabaseAuth(input?.accessToken);
    return handler({ context, data: parse(schema, input?.data) });
  };
}

/** Server Action that runs without authentication (input is still validated). */
export function publicServerFn<S extends z.ZodTypeAny | null, R>(
  schema: S,
  handler: (args: { data: SchemaOutput<S> }) => Promise<R>,
) {
  return async (input: ServerFnInput<SchemaInput<S>>): Promise<R> => {
    return handler({ data: parse(schema, input?.data) });
  };
}
