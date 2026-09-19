# Advertising placement plan

Advertising is enabled on eligible pages. Set `NEXT_PUBLIC_THIRD_PARTY_ADS_ENABLED=false` as an immediate production kill switch.

Eligible pages are general educational articles and the learning index. Article pages may show one 300×250 unit after the article, one native unit after the citation box, and one desktop rail per side on extra-wide screens. Vendor code is isolated in sandboxed iframes, lazy-loaded near the viewport, and loaded only after affirmative consent.

Ads are blocked on `/get-help`, `/find-help`, `/map`, `/resource/*`, `/city/*`, `/service/*`, `/for/*`, `/submit`, all `/es` and `/fr` pages, and sensitive articles listed in `lib/ad-policy.ts`. Popunder, social-bar, and smart-link formats are intentionally disabled because they undermine trust, accessibility, and safe navigation.

Before enabling production traffic, manually review vendor creative, test keyboard and screen-reader navigation, verify no automatic redirects, and confirm the native widget renders inside a sandboxed iframe. Disable the environment flag immediately if any test fails.
