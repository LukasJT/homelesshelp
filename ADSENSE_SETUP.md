# AdSense setup

The site is ready to display Google AdSense ads. Nothing loads until you
explicitly turn it on. This document walks through the process.

## 1. Apply to AdSense

1. Go to https://www.google.com/adsense and sign in with the Google account you
   want to receive payouts from.
2. Add `homelesshelp.net` as your site.
3. Google requires the site to be:
   - Live at a real domain ✅ (homelesshelp.net is set up)
   - Substantial original content ✅ (12 articles, 405+ resources, 232 cities)
   - With a Privacy policy ✅ (/privacy)
   - With a Terms of use page ✅ (/terms)
   - With a Contact / About page ✅ (/about)
   - With clear navigation ✅
4. Submit for review. Typical wait: 1–4 weeks.

While you wait, do NOT add any AdSense code yet — Google will scan and approve.

## 2. After approval

Google will give you a publisher ID like `ca-pub-1234567890123456`. You'll need
just the part after `ca-pub-` (e.g. `1234567890123456`).

Then:

### a. Add ads.txt

Edit `public/ads.txt` and replace `PUB-XXXXXXXXXXXXXXXX` with your numeric
publisher ID. Commit and push. The file will be served at
`https://homelesshelp.net/ads.txt`, which AdSense checks automatically.

### b. Add environment variables in Vercel

In Vercel → your project → Settings → Environment Variables, add:

| Name | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_AD_SLOTS_ENABLED` | `true` | Shows the side ad rails |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-XXXXXXXXXXXXXXXX` | Your full publisher ID |
| `NEXT_PUBLIC_ADSENSE_SLOT_LEFT_TOP` | (slot id) | From AdSense → Ads → By ad unit |
| `NEXT_PUBLIC_ADSENSE_SLOT_LEFT_MID` | (slot id) | Sticky 160×600 |
| `NEXT_PUBLIC_ADSENSE_SLOT_RIGHT_TOP` | (slot id) | 160×250 |
| `NEXT_PUBLIC_ADSENSE_SLOT_RIGHT_MID` | (slot id) | Sticky 160×600 |

The slot IDs come from AdSense → **Ads** → **By ad unit** → **Create new ad
unit**. Use a **Display** ad type at the specified sizes for each slot.

Trigger a redeploy in Vercel so the new env vars take effect.

### c. Block sensitive categories in AdSense

Required for a homeless-help site. Go to **AdSense → Brand safety →
Blocking controls → Manage categories** and block at minimum:

- Loans and credit (especially short-term / payday lenders)
- Gambling and casinos
- Alcohol
- Weight-loss programs / diet products
- Dating / sexual content
- Get-rich-quick schemes
- Multi-level marketing
- Predatory employment ("work from home" scams)

Also block any specific advertisers you do not want associated with the site.

## 3. How it works

- The site only loads the AdSense script if both:
  1. `NEXT_PUBLIC_ADSENSE_CLIENT` is set in the environment
  2. The visitor has clicked **"Accept all"** on the cookie banner
- Visitors who decline (or have not yet chosen) see the dashed placeholder
  boxes — no requests to Google, no cookies set.
- The cookie banner stores `hh_consent=accepted|declined` in localStorage and
  in a cookie. Visitors can change their choice anytime via "Manage cookies"
  in the footer.

## 4. After everything is live

- Check that ads display correctly on desktop (the rails are 160px wide and
  hidden below xl breakpoint, so mobile users see no ads from rails).
- Watch your AdSense dashboard for the first few days for any "policy
  violations" — Google will tell you what to fix.
- If you decide to add more ad placements (e.g. an in-article unit on long
  articles), add them by following the same pattern in `components/AdRail.tsx`.

## 5. To turn ads off again

Set `NEXT_PUBLIC_AD_SLOTS_ENABLED=false` (or delete the var) in Vercel and
redeploy. The site reverts to ad-free immediately.
