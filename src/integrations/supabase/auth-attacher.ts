import { supabase } from './client'

/**
 * Calls a Server Action from `@/lib/phoenix/api.functions` with the browser's
 * Supabase access token attached, so the action can run `requireSupabaseAuth`.
 *
 *   const profile = await callWithSupabaseAuth(getProfileFn)
 *   await callWithSupabaseAuth(updateContactFn, { id, ...values })
 */
export async function callWithSupabaseAuth<TData, TResult>(
  fn: (input: { data: TData; accessToken?: string | undefined }) => Promise<TResult>,
  ...[data]: undefined extends TData ? [data?: TData] : [data: TData]
): Promise<TResult> {
  const { data: sessionData } = await supabase.auth.getSession()
  const accessToken = sessionData.session?.access_token
  return fn({ data: data as TData, accessToken })
}
