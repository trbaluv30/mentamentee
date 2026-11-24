// The five launch corridors (blueprint Section 9, Phase 0). Each gets its own landing
// page so social posts and ads can point at the exact journey a student is on.
// Pathway facts are summaries only: every page links the student to the official body.

export type Corridor = {
  slug: string;
  from: string; // ISO code, matches SOURCE_COUNTRIES
  fromName: string;
  demonym: string;
  profession: "medicine" | "nursing" | "physiotherapy";
  professionLabel: string;
  to: string[]; // ISO codes
  toName: string;
  headline: string;
  intro: string;
  steps: { title: string; body: string }[];
  mistakes: string[];
  officialBodies: { name: string; url: string }[];
};

export const CORRIDORS: Corridor[] = [
  {
    slug: "india-medicine-us",
    from: "IN",
    fromName: "India",
    demonym: "Indian",
    profession: "medicine",
    professionLabel: "medical students and doctors",
    to: ["US"],
    toName: "the United States",
    headline: "From MBBS in India to residency in the US",
    intro:
      "The road to a US residency is long and costly. Many choices can't be undone. Talk to Indian doctors who just walked it.",
    steps: [
      {
        title: "Years 1–2: build on the right foundation",
        body: "Check that your college is in the World Directory of Medical Schools (WDOMS). Learn the full cost of the USMLE route. Start on English and research early.",
      },
      {
        title: "Years 3–4: the USMLE years",
        body: "Plan Step 1 (now pass/fail) and Step 2 CK around your clinical postings. Start building research and a strong CV.",
      },
      {
        title: "Years 5–6: US clinical experience and the Match",
        body: "Get hands-on US clinical experience and strong US letters. Then finish ECFMG certification and apply to the residency Match.",
      },
    ],
    mistakes: [
      "Taking Step 1 before your basics are strong, then losing a year",
      "Paying for observerships that won't give you a usable US letter",
      "Underestimating the total cost: exams, travel, applications and interviews",
    ],
    officialBodies: [
      { name: "ECFMG / Intealth", url: "https://www.ecfmg.org" },
      { name: "USMLE", url: "https://www.usmle.org" },
      { name: "NRMP", url: "https://www.nrmp.org" },
    ],
  },
  {
    slug: "philippines-nursing-australia",
    from: "PH",
    fromName: "the Philippines",
    demonym: "Filipino",
    profession: "nursing",
    professionLabel: "nursing students and nurses",
    to: ["AU"],
    toName: "Australia",
    headline: "From BSN in the Philippines to nursing in Australia",
    intro:
      "Australia has its own exams, English scores and paperwork for overseas nurses. Learn it from Filipino nurses already working there.",
    steps: [
      {
        title: "Years 1–2: plan the full journey",
        body: "Learn what Australia's nursing board expects. Know the full cost. Know when to start IELTS or OET.",
      },
      {
        title: "Years 3–4: clinical hours and exams",
        body: "Build strong clinical experience and pass your local nursing exam. Then get ready for Australia's two-step test: the NCLEX-RN, then the OSCE.",
      },
      {
        title: "Years 5–6: registration and your first job",
        body: "Register with AHPRA and choose your visa. Then settle in: housing, banking and hospital life in your new city.",
      },
    ],
    mistakes: [
      "Booking the OSCE before you have the English score you need",
      "Paying an agency for steps you can do yourself",
      "Arriving without a plan for your first three months of costs",
    ],
    officialBodies: [
      { name: "Nursing and Midwifery Board of Australia", url: "https://www.nursingmidwiferyboard.gov.au" },
      { name: "AHPRA", url: "https://www.ahpra.gov.au" },
    ],
  },
  {
    slug: "pakistan-medicine-us",
    from: "PK",
    fromName: "Pakistan",
    demonym: "Pakistani",
    profession: "medicine",
    professionLabel: "medical students and doctors",
    to: ["US"],
    toName: "the United States",
    headline: "From MBBS in Pakistan to residency in the US",
    intro:
      "Pakistan sends more doctors to US residencies than almost any other country. Most of them learned the route the hard way. You don't have to.",
    steps: [
      {
        title: "Years 1–2: choose and budget carefully",
        body: "Check that your college is in WDOMS. Learn the full cost of the USMLE route. Plan your English and research early.",
      },
      {
        title: "Years 3–4: USMLE preparation",
        body: "Fit Step 1 and Step 2 CK around your ward work. Start research that can lead to real papers.",
      },
      {
        title: "Years 5–6: house job, US experience and the Match",
        body: "Time your house job well. Get US clinical experience and strong letters. Then finish ECFMG certification and apply to the Match.",
      },
    ],
    mistakes: [
      "Spending months on the wrong exam order for your situation",
      "Leaving US clinical experience too late for a strong application",
      "Not planning for visa sponsorship when you choose where to apply",
    ],
    officialBodies: [
      { name: "ECFMG / Intealth", url: "https://www.ecfmg.org" },
      { name: "USMLE", url: "https://www.usmle.org" },
      { name: "NRMP", url: "https://www.nrmp.org" },
    ],
  },
  {
    slug: "sri-lanka-medicine-australia-nz",
    from: "LK",
    fromName: "Sri Lanka",
    demonym: "Sri Lankan",
    profession: "medicine",
    professionLabel: "medical students and doctors",
    to: ["AU", "NZ"],
    toName: "Australia and New Zealand",
    headline: "From medicine in Sri Lanka to practising in Australia or New Zealand",
    intro:
      "Australia and New Zealand each have their own route for doctors trained overseas. Talk to Sri Lankan doctors who chose one and made it work.",
    steps: [
      {
        title: "Years 1–2: pick your destination early",
        body: "Compare the Australian and New Zealand routes. Look at the cost and time of each. Start your English prep.",
      },
      {
        title: "Years 3–4: the first big exam",
        body: "Plan for the AMC MCQ exam. If New Zealand is your goal, learn how it links to NZREX Clinical.",
      },
      {
        title: "Years 5–6: clinical assessment and registration",
        body: "Pass the AMC clinical exam or a workplace-based assessment. Then register with AHPRA or MCNZ and find your first role.",
      },
    ],
    mistakes: [
      "Choosing a country before comparing both routes properly",
      "Sitting the clinical exam without supervised local practice",
      "Not budgeting for the time between passing exams and getting a job",
    ],
    officialBodies: [
      { name: "Australian Medical Council", url: "https://www.amc.org.au" },
      { name: "Medical Council of New Zealand", url: "https://www.mcnz.org.nz" },
      { name: "AHPRA", url: "https://www.ahpra.gov.au" },
    ],
  },
  {
    slug: "nepal-physiotherapy-nz",
    from: "NP",
    fromName: "Nepal",
    demonym: "Nepali",
    profession: "physiotherapy",
    professionLabel: "physiotherapy students and physiotherapists",
    to: ["NZ"],
    toName: "New Zealand",
    headline: "From BPT in Nepal to physiotherapy in New Zealand",
    intro:
      "New Zealand needs physios. But few people know how overseas graduates get registered. Learn it from Nepali physios already working there.",
    steps: [
      {
        title: "Years 1–2: know what New Zealand will assess",
        body: "Learn what the Physiotherapy Board of New Zealand checks in an overseas degree. Know the cost. Know when to start IELTS or OET.",
      },
      {
        title: "Years 3–4: clinical breadth",
        body: "Get wide clinical experience. Keep good records of it. You will need them for your assessment.",
      },
      {
        title: "Years 5–6: registration and moving",
        body: "Apply to register. Find your first role and sort out your visa. Then settle into life in New Zealand.",
      },
    ],
    mistakes: [
      "Not keeping detailed records of clinical hours and placements",
      "Starting the application before your English score is ready",
      "Ignoring Australia's separate route when it might suit you better",
    ],
    officialBodies: [{ name: "Physiotherapy Board of New Zealand", url: "https://www.physioboard.org.nz" }],
  },
];

export const corridorBySlug = (slug: string) => CORRIDORS.find((c) => c.slug === slug);
