import Link from "next/link";
import type { ReactNode } from "react";

export const DISCLAIMER =
  "Sessions on Ment-a-Mentee are peer educational guidance from people who have walked this path. They are not legal, immigration, financial or medical advice. Always confirm licensing, registration and visa requirements with the official body (for example ECFMG, NCSBN, CGFNS, FSBPT, AMC, AHPRA, the Medical, Nursing or Physiotherapy Council, or the relevant embassy). Ment-a-Mentee is not affiliated with the NRMP or any licensing or registration authority. Ment-a-Mentee is online only. We do not set up, check or watch in-person meetings. If you choose to meet someone in person, that is your own choice and your own risk, and we are not responsible for it. Any paid mentoring must still be booked and paid on Ment-a-Mentee.";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm font-bold uppercase tracking-[0.14em] text-teal-700 ${className}`}>{children}</p>;
}

/** Big, plain section headline. */
export function H2({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      className={`text-3xl font-black leading-[1.08] tracking-tight text-slate-950 md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-lg leading-relaxed text-slate-700 md:text-xl ${className}`}>{children}</p>;
}

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}) {
  const styles = {
    primary: "bg-teal-700 text-white hover:bg-teal-800",
    secondary: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
    light: "bg-white text-slate-950 hover:bg-teal-50",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[56px] items-center justify-center rounded-full px-7 text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/40 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CheckIcon({ className = "h-6 w-6 text-teal-600" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`flex-none ${className}`} fill="none">
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DraftBanner({ children }: { children: ReactNode }) {
  return (
    <div role="note" className="rounded-2xl border-2 border-amber-400 bg-amber-50 p-4 text-amber-950 md:p-5">
      <p className="font-bold">Draft</p>
      <div className="mt-1 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}
