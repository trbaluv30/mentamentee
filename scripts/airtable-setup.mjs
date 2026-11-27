// Creates the two Airtable tables the website writes to.
// Run once:  AIRTABLE_TOKEN=pat... AIRTABLE_BASE_ID=app... npm run airtable:setup
// The token needs the scopes: data.records:write, schema.bases:read, schema.bases:write
// Safe to re-run: tables that already exist are skipped.

const token = process.env.AIRTABLE_TOKEN;
const base = process.env.AIRTABLE_BASE_ID;
if (!token || !base) {
  console.error("Set AIRTABLE_TOKEN and AIRTABLE_BASE_ID first.");
  process.exit(1);
}

const text = (name) => ({ name, type: "singleLineText" });
const long = (name) => ({ name, type: "multilineText" });
const email = (name) => ({ name, type: "email" });
const phone = (name) => ({ name, type: "phoneNumber" });
const url = (name) => ({ name, type: "url" });
const check = (name) => ({ name, type: "checkbox", options: { icon: "check", color: "greenBright" } });
// Select options are added automatically on first use (the site sends typecast: true).
const single = (name, choices = []) => ({ name, type: "singleSelect", options: { choices: choices.map((c) => ({ name: c })) } });
const multi = (name, choices = []) => ({ name, type: "multipleSelects", options: { choices: choices.map((c) => ({ name: c })) } });
const status = single("Status", ["New", "Contacted", "Matched", "Not a fit"]);

const TABLES = [
  {
    name: process.env.AIRTABLE_WAITLIST_TABLE || "Waitlist",
    description: "Mentee waitlist and 5-Year Roadmap intake from mentamentee.com/join",
    fields: [
      text("Full name"),
      email("Email"),
      phone("WhatsApp"),
      single("Age band", ["16_17", "18_24", "25_plus"]),
      text("Guardian name"),
      email("Guardian email"),
      check("Guardian confirmed"),
      single("Home country"),
      single("Country of residence"),
      single("Profession", ["medicine", "nursing", "physiotherapy"]),
      single("Current stage"),
      multi("Destinations", ["US", "AU", "NZ", "UNSURE"]),
      single("Target year"),
      multi("Exams taken or planned"),
      long("Biggest question"),
      single("Budget per session"),
      text("Other languages"),
      single("Heard from"),
      single("Corridor"),
      text("Timezone"),
      check("Privacy consent"),
      check("Updates consent"),
      text("Privacy notice version"),
      status,
    ],
  },
  {
    name: process.env.AIRTABLE_MENTORS_TABLE || "Mentor Applications",
    description: "Mentor applications from mentamentee.com/become-a-mentor",
    fields: [
      text("Full name"),
      email("Email"),
      phone("WhatsApp"),
      url("LinkedIn"),
      single("Home country"),
      single("Country now"),
      single("Profession", ["medicine", "nursing", "physiotherapy"]),
      single("Current stage"),
      text("Specialty"),
      multi("Exams cleared"),
      text("Registration body"),
      multi("Can advise on", ["US", "AU", "NZ"]),
      multi("Framework stages", ["years_1_2", "years_3_4", "years_5_6"]),
      single("Hours per month", ["1_2", "3_5", "6_10", "10_plus"]),
      text("Other languages"),
      long("Motivation"),
      single("Heard from"),
      text("Timezone"),
      check("Confirms 18+"),
      check("Verification consent"),
      check("Privacy consent"),
      text("Privacy notice version"),
      single("Status", ["New", "Screening call booked", "Verifying", "Verified", "Not a fit"]),
    ],
  },
];

const api = `https://api.airtable.com/v0/meta/bases/${base}/tables`;
const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

const existing = await fetch(api, { headers }).then(async (r) => {
  if (!r.ok) throw new Error(`Could not read base (${r.status}): ${await r.text()}`);
  return (await r.json()).tables.map((t) => t.name);
});

for (const table of TABLES) {
  if (existing.includes(table.name)) {
    console.log(`✓ "${table.name}" already exists, skipped`);
    continue;
  }
  const res = await fetch(api, { method: "POST", headers, body: JSON.stringify(table) });
  if (!res.ok) {
    console.error(`✗ "${table.name}": ${res.status} ${await res.text()}`);
    process.exitCode = 1;
  } else {
    console.log(`✓ created "${table.name}"`);
  }
}
console.log('Tip: add a "Created time" field to each table in Airtable to see when people signed up.');
