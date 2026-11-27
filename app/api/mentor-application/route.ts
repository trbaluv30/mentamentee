import { createRecord } from "@/lib/airtable";
import { COUNTRY_CODES } from "@/lib/countries";
import { FormReader, backWithError, redirectTo } from "@/lib/form";
import {
  DESTINATIONS,
  EXAMS,
  FRAMEWORK_STAGES,
  HEARD_FROM,
  HOURS_PER_MONTH,
  MENTOR_STAGES,
  PROFESSIONS,
  values,
} from "@/lib/options";

export const runtime = "nodejs";

const TABLE = process.env.AIRTABLE_MENTORS_TABLE || "Mentor Applications";
const PRIVACY_VERSION = "waitlist-draft-2026-11-27";
const BACK = "/become-a-mentor";

export async function POST(req: Request) {
  const f = new FormReader(await req.formData());
  if (f.isBot()) return redirectTo(req, "/thanks?for=mentor");

  const record = {
    "Full name": f.text("full_name", { required: true, max: 120, label: "Full name" }),
    Email: f.email("email", { required: true, label: "Email" }),
    WhatsApp: f.phone("whatsapp"),
    LinkedIn: f.url("linkedin", { host: /(^|\.)linkedin\.com$/i, label: "LinkedIn profile" }),
    "Home country": f.choice("home_country", COUNTRY_CODES, { required: true, label: "Home country" }),
    "Country now": f.choice("current_country", COUNTRY_CODES, {
      required: true,
      label: "Where you live now",
    }),
    Profession: f.choice("profession", values(PROFESSIONS), { required: true, label: "Profession" }),
    "Current stage": f.choice("stage", values(MENTOR_STAGES), { required: true, label: "Current stage" }),
    Specialty: f.text("specialty", { max: 120 }),
    "Exams cleared": f.many("exams", values(EXAMS)),
    "Registration body": f.text("registration_body", { max: 160 }),
    "Can advise on": f.many("destinations", values(DESTINATIONS), { required: true, label: "destination" }),
    "Framework stages": f.many("framework_stages", values(FRAMEWORK_STAGES), {
      required: true,
      label: "stage you can guide",
    }),
    "Hours per month": f.choice("hours", values(HOURS_PER_MONTH), { required: true, label: "Hours per month" }),
    "Other languages": f.text("languages", { max: 120 }),
    Motivation: f.text("motivation", { required: true, max: 1500, label: "Why you want to mentor" }),
    "Heard from": f.choice("heard_from", values(HEARD_FROM)),
    Timezone: f.text("tz", { max: 60 }),
    "Confirms 18+": f.checked("adult"),
    "Verification consent": f.checked("consent_verification"),
    "Privacy consent": f.checked("consent_privacy"),
    "Privacy notice version": PRIVACY_VERSION,
    Status: "New",
  };

  if (!record["Confirms 18+"]) f.errors.push("Mentors must be 18 or older");
  if (!record["Verification consent"]) f.errors.push("Please agree to identity and credential verification");
  if (!record["Privacy consent"]) f.errors.push("Please agree to the privacy notice so we can store your details");

  if (f.errors.length) return backWithError(req, BACK, f.errors);

  const fields = Object.fromEntries(
    Object.entries(record).filter(([, v]) => v !== "" && !(Array.isArray(v) && v.length === 0)),
  );

  const result = await createRecord(TABLE, fields);
  if (!result.ok) {
    console.error("[mentor-application] save failed:", result.error);
    return backWithError(req, BACK, ["Something went wrong on our side and your application was not saved. Please try again in a minute"]);
  }
  return redirectTo(req, "/thanks?for=mentor");
}
