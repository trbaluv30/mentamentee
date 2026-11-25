import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allow = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://mentamentee.com";
  return {
    rules: allow ? { userAgent: "*", allow: "/", disallow: ["/api/", "/thanks"] } : { userAgent: "*", disallow: "/" },
    sitemap: `${site}/sitemap.xml`,
  };
}
