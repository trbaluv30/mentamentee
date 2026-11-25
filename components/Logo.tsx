export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 flex-none">
        <rect width="32" height="32" rx="9" fill="#0f766e" />
        <circle cx="11" cy="12" r="4" fill="#fff" />
        <circle cx="21" cy="12" r="3" fill="#99f6e4" />
        <path d="M4.5 26c1-4.6 3.6-7 6.5-7s5.5 2.4 6.5 7" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <path d="M16.5 22.5c.9-2.6 2.6-4 4.5-4 2.3 0 4.2 2 5 5.5" stroke="#99f6e4" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </svg>
      <span className="text-lg font-black tracking-tight text-slate-950">
        Ment<span className="text-teal-700">-a-</span>Mentee
      </span>
    </span>
  );
}
