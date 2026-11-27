import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { Container, DraftBanner } from "@/components/ui";

export const metadata: Metadata = { title: "Privacy notice (draft)" };

// Based on the Global Baseline in architecture/01-platform-blueprint.md Section 7.1.1.
// Scope: waitlist + mentor applications only. Needs privacy-lawyer review before launch,
// and the India grievance officer details (launch plan IND-02) must be filled in.
// Bump PRIVACY_VERSION in both API routes when this text changes.

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-10 md:py-16">
      <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Privacy notice</h1>
      <p className="mt-2 text-slate-600">Draft · Waitlist stage · Version waitlist-draft-2026-11-24</p>
      <div className="mt-6">
        <DraftBanner>
          This notice is a draft under legal review. It covers the waitlist and mentor applications only. A full privacy
          notice, with country-specific sections, will be published before bookings open.
        </DraftBanner>
      </div>
      <Prose>
        <h2>The short version</h2>
        <ul>
          <li>We only ask for what we need to match you with a mentor.</li>
          <li>We never sell your data, and we don&apos;t use advertising trackers.</li>
          <li>Your data is stored in the United States. You can ask us to see, fix or delete it at any time.</li>
          <li>We only email you launch news if you tick the box, and never if you are under 18.</li>
        </ul>

        <h2>Who we are</h2>
        <p>
          Ment-a-Mentee (&quot;we&quot;) runs mentamentee.com. The legal entity, Ment-a-Mentee LLC (Arizona, USA), is
          being formed. Contact us at <a href="mailto:privacy@mentamentee.com">privacy@mentamentee.com</a>.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Mentees:</strong> your name, email, optional WhatsApp number, age band, home country, country you
            live in, career goal, stage, target destinations, exams, your biggest
            question, optional budget range, languages, how you heard about us and your browser&apos;s time zone. If you
            are 16 or 17, your parent or guardian&apos;s name and email.
          </li>
          <li>
            <strong>Mentor applicants:</strong> your name, email, optional WhatsApp and LinkedIn, home and current
            country, profession, stage, specialty, exams cleared, where you are registered, what you can
            mentor, availability, languages and motivation.
          </li>
        </ul>
        <p>
          Please don&apos;t send us health information, government ID numbers or other sensitive details. We don&apos;t
          ask for ID documents on this website; we collect those later, through a secure verification provider, only
          for mentors and for bookings.
        </p>

        <h2>Why we use it</h2>
        <ul>
          <li>
            <strong>To match you with a mentor and tell you when one is ready</strong> (steps you asked for, before a
            contract).
          </li>
          <li>
            <strong>To review mentor applications and keep the platform safe</strong> (our legitimate interest in
            running a trusted service).
          </li>
          <li>
            <strong>To send launch news and tips</strong>, only if you tick the box (your consent, which you can
            withdraw at any time).
          </li>
          <li>
            <strong>To store your data in the United States</strong>, with your agreement, where your local law asks
            for consent to a cross-border transfer.
          </li>
        </ul>
        <p>Our team may see your budget range. Mentors never see it.</p>

        <h2>Who we share it with</h2>
        <p>
          Only service providers who help us run the waitlist, under contract: Airtable (database, USA) and
          Cloudflare (website hosting and security, USA). When bookings open, we will tell you about any new providers before they process
          your data. We don&apos;t share your details with mentors until you book a session with them.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep waitlist and application data for up to 24 months after our last contact with you, then delete it,
          unless you create an account. You can ask us to delete it sooner.
        </p>

        <h2>Under 18</h2>
        <p>
          You must be 16 or older to join. If you are 16 or 17, we will contact your parent or guardian to confirm
          before you can book a session. We don&apos;t send marketing to anyone under 18.
        </p>

        <h2>Your rights</h2>
        <p>
          Wherever you live, you can ask to access, correct, delete or download your data, object to how we use it, or
          withdraw your consent. Email <a href="mailto:privacy@mentamentee.com">privacy@mentamentee.com</a>; we
          reply within 30 days, or sooner where your local law requires. You can also complain to your local data
          protection authority. We treat the Global Privacy Control browser signal as an opt-out.
        </p>
        <p>
          <strong>India:</strong> Grievance Officer: [name to be confirmed], privacy@mentamentee.com.
        </p>

        <h2>Security</h2>
        <p>
          Data is encrypted in transit and at rest by our providers, and only our team can access it. If a breach
          affects you, we will tell you and the relevant authorities as the law requires.
        </p>

        <h2>Changes</h2>
        <p>If we change this notice in a way that matters, we&apos;ll tell you by email before the change applies.</p>
      </Prose>
    </Container>
  );
}
