import Link from "next/link";

/** Thumb-friendly sticky CTA bar, phones only. Pages opt in. */
export function MobileCta({
  primary = { href: "/join", label: "Join the waitlist" },
  secondary = { href: "/become-a-mentor", label: "Mentor" },
}: {
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <Link
          href={primary.href}
          className="flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-teal-700 text-lg font-bold text-white"
        >
          {primary.label}
        </Link>
        {secondary && (
          <Link
            href={secondary.href}
            className="flex min-h-[52px] items-center justify-center rounded-full border-2 border-slate-900 px-5 font-bold text-slate-900"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
