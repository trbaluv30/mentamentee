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
import { Container, Eyebrow } from "@/components/ui";
import { corridorBySlug } from "@/lib/corridors";
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
} from "@/lib/options";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: "Tell us where you are and where you want to go. We'll match you with a verified mentor who has walked your path.",
};

type Props = { searchParams: Promise<{ journey?: string; error?: string }> };

export default async function JoinPage({ searchParams }: Props) {
  const { journey, error } = await searchParams;
  const corridor = journey ? corridorBySlug(journey) : undefined;

  return (
    <section aria-labelledby="join-title" className="bg-slate-50">
      <Container className="max-w-3xl py-10 md:py-16">
        <Eyebrow>Join the waitlist · free</Eyebrow>
        <h1 id="join-title" className="mt-3 text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
          Tell us about your dream.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-700 md:text-xl">
          Answer a few questions so we can find the right mentor for you. It takes about 3 minutes. Your answers become
          the start of your 5-Year Roadmap.
        </p>
        {corridor && (
          <p className="mt-4 inline-flex rounded-full bg-teal-100 px-4 py-2 text-[15px] font-semibold text-teal-900">
            Journey: {corridor.headline}
          </p>
        )}

        <form id="form" action="/api/waitlist" method="post" className="relative mt-8 space-y-6 scroll-mt-24">
          <FormError message={error} />
          <Honeypot />
          <TimezoneInput />
          {corridor && <input type="hidden" name="corridor" value={corridor.slug} />}

          <Fieldset legend="About you" step={1}>
            <TextField name="full_name" label="Your full name" required autoComplete="name" maxLength={120} />
            <TextField name="email" label="Your email" type="email" required autoComplete="email" inputMode="email" />
            <TextField
              name="whatsapp"
              label="Your WhatsApp number"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+91 98765 43210"
              hint="Include your country code."
              maxLength={25}
            />
            <SelectField name="age_band" label="Your age" required options={AGE_BANDS} hint="You must be 16 or older." />
            <div className="rounded-2xl bg-amber-50 p-4 md:col-span-2">
              <p className="font-bold text-amber-950">Are you 16 or 17?</p>
              <p className="mt-1 text-[15px] text-amber-950">
                Please add a parent or guardian. We&apos;ll ask them to confirm before you can book, and you&apos;ll only
                have online sessions.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <TextField name="guardian_name" label="Parent or guardian's name" maxLength={120} />
                <TextField name="guardian_email" label="Parent or guardian's email" type="email" inputMode="email" />
                <Checkbox name="guardian_confirm">My parent or guardian knows I am joining Ment-a-Mentee.</Checkbox>
              </div>
            </div>
          </Fieldset>

          <Fieldset legend="Where you are now" step={2}>
            <CountryField
              name="home_country"
              label="Your home country"
              hint="Where you're from (your nationality)."
              required
              defaultValue={corridor?.from}
            />
            <CountryField
              name="residence_country"
              label="Where you live now"
              hint="Where you live most of the year."
              required
              defaultValue={corridor?.from}
            />
            <SelectField
              name="profession"
              label="Your career goal"
              required
              options={PROFESSIONS}
              defaultValue={corridor?.profession}
            />
            <SelectField name="stage" label="Your stage today" required options={MENTEE_STAGES} />
          </Fieldset>

          <Fieldset legend="Where you want to go" step={3}>
            <ChoiceGroup
              name="destinations"
              label="Where do you dream of studying or working?"
              hint="Choose all that apply."
              required
              columns={2}
              options={[...DESTINATIONS, { value: "UNSURE", label: "I'm not sure yet" }]}
              defaultValues={corridor?.to}
            />
            <SelectField
              name="target_year"
              label="When do you hope to start abroad?"
              options={targetYears()}
            />
            <SelectField name="session_mode" label="How would you like to meet?" required options={SESSION_MODES} />
            <TextField name="city" label="Your city" hint="Helps us find in-person study partners near you." maxLength={80} />
            <ChoiceGroup
              name="exams"
              label="Exams you've taken or are planning"
              hint="Choose any that apply."
              columns={3}
              options={EXAMS}
            />
          </Fieldset>

          <Fieldset legend="Your biggest question" step={4}>
            <TextArea
              name="biggest_question"
              label="What's the one decision you're most worried about getting wrong in the next five years?"
              hint="For example: which exam to take first, whether your college is accepted, or how much it will all cost. Please don't share health details or ID numbers."
              required
              maxLength={1000}
            />
            <SelectField
              name="budget"
              label="What could you spend on one session?"
              hint="Only our team sees this. Mentors never do."
              options={BUDGET_BANDS}
            />
            <TextField
              name="languages"
              label="Other languages you speak"
              hint="Sessions are in English. This helps us match you."
              placeholder="Hindi, Tagalog, Urdu…"
              maxLength={120}
            />
            <SelectField name="heard_from" label="How did you hear about us?" options={HEARD_FROM} />
          </Fieldset>

          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
            <Checkbox name="consent_privacy" required>
              I have read the{" "}
              <Link href="/privacy" className="font-semibold text-teal-800 underline">
                privacy notice
              </Link>
              . I agree that Ment-a-Mentee stores my answers in the United States to match me with a mentor.
            </Checkbox>
            <Checkbox name="consent_updates">
              Email me launch news and tips for my journey. (Optional. Not sent to anyone under 18. Unsubscribe anytime.)
            </Checkbox>
            <p className="text-sm leading-relaxed text-slate-600">
              Mentors share what they learned. This is not legal, visa, money or medical advice.
            </p>
            <SubmitButton>Join the waitlist</SubmitButton>
          </div>
        </form>
      </Container>
    </section>
  );
}
