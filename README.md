# Ment-a-Mentee website (Phase 0: validate)

The public website for **mentamentee.com**. Its only job right now is to prove demand before we build bookings:

- collect a **mentee waitlist** with a short 5-Year Roadmap intake (goal: 200 sign-ups), and
- recruit the **first 20 verified founding mentors**.

Paid bookings come later (Gate A, 1 Feb 2027). Nothing here takes payments.

## What's in it

| Page | Path |
|---|---|
| Home | `/` |
| How it works (5–6 Year Framework) | `/how-it-works` |
| For mentors + mentor application form | `/become-a-mentor` |
| About | `/about` |
| Mentee waitlist + roadmap intake form | `/join` (add `?journey=<slug>` to pre-fill) |
| Five launch journey pages | `/journeys/india-medicine-us`, `/journeys/philippines-nursing-australia`, `/journeys/pakistan-medicine-us`, `/journeys/sri-lanka-medicine-australia-nz`, `/journeys/nepal-physiotherapy-nz` |
| Terms (draft summary) and Privacy notice (draft) | `/terms`, `/privacy` |

Both forms are plain HTML forms. They post to `/api/waitlist` and `/api/mentor-application`, which check every field on the server and save a row in **Airtable**. They work with JavaScript turned off.

## Stack and why

**Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, hosted on Vercel. Forms write to Airtable.**

- The Phase 2 app (blueprint §2.2) is Next.js, so this code carries straight over. A no-code builder (Framer, Webflow) would be thrown away later.
- Airtable is the Phase 1 database (blueprint §2.1, launch plan MVP-02). The Compass matching script (`architecture/04`) runs inside the same base.
- Cost: Vercel Hobby and Airtable Free are enough for the waitlist. Upgrade Vercel to Pro (US$20/month) once the site is commercial, because Hobby is for non-commercial use.

**Built for slow phones:** every page is server-rendered with no client components. System fonts for body text; one self-hosted display font (Archivo, 2 weights) for headlines. No images, no trackers, no third-party scripts. About 180 KB of JavaScript (gzipped) on first load, under the 200 KB budget.

**Responsive:** checked at 360, 768, 1024 and 1280 px with no sideways scrolling. Phones get a sticky bottom call-to-action bar and a menu that needs no JavaScript.

## Run it locally

```bash
npm install
cp .env.example .env.local   # leave Airtable blank to "dry run": form data prints in the terminal
npm run dev                  # http://localhost:3000
```

`npm run build` builds for production. `npm run typecheck` checks types.

## Go live (founder checklist)

1. **Airtable.** Create a base called `MAM-Core` (US region). Create a personal access token with access to that base only (scopes: `data.records:write`, `schema.bases:read`, `schema.bases:write`). Then run:
   ```bash
   AIRTABLE_TOKEN=pat... AIRTABLE_BASE_ID=app... npm run airtable:setup
   ```
   This creates the `Waitlist` and `Mentor Applications` tables. Afterwards you can make a new token with only `data.records:write` for the website.
2. **Vercel.** Sign in with GitHub, import `trbaluv30/mentamentee`, and add the variables from `.env.example`.
3. **Domain.** In Vercel → Domains, add `mentamentee.com` and `www.mentamentee.com`, then set the DNS records Vercel shows at your registrar.
4. **Email.** Set up `hello@` and `privacy@mentamentee.com` (the site links to both).
5. **Before you announce it:** fill the open items below, then set `NEXT_PUBLIC_ALLOW_INDEXING=true` so Google can index the site.

## Open items before launch

- **Immigration check (launch plan IMM-01).** Get the immigration attorney consult before the founder does hands-on building or marketing work for the LLC.
- **About page:** fill `FOUNDER_NAME` / `SISTER_NAME` in `app/about/page.tsx` (the founder note stays hidden until you do), and adopt the mission and tagline.
- **Privacy notice:** privacy-lawyer review; name the India Grievance Officer (IND-02). When the text changes, bump `PRIVACY_VERSION` in both API routes.
- **Terms:** the full Terms stay under attorney review (LEG-03). The site shows only the plain-English summary, marked as a draft.
- **Analytics:** none installed on purpose (privacy by default). If you want numbers beyond Airtable, add a cookieless tool (Vercel Web Analytics or Plausible) and list it in the privacy notice.
- **Spam:** forms use a hidden honeypot field. If spam appears, add Cloudflare Turnstile (blueprint §8).
- **Sanctions:** the country lists leave out Cuba, Iran, North Korea and Syria. Confirm the list with counsel (blueprint §7.5.6).

## Writing rules for site copy

Talk to the reader as "you". Short sentences, common words, about an 8th-grade reading level (Flesch-Kincaid). Spell-check everything. Mentors give peer guidance, never legal, visa, money or medical advice. Don't frame the site as recruitment ("get a job abroad"); say "plan your career pathway, wherever it leads".
