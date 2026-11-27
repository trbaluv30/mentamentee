import Link from "next/link";
import { MobileCta } from "@/components/MobileCta";
import { CheckIcon, Container, Cta, Eyebrow, H2, Lead } from "@/components/ui";
import { CORRIDORS } from "@/lib/corridors";
import { FRAMEWORK } from "@/lib/framework";

const MISTAKES = [
  { big: "Your degree", body: "Picking a school or course that a licensing body won't accept costs you years." },
  { big: "Your exams", body: "Taking the wrong exam, in the wrong order, at the wrong time costs you money and momentum." },
  { big: "Your visa", body: "Missing one document or one deadline can cost you a whole application cycle." },
];

const STEPS = [
  {
    title: "Tell us where you are and where you want to go",
    body: "Your country, your profession, your stage and your dream destination. It takes 3 minutes.",
  },
  {
    title: "Meet a verified mentor who has walked your path",
    body: "Someone from a country like yours, a few years ahead of you, who has already done what you are about to do.",
  },
  {
    title: "Leave with your 5-year plan",
    body: "One focused session. A clear timeline for your exams, your budget and your next step.",
  },
];

const TRUST = [
  {
    title: "Every mentor is verified",
    body: "We check each mentor's ID and their university, hospital or license records. Only then do they get the Verified badge.",
  },
  {
    title: "You meet online, from anywhere",
    body: "Every session is a video call on our platform. Distance is no longer a barrier. We do not set up in-person meetings.",
  },
  {
    title: "You get honest guidance",
    body: "Real costs, real timelines, real odds. Peer guidance from people who lived it, not legal or immigration advice.",
  },
  {
    title: "You pay your way",
    body: "When bookings open, you'll see prices in your own currency. Your family can also pay for you from anywhere.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section aria-labelledby="hero-title" className="bg-gradient-to-b from-teal-50 via-white to-white">
        <Container className="pb-14 pt-10 md:pb-20 md:pt-16 lg:pb-28 lg:pt-24">
          <Eyebrow>For future doctors, nurses and physiotherapists</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 max-w-5xl text-[2.6rem] font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Your dream career in health starts with a mentor,{" "}
            <span className="text-teal-700">now and here.</span>
          </h1>
          <Lead className="mt-6 max-w-2xl md:mt-8">
            Talk to someone who stood exactly where you are now, just a few years ago, and who made it to the United
            States, Australia or New Zealand. Plan your next five to six years with them, and skip the costly mistakes.
          </Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href="/join">Join the free waitlist</Cta>
            <Cta href="/become-a-mentor" variant="secondary">
              Become a mentor
            </Cta>
          </div>
          <ul className="mt-8 flex flex-col gap-3 text-[15px] font-semibold text-slate-700 sm:flex-row sm:flex-wrap sm:gap-6">
            {["Verified mentors only", "Online, from anywhere", "Medicine · Nursing · Physiotherapy"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-teal-600" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── The problem, stated plainly ── */}
      <section aria-labelledby="mistakes-title" className="bg-slate-950 text-white">
        <Container className="py-14 md:py-20">
          <h2 id="mistakes-title" className="max-w-4xl text-3xl font-black leading-[1.08] tracking-tight md:text-5xl">
            You only get one shot at the big decisions. <span className="text-teal-300">Make them with someone who&apos;s been there.</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {MISTAKES.map((m) => (
              <div key={m.big} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-2xl font-black md:text-3xl">{m.big}</p>
                <p className="mt-2 text-lg leading-relaxed text-slate-300">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How it works ── */}
      <section aria-labelledby="steps-title">
        <Container className="py-14 md:py-24">
          <Eyebrow>How it works</Eyebrow>
          <H2 id="steps-title" className="mt-3 max-w-3xl">
            Three steps to your plan.
          </H2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-slate-200 p-6 md:p-8">
                <span className="text-6xl font-black leading-none text-teal-700 md:text-7xl">{i + 1}</span>
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950 md:text-2xl">{s.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── Framework ── */}
      <section aria-labelledby="framework-title" className="bg-teal-50/60">
        <Container className="py-14 md:py-24">
          <Eyebrow>The 5–6 Year Framework</Eyebrow>
          <H2 id="framework-title" className="mt-3 max-w-4xl">
            Wherever you are today, there&apos;s a mentor one step ahead of you.
          </H2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK.map((f) => (
              <article key={f.years} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
                <p className="text-4xl font-black tracking-tight text-teal-700">{f.years}</p>
                <h3 className="mt-1 text-lg font-bold text-slate-950">{f.stage}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{f.you}</p>
                <p className="mt-auto border-t border-slate-100 pt-4 text-[15px] text-slate-600">
                  <span className="font-bold text-slate-900">Your mentor: </span>
                  {f.mentor}.
                </p>
              </article>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-8 inline-flex min-h-[48px] items-center text-lg font-bold text-teal-800 underline underline-offset-4">
            See what you&apos;ll cover at each stage →
          </Link>
        </Container>
      </section>

      {/* ── Journeys ── */}
      <section aria-labelledby="journeys-title">
        <Container className="py-14 md:py-24">
          <Eyebrow>Find your journey</Eyebrow>
          <H2 id="journeys-title" className="mt-3 max-w-3xl">
            Your path has been walked before.
          </H2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CORRIDORS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/journeys/${c.slug}`}
                  className="group flex h-full min-h-[96px] flex-col justify-center rounded-3xl border-2 border-slate-200 p-5 hover:border-teal-600"
                >
                  <span className="text-xl font-black tracking-tight text-slate-950">
                    {c.fromName.replace(/^the /, "")} → {c.to.map((t) => ({ US: "US", AU: "Australia", NZ: "New Zealand" })[t]).join(" / ")}
                  </span>
                  <span className="mt-1 text-[15px] capitalize text-slate-600 group-hover:text-teal-800">{c.profession} →</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/join"
                className="flex h-full min-h-[96px] flex-col justify-center rounded-3xl bg-slate-950 p-5 text-white hover:bg-slate-800"
              >
                <span className="text-xl font-black tracking-tight">From somewhere else?</span>
                <span className="mt-1 text-[15px] text-slate-300">
                  Africa, the Middle East, Latin America, the Caribbean: you&apos;re welcome too →
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* ── Trust ── */}
      <section aria-labelledby="trust-title" className="bg-slate-50">
        <Container className="py-14 md:py-24">
          <Eyebrow>Built on trust</Eyebrow>
          <H2 id="trust-title" className="mt-3 max-w-3xl">
            Your time, your money and your safety come first.
          </H2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {TRUST.map((t) => (
              <div key={t.title} className="flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8">
                <CheckIcon className="h-8 w-8 text-teal-600" />
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{t.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate-700">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Mentors ── */}
      <section aria-labelledby="mentor-title" className="bg-teal-800 text-white">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-200">For mentors</p>
            <h2 id="mentor-title" className="mt-3 text-3xl font-black leading-[1.08] tracking-tight md:text-5xl">
              You made it. Now help the next student make it too.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-teal-50 md:text-xl">
              Are you a student, graduate, resident, nurse or physio a few years ahead? Share what you learned, on your
              schedule, and get paid in USD, AUD or NZD.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 md:p-8">
            <p className="text-2xl font-black">Founding mentor offer</p>
            <p className="mt-2 text-lg text-teal-50">
              Be one of our first 20 verified mentors and keep 100% of your fee on your first 5 paid sessions.
            </p>
            <Cta href="/become-a-mentor" variant="light" className="mt-6 w-full">
              Apply to mentor
            </Cta>
          </div>
        </Container>
      </section>

      {/* ── Closing ── */}
      <section aria-labelledby="close-title">
        <Container className="py-16 text-center md:py-24">
          <H2 id="close-title" className="mx-auto max-w-4xl">
            Your next five years start with one conversation.
          </H2>
          <Lead className="mx-auto mt-4 max-w-2xl">
            Join the waitlist today. We&apos;ll let you know as soon as a verified mentor for your journey is ready.
          </Lead>
          <Cta href="/join" className="mt-8">
            Join the waitlist
          </Cta>
        </Container>
      </section>

      <MobileCta />
    </>
  );
}
