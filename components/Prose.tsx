import type { ReactNode } from "react";

/** Long-form legal text: comfortable line length and spacing on every screen. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-slate-800 [&_a]:font-semibold [&_a]:text-teal-800 [&_a]:underline [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-slate-950 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:text-slate-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
      {children}
    </div>
  );
}
