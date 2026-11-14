# PAGE TEMPLATE — follow exactly for every page you write

## Files and paths
- Every page is a folder with `index.html`: e.g. `site/fort-wayne-dumpster-rental/index.html`.
- CSS: `/assets/css/style.css` (already built — do NOT create another stylesheet).
- JS: `/assets/js/main.js` (already built — include on every page, do NOT add other scripts).
- Images live in `/assets/images/`. Use ONLY the images listed in "Images" below. Never reference an image that does not exist.
- Write valid HTML5. No inline `style` attributes. No emojis anywhere. No em dashes or en dashes anywhere in visible text (hyphens in words like "10-yard" and "same-day" are fine).

## HTML skeleton (copy this structure, fill the bracketed parts)

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>[unique title, primary KW first, max 60 chars]</title>
<meta name="description" content="[unique description, primary KW once, max 160 chars, one differentiator + CTA]">
<link rel="canonical" href="https://dumpsterrentalindiana.us/[page-url]/">
<meta property="og:title" content="[same as title]">
<meta property="og:description" content="[same as description]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://dumpsterrentalindiana.us/[page-url]/">
[ONLY on city pages: geo meta tags — see below]
<link rel="stylesheet" href="/assets/css/style.css">
<script type="application/ld+json">[JSON-LD — see below]</script>
</head>
<body>
<header class="site-header"><div class="wrap">
<a class="brand" href="/">Dumpster Rental Indiana<small>Roll-off dumpsters across Indiana</small></a>
<nav class="main-nav" aria-label="Main">
<a href="/#sizes">Sizes</a><a href="/guides/dumpster-rental-prices-indiana/">Prices</a><a href="/guides/what-size-dumpster-do-i-need/">Size guide</a><a href="/faq/">FAQ</a><a href="/contact/">Contact</a><a class="nav-cta" href="/book/">Book now</a>
</nav></div></header>
<main class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › [Silo] › [Page]</nav>
<section class="hero"> ... actually hero is OUTSIDE .wrap? NO — keep it simple: hero is a <section class="hero"><div class="wrap"> INSIDE main? 
```

STOP — simpler, proven layout (use this exactly, no hero-outside-wrap complexity):

```html
<main>
<section class="hero"><div class="wrap">
<h1>[H1 — primary keyword, natural]</h1>
<p class="lede">[first paragraph — primary keyword once, plain and useful]</p>
<div class="hero-ctas"><a class="btn" href="/book/">Book your dumpster</a><a class="btn-ghost" href="tel:">Call [PHONE]</a></div>
<figure><img src="/assets/images/[image-file]" alt="[alt with primary KW once]" width="1000" height="667" loading="eager"><figcaption>[caption]</figcaption></figure>
</div></section>
<div class="wrap">
<div class="quick-answer"><h2>Quick answer</h2><p>[2-4 short sentences answering the page question directly]</p></div>
[content sections with H2s — see content rules]
[price table / size cards / estimator link where relevant]
<section><h2>Frequently asked questions</h2>
<details><summary>[question]</summary><p>[answer]</p></details>
... 4-6 unique FAQs ...
</section>
<section><h2>Ready to book?</h2><p>[booking CTA text]</p><p><a class="btn" href="/book/">Book a dumpster</a> <a class="btn-ghost" style="color:var(--green);border-color:var(--green)" href="tel:">Call [PHONE]</a></p></section>
<section><h2>More from Dumpster Rental Indiana</h2><ul>[silo internal links — see linking rules]</ul></section>
<p class="updated">Last updated: November 13, 2026. Prices shown are published market ranges with sources cited. Our exact prices are confirmed at booking.</p>
</div></main>
<footer class="site-footer"><div class="wrap"><div class="cols">
<div><h3>Dumpster Rental Indiana</h3><p>Roll-off dumpster rental across Indiana. [BUSINESS NAME]<br>[ADDRESS]<br><a href="tel:">[PHONE]</a></p></div>
<div><h3>Top cities</h3><ul>
<li><a href="/indianapolis-dumpster-rental/">Dumpster rental Indianapolis</a></li>
<li><a href="/fort-wayne-dumpster-rental/">Dumpster rental Fort Wayne</a></li>
<li><a href="/evansville-dumpster-rental/">Dumpster rental Evansville</a></li>
<li><a href="/south-bend-dumpster-rental/">Dumpster rental South Bend</a></li>
<li><a href="/carmel-dumpster-rental/">Dumpster rental Carmel</a></li>
<li><a href="/fishers-dumpster-rental/">Dumpster rental Fishers</a></li>
<li><a href="/bloomington-dumpster-rental/">Dumpster rental Bloomington</a></li>
<li><a href="/hammond-dumpster-rental/">Dumpster rental Hammond</a></li>
<li><a href="/gary-dumpster-rental/">Dumpster rental Gary</a></li>
<li><a href="/lafayette-dumpster-rental/">Dumpster rental Lafayette</a></li>
</ul></div>
<div><h3>Services and guides</h3><ul>
<li><a href="/residential-dumpster-rental-indiana/">Residential dumpsters</a></li>
<li><a href="/construction-dumpster-rental-indiana/">Construction dumpsters</a></li>
<li><a href="/same-day-dumpster-rental-indiana/">Same-day delivery</a></li>
<li><a href="/20-yard-dumpster-rental-indiana/">20-yard dumpster</a></li>
<li><a href="/guides/dumpster-rental-prices-indiana/">Indiana prices guide</a></li>
<li><a href="/guides/dumpster-permit-indiana/">Permit guide</a></li>
<li><a href="/book/">Book a dumpster</a></li>
<li><a href="/contact/">Contact</a></li>
<li><a href="/privacy-policy/">Privacy policy</a></li>
<li><a href="/terms-of-service/">Terms of service</a></li>
</ul></div>
</div><p>© 2026 Dumpster Rental Indiana. All rights reserved.</p></div></footer>
<div class="sticky-bar"><a class="call" href="tel:">Call [PHONE]</a><a class="book" href="/book/">Book now</a></div>
<script src="/assets/js/main.js"></script>
</body></html>
```

Note: the hero `<section class="hero">` sits inside `<main>` but OUTSIDE the `.wrap` div; the `.wrap` div starts after the hero section. The `main` element wraps both. The `btn-ghost` inside the final CTA section needs the inline style override shown (green text/border on white) because the default ghost style is white-on-green.

## Content rules (locked prompt — violate none)
- 5th-grade reading level. Simple words. Sentences under 20 words. Short paragraphs.
- No fluff, no filler, no dashes (em/en), no emojis, no AI words ("delve", "elevate", "moreover", "in conclusion", "tapestry", etc.), minimal passive voice.
- No duplicate paragraphs across pages. Every page's body copy, FAQ, and meta must be unique to that page.
- Primary keyword: in H1/title, ONCE in an H2, ONCE in the first paragraph, ONCE in metas, ONCE in image alt text. Never stuff it.
- Every factual claim needs a source or a "[TO CONFIRM]" marker. Prices: ONLY the sourced market ranges in "Price facts" below, always labeled as market ranges with the source, never presented as our prices. Our exact prices are [TO CONFIRM].
- Indianapolis permit: say "a Right-of-Way Use Permit from the City of Indianapolis" for street placement. Do NOT name a department (DBNS vs DPW is disputed; see research). Note it as unresolved in your report.
- Evansville permit: no rule found — write "check with the City of Evansville Public Works before street placement."
- Other cities: universal rule (driveway usually no permit; street/sidewalk/right-of-way needs a city permit) + "check with [City] Public Works."
- Never invent reviews, ratings, years in business, truck counts, or "we" claims about the business. Use [BUSINESS NAME] placeholder.
- Word targets: city pages 1,200-1,800 words (Indianapolis 2,000+), service/size pages 900-1,400, guides 1,200-2,200 (narrow questions 800+). Length is a target, not filler. If you write shorter, say so in your report and why.

## Images (already generated — use these exact filenames)
- `hero-driveway-dumpster.webp` — green roll-off dumpster on a suburban driveway (GPS: Indianapolis)
- `dumpster-driveway-boards.webp` — plywood boards under dumpster rails on a driveway
- `10-yard-dumpster.webp`, `20-yard-dumpster.webp`, `30-yard-dumpster.webp`, `40-yard-dumpster.webp` — one per size
- `construction-debris-loading.webp` — construction debris being loaded
- `home-cleanout-dumpster.webp` — household cleanout items beside a dumpster
- `roofing-debris-dumpster.webp` — roofing shingles in a dumpster
- Per-city: `dumpster-rental-indianapolis-in.webp`, `dumpster-rental-fort-wayne-in.webp`, `dumpster-rental-evansville-in.webp`, `dumpster-rental-south-bend-in.webp`, `dumpster-rental-carmel-in.webp`, `dumpster-rental-fishers-in.webp`, `dumpster-rental-bloomington-in.webp`, `dumpster-rental-hammond-in.webp`, `dumpster-rental-gary-in.webp`, `dumpster-rental-lafayette-in.webp` — each geo-tagged with that city's GPS EXIF.
All WebP under 100KB, 1000x667. Alt text: unique per page, primary keyword once. Use ONLY these filenames. Do NOT invent new image files.

## Estimator markup (homepage + /guides/what-size-dumpster-do-i-need/ ONLY — copy verbatim)
```html
<form class="tool" id="estimator">
<h2>What size dumpster do you need?</h2>
<label for="est-job">What is the job?</label>
<select id="est-job">
<option value="garage">Garage, attic, or basement cleanout</option>
<option value="bathroom">Small bathroom remodel</option>
<option value="kitchen">Kitchen remodel</option>
<option value="cleanout">Multi-room or whole-house cleanout</option>
<option value="roofing">Roofing tear-off</option>
<option value="renovation">Major renovation</option>
<option value="construction">Construction or demolition</option>
<option value="demolition">Full demolition</option>
<option value="yard">Yard waste or landscaping</option>
<option value="concrete">Concrete, dirt, brick, or tile</option>
</select>
<label for="est-heavy">Is the debris heavy (concrete, dirt, brick, tile, shingles)?</label>
<select id="est-heavy"><option value="no">No, mostly light household or building waste</option><option value="yes">Yes, heavy material</option></select>
<p><button class="btn" type="submit">Find my size</button></p>
<div class="result-box" id="estimator-result" hidden></div>
</form>
```

## Booking wizard markup (/book/ ONLY — copy verbatim, fill the city select with the 10 Phase 1 cities)
```html
<form class="tool" id="booking-wizard">
<ol class="steps"><li class="active">1. Size</li><li>2. Dates</li><li>3. Address</li><li>4. Contact</li></ol>
<div class="step-panel active">
<h2>Step 1: pick your size</h2>
<div class="size-pick">
<button type="button" data-size="10">10-yard<br><small>small cleanout</small></button>
<button type="button" data-size="20">20-yard<br><small>most popular</small></button>
<button type="button" data-size="30">30-yard<br><small>big renovation</small></button>
<button type="button" data-size="40">40-yard<br><small>demolition</small></button>
</div>
<input type="hidden" id="bk-size" value="">
<p><button class="btn" type="button" data-next>Continue</button></p>
</div>
<div class="step-panel">
<h2>Step 2: pick your dates</h2>
<label for="bk-date">Delivery date</label>
<input type="date" id="bk-date">
<label for="bk-days">Rental days</label>
<select id="bk-days"><option>7 days (standard)</option><option>3 days</option><option>10 days</option><option>14 days</option></select>
<p><button class="btn-ghost" style="color:var(--green);border-color:var(--green)" type="button" data-prev>Back</button> <button class="btn" type="button" data-next>Continue</button></p>
</div>
<div class="step-panel">
<h2>Step 3: delivery address</h2>
<label for="bk-city">City</label>
<select id="bk-city">
<option value="">Choose your city</option>
<option>Indianapolis</option><option>Fort Wayne</option><option>Evansville</option><option>South Bend</option><option>Carmel</option><option>Fishers</option><option>Bloomington</option><option>Hammond</option><option>Gary</option><option>Lafayette</option><option>Another Indiana city</option>
</select>
<label for="bk-street">Street address</label>
<input type="text" id="bk-street" autocomplete="street-address" placeholder="Street and number">
<label for="bk-place">Where should the dumpster go?</label>
<select id="bk-place"><option>Driveway</option><option>Street (a city permit may be needed)</option><option>Jobsite</option><option>Other</option></select>
<p><button class="btn-ghost" style="color:var(--green);border-color:var(--green)" type="button" data-prev>Back</button> <button class="btn" type="button" data-next>Continue</button></p>
</div>
<div class="step-panel">
<h2>Step 4: your details</h2>
<p id="booking-summary" class="notice">Your booking: size not picked yet.</p>
<label for="bk-name">Your name</label>
<input type="text" id="bk-name" autocomplete="name">
<label for="bk-phone">Phone number</label>
<input type="tel" id="bk-phone" autocomplete="tel" placeholder="(317) 555-0100">
<label for="bk-notes">Anything we should know? (optional)</label>
<textarea id="bk-notes" rows="3"></textarea>
<p><button class="btn-ghost" style="color:var(--green);border-color:var(--green)" type="button" data-prev>Back</button> <button class="btn" type="submit">Request my booking</button></p>
<p>Prefer to talk? Call [PHONE]. No payment is taken on this page. We confirm your exact price before you pay.</p>
</div>
</form>
<div class="result-box" id="booking-done" hidden>
<h2>Booking request received</h2>
<p>Thank you. We will call you to confirm your size, dates, and exact price. If you need it faster, call [PHONE].</p>
</div>
```

## Geo meta tags (city pages only)
```
<meta name="geo.region" content="US-IN">
<meta name="geo.placename" content="[City], Indiana">
<meta name="geo.position" content="[lat];[lon]">
<meta name="ICBM" content="[lat], [lon]">
```
City coordinates (city center, standard):
- Indianapolis 39.7684, -86.1581 | Fort Wayne 41.0793, -85.1394 | Evansville 37.9716, -87.5711
- South Bend 41.6764, -86.2520 | Carmel 39.9784, -86.1180 | Fishers 39.9556, -86.0136
- Bloomington 39.1653, -86.5264 | Hammond 41.5834, -87.5000 | Gary 41.5934, -87.3464
- Lafayette 40.4167, -86.8753

## JSON-LD (hand-write per page; validate mentally — no invented facts)
- Every page: BreadcrumbList (Home › Silo › Page).
- Homepage: Organization + WebSite (no SearchAction — no site search exists) + LocalBusiness (name "[BUSINESS NAME]", areaServed Indiana + top 10 cities, geo Indianapolis, NO telephone/address fields until real values exist) + FAQPage.
- City page: LocalBusiness (geo = city coords, areaServed = city + county, NO street address, NO telephone) + Service + FAQPage + BreadcrumbList.
- Service page: Service (+ hasOfferCatalog listing the 4 sizes) + FAQPage + BreadcrumbList.
- Size page: Service (size, dimensions, weight limit) + FAQPage + BreadcrumbList.
- Guide page: Article (author "[BUSINESS NAME]", datePublished/dateModified "2026-11-13") + FAQPage + BreadcrumbList. HowTo ONLY on /guides/how-to-rent-a-dumpster/ (steps must match visible text).
- Booking page: Service + BreadcrumbList only. About/contact/privacy/terms/faq: WebPage + BreadcrumbList (+ FAQPage on /faq/).

## Internal linking rules
- City page: UP to homepage, SIDEWAYS to 2-4 neighbouring cities (Indianapolis ↔ Carmel, Fishers, Greenwood, Lawrence — but Greenwood/Lawrence pages do not exist yet, so link only to BUILT pages: Indianapolis ↔ Carmel ↔ Fishers; Fort Wayne ↔ South Bend? No — only geographically neighbouring BUILT cities: South Bend ↔ Gary ↔ Hammond; Evansville stands alone among built cities, link it to Indianapolis + Bloomington as "other Indiana cities"), DOWN to relevant size/service/guide pages. Never link to an unbuilt page.
- Service page: link to top 10 built cities + size pages + permit/prices guides.
- Guide page: link to booking + 3 most relevant built city/service/size pages. Never link to all cities.
- Every page must have at least 3 inbound links from other built pages — check your own links and report any page with fewer.
- Anchor text natural and varied. Primary keyword as anchor only once per target page from any one source page.

## Price facts (ONLY these — always cite the source in the text)
- National: Dumpsters.com Oct 2026 averages — 10yd $586, 20yd $679, 30yd $809, 40yd $906; national range $286-$1,613.
- Indianapolis: Dumpsters.com verified 11/10/2026: $425-$995, avg $676. Wright Dumpsters starting prices: 10yd from $355, 20yd $455, 30yd $575, 40yd $635. Hometown: $346-$764.
- Fort Wayne: Dumpsters.com verified 11/10/2026: $423-$859, avg $634. Prime Dumpster 5-day: 10yd $399-$499, 20yd $499-$649, 40yd $699-$899.
- South Bend: Dumpsters.com verified 11/10/2026: $440-$828, avg $576. Hometown: $405-$729, extension avg $11/day, overage avg $80/ton.
- Evansville: Dumpsters.com verified 11/10/2026: $605-$838, avg $733 (highest of the four).
- Overage: typically $40-$100/ton (most common), up to $200/ton. Extensions: typically $10-$25/day. Rental period: standard 7-14 days, 7 most common.
- Always frame as "published market ranges" + source + date. Never as our price. Add: "Our exact price is confirmed when you book. [TO CONFIRM]"

## City data (Phase 1 — use only these facts; neighborhoods/ZIPs below are the standard ones for each city)
- Indianapolis — pop. 899,521 (AreaVibes/ACS; Census 2025 est. 901,116). County: Marion. ZIPs: 46201, 46202, 46204, 46205, 46218, 46219, 46220, 46227, 46229, 46237, 46241. Areas: Downtown, Broad Ripple, Fountain Square, Irvington, Nora, Southport, Beech Grove, Speedway. Landfill: South Side Landfill, 2561 Kentucky Ave, Indianapolis, IN 46221. Permit: street placement needs a Right-of-Way Use Permit from the City of Indianapolis (department name unresolved — do not name one). Demand: state capital, 2.1M metro, I-65/I-69/I-70/I-74 crossroads.
- Fort Wayne — pop. 274,188. County: Allen. ZIPs: 46802, 46803, 46805, 46807, 46808, 46815, 46818, 46825, 46835. Areas: Downtown, Waynedale, Aboite, New Haven (nearby town), Northcrest, Georgetown. Permit: Right-of-Way Occupancy and Barricade Permit from the City of Fort Wayne Division of Public Works, Citizens Square, 200 E Berry St, Fort Wayne, IN 46802; apply a few business days ahead. HHW: Allen County Household Hazardous Waste Facility, 2260 Carroll Road, Fort Wayne, IN 46818. Demand: #2 city, manufacturing + healthcare hub, northeast Indiana.
- Evansville — pop. 121,758. County: Vanderburgh. ZIPs: 47708, 47710, 47711, 47712, 47713, 47714, 47715, 47720. Areas: Downtown, North Park, East Side, West Side, Newburgh (nearby town). Landfill: Laubscher Meadows Landfill, 2121 Wimberg Road, Evansville area. Permit: no Evansville-specific rule found — "check with the City of Evansville Public Works before street placement." Demand: southern Indiana's largest city, Ohio River, manufacturing + healthcare; highest published city prices in Indiana.
- South Bend — pop. 104,796. County: St. Joseph. ZIPs: 46601, 46613, 46614, 46615, 46616, 46617, 46628, 46635. Areas: Downtown, River Park, Sunnymede, Granger (nearby), Mishawaka (twin city). Permit: city asks at least 3 business days to process a container permit; past 90 days needs long-term approval from the Board of Public Works. HHW: Household Hazardous Waste Center, 1105 E. 5th Street, Mishawaka, IN 46544. Transfer: South Bend Resource Recovery and Transfer, (574) 231-9844. Demand: Michiana hub, University of Notre Dame, student turnover + old housing stock.
- Carmel — pop. 101,609. County: Hamilton. ZIPs: 46032, 46033, 46082. Areas: Downtown Carmel/Arts & Design District, Village of WestClay, Spring Mill, Brookshire. Permit: universal rule + check with City of Carmel. Demand: affluent fast-growing Indy north suburb, high home values, constant remodeling.
- Fishers — pop. 96,166. County: Hamilton. ZIPs: 46037, 46038, 46040. Areas: Downtown Fishers/Nickel Plate District, Geist, Saxony, Brooks School Road area. Permit: universal rule + check with City of Fishers. Demand: fastest-growing Indy suburb, new builds + remodels.
- Bloomington — pop. 87,630. County: Monroe. ZIPs: 47401, 47403, 47404, 47408. Areas: Downtown, Elm Heights, Bryan Park, Near West Side, Ellettsville (nearby town). Permit: universal rule + check with City of Bloomington. Demand: Indiana University, student rentals, turnover cleanouts, campus-area renovation.
- Hammond — pop. 78,518. County: Lake. ZIPs: 46320, 46323, 46324. Areas: Downtown Hammond, Hessville, Woodmar, Robertsdale, North Hammond. Permit: universal rule + check with City of Hammond. Demand: northwest Indiana / Chicago metro, industrial + older housing.
- Gary — pop. 77,151. County: Lake. ZIPs: 46402, 46403, 46404, 46406, 46407, 46408. Areas: Downtown Gary, Miller Beach, Glen Park, Aetna, Tolleston. Permit: universal rule + check with City of Gary. Demand: northwest Indiana / Chicago metro, industrial legacy, demolition + cleanup demand.
- Lafayette — pop. 75,191. County: Tippecanoe. ZIPs: 47901, 47904, 47905, 47909. Areas: Downtown, Wabash Landing, Vinton, Highland Park, East End. Permit: universal rule + check with City of Lafayette. Demand: twin city of West Lafayette (Purdue), manufacturing + university spillover.
- Neighbour links (only to BUILT pages): Indianapolis ↔ Carmel, Fishers, Bloomington. Fort Wayne ↔ South Bend (both north Indiana — label as "other northern Indiana cities"). South Bend ↔ Gary, Hammond (northwest/north). Hammond ↔ Gary. Carmel ↔ Fishers. Bloomington ↔ Indianapolis. Lafayette ↔ Indianapolis. Evansville ↔ Bloomington, Indianapolis.

## Size facts (use on size pages + estimator-adjacent copy)
- 10-yard: about 12-14 ft long x 8 ft wide x 3.5-4 ft high. About 3 pickup loads, 50-70 bags. 1-3 tons typical. Best: small cleanout, single room, small bathroom, one-layer roofing tear-off, heavy debris (concrete/dirt/brick) — lowboy by weight.
- 20-yard: about 22 ft long x 8 ft wide x 4-4.5 ft high. About 6 pickup loads, 110-130 bags. 2-4 tons typical. Most rented size. Best: kitchen remodel, multi-room cleanout, flooring, roofing.
- 30-yard: about 22 ft long x 8 ft wide x 6 ft high. About 9 pickup loads, 170-190 bags. 3-5 tons typical. Best: whole-house cleanout, major renovation, large construction. Wrong for heavy debris.
- 40-yard: about 22 ft long x 8 ft wide x 7-8 ft high. About 12 pickup loads, 230-250 bags. 4-6 tons typical. Best: major demolition, large construction, light bulky debris only. Never for heavy material.
- Delivery needs: 10.5 ft wide x 60 ft straight clearance, 25-30 ft vertical clearance.
