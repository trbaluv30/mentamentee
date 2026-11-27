"use client";

// Shows the server's validation message (?error=...) on a statically rendered form page.
// Keeping the page static means Cloudflare serves it as a plain file with no Worker CPU,
// which avoids Error 1102 (CPU limit exceeded) on the Workers free plan.
// Same markup as FormError in ./fields.
import { useSearchParams } from "next/navigation";

export function QueryFormError() {
  const message = useSearchParams().get("error");
  if (!message) return null;
  return (
    <div role="alert" className="rounded-2xl border-2 border-red-300 bg-red-50 p-4 text-red-900">
      <p className="font-bold">Please check your answers</p>
      <p className="mt-1">{message}.</p>
    </div>
  );
}
