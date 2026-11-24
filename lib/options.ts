// Shared option lists for both forms. The `value` is what gets stored in Airtable,
// and mirrors the enums in the platform blueprint (Section 4.1) so the Phase 2
// Postgres migration is a straight copy.

export type Option = { value: string; label: string };

export const DESTINATIONS: Option[] = [
  { value: "US", label: "United States" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
];

export const PROFESSIONS: Option[] = [
  { value: "medicine", label: "Medicine (doctor)" },
  { value: "nursing", label: "Nursing" },
  { value: "physiotherapy", label: "Physiotherapy" },
];

export const MENTEE_STAGES: Option[] = [
  { value: "high_school", label: "High school (Year 11–12 / A-levels / HSC)" },
  { value: "uni_early", label: "University, 1st or 2nd year" },
  { value: "uni_mid", label: "University, 3rd or 4th year" },
  { value: "uni_final", label: "University, final year" },
  { value: "intern", label: "Internship / house job" },
  { value: "graduate", label: "Graduated, preparing for licensing exams" },
  { value: "early_career", label: "Working professional (early career)" },
];

export const MENTOR_STAGES: Option[] = [
  { value: "uni_mid", label: "University student, 3rd or 4th year" },
  { value: "uni_final", label: "University student, final year" },
  { value: "intern", label: "Intern / house officer" },
  { value: "graduate_exam_cleared", label: "Graduate who has cleared licensing exams" },
  { value: "resident_y1", label: "1st-year resident / PGY-1 / intern abroad" },
  { value: "resident_senior", label: "Senior resident / registrar" },
  { value: "junior_nurse", label: "Practising nurse (0–5 years abroad)" },
  { value: "junior_physio", label: "Practising physiotherapist (0–5 years abroad)" },
  { value: "attending_consultant", label: "Attending / consultant" },
  { value: "senior_nurse_physio", label: "Senior nurse or physiotherapist (5+ years)" },
];

export const EXAMS: Option[] = [
  { value: "IELTS", label: "IELTS" },
  { value: "OET", label: "OET" },
  { value: "USMLE_STEP1", label: "USMLE Step 1" },
  { value: "USMLE_STEP2CK", label: "USMLE Step 2 CK" },
  { value: "USMLE_STEP3", label: "USMLE Step 3" },
  { value: "NCLEX_RN", label: "NCLEX-RN" },
  { value: "AMC_MCQ", label: "AMC MCQ" },
  { value: "AMC_CLINICAL", label: "AMC Clinical / WBA" },
  { value: "NZREX", label: "NZREX Clinical" },
  { value: "NMBA_OSCE", label: "NMBA OBA (NCLEX + OSCE, Australia)" },
  { value: "NPTE", label: "NPTE (US physio)" },
  { value: "APC", label: "Australian Physiotherapy Council exams" },
];

export const FRAMEWORK_STAGES: Option[] = [
  { value: "years_1_2", label: "Years 1–2: choosing a school, budget, early English prep" },
  { value: "years_3_4", label: "Years 3–4: rotations, research, first licensing exams" },
  { value: "years_5_6", label: "Years 5–6: electives, LoRs, residency / registration" },
];

export const SESSION_MODES: Option[] = [
  { value: "online", label: "Online video sessions" },
  { value: "in_person", label: "In person, in my city" },
  { value: "both", label: "Either is fine" },
];

export const AGE_BANDS: Option[] = [
  { value: "under_16", label: "Under 16" },
  { value: "16_17", label: "16–17" },
  { value: "18_24", label: "18–24" },
  { value: "25_plus", label: "25 or older" },
];

export const BUDGET_BANDS: Option[] = [
  { value: "under_15", label: "Under US$15" },
  { value: "15_30", label: "US$15–30" },
  { value: "30_60", label: "US$30–60" },
  { value: "60_plus", label: "More than US$60" },
  { value: "unsure", label: "Not sure yet" },
];

export const HOURS_PER_MONTH: Option[] = [
  { value: "1_2", label: "1–2 hours" },
  { value: "3_5", label: "3–5 hours" },
  { value: "6_10", label: "6–10 hours" },
  { value: "10_plus", label: "More than 10 hours" },
];

export const HEARD_FROM: Option[] = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "whatsapp", label: "WhatsApp group" },
  { value: "youtube", label: "YouTube" },
  { value: "tiktok", label: "TikTok" },
  { value: "reddit", label: "Reddit" },
  { value: "friend", label: "A friend or classmate" },
  { value: "college", label: "My school or university" },
  { value: "search", label: "Google search" },
  { value: "other", label: "Other" },
];

export function targetYears(from = new Date().getFullYear()): Option[] {
  const years = Array.from({ length: 8 }, (_, i) => String(from + i));
  return [...years.map((y) => ({ value: y, label: y })), { value: "unsure", label: "Not sure yet" }];
}

/** Values allowed for a field, used by the server to reject anything not on the list. */
export const values = (opts: Option[]) => new Set(opts.map((o) => o.value));
