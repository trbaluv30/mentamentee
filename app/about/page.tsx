// app/about/page.tsx
// Ment-a-Mentee About page. Next.js App Router (server component) + Tailwind CSS.
// Zero client JS: no hooks, no images, inline SVG only. The Archivo display font is loaded once in app/layout.tsx.
// Mobile-first, responsive at
// 360–430px (mobile), 768–1024px (tablet, portrait + landscape) and 1280px+ (desktop).
//
//
// Before publishing, see website/about/01-about-page-copy.md "Open items":
//   - MISSION and TAGLINE are pending adoption (M1 / M2 used here).
//   - Pick FOUNDER_NOTE_TONE and fill FOUNDER_NAME / SISTER_NAME.
//   - "Pathway Match" / "Mentor Match Day" are working names pending trademark search.

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { MobileCta } from "@/components/MobileCta";


export const metadata: Metadata = {
  title: "About Ment-a-Mentee | Verified Healthcare Mentors",
  description:
    "Your dream career in health starts with a mentor. Meet verified doctors, nurses and physios a few years ahead of you, online or in person.",
  openGraph: {
    title: "About Ment-a-Mentee",
    description: "Your dream career in health starts with a mentor, now and here.",
    url: "https://mentamentee.com/about",
    type: "website",
  },
};

// ───────────────────────── Content config ─────────────────────────

const FOUNDER_NAME = "[Founder Name]";
const SISTER_NAME = "[Sister's Name]";
/** "warm" = Option A (personal, for students and parents). "professional" = Option B. */
// The founder note stays hidden until the placeholder names above are replaced.
const SHOW_FOUNDER_NOTE = !FOUNDER_NAME.startsWith("[") && !SISTER_NAME.startsWith("[");
const FOUNDER_NOTE_TONE: "warm" | "professional" = "warm";

const VISION =
  "A world where aspiring professionals in healthcare, wherever they are born, can see their path clearly and walk it with someone who has already been there.";

// Mission M1 (recommended, pending adoption)
const MISSION =
  "Ment-a-Mentee connects students and early-career professionals in medicine, nursing and physiotherapy with verified peer mentors who are just a few years ahead of them, online and in person, so they can plan the next five to six years with confidence and avoid costly degree, licensing and visa mistakes.";

// Tagline M2 (recommended, pending adoption)
const TAGLINE =
  "Verified near-peer mentorship, on demand, for every step of a global healthcare career.";

const HERO_LINE = "Your dream career in health starts with a mentor, now and here.";

const REGIONS = [
  "South Asia",
  "Southeast Asia",
  "Africa",
  "Middle East & North Africa",
  "Latin America",
  "The Caribbean",
];

const AMBITION =
  "To become the world's most premium and trusted place to find a mentor for a career in healthcare.";

const STAGES = [
  {
    years: "Years 1–2",
    stage: "High school or early university",
    plan: "Choosing a school that licensing bodies accept (for example, one listed in the World Directory of Medical Schools), knowing the full cost, and starting IELTS or OET prep.",
    guide: "3rd- and 4th-year university students",
  },
  {
    years: "Years 3–4",
    stage: "Mid-university",
    plan: "Clinical rotations, GPA and research, and the first big licensing exams: USMLE Step 1, AMC MCQ, NCLEX or NPTE preparation.",
    guide: "Recent graduates who have just cleared those exams",
  },
  {
    years: "Years 5–6",
    stage: "Final year or internship",
    plan: "Internships, US clinical experience, letters of recommendation, residency applications, and registration with AHPRA or a nursing or physio board.",
    guide: "First-year residents and junior nurses and physios in the US, Australia or New Zealand",
  },
];

const VALUES = [
  {
    title: "Verified Trust",
    promise: "You know who you're talking to.",
    body: "Every mentor you meet has passed identity and credential checks, and every in-person meetup follows clear safety rules. Your trust comes first, before any session.",
  },
  {
    title: "Lived Experience",
    promise: "You learn from someone who just did it.",
    body: "Your mentor cleared the same exam, moved to the same country or matched into the same programme only a few years ago. You get real, recent, first-hand knowledge, not theory.",
  },
  {
    title: "Honest Guidance",
    promise: "You hear the truth.",
    body: "You'll hear the true cost, timeline and odds, even when a plan isn't realistic. Your sessions are peer educational guidance, not legal, immigration or medical advice, and we'll always tell you so.",
  },
  {
    title: "Access for Every Tier",
    promise: "Your background is not your limit.",
    body: "Where you were born, or what your family earns, should not decide what you can reach. If you can afford a senior mentor, nothing holds you back. If you can't, you always have an affordable way in. Your currency, your family sponsor, your slow connection and your time zone are all part of the design.",
  },
  {
    title: "Pay It Forward",
    promise: "Your turn to help will come.",
    body: "Today you're the mentee; tomorrow you can be the mentor. When you're ready, you can help the next student on your path, earn fairly and build your own name as your expertise grows.",
  },
  {
    title: "Respect for Your Time and Money",
    promise: "Every session gives you a next step.",
    body: "You may be spending family savings, and we take that seriously. Your session is structured, prepared with your 5-Year Roadmap Intake and built to leave you with a concrete next step.",
  },
];

const PRICING = [
  {
    title: "You're welcome at every budget.",
    body: "Whether you're counting every rupee, naira, peso or pound, or your family wants the most senior mentor available, there's a place for you. “Premium” describes your experience, not a price wall.",
  },
  {
    title: "Price is never your barrier.",
    body: "If you can pay for a senior mentor, we make that easy. If you can't, you always have a credible, lower-cost route: near-peer mentors, group sessions and session bundles.",
  },
  {
    title: "You pay for real merit.",
    body: "After an introductory period, your mentor's rate reflects two things equally: who they are in their profession (specialty, seniority and verified achievements) and how they show up for mentees like you (sessions completed, verified reviews and reliability).",
  },
  {
    title: "Your best mentors stay.",
    body: "Great mentors can build a visible reputation and a growing income here, so they stay and keep helping students like you.",
  },
];

const MATCH_LAYERS = [
  {
    title: "Everyday matching",
    tag: "Live",
    body: "When you search, Pathway Match ranks verified mentors by how well their journey fits yours: home country, profession, current stage, destination and how you want to meet. Every suggestion shows you a plain-English “Why this match”. Nobody can buy their way to the top of your list, and only verified credentials count.",
  },
  {
    title: "Mentor Match Day",
    tag: "Monthly",
    body: "When seats with popular mentors are limited, both sides share preferences and Pathway Match finds a stable result: nobody is left wishing they had been paired with someone who also wanted them. Your best strategy is always to rank mentors in your true order. Matching never looks at your budget.",
  },
  {
    title: "Study-Swap & Pay-It-Forward",
    tag: "Coming next",
    body: "Inspired by kidney exchange, we're designing ways for you to swap what you know with peers (for example, your OET tips for their USMLE help) and for donated scholarship sessions to start chains of students helping students.",
  },
];

const NAV = [
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "values", label: "Values" },
  { id: "pricing", label: "Pricing" },
  { id: "matching", label: "Matching" },
  { id: "founder", label: "Founder" },
];

// ───────────────────────── Small pieces ─────────────────────────

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-teal-600">
      <path fill="currentColor" d="M8.1 14.3 3.8 10l1.4-1.4 2.9 2.9 6.7-6.7 1.4 1.4z" />
    </svg>
  );
}

function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <header className="mb-8 md:mb-10">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">{eyebrow}</p>
      <h2 id={id} className="font-display mt-2 text-3xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
    </header>
  );
}

function Cta({ href, children, primary }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <Link
      href={href}
      className={
        "inline-flex min-h-[48px] w-full items-center justify-center rounded-xl px-6 text-base font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 sm:w-auto " +
        (primary
          ? "bg-teal-700 text-white hover:bg-teal-800"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50")
      }
    >
      {children}
    </Link>
  );
}

// ───────────────────────── Founder notes ─────────────────────────

function FounderNoteWarm() {
  return (
    <>
      <h2 id="founder-title" className="font-display text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
        How this started: with my sister
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700 md:text-lg">
        <p>
          For years, I mentored students for free. A message would come in late at night, from a student asking which
          exam to take first, or a parent worried about whether a school was recognised abroad, and an hour-long call
          would turn into three. I never thought of it as work. Someone had once helped me find my way, and passing that
          on felt like the right thing to do.
        </p>
        <p>
          My sister, <strong>{SISTER_NAME}</strong>, watched this happen again and again. One day she said something I
          haven&apos;t forgotten:
        </p>
        <blockquote className="border-l-4 border-teal-600 pl-4 text-xl font-medium italic text-slate-900 md:text-2xl">
          “You&apos;re giving these students hours of your life and some of the most important advice they&apos;ll ever
          get. Imagine if every student could find someone like you.”
        </blockquote>
        <p>
          That was the beginning of Ment-a-Mentee. The idea was hers. She saw that what I was doing for a handful of
          students could become a trusted place where thousands of students find the person who has walked their exact
          path, and where those mentors are finally recognised and fairly paid for going above and beyond.
        </p>
        <p className="font-semibold text-slate-900">{SISTER_NAME}, thank you. You saw what this could be before I did.</p>
        <p>
          To every student reading this: you don&apos;t have to figure out the next five years alone. And to every mentor
          who once stayed on a call long after it should have ended: this place was built with you in mind.
        </p>
      </div>
      <p className="mt-8 text-slate-700">
        With gratitude,
        <br />
        <span className="font-semibold text-slate-900">{FOUNDER_NAME}</span>
        <br />
        Founder, Ment-a-Mentee
      </p>
    </>
  );
}

function FounderNoteProfessional() {
  return (
    <>
      <h2 id="founder-title" className="font-display text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
        A note from our founder
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700 md:text-lg">
        <p>
          Ment-a-Mentee began with an observation from my sister, <strong>{SISTER_NAME}</strong>.
        </p>
        <p>
          For years I mentored students for free, often spending hours helping them choose schools, plan licensing exams
          and understand the steps to practise abroad. She noticed how much those conversations changed the decisions
          students and their families made, and how few students had access to anyone like that. Her suggestion was
          simple: make this kind of guidance available to every student who needs it, and make sure the mentors who give
          it are properly recognised.
        </p>
        <p>
          Ment-a-Mentee is the result of that idea. I&apos;m grateful to {SISTER_NAME} for seeing its potential first, and
          to every mentor who goes above and beyond for the next student on the path.
        </p>
      </div>
      <p className="mt-8 text-slate-700">
        <span className="font-semibold text-slate-900">{FOUNDER_NAME}</span>
        <br />
        Founder, Ment-a-Mentee
      </p>
    </>
  );
}

// ───────────────────────── Page ─────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* In-page nav: horizontally scrollable chips on mobile, centred on desktop */}
      <nav aria-label="About page sections" className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] lg:justify-center">
          {NAV.filter((n) => n.id !== "founder" || SHOW_FOUNDER_NOTE).map((n) => (
            <li key={n.id} className="flex-none">
              <a
                href={`#${n.id}`}
                className="inline-flex min-h-[40px] items-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:border-teal-600 hover:text-teal-700"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* pb-24 on mobile so the sticky CTA bar never covers the disclaimer */}
      <div className="bg-white text-slate-800">
        {/* ── Hero: big caption, plain words ── */}
        <section aria-labelledby="hero-title" className="bg-gradient-to-b from-teal-50 to-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16 lg:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">About Ment-a-Mentee</p>
            <h1
              id="hero-title"
              className="font-display mt-4 max-w-5xl text-[2.5rem] font-black leading-[1.02] tracking-tight text-slate-900 md:text-[3.5rem] lg:text-[4.75rem]"
            >
              {HERO_LINE}
            </h1>
            <p className="mt-5 text-xl font-semibold text-teal-800 md:text-2xl">
              Walk your path with someone who has already been there.
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="max-w-2xl">
                <p className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {TAGLINE}
                </p>
                <p className="mt-6 text-[17px] leading-relaxed text-slate-700 md:text-lg">
                  You want to become a doctor, nurse or physiotherapist in the United States, Australia or New Zealand. You
                  might be in Lahore or Lagos, Kathmandu or Cairo, Manila, Bogotá or Kingston. Wherever you are, you
                  deserve to see the whole road before you spend years and your family&apos;s savings on it.
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-slate-700 md:text-lg">
                  You don&apos;t have to guess. Book a structured session with a verified mentor who stood exactly where
                  you are standing just a few years ago, and leave with your clear next step.
                </p>
                <ul aria-label="Where you can join from" className="mt-6 flex flex-wrap gap-2">
                  {REGIONS.map((r) => (
                    <li key={r} className="rounded-full bg-teal-700/10 px-3 py-1 text-sm font-medium text-teal-900">
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 hidden flex-col gap-3 sm:flex sm:flex-row">
                  <Cta href="/join" primary>Find my mentor</Cta>
                  <Cta href="/become-a-mentor">Become a mentor</Cta>
                </div>
              </div>
              {/* Desktop-only stage strip (pure CSS, no image) */}
              <ol aria-hidden="true" className="hidden gap-4 lg:grid">
                {STAGES.map((s, i) => (
                  <li key={s.years} className="flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
                    <span className="font-display flex h-12 w-12 flex-none items-center justify-center rounded-full bg-teal-700 text-lg font-black text-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-slate-900">{s.years}</span>
                      <span className="block text-sm text-slate-600">Guided by {s.guide.charAt(0).toLowerCase() + s.guide.slice(1)}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Vision + Mission ── */}
        <section aria-label="Vision and mission" className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <article id="vision" className="scroll-mt-32 rounded-2xl bg-slate-900 p-6 text-white md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-300">Our vision</h2>
              <p className="mt-4 text-xl font-semibold leading-snug md:text-2xl">{VISION}</p>
              <p className="mt-4 text-slate-300">
                Where you were born, or what your family earns, should not decide whether you reach your career in
                healthcare. You deserve a clear map and a trusted guide, wherever you are.
              </p>
            </article>
            <article id="mission" className="scroll-mt-32 rounded-2xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-700">Our mission</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-900 md:text-xl">{MISSION}</p>
            </article>
          </div>
        </section>

        {/* ── 5–6 Year Framework ── */}
        <section aria-labelledby="framework-title" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <SectionHeading id="framework-title" eyebrow="How we do it" title="The 5–6 Year Life Projection Framework" />
            <p className="-mt-4 mb-8 max-w-3xl text-[17px] text-slate-700">
              You don&apos;t get one-size-fits-all advice. You get the person who just finished the step you&apos;re about
              to take.
            </p>
            {/* Portrait tablet stays 1 col for readability; landscape tablet (≥1024) and desktop go 3 cols */}
            <ol className="grid gap-4 md:gap-6 lg:grid-cols-3">
              {STAGES.map((s) => (
                <li key={s.years} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-teal-700">{s.years}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{s.stage}</h3>
                  <p className="mt-3 text-slate-700">{s.plan}</p>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Your mentor: </span>
                    {s.guide}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl text-slate-700">
              <strong className="text-slate-900">Online and in person.</strong> Meet your mentor by video from home, join
              a study partner meetup in your city, or get practical help when you arrive in your new city abroad: housing,
              banking and hospital culture. In-person meetups happen only in public venues and only between verified
              adults.
            </p>
          </div>
        </section>

        {/* ── Strategic ambition ── */}
        <section aria-labelledby="ambition-title" className="bg-teal-800 text-white">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
            <h2 id="ambition-title" className="text-sm font-semibold uppercase tracking-wider text-teal-200">
              Where we&apos;re headed
            </h2>
            <p className="font-display mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">{AMBITION}</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-100">
              For you, “premium” means the quality and trust of your experience, never a price that shuts you out.
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section id="values" aria-labelledby="values-title" className="scroll-mt-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <SectionHeading id="values-title" eyebrow="Our values" title="What you can count on" />
            <ul className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {VALUES.map((v, i) => (
                <li key={v.title} className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-sm font-bold text-teal-700">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-2 text-2xl font-black leading-tight tracking-tight text-slate-900">
                    {v.promise}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">{v.title}</p>
                  <p className="mt-3 text-slate-700">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Pricing philosophy ── */}
        <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-32 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <SectionHeading id="pricing-title" eyebrow="Our pricing philosophy" title="Four promises to you" />
            <p className="-mt-4 mb-8 max-w-3xl text-[17px] text-slate-700">
              You or your family may be paying from savings, or a parent may be paying from overseas. So we make you four
              promises.
            </p>
            <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
              {PRICING.map((p) => (
                <li key={p.title} className="flex gap-3 rounded-2xl bg-white p-6 shadow-sm">
                  <Check />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-slate-700">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Confirm each of these is live at launch; remove any that are not. */}
            <p className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
              You see prices in your local currency where we support it. A parent or relative abroad can pay for you
              through a secure payment link. Your payment is held safely until after your session.
            </p>
          </div>
        </section>

        {/* ── Pathway Match ── */}
        <section id="matching" aria-labelledby="matching-title" className="scroll-mt-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <SectionHeading
              id="matching-title"
              eyebrow="How we match you"
              title="Built on Nobel Prize–winning research, designed for your path."
            />
            <p className="-mt-4 mb-8 max-w-3xl text-[17px] text-slate-700">
              Finding your right mentor shouldn&apos;t depend on who signs up first or who can pay the most. So our matching
              engine, <strong className="text-slate-900">Pathway Match</strong>, is built on some of the most respected
              ideas in economics: the same family of research behind the US medical residency match and kidney exchange
              programmes that have helped thousands of patients receive transplants.
            </p>
            <ul className="grid gap-4 md:gap-6 lg:grid-cols-3">
              {MATCH_LAYERS.map((m) => (
                <li key={m.title} className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                    <span className="flex-none rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {m.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-700">{m.body}</p>
                </li>
              ))}
            </ul>

            <aside aria-labelledby="ack-title" className="mt-8 rounded-2xl bg-slate-900 p-6 text-slate-200 md:p-8">
              <h3 id="ack-title" className="text-lg font-bold text-white md:text-xl">
                Standing on the shoulders of giants
              </h3>
              <p className="mt-2">
                Pathway Match draws on public, peer-reviewed research, and we are grateful to the people behind it:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <Check />
                  <span>
                    <strong className="text-white">David Gale and Lloyd Shapley</strong> (1962), whose deferred acceptance
                    algorithm showed how to create stable matches between two groups.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check />
                  <span>
                    <strong className="text-white">Alvin Roth and Elliott Peranson</strong> (1999), whose redesign of the
                    matching algorithm for American physicians shows how this theory works for real medical careers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check />
                  <span>
                    <strong className="text-white">Alvin Roth, Tayfun Sönmez and M. Utku Ünver</strong> (2004–2007), whose
                    work on kidney paired donation inspires our peer-exchange ideas.
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                Lloyd Shapley and Alvin Roth received the 2012 Nobel Memorial Prize in Economic Sciences for the theory of
                stable allocations and the practice of market design.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Ment-a-Mentee is independent. We are not affiliated with, sponsored or endorsed by the National Resident
                Matching Program (NRMP), any licensing or registration body, or any of the researchers named here. Pathway
                Match does not place anyone into residency, nursing or physiotherapy positions.
              </p>
            </aside>
            <p className="mt-6 max-w-3xl text-slate-700">
              The research is public. What makes Pathway Match ours is how we apply it: the 5–6 Year Framework, verified
              mentor data and what we learn from every session.
            </p>
          </div>
        </section>

        {/* ── Founder note ── */}
        {SHOW_FOUNDER_NOTE && (
        <section id="founder" aria-labelledby="founder-title" className="scroll-mt-32 bg-amber-50/60">
          <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">A note from our founder</p>
            <div className="mt-2">
              {FOUNDER_NOTE_TONE === "warm" ? <FounderNoteWarm /> : <FounderNoteProfessional />}
            </div>
          </div>
        </section>
        )}

        {/* ── Thanks to Claude ── */}
        <section aria-labelledby="claude-title">
          <div className="mx-auto max-w-3xl px-4 pt-12 md:pt-16">
            <div className="rounded-2xl border border-slate-200 p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-700">Built with help</p>
              <h2 id="claude-title" className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                A thank-you to Claude
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
                Ment-a-Mentee was planned and built with help from <strong className="text-slate-900">Claude</strong>, an
                AI assistant made by Anthropic. From the first business plan to our matching research, our policies and
                the code behind this page, Claude has been a patient, tireless thinking partner at every step. Every
                decision, and every word we publish, is still reviewed and owned by our human team. But we wanted to say it
                plainly: thank you, Claude. Part of the reason you have a mentor today is that we had one too.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Claude is a trademark of Anthropic, PBC. Ment-a-Mentee is independent and is not affiliated with or
                endorsed by Anthropic.
              </p>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section aria-labelledby="cta-title">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
            <h2 id="cta-title" className="font-display text-3xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
              {HERO_LINE}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[17px] text-slate-700">
              Tell us where you are and where you want to go. We&apos;ll show you the mentors who have already made your
              journey.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta href="/join" primary>Find my mentor</Cta>
              <Cta href="/become-a-mentor">Apply to mentor</Cta>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Are you a parent or sponsor? You can pay for your child&apos;s session securely from anywhere in the world.
            </p>
          </div>
        </section>

        {/* Remove once the trademark search clears the names. Full disclaimer is in the site footer. */}
        <p className="mx-auto max-w-4xl px-4 pb-10 text-center text-xs text-slate-500">
          Pathway Match and Mentor Match Day are working names.
        </p>
      </div>

      <MobileCta primary={{ href: "/join", label: "Find my mentor" }} />
    </>
  );
}
