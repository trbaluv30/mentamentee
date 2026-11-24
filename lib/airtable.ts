// Minimal Airtable writer. No SDK: one fetch call, server-only.
// Field names must match the tables created by `npm run airtable:setup`.

import "server-only";

const API = process.env.AIRTABLE_API_URL || "https://api.airtable.com/v0";

export type AirtableResult = { ok: true; id?: string } | { ok: false; error: string };

export function airtableConfigured() {
  return Boolean(process.env.AIRTABLE_TOKEN && process.env.AIRTABLE_BASE_ID);
}

export async function createRecord(table: string, fields: Record<string, unknown>): Promise<AirtableResult> {
  const token = process.env.AIRTABLE_TOKEN;
  const base = process.env.AIRTABLE_BASE_ID;

  if (!token || !base) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without Airtable: show the record in the terminal instead.
      console.info(`[airtable:dry-run] ${table}`, fields);
      return { ok: true };
    }
    return { ok: false, error: "Airtable is not configured (AIRTABLE_TOKEN / AIRTABLE_BASE_ID)." };
  }

  try {
    const res = await fetch(`${API}/${base}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      // typecast lets Airtable add new select options automatically.
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const body = await res.text();
      return { ok: false, error: `Airtable ${res.status}: ${body.slice(0, 300)}` };
    }
    const json = (await res.json()) as { records?: { id: string }[] };
    return { ok: true, id: json.records?.[0]?.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
