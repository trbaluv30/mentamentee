import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MobileCta } from "@/components/MobileCta";
import { CheckIcon, Container, Cta, Eyebrow, H2, Lead } from "@/components/ui";
import { CORRIDORS, corridorBySlug } from "@/lib/corridors";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CORRIDORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = corridorBySlug((await params).slug);
  if (!c) return {};
  return {
    title: c.headline,
    description: `Verified mentors for ${c.demonym} ${c.professionLabel} heading to ${c.toName}. ${c.intro}`,
  };
}

export default async function JourneyPage({ params }: Props) {
  const c = corridorBySlug((await params).slug);
  if (!c) notFound();
  const joinHref = `/join?journey=${c.slug}`;

  return (
    <>
      <section aria-labelledby="journey-title" className="bg-gradient-to-b from-teal-50 to-white">
        <Container className="py-12 md:py-20">
          <Eyebrow>
            For {c.demonym} {c.professionLabel}
          </Eyebrow>
          <h1 id="journey-title" className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            {c.headline}.
          </h1>
          <Lead className="mt-6 max-w-2xl">{c.intro}</Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Cta href={joinHref}>Find your mentor</Cta>
            <Cta href="/become-a-mentor" variant="secondary">
              Already there? Become a mentor
            </Cta>
          </div>
        </Container>
      </section>

      <section aria-labelledby="road-title">
        <Container className="py-12 md:py-20">
          <H2 id="road-title" className="max-w-3xl">
            Your road, in three stages.
          </H2>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {c.steps.map((s) => (
              <li key={s.title} className="rounded-3xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-2xl font-black tracking-tight text-teal-700">{s.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="mistakes-title" className="bg-slate-950 text-white">
        <Container className="py-12 md:py-20">
          <h2 id="mistakes-title" className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight md:text-5xl">
            Mistakes your mentor will help you avoid.
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.mistakes.map((m) => (
              <li key={m} className="flex gap-3 rounded-3xl bg-white/5 p-6 text-lg leading-relaxed ring-1 ring-white/10">
                <CheckIcon className="h-6 w-6 text-teal-300" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="official-title">
        <Container className="py-12 md:py-16">
          <h2 id="official-title" className="text-2xl font-black tracking-tight text-slate-950">
            Always check the official rules
          </h2>
          <p className="mt-2 max-w-3xl text-lg text-slate-700">
            Requirements change. Your mentor shares lived experience; the official bodies set the rules.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.officialBodies.map((b) => (
              <li key={b.url}>
                <a
                  href={b.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-[44px] items-center rounded-full border border-slate-300 px-4 font-semibold text-slate-800 hover:border-teal-600"
                >
                  {b.name} ↗
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-3xl bg-teal-700 p-8 text-center text-white md:p-12">
            <p className="text-3xl font-black tracking-tight md:text-4xl">Your mentor for this journey is waiting.</p>
            <Cta href={joinHref} variant="light" className="mt-6">
              Join the waitlist
            </Cta>
          </div>
        </Container>
      </section>

      <MobileCta primary={{ href: joinHref, label: "Find your mentor" }} />
    </>
  );
}
