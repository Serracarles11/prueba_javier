import { createClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase con service_role (solo servidor)
 */
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
