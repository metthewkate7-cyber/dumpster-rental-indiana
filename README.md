# Dumpster Rental Indiana — dumpsterrentalindiana.us

Static site. Vanilla HTML, CSS, and JS only. No frameworks, no templates, no WordPress, no database, no server code.

## Deploy (Cloudflare Pages)

1. Push this folder to the repo: https://github.com/metthewkate7-cyber/dumpster-rental-indiana
   (Repo is public and empty as of 2026-11-13. Do not push until Hassaan says so.)
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick `dumpster-rental-indiana`.
3. Build settings: Framework preset `None`. Build command: leave empty. Build output directory: `/` (site root).
4. Deploy. Cloudflare gives a `*.pages.dev` URL for testing.
5. When Hassaan hands over `dumpsterrentalindiana.us` (bought on Cloudflare): Pages → Custom domains → Set up a custom domain → `dumpsterrentalindiana.us` (and `www`). DNS is automatic on Cloudflare.
6. After launch: verify Search Console + Bing Webmaster Tools, submit sitemap, set up Google Business Profile.

## Before launch checklist

- [ ] Replace [BUSINESS NAME], [PHONE], [ADDRESS] with real details (search `BUILD-NOTE.md` for every placeholder).
- [ ] Replace tel: links (currently empty `tel:`) with the real phone number.
- [ ] Add real prices (per size, included tons, overage $/ton, extension $/day) — see BUILD-NOTE.md.
- [ ] Add real reviews to the reviews page (page not built yet — no invented reviews).
- [ ] Resolve the Indianapolis permit department question (DBNS vs DPW) against indy.gov.
- [ ] Validate all JSON-LD with the Rich Results Test and the Schema validator.
- [ ] Validate Semrush keyword primaries (see BUILD-NOTE.md).
- [ ] Replace the 6 generated photos with real job photos when available.

## Structure

- `/` homepage, `/book/` booking wizard, `/about/`, `/contact/`, `/faq/`, `/privacy-policy/`, `/terms-of-service/`
- `/[city]-dumpster-rental/` city pages (Phase 1: 10 cities)
- `/[service]-dumpster-rental-indiana/` service pages (8)
- `/[size]-yard-dumpster-rental-indiana/` size pages (4)
- `/guides/[topic]/` info/guide pages (13)
- `/assets/css/style.css`, `/assets/js/main.js`, `/assets/images/*.webp`
- `/sitemap.xml`, `/robots.txt`, `/_headers`, `/_redirects`

See `BUILD-NOTE.md` for the full page list, images, placeholders, and pending items.
