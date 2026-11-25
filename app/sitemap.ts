import type { MetadataRoute } from "next";
import { CORRIDORS } from "@/lib/corridors";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://mentamentee.com";
  const paths = ["", "/how-it-works", "/become-a-mentor", "/about", "/join", "/terms", "/privacy"];
  return [...paths, ...CORRIDORS.map((c) => `/journeys/${c.slug}`)].map((p) => ({ url: `${site}${p}` }));
}
