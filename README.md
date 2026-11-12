# Business Essentials · WebLuxe website template

A clean, trustworthy one-page website for B2B and service companies: freight and logistics, security firms, consultancies, accountants and small corporate offices. Its job is to look credible and make it easy to get in touch.

**Live demo:** https://webluxe.github.io/LowTier_BusinessEssentials/

Plain HTML, CSS and JavaScript. No build step, no framework, nothing to install. Upload the folder to any host (GitHub Pages, Netlify, Vercel, cPanel) and it works.

## Files

| File | What it is |
|---|---|
| `index.html` | The single page: hero, about with key numbers, services, why choose us, contact. |
| `config.js` | **Everything about the client.** The only file you edit for a new client. |
| `css/style.css` | All the styles. Colours and fonts come from `config.js`. |
| `js/main.js` | Builds the pages from `config.js`. Do not edit. |
| `assets/` | Logo, favicon and the client's own photos. |

## How to rebrand for a new client (about 30 minutes)

1. **Copy the whole folder** and rename it for the client.
2. Open **`config.js`** and work down it from the top. Each block has a comment explaining it.
   - **The business:** `name`, `legalName`, `tagline`, `logo` (put a logo file in `assets/` and write its path in `logo.image`, or leave it empty to use the letter mark).
   - **Brand:** `colors.primary`, `colors.accent`, `colors.dark`, `colors.light`. The text colour on buttons is chosen automatically so it stays readable. `fonts.heading` and `fonts.body` take any Google Fonts name.
   - **Contact:** `phone`, `whatsapp` (country code + number, digits only, e.g. `23057001234`), `whatsappMessage`, `email`, the address lines, `lat`/`lng`, and `mapEmbed` (Google Maps → Share → Embed a map → copy the link inside `src="…"`).
   - **Hours:** `"08:00-17:00"` per day, `""` when closed. Days with the same hours are grouped automatically, and the "Open now" badge uses `timeZone`.
   - **Social:** paste the links you have. Empty ones are hidden.
   - **SEO:** `seo.title`, `seo.description`, `seo.image` (the picture shown when the link is shared), `seo.schemaType` and `seo.siteUrl` (the final web address).
   - **Form:** create a free form at formspree.io and paste its link into `form.endpoint`. With no link, the form opens the visitor's email app instead.
   - **Sections** (`sections`): `hero` (photo, headline, two buttons, trust points), `about` (text, photo and up to 4 key numbers), `services` (3 to 6 cards with an icon name each), `why` (trust points and a photo; client logos are an add-on), `cta` (the dark band) and `contact` (headings above the form).
   - **Wording:** every piece of text has an English and a French version: `{ en: "...", fr: "..." }`. For an English-only site, set `languages: ["en"]` and the FR button disappears.
3. **Turn off demo mode:** set `demo.enabled` to `false`. In demo mode WhatsApp, calls, emails and forms only show a pop-up, and Google is told not to index the site.
4. **Update the head of each `.html` file:** `<title>`, the description and the three `og:` lines. WhatsApp, Facebook and LinkedIn read these when someone shares a link. Also update the Google Fonts link if you changed fonts, and the hero photo preload line in `index.html`.
5. **Replace `assets/favicon.svg`** with the client's icon (any square SVG or PNG; update the `<link rel="icon">` path if it's a PNG).
6. **Check it:** open `index.html` on a phone at 360px wide, switch to French, send the form, and tap WhatsApp.

### Hiding things

- A whole section: add `enabled: false` to it in `config.sections`.
- One item: delete it from its list.
- One line of text: set it to `""`.

Empty sections and items are removed from the page cleanly. They never leave a gap.

### Photos

Unsplash links get sized automatically for each screen. For the client's own photos, put them in `assets/` (JPEG or WebP, about 2000px wide, under 400 KB each) and write the path, e.g. `"assets/photos/office.jpg"`. Write photos as `{ src: "...", alt: { en: "...", fr: "..." } }` so blind visitors and Google know what they show.

## Built in

- Phone first: designed at 360px, then tablet and desktop. 44px+ tap targets, with no sideways scrolling.
- Sticky header that slims as you scroll, animated mobile menu, scroll-in animations, and respect for "reduce motion" settings.
- Add-ons you switch on in `config.js`: the French version (`languages: ["en", "fr"]`, all French text is already written), a light/dark switch (`darkMode: true`) and a scrolling strip of client logos (`sections.why.logos`).
- Floating WhatsApp button with a pre-filled message, click-to-call and email links.
- Footer year updates itself.
- Google: title, description, Open Graph tags, and schema.org data built from `config.js`.
- No trackers and no cookies. Works over HTTPS.
- Contact section with an open/closed badge, opening hours, a map that loads on tap, and a form that sends to Formspree or falls back to email.

---
Template by [WebLuxe](https://webluxe.github.io/WebLuxe/), Mauritius. Sample photos from [Unsplash](https://unsplash.com). The businesses, people, prices and reviews in the demo are invented.
