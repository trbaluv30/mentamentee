import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Container, DraftBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Terms (draft)" };

// Source: legal/02-terms-of-service-DRAFT.md v0.5 (plain-English summary only).
// The full Terms are under attorney review (launch plan LEG-03/LEG-04) and must be
// published here before the first paid session.

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-10 md:py-16">
      <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Terms of Service</h1>
      <p className="mt-2 text-slate-600">Draft v0.5 · Waitlist stage</p>
      <div className="mt-6">
        <DraftBanner>
          These Terms are a draft under legal review. Right now Ment-a-Mentee only runs a free waitlist and mentor
          applications; no sessions are sold yet. The full Terms will be published here, and you will be asked to agree
          to them, before you can book a paid session.
        </DraftBanner>
      </div>
      <Prose>
        <h2>The waitlist</h2>
        <p>
          Joining the waitlist or applying to mentor is free and does not create an account or a contract for
          sessions. We use your answers to match you with a mentor and to contact you about launch, as described in the{" "}
          <Link href="/privacy">privacy notice</Link>. You can ask us to remove you at any time.
        </p>

        <h2>Summary of the planned Terms (plain English)</h2>
        <ul>
          <li>
            Ment-a-Mentee is a <strong>marketplace</strong>. Independent mentors offer sessions; mentees book and pay
            for them. <strong>The mentor, not Ment-a-Mentee, provides the session.</strong>
          </li>
          <li>
            Sessions are <strong>peer educational guidance</strong> from people who have walked the path.{" "}
            <strong>They are not legal, immigration, financial or medical advice.</strong> Always check requirements
            with the official body (for example ECFMG, NBME, NCSBN, CGFNS, AMC, AHPRA, FSBPT, the Medical, Nursing or
            Physiotherapy Council, or the relevant embassy).
          </li>
          <li>
            You must be <strong>16 or older</strong>. If you are <strong>16 or 17</strong>, a parent or guardian must
            agree to the Terms, and your sessions are <strong>online only</strong>.
          </li>
          <li>
            The price you see at checkout is the <strong>total price</strong>, including our Platform &amp;
            Verification Fee.
          </li>
          <li>
            Payments are held until <strong>24 hours after the session</strong> so problems can be reported. Cancel{" "}
            <strong>24 hours or more</strong> before a session for a refund of the session price.
          </li>
          <li>
            Keep messages and payments <strong>on the platform</strong>.
          </li>
          <li>
            In online sessions: camera on, face visible, clear audio, stable connection, professional manner. Zero
            tolerance for sexual or adult content and harassment.
          </li>
          <li>
            Ment-a-Mentee is <strong>online only</strong>. We do not offer or set up in-person meetings. If you choose
            to meet someone in person, that is your own choice and your own risk. We do not check, watch or protect
            those meetings, and we are not responsible for them. Paid mentoring must still be booked and paid on the
            platform. No one may meet a user under 18 in person.
          </li>
          <li>
            We don&apos;t record or watch sessions by default.
          </li>
          <li>
            Most disputes will go to individual arbitration in Arizona (by video), except where the law where you live
            gives you the right to use your local court or consumer tribunal. Nothing in the Terms takes away rights
            your local law gives you.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:hello@mentamentee.com">hello@mentamentee.com</a>
        </p>
      </Prose>
    </Container>
  );
}
