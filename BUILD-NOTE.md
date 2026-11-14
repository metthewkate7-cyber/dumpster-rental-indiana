# BUILD NOTE — Dumpster Rental Indiana (dumpsterrentalindiana.us)

Built overnight 2026-11-13. Vanilla HTML/CSS/JS only, no frameworks, no templates,
no WordPress. Mobile-first. Cloudflare Pages ready.

Revised 2026-11-14 after Semrush keyword validation (see "Semrush validation
applied" below). Page count is now 71.

## Pages: 71

| Group | Count | URLs |
|---|---|---|
| Homepage | 1 | `/` |
| City pages | 44 | `/[city]-dumpster-rental/` for all 44 Indiana cities in the plan |
| Service pages | 6 | `/construction-`, `/commercial-`, `/same-day-`, `/roofing-`, `/concrete-`, `/home-cleanout-dumpster-rental-indiana/` |
| Size pages | 4 | `/10-yard-`, `/20-yard-`, `/30-yard-`, `/40-yard-dumpster-rental-indiana/` |
| Guide pages | 10 | `/guides/` — prices, size selector, permit, what-can-you-put-in, weight limits, driveway damage, rental period, dumpster vs junk removal, overfill, how-to-rent |
| Trust / legal | 6 | `/book/`, `/about/`, `/contact/`, `/faq/`, `/privacy-policy/`, `/terms-of-service/` |

Word counts (visible text): homepage ~2,485 (plus ~450 in the folded residential
section); Phase 1 cities ~1,300–2,000; new cities Avon/Greenfield/Clarksville/
Shelbyville ~1,532–1,555 each; cities 11–40 ~1,617–1,676 each; services
~1,100–1,275; sizes ~975–1,010; guides ~1,150–1,560 (pricing guide and
vs-junk-removal guide grew with the merged sections); trust/legal ~430–1,175.
No thin pages.

## Semrush validation applied (2026-11-14)

Semrush run 2026-11-13 23:45 to 2026-11-14 00:28 PKT via HindSEO (US database).
Full tables: `~/workspace/hyperlocal-dumpster-rental/research/semrush-indiana-keywords.md`.
Our domain has zero organic presence. Verdicts applied exactly as validated:

**DROPPED as standalone pages (5), content folded, 301s in `_redirects`:**
- `/residential-dumpster-rental-indiana/` — "residential dumpster rental Indiana"
  n/a volume, KD 44. Folded as a new `#residential` section on the homepage,
  targeting the national term "residential dumpster rental". Its 2 unique FAQs
  (mattress, fill-before-rental-ends) moved to the homepage FAQ.
- `/yard-waste-dumpster-rental-indiana/` — n/a volume, KD 29. Folded as a
  `#materials` section on the construction page, with 3 of its FAQs.
- `/guides/how-much-does-it-cost-to-rent-a-dumpster-in-indiana/` — MERGED into
  `/guides/dumpster-rental-prices-indiana/` as the `#cost` H2 (worked final-bill
  table, $455 quote to $665 final bill) plus 4 FAQs. One pricing page only.
- `/guides/bagster-vs-dumpster-rental/` — 0 volume. DROPPED as standalone;
  covered as a `#bagster` section plus 3 FAQs inside the vs-junk-removal guide.
- `/guides/same-day-dumpster-rental/` — MERGED into the same-day service page
  as the `#how-it-works` section (availability factors, next-day fallback,
  honest limits) plus 4 FAQs. One same-day page only.

**Verified already folded (no duplicate pages existed):** "what can't go in a
dumpster" and "dumpster rental prohibited items" already live as sections of the
what-can-you-put-in guide (banned list table); "junk removal vs dumpster rental
Indiana" is the vs-junk-removal guide's own title/H1; "dumpster permit Indiana"
and "do I need a permit for a dumpster in Indianapolis" are sections/FAQs of the
one permit guide. No separate Fort Wayne/Indianapolis permit pages exist.

**ADDED as full city pages (4), same standard as the other 40:**
- Avon (140/mo, KD 9), Greenfield (50/mo, KD 26), Clarksville (70/mo, KD 3),
  Shelbyville (10/mo, KD 0). Each 1,532–1,555 words, 5 unique FAQs,
  LocalBusiness + geo schema, geo-tagged image, neighbour links.
- Coverage without standalone pages: La Porte (0 vol) via a note on the Michigan
  City page; Seymour (n/a) via a note in the homepage Central and South Indiana
  directory; Logansport (n/a, KD 28) via a note on the Kokomo page.

**Link cleanup:** 0 references remain to any dropped slug sitewide. Footer
"Residential dumpsters" entry removed everywhere. City "Services available"
lists now point at the merged sections (`/#residential`,
`/construction-dumpster-rental-indiana/#materials`). All service pages say
"forty-four Indiana cities" and list all 44 cities. Homepage directory lists
all 44 cities plus the Seymour note.

**Second wave (NOT built in this run — future pages):** Warsaw (140/mo),
Crawfordsville (90), New Castle (70), Martinsville (70), Huntington (50),
Bedford (50), Jasper (50), Madison (50), Vincennes (50), Corydon (50), Lebanon
(30–40), Spencer (30), Mooresville (30), plus "dumpster rental southern
indiana" (110/mo) and "dumpster rental northwest indiana" (70/mo) hub pages.

## Pages deliberately NOT built (deferred)

- `/dumpster-rental-prices-indiana/` — reserved for OUR real prices. Needs real
  business pricing first. The pricing GUIDE at `/guides/dumpster-rental-prices-indiana/`
  is built and covers market ranges. No page links to the reserved URL.
- `/reviews/` — needs real customer reviews. No page links to it.

## Structure and interlinking

- Homepage is the silo hub: top-10 cities, then a full directory of all 44 cities
  grouped by region (Indianapolis metro, Northeast, Northwest, Central/South),
  plus all 6 services, 4 sizes, and 10 guides. The home-rental service lives
  as the `#residential` section on the homepage.
- Every service page has a "We serve every Indiana city" section with all 44 city links.
- Every city page has a "Services available in [City]" section with all services
  (6 service pages, plus the home-rental section on the homepage and the
  yard-waste materials section on the construction page), plus a sizes section
  and neighbour-city links.
- Every page has a "More from Dumpster Rental Indiana" link block.
- One primary keyword per page, no cannibalization. Primary keyword in H1, title,
  meta description, first paragraph, one H2, and image alt.

## Booking flow

- `/book/` is a 4-step wizard (size → dates → address → contact), vanilla JS in
  `assets/js/main.js`, saves to localStorage, shows a summary. No backend yet:
  submissions are stored locally only until a backend or form endpoint is connected.
- Homepage has a size estimator (job type + heavy debris → size + market range).
- `tel:` pay-per-call links are present sitewide but EMPTY until the real phone
  number exists — they show `[PHONE]`.

## Images: 53 WebP files, all under 100KB, 1000x667, total ~4.9 MB

Base photos (generated, realistic): hero green roll-off on a suburban driveway,
20-yard dumpster, plywood boards under dumpster rails, construction debris loading,
plus size variants (10/30/40-yard), home cleanout, roofing debris.
One geo-tagged file per city (`dumpster-rental-[city]-in.webp`, GPS EXIF = that
city's coordinates, trailing EXIF chunk so WebP identification stays valid).

| File | Size |
|---|---|
| hero-driveway-dumpster.webp | 94.0 KB |
| 10-yard-dumpster.webp | 94.4 KB |
| 20-yard-dumpster.webp | 89.8 KB |
| 30-yard-dumpster.webp | 86.9 KB |
| 40-yard-dumpster.webp | 89.4 KB |
| construction-debris-loading.webp | 87.1 KB |
| dumpster-driveway-boards.webp | 92.1 KB |
| home-cleanout-dumpster.webp | 90.1 KB |
| roofing-debris-dumpster.webp | 86.9 KB |
| dumpster-rental-[40 city slugs]-in.webp (40 files) | 89.8 KB each |
| dumpster-rental-avon-in.webp, dumpster-rental-greenfield-in.webp, dumpster-rental-clarksville-in.webp, dumpster-rental-shelbyville-in.webp (4 files, added 2026-11-14) | 91,984 bytes each |

City slugs: indianapolis, fort-wayne, evansville, south-bend, carmel, fishers,
bloomington, hammond, gary, lafayette, muncie, noblesville, terre-haute, kokomo,
greenwood, anderson, elkhart, mishawaka, west-lafayette, columbus, lawrence,
jeffersonville, westfield, new-albany, portage, richmond, merrillville, goshen,
plainfield, valparaiso, michigan-city, granger, crown-point, schererville,
east-chicago, hobart, zionsville, marion, brownsburg, franklin, avon, greenfield,
clarksville, shelbyville. New-city GPS (verified by search 2026-11-14): Avon
39.7645,-86.3989; Greenfield 39.7933,-85.7725; Clarksville 38.3221,-85.7676;
Shelbyville 39.5268,-85.7730.

## Placeholders used (nothing invented)

- `[BUSINESS NAME]`, `[PHONE]`, `[ADDRESS]` — everywhere a real business detail
  would go. No business name, phone, address, reviews, ratings, years, or truck
  counts invented anywhere.
- `[TO CONFIRM]` — exact prices, included tons, overage $/ton, extension $/day,
  rental period, same-day cutoff/fee, board supply, mattress policy, contact hours,
  cancellation and driveway-damage terms.
- Prices shown on pages are ONLY published market ranges with source + date
  (Dumpsters.com Oct 2026 national averages and Nov 10, 2026 city ranges;
  Wright Dumpsters starting prices; Hometown marketplace ranges), always labelled
  as market ranges, never as our prices.

## Open items (the only things still needing Hassaan)

1. **Business name, phone, real address** — needed to fill placeholders, `tel:`
   links, LocalBusiness schema, and geo tags with a real street address.
   Do NOT invent a fake address for schema/geo.
2. **Real prices** — exact prices per size, included tons, overage rate,
   extension rate, rental period, same-day fee. Then build the reserved
   `/dumpster-rental-prices-indiana/` page and `/reviews/` when real reviews exist.
3. **Semrush validation** — DONE 2026-11-14 (HindSEO route, US database).
   Verdicts applied: 5 pages merged/dropped, 4 city pages added, sitemap and
   homepage updated. Full tables in
   `~/workspace/hyperlocal-dumpster-rental/research/semrush-indiana-keywords.md`.
4. **Indianapolis permit department** — disputed between secondary sources
   (DBNS vs DPW). Pages say only "Right-of-Way Use Permit from the City of
   Indianapolis" with no department named. Resolve against indy.gov before
   publishing a department name.
5. **Evansville permit rule** — none found; pages say to check with the City of
   Evansville Public Works before street placement.
6. **Domain handover** — Hassaan buys dumpsterrentalindiana.us on Cloudflare
   and hands it over; then attach the domain in Cloudflare Pages (see deploy steps).

## Verification performed (2026-11-13, after all 72 pages built)

- 72 pages found; 73 unique internal hrefs; **0 broken links**.
- Every page: valid title, meta description, exactly one H1, valid JSON-LD
  (Organization + WebSite on homepage; LocalBusiness + geo + Service + FAQPage +
  BreadcrumbList on city pages; Service + FAQPage on service/size pages;
  Article + FAQPage on guides, HowTo on the how-to-rent guide).
- FAQPage schema matches visible FAQ text on every page that has one.
- No em/en dashes, no emojis anywhere. No duplicate body paragraphs across
  pages (checked programmatically; only the template footer lines repeat).
- Prose sentences under 20 words per the locked content prompt.
- `assets/js/main.js` syntax valid (node --check). All referenced images exist.
- Two copy errors found and fixed in the final pass: South Bend HOA paragraph
  wrongly named Fishers; Bloomington HOA paragraph wrongly named Lafayette.

## Re-verification performed (2026-11-14, after Semrush verdicts applied)

- 71 pages found; sitemap has 71 URLs; **0 broken internal links**.
- 0 references remain to any dropped slug sitewide (checked all HTML, sitemap,
  and `_redirects`).
- Every page: valid title, meta description, exactly one H1, valid JSON-LD.
  FAQPage schema matches visible FAQ text on every edited page (homepage 9,
  construction 8, pricing guide 10, vs-junk-removal 9, same-day service 9).
- No em/en dashes, no emojis anywhere. No duplicate body paragraphs across
  pages (checked programmatically; only the template footer lines repeat).
- Prose sentences under 20 words per the locked content prompt, including all
  merged sections and the 4 new city pages.
- All 53 referenced images exist and are under 100KB. `assets/js/main.js`
  syntax valid (node --check).
- 5 new 301 redirects in `_redirects` point at the merged sections.

## Infrastructure files

- `_headers` — security headers + cache rules.
- `_redirects` — `/index.html` → `/` 301, plus 5 Semrush-merge 301s (2026-11-14).
- `robots.txt` — Allow all, Disallow `/book/?*`, sitemap at
  `https://dumpsterrentalindiana.us/sitemap.xml`.
- `sitemap.xml` — all 71 pages, lastmod 2026-11-14 on edited/new pages.
- `TEMPLATE.md` — page skeleton and content rules used by all writers
  (kept in the site folder as the build reference).
- `README.md` — deploy steps (see below).

## Deploy steps (Cloudflare Pages)

1. Push this folder to the repo https://github.com/metthewkate7-cyber/dumpster-rental-indiana
   (repo is public and empty as of 2026-11-13; nothing has been pushed in this build run).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git →
   pick the repo → Framework preset: None → Build command: (none) → Build output
   directory: `/` → Save and Deploy.
3. After Hassaan hands over dumpsterrentalindiana.us: Pages project → Custom
   domains → Set up a custom domain → dumpsterrentalindiana.us → Continue.
4. Then submit `https://dumpsterrentalindiana.us/sitemap.xml` in Google Search
   Console and Bing Webmaster Tools, and request indexing for the homepage
   and hub city pages first.
