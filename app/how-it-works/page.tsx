import type { Metadata } from "next";
import { MobileCta } from "@/components/MobileCta";
import { CheckIcon, Container, Cta, Eyebrow, H2, Lead } from "@/components/ui";
import { FRAMEWORK } from "@/lib/framework";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The 5–6 Year Framework: plan your school, exams, budget and visa with a verified mentor who is a few years ahead of you.",
};

const SESSIONS = [
  {
    name: "5-Year Timeline Audit",
    body: "You and your mentor map every step from today to working abroad: exams, deadlines, money and the order to do it in.",
  },
  {
    name: "Exam & Budget Breakdown",
    body: "Which exams you need, when to take them, how to prepare, and what the whole journey will really cost you.",
  },
  {
    name: "Elective & Residency CV Review",
    body: "Someone who just matched or registered checks your CV, your clinical experience and your letters.",
  },
  {
    name: "3-session bundle",
    body: "Plan, act, check in. Three sessions with the same mentor across a few months, at a lower price per session.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section aria-labelledby="hiw-title" className="bg-gradient-to-b from-teal-50 to-white">
        <Container className="py-12 md:py-20">
          <Eyebrow>How it works</Eyebrow>
          <h1 id="hiw-title" className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            See your next six years before you live them.
          </h1>
          <Lead className="mt-6 max-w-2xl">
            Most costly mistakes happen because nobody told you in time. With the 5–6 Year Framework, you plan backwards
            from your goal with a mentor who has just been through your next step.
          </Lead>
        </Container>
      </section>

      <section aria-label="The framework, stage by stage">
        <Container className="pb-10 md:pb-16">
          <ol className="space-y-6">
            {FRAMEWORK.map((f, i) => (
              <li key={f.years} className="grid gap-6 rounded-3xl border border-slate-200 p-6 md:p-10 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Stage {i + 1}</span>
                  <h2 className="mt-1 text-4xl font-black tracking-tight text-teal-700 md:text-5xl">{f.years}</h2>
                  <p className="mt-2 text-xl font-bold text-slate-950">{f.stage}</p>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">{f.you}</p>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Questions you&apos;ll answer</h3>
                  <ul className="mt-3 space-y-3">
                    {f.topics.map((t) => (
                      <li key={t} className="flex gap-3 text-lg leading-relaxed text-slate-800">
                        <CheckIcon />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-2xl bg-teal-50 p-4 text-[15px] leading-relaxed text-teal-950">
                    <span className="font-bold">Your mentor: </span>
                    {f.mentor}.
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="sessions-title" className="bg-slate-50">
        <Container className="py-14 md:py-20">
          <Eyebrow>Sessions</Eyebrow>
          <H2 id="sessions-title" className="mt-3 max-w-3xl">
            Short, focused sessions. A concrete next step every time.
          </H2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SESSIONS.map((s) => (
              <div key={s.name} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 md:p-8">
                <h3 className="text-2xl font-black tracking-tight text-slate-950">{s.name}</h3>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
            <span className="font-bold text-slate-950">Before every session</span> you fill in a short 5-Year Roadmap
            form. Your mentor comes ready, so you don&apos;t waste time on the basics.
          </p>
        </Container>
      </section>

      <section aria-labelledby="modes-title">
        <Container className="grid gap-6 py-14 md:grid-cols-2 md:py-20">
          <div className="md:col-span-2">
            <Eyebrow>Online and in person</Eyebrow>
            <H2 id="modes-title" className="mt-3 max-w-3xl">
              Meet the way that works for you.
            </H2>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 md:p-8">
            <h3 className="text-2xl font-black text-slate-950">Online</h3>
            <p className="mt-2 text-lg leading-relaxed text-slate-700">
              1-on-1 video calls with a mentor already working in the US, Australia or New Zealand. You see both your
              time and your mentor&apos;s time on every booking.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 md:p-8">
            <h3 className="text-2xl font-black text-slate-950">In person</h3>
            <p className="mt-2 text-lg leading-relaxed text-slate-700">
              Study partners in your home city, or a friendly local when you first arrive abroad. Public places only,
              both people verified first, and you can share your meetup location with family. In-person sessions are
              for adults (18+) only.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="now-title" className="bg-slate-950 text-white">
        <Container className="py-14 text-center md:py-20">
          <h2 id="now-title" className="mx-auto max-w-3xl text-3xl font-black leading-[1.08] tracking-tight md:text-5xl">
            We&apos;re opening with a small group of verified mentors.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 md:text-xl">
            Join the waitlist now and you&apos;ll be first in line when a mentor for your journey is ready.
          </p>
          <Cta href="/join" variant="light" className="mt-8">
            Join the waitlist
          </Cta>
        </Container>
      </section>

      <MobileCta />
    </>
  );
}
