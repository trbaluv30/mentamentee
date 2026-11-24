// Plain HTML form fields (server components, zero JS). Browser-native validation
// via `required`, with the same rules enforced again on the server.

import type { ReactNode } from "react";
import { ALL_COUNTRIES, POPULAR_COUNTRIES } from "@/lib/countries";
import type { Option } from "@/lib/options";

export function Fieldset({ legend, step, children }: { legend: string; step?: number; children: ReactNode }) {
  return (
    <fieldset className="rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
      <legend className="sr-only">{legend}</legend>
      <div aria-hidden="true" className="flex items-center gap-3">
        {step !== undefined && (
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-950 text-base font-black text-white">
            {step}
          </span>
        )}
        <span className="text-xl font-black tracking-tight text-slate-950 md:text-2xl">{legend}</span>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">{children}</div>
    </fieldset>
  );
}

type Base = { name: string; label: string; hint?: string; required?: boolean; wide?: boolean };

const wrap = (wide?: boolean) => (wide ? "md:col-span-2" : "");
const Req = ({ required }: { required?: boolean }) =>
  required ? null : <span className="font-normal text-slate-500"> (optional)</span>;

export function TextField({
  name,
  label,
  hint,
  required,
  wide,
  type = "text",
  autoComplete,
  placeholder,
  maxLength = 200,
  inputMode,
}: Base & {
  type?: "text" | "email" | "tel" | "url";
  autoComplete?: string;
  placeholder?: string;
  maxLength?: number;
  inputMode?: "text" | "email" | "tel" | "url";
}) {
  return (
    <label className={`block ${wrap(wide)}`}>
      <span className="label">
        {label}
        <Req required={required} />
      </span>
      {hint && <span className="hint">{hint}</span>}
      <input
        className="field"
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
      />
    </label>
  );
}

export function TextArea({ name, label, hint, required, maxLength = 1000 }: Base & { maxLength?: number }) {
  return (
    <label className="block md:col-span-2">
      <span className="label">
        {label}
        <Req required={required} />
      </span>
      {hint && <span className="hint">{hint}</span>}
      <textarea className="field min-h-[132px] resize-y" name={name} required={required} maxLength={maxLength} rows={4} />
    </label>
  );
}

export function SelectField({
  name,
  label,
  hint,
  required,
  wide,
  options,
  defaultValue = "",
}: Base & { options: Option[]; defaultValue?: string }) {
  return (
    <label className={`block ${wrap(wide)}`}>
      <span className="label">
        {label}
        <Req required={required} />
      </span>
      {hint && <span className="hint">{hint}</span>}
      <select className="field" name={name} required={required} defaultValue={defaultValue}>
        <option value="" disabled={required}>
          Choose…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Every country, with the most common ones first. */
export function CountryField({ name, label, hint, required, wide, defaultValue = "" }: Base & { defaultValue?: string }) {
  return (
    <label className={`block ${wrap(wide)}`}>
      <span className="label">
        {label}
        <Req required={required} />
      </span>
      {hint && <span className="hint">{hint}</span>}
      <select className="field" name={name} required={required} defaultValue={defaultValue} autoComplete="country">
        <option value="" disabled={required}>
          Choose your country…
        </option>
        <optgroup label="Most common">
          {POPULAR_COUNTRIES.map((o) => (
            <option key={`p-${o.value}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </optgroup>
        <optgroup label="All countries">
          {ALL_COUNTRIES.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </optgroup>
      </select>
    </label>
  );
}

export function ChoiceGroup({
  name,
  label,
  hint,
  options,
  type = "checkbox",
  required,
  defaultValues = [],
  columns = 2,
}: Base & { options: Option[]; type?: "checkbox" | "radio"; defaultValues?: string[]; columns?: 1 | 2 | 3 }) {
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" }[columns];
  return (
    <fieldset className="md:col-span-2">
      <legend className="label">
        {label}
        <Req required={required} />
      </legend>
      {hint && <span className="hint">{hint}</span>}
      <div className={`mt-2 grid gap-2 ${cols}`}>
        {options.map((o, i) => (
          <label key={o.value} className="choice">
            <input
              type={type}
              name={name}
              value={o.value}
              defaultChecked={defaultValues.includes(o.value)}
              // A radio group is required through any one of its inputs.
              required={type === "radio" && required && i === 0}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function Checkbox({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="flex cursor-pointer gap-3 text-[15px] leading-relaxed text-slate-800 md:col-span-2">
      <input type="checkbox" name={name} value="yes" required={required} className="mt-0.5 h-6 w-6 flex-none accent-teal-700" />
      <span>{children}</span>
    </label>
  );
}

/** Spam trap: hidden from people and screen readers, bots fill it in. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/** Fills the hidden timezone field (one tiny inline script; the form still works without it). */
export function TimezoneInput() {
  return (
    <>
      <input type="hidden" name="tz" id="tz" />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{document.getElementById('tz').value=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}",
        }}
      />
    </>
  );
}

export function FormError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div role="alert" className="rounded-2xl border-2 border-red-300 bg-red-50 p-4 text-red-900">
      <p className="font-bold">Please check your answers</p>
      <p className="mt-1">{message}.</p>
    </div>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="submit"
      className="inline-flex min-h-[60px] w-full items-center justify-center rounded-full bg-teal-700 px-8 text-xl font-black text-white hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/40 sm:w-auto"
    >
      {children}
    </button>
  );
}
