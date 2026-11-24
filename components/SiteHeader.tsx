import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/become-a-mentor", label: "For mentors" },
  { href: "/about", label: "About" },
];

// No JavaScript: the mobile menu is a native <details> element.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" aria-label="Ment-a-Mentee home" className="flex-none">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-[15px] font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-full bg-teal-700 px-5 text-[15px] font-bold text-white hover:bg-teal-800"
          >
            Join the waitlist
          </Link>
        </nav>

        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-900"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 group-open:hidden">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden h-5 w-5 group-open:block">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 top-14 w-[min(88vw,320px)] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
          >
            {[{ href: "/", label: "Home" }, ...NAV, { href: "/join", label: "Join the waitlist" }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="flex min-h-[48px] items-center rounded-xl px-4 text-lg font-semibold text-slate-900 hover:bg-slate-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
