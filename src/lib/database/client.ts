import "server-only";

export interface DatabaseClientConfiguration {
  provider: "supabase";
  isConfigured: boolean;
  hasUrl: boolean;
  hasServiceRoleKey: boolean;
}

/**
 * Reports whether server-side Supabase credentials are available without
 * exposing values or adding a runtime dependency before the integration exists.
 */
export function getDatabaseClientConfiguration(): DatabaseClientConfiguration {
  const hasUrl = Boolean(process.env.SUPABASE_URL);
  const hasServiceRoleKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  return {
    provider: "supabase",
    isConfigured: hasUrl && hasServiceRoleKey,
    hasUrl,
    hasServiceRoleKey,
  };
}

/**
 * Intentional boundary for the future server-only Supabase client.
 * The mock checkout must not call this until persistence is implemented.
 */
export function getDatabaseClient(): never {
  throw new Error(
    "Database persistence is not configured yet. Configure Supabase server credentials and implement this client before using it.",
  );
}
