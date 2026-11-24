import type { Metadata } from "next";
import { Container, Cta, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

type Props = { searchParams: Promise<{ for?: string; minor?: string }> };

export default async function ThanksPage({ searchParams }: Props) {
  const p = await searchParams;
  const mentor = p.for === "mentor";
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white">
      <Container className="max-w-3xl py-16 text-center md:py-28">
        <Eyebrow>{mentor ? "Application received" : "You're on the list"}</Eyebrow>
        <h1 className="mt-4 text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
          {mentor ? "Thank you. You're going to change someone's path." : "You've taken your first step."}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl">
          {mentor
            ? "We'll email you within a few days to book a 15-minute call with our founding team."
            : "We'll email you as soon as a verified mentor for your journey is ready. Keep an eye on your inbox, and your spam folder."}
        </p>
        {p.minor === "1" && (
          <p className="mx-auto mt-4 max-w-xl rounded-2xl bg-amber-50 p-4 text-[15px] text-amber-950">
            Because you are 16 or 17, we&apos;ll also contact your parent or guardian to confirm before you can book.
          </p>
        )}
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Cta href="/how-it-works">See how it works</Cta>
          <Cta href="/" variant="secondary">
            Back to home
          </Cta>
        </div>
      </Container>
    </section>
  );
}
