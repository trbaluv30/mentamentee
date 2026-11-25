import Link from "next/link";
import { CORRIDORS } from "@/lib/corridors";
import { Logo } from "./Logo";
import { DISCLAIMER } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-28 sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Verified near-peer mentors for your career in medicine, nursing and physiotherapy.
          </p>
        </div>
        <FooterCol
          title="For you"
          links={[
            { href: "/join", label: "Join the waitlist" },
            { href: "/how-it-works", label: "How it works" },
            { href: "/become-a-mentor", label: "Become a mentor" },
            { href: "/about", label: "About us" },
          ]}
        />
        <FooterCol
          title="Popular journeys"
          links={CORRIDORS.map((c) => ({ href: `/journeys/${c.slug}`, label: `${c.fromName.replace(/^the /, "")} → ${c.to.join(" / ")} (${c.profession})` }))}
        />
        <FooterCol
          title="Legal"
          links={[
            { href: "/terms", label: "Terms (draft)" },
            { href: "/privacy", label: "Privacy notice (draft)" },
          ]}
        />
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
          <p className="text-xs leading-relaxed text-slate-600">{DISCLAIMER}</p>
          <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} Ment-a-Mentee. English only.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">{title}</h2>
      <ul className="mt-3 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-[36px] items-center text-[15px] text-slate-700 hover:text-teal-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
