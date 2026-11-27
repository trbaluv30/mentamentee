import type { Metadata } from "next";
import Link from "next/link";
import {
  Checkbox,
  ChoiceGroup,
  CountryField,
  Fieldset,
  FormError,
  Honeypot,
  SelectField,
  SubmitButton,
  TextArea,
  TextField,
  TimezoneInput,
} from "@/components/fields";
import { MobileCta } from "@/components/MobileCta";
import { CheckIcon, Container, Eyebrow, H2, Lead } from "@/components/ui";
import {
  DESTINATIONS,
  EXAMS,
  FRAMEWORK_STAGES,
  HEARD_FROM,
  HOURS_PER_MONTH,
  MENTOR_STAGES,
  PROFESSIONS,
} from "@/lib/options";

export const metadata: Metadata = {
  title: "Become a mentor",
  description:
    "You made it to the US, Australia or New Zealand, or you're a few years ahead. Mentor the next student, on your schedule, and get paid in USD, AUD or NZD.",
};

const WHY = [
  { title: "You set your schedule", body: "Offer as little as one or two hours a month. You choose when." },
  { title: "You get paid fairly", body: "Paid in USD, AUD or NZD. Your rate grows with your experience and your reviews." },
  { title: "You keep it simple", body: "Structured sessions and a pre-call intake mean you arrive prepared and stay focused." },
  { title: "You earn the Verified badge", body: "We check ID and credentials, so students and parents trust you from day one." },
];

const STEPS = [
  "Apply below (5 minutes).",
  "A 15-minute video call with our founding team.",
  "We check your ID. We also check your student ID, hospital badge or license record.",
  "Sign the mentor agreement. Set up your profile and the times you are free.",
];

type Props = { searchParams: Promise<{ error?: string }> };

export default async function BecomeAMentorPage({ searchParams }: Props) {
  const { error } = await searchParams;
  return (
    <>
      <section aria-labelledby="mentor-title" className="bg-teal-800 text-white">
        <Container className="py-12 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-200">For mentors</p>
          <h1 id="mentor-title" className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
            You walked this path. Now help the next student walk it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-teal-50 md:text-xl">
            Are you a senior student, a graduate who just cleared your exams, a resident, or a nurse or physio working
            abroad? Your last few years are exactly what the next student needs to hear.
          </p>
          <div className="mt-8 max-w-xl rounded-3xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-2xl font-black">Founding mentor offer</p>
            <p className="mt-2 text-lg text-teal-50">
              Be one of our first 20 verified mentors and keep 100% of your fee on your first 5 paid sessions.
            </p>
          </div>
          <a
            href="#form"
            className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-7 text-lg font-bold text-slate-950 hover:bg-teal-50"
          >
            Apply now
          </a>
        </Container>
      </section>

      <section aria-labelledby="why-title">
        <Container className="py-14 md:py-20">
          <H2 id="why-title" className="max-w-3xl">
            Why you&apos;ll love mentoring here.
          </H2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-3xl border border-slate-200 p-6">
                <CheckIcon className="h-8 w-8 text-teal-600" />
                <h3 className="mt-3 text-xl font-black tracking-tight text-slate-950">{w.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-slate-700">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="steps-title" className="bg-slate-50">
        <Container className="py-14 md:py-20">
          <Eyebrow>How you get verified</Eyebrow>
          <H2 id="steps-title" className="mt-3 max-w-3xl">
            Four steps to your first session.
          </H2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {STEPS.map((s, i) => (
              <li key={s} className="flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                <span className="text-4xl font-black leading-none text-teal-700">{i + 1}</span>
                <span className="text-lg leading-relaxed text-slate-800">{s}</span>
              </li>
            ))}
          </ol>
          <Lead className="mt-8 max-w-3xl text-base md:text-lg">
            We delete ID images after we&apos;ve checked them. You mentor as an independent peer guide, not as a legal,
            immigration or medical adviser.
          </Lead>
        </Container>
      </section>

      <section aria-labelledby="apply-title" className="bg-slate-50 pb-6">
        <Container className="max-w-3xl pb-14 md:pb-20">
          <H2 id="apply-title">Apply to mentor.</H2>
          <form id="form" action="/api/mentor-application" method="post" className="relative mt-8 space-y-6 scroll-mt-24">
            <FormError message={error} />
            <Honeypot />
            <TimezoneInput />

            <Fieldset legend="About you" step={1}>
              <TextField name="full_name" label="Your full name" required autoComplete="name" maxLength={120} />
              <TextField name="email" label="Your email" type="email" required autoComplete="email" inputMode="email" />
              <TextField
                name="whatsapp"
                label="Your WhatsApp number"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                hint="Include your country code."
                maxLength={25}
              />
              <TextField
                name="linkedin"
                label="Your LinkedIn profile"
                type="url"
                inputMode="url"
                placeholder="linkedin.com/in/your-name"
                hint="Helps us verify you faster."
                maxLength={300}
              />
              <CountryField name="home_country" label="Your home country" hint="Where you're from." required />
              <CountryField name="current_country" label="Where you live now" required />
            </Fieldset>

            <Fieldset legend="Your career" step={2}>
              <SelectField name="profession" label="Your profession" required options={PROFESSIONS} />
              <SelectField name="stage" label="Your stage today" required options={MENTOR_STAGES} />
              <TextField name="specialty" label="Your specialty or area" placeholder="Internal medicine, ICU nursing…" maxLength={120} />
              <TextField
                name="registration_body"
                label="Where you're registered or licensed"
                placeholder="AHPRA, NMBA, a US state board, MCNZ…"
                hint="We'll ask for proof on the verification call."
                maxLength={160}
              />
              <ChoiceGroup name="exams" label="Exams you've cleared" hint="Choose all that apply." columns={3} options={EXAMS} />
            </Fieldset>

            <Fieldset legend="How you'll help" step={3}>
              <ChoiceGroup
                name="destinations"
                label="Which destinations can you advise on?"
                required
                columns={3}
                options={DESTINATIONS}
              />
              <ChoiceGroup
                name="framework_stages"
                label="Which stages can you guide?"
                hint="Usually the stage you finished in the last 1–3 years."
                required
                columns={1}
                options={FRAMEWORK_STAGES}
              />
              <SelectField name="hours" label="Hours you can give each month" required options={HOURS_PER_MONTH} />
              <TextField
                name="languages"
                label="Other languages you speak"
                placeholder="Tamil, Armenian, Hindi, Tagalog, Urdu…"
                maxLength={120}
              />
              <SelectField name="heard_from" label="How did you hear about us?" options={HEARD_FROM} />
              <TextArea
                name="motivation"
                label="Why do you want to mentor?"
                hint="What do you wish someone had told you a few years ago?"
                required
                maxLength={1500}
              />
            </Fieldset>

            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
              <Checkbox name="adult" required>
                I am 18 or older.
              </Checkbox>
              <Checkbox name="consent_verification" required>
                I agree to identity and credential checks before I can mentor.
              </Checkbox>
              <Checkbox name="consent_privacy" required>
                I have read the{" "}
                <Link href="/privacy" className="font-semibold text-teal-800 underline">
                  privacy notice
                </Link>{" "}
                and agree that Ment-a-Mentee stores my application in the United States.
              </Checkbox>
              <SubmitButton>Send my application</SubmitButton>
            </div>
          </form>
        </Container>
      </section>

      <MobileCta primary={{ href: "#form", label: "Apply to mentor" }} secondary={null} />
    </>
  );
}
