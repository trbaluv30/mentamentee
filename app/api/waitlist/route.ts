import { createRecord } from "@/lib/airtable";
import { CORRIDORS } from "@/lib/corridors";
import { COUNTRY_CODES } from "@/lib/countries";
import { FormReader, backWithError, redirectTo } from "@/lib/form";
import {
  AGE_BANDS,
  BUDGET_BANDS,
  DESTINATIONS,
  EXAMS,
  HEARD_FROM,
  MENTEE_STAGES,
  PROFESSIONS,
  SESSION_MODES,
  targetYears,
  values,
} from "@/lib/options";

export const runtime = "nodejs";

const TABLE = process.env.AIRTABLE_WAITLIST_TABLE || "Waitlist";
const PRIVACY_VERSION = "waitlist-draft-2026-11-24";

export async function POST(req: Request) {
  const fd = await req.formData();
  const f = new FormReader(fd);
  // Send people back to the same journey page they started from.
  const journey = fd.get("corridor");
  const BACK = typeof journey === "string" && /^[a-z-]{1,60}$/.test(journey) ? `/join?journey=${journey}` : "/join";
  if (f.isBot()) return redirectTo(req, "/thanks?for=mentee");

  const ageBand = f.choice("age_band", values(AGE_BANDS), { required: true, label: "Age" });
  if (ageBand === "under_16") {
    return backWithError(req, BACK, [
      "Ment-a-Mentee is for people aged 16 and over. Please come back when you turn 16. We'd love to help you then",
    ]);
  }
  const isMinor = ageBand === "16_17";

  const record = {
    "Full name": f.text("full_name", { required: true, max: 120, label: "Full name" }),
    Email: f.email("email", { required: true, label: "Email" }),
    WhatsApp: f.phone("whatsapp"),
    "Age band": ageBand,
    "Guardian name": f.text("guardian_name", { max: 120 }),
    "Guardian email": f.email("guardian_email", { label: "Parent or guardian email" }),
    "Home country": f.choice("home_country", COUNTRY_CODES, { required: true, label: "Home country" }),
    "Country of residence": f.choice("residence_country", COUNTRY_CODES, {
      required: true,
      label: "Where you live now",
    }),
    Profession: f.choice("profession", values(PROFESSIONS), { required: true, label: "Profession" }),
    "Current stage": f.choice("stage", values(MENTEE_STAGES), { required: true, label: "Current stage" }),
    Destinations: f.many("destinations", values([...DESTINATIONS, { value: "UNSURE", label: "" }]), {
      required: true,
      label: "destination",
    }),
    "Session preference": f.choice("session_mode", values(SESSION_MODES), { required: true, label: "Session type" }),
    City: f.text("city", { max: 80 }),
    "Target year": f.choice("target_year", values(targetYears(new Date().getFullYear() - 1))),
    "Exams taken or planned": f.many("exams", values(EXAMS)),
    "Biggest question": f.text("biggest_question", { required: true, max: 1000, label: "Your biggest question" }),
    "Budget per session": f.choice("budget", values(BUDGET_BANDS)),
    "Other languages": f.text("languages", { max: 120 }),
    "Heard from": f.choice("heard_from", values(HEARD_FROM)),
    Corridor: f.choice("corridor", new Set(CORRIDORS.map((c) => c.slug))),
    Timezone: f.text("tz", { max: 60 }),
    "Privacy consent": f.checked("consent_privacy"),
    // Policy: no marketing to under-18s, whatever box was ticked.
    "Updates consent": isMinor ? false : f.checked("consent_updates"),
    "Guardian confirmed": isMinor ? f.checked("guardian_confirm") : false,
    "Privacy notice version": PRIVACY_VERSION,
    Status: "New",
  };

  if (!record["Privacy consent"]) f.errors.push("Please agree to the privacy notice so we can store your details");
  if (isMinor) {
    if (!record["Guardian name"] || !record["Guardian email"]) {
      f.errors.push("If you are 16 or 17, please add a parent or guardian's name and email");
    }
    if (!record["Guardian confirmed"]) f.errors.push("Please confirm your parent or guardian knows you are joining");
  }

  if (f.errors.length) return backWithError(req, BACK, f.errors);

  // Drop empty values so Airtable doesn't reject blank select fields.
  const fields = Object.fromEntries(
    Object.entries(record).filter(([, v]) => v !== "" && !(Array.isArray(v) && v.length === 0)),
  );

  const result = await createRecord(TABLE, fields);
  if (!result.ok) {
    console.error("[waitlist] save failed:", result.error);
    return backWithError(req, BACK, ["Something went wrong on our side and your details were not saved. Please try again in a minute"]);
  }
  return redirectTo(req, `/thanks?for=mentee${isMinor ? "&minor=1" : ""}`);
}
