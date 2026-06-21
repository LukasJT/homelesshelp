# HomelessHelp.net

A free, independent directory of homeless shelters and crisis resources across the US and Canada, plus plain-language guides on what works to reduce homelessness and how to help.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**
- **Leaflet + react-leaflet** with marker clustering — OpenStreetMap tiles (free, no API key)
- **Supabase** for the crowdsourced submissions queue (optional — the site works without it)
- **Markdown** articles in `content/learn/`

## Local development

```powershell
cd C:\Users\troll\HomelessHelp
npm install
npm run dev
```

Visit http://localhost:3000.

## Deployment (Vercel + Supabase)

1. Push the repo to GitHub.
2. Import the repo into Vercel — no config needed.
3. (Optional) Create a Supabase project, run `supabase/schema.sql` in the SQL editor.
4. Add these env vars in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
5. Point `homelesshelp.net` DNS at Vercel.

The site falls back to the static seed data if Supabase isn't configured, so you can deploy and add the database later.

## Editing content

- **Shelters**: edit `data/shelters.json` (static fallback) or insert into the `shelters` table in Supabase.
- **Articles**: drop a Markdown file in `content/learn/` with frontmatter:
  ```markdown
  ---
  title: "..."
  summary: "..."
  category: "Foundations | Populations | Solutions | Action"
  ---
  ```
- **Hotlines / charities**: hardcoded in `app/get-help/page.tsx` and `app/help-out/page.tsx`.

## Moderation queue

Submissions land in `shelter_submissions` with `status = 'pending'`. Approve them via the Supabase SQL editor:

```sql
-- promote a submission to a live shelter
insert into shelters (id, name, address, city, region, country, lat, lng, phone, website, populations_served, services, hours, notes, verified)
select gen_random_uuid()::text, name, address, city, region, country,
       0, 0,  -- TODO geocode before insert
       phone, website, populations_served, services, hours, notes, true
from shelter_submissions
where id = '...';

update shelter_submissions set status = 'approved' where id = '...';
```

A proper admin UI is the obvious next step.

## License & disclaimer

The code is MIT. The shelter information is provided as a public reference and may be out of date — always call ahead. HomelessHelp.net is not affiliated with any government agency, shelter, or charity.
