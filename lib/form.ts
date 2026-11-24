// Small, dependency-free form reader with validation. Used by the two API routes.
// Every field is length-capped and select values are checked against their allowed list.

import { NextResponse } from "next/server";

export class FormReader {
  errors: string[] = [];
  constructor(private fd: FormData) {}

  text(name: string, opts: { required?: boolean; max?: number; label?: string } = {}): string {
    const raw = this.fd.get(name);
    const value = typeof raw === "string" ? raw.trim() : "";
    const max = opts.max ?? 200;
    if (opts.required && !value) this.errors.push(`${opts.label ?? name} is required`);
    if (value.length > max) this.errors.push(`${opts.label ?? name} is too long (max ${max} characters)`);
    return value.slice(0, max);
  }

  choice(name: string, allowed: Set<string>, opts: { required?: boolean; label?: string } = {}): string {
    const value = this.text(name, { required: opts.required, max: 40, label: opts.label });
    if (value && !allowed.has(value)) {
      this.errors.push(`${opts.label ?? name} has an unexpected value`);
      return "";
    }
    return value;
  }

  many(name: string, allowed: Set<string>, opts: { required?: boolean; label?: string } = {}): string[] {
    const vals = this.fd
      .getAll(name)
      .filter((v): v is string => typeof v === "string")
      .map((v) => v.trim())
      .filter((v) => allowed.has(v));
    const unique = [...new Set(vals)];
    if (opts.required && unique.length === 0) this.errors.push(`Choose at least one ${opts.label ?? name}`);
    return unique;
  }

  checked(name: string): boolean {
    return this.fd.get(name) === "yes";
  }

  email(name: string, opts: { required?: boolean; label?: string } = {}): string {
    const value = this.text(name, { ...opts, max: 254 }).toLowerCase();
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) this.errors.push(`${opts.label ?? name} doesn't look right`);
    return value;
  }

  phone(name: string): string {
    const value = this.text(name, { max: 25 });
    if (value && !/^\+?[0-9 ()-]{7,20}$/.test(value)) this.errors.push("WhatsApp number doesn't look right");
    return value;
  }

  url(name: string, opts: { host?: RegExp; label?: string } = {}): string {
    let value = this.text(name, { max: 300, label: opts.label });
    if (!value) return "";
    if (!/^https?:\/\//i.test(value)) value = `https://${value}`;
    try {
      const u = new URL(value);
      if (opts.host && !opts.host.test(u.hostname)) throw new Error("host");
      return u.toString();
    } catch {
      this.errors.push(`${opts.label ?? name} doesn't look like a valid link`);
      return "";
    }
  }

  /** Bots fill every field. Real people never see this one. */
  isBot(): boolean {
    const trap = this.fd.get("website");
    return typeof trap === "string" && trap.length > 0;
  }
}

/** 303 redirect so the browser follows with GET (works with plain HTML forms, no JS). */
export function redirectTo(req: Request, path: string) {
  return NextResponse.redirect(new URL(path, req.url), 303);
}

export function backWithError(req: Request, path: string, errors: string[]) {
  const u = new URL(path, req.url);
  u.searchParams.set("error", errors.slice(0, 3).join(". "));
  u.hash = "form";
  return NextResponse.redirect(u, 303);
}
