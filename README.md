# High Power : Automobile

One-page, fully animated Next.js site for a Force Motors spare-parts retailer, also stocking TVS parts,
Lumax & Menda lighting/mirrors, and Castrol, Veedol, Shell oils, plus a full workshop service list.

Built with **Next.js 14 (App Router) + Tailwind CSS + Framer Motion**.

## Run it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy

The easiest option is [Vercel](https://vercel.com) (made by the Next.js team):
push this folder to a GitHub repo, then "Import Project" on Vercel — no config needed.
Netlify, or any Node hosting, also works.

## Where to edit content

Almost everything you'll want to change lives in **`lib/data.js`**:

- `shop` — owner name, WhatsApp/phone numbers, address, GST number, email
- `forceVehicles` — the Force Motors vehicle cards (section 01)
- `brandGroups` — TVS / Lumax / Menda / Castrol / Veedol / Shell (section 02)
- `services` — the workshop services list (section 03)

**Still to add (placeholders are in `lib/data.js`):**
- GST number
- Business email

**Photos:** `public/images/` is ready for real photos of the shop, vehicles, and parts —
add files there and reference them with an `<img src="/images/your-file.jpg" />` or Next's
`<Image>` component to replace the current icon/text-only cards.

## Notes

- The site is a single scrolling page with in-page navigation (`app/page.js` + `components/`).
- Colors, fonts and the hazard-stripe motif are defined in `tailwind.config.js` and `app/globals.css`.
- The dashboard-style gauge in the bottom-right (desktop only) tracks scroll progress — purely decorative.
- The Google Map embed in the Contact section uses the address text directly (no API key needed).
  If it doesn't pinpoint the shop precisely, search the correct location on Google Maps, click
  "Share" → "Embed a map", and swap the `src` in `components/Contact.js` with that URL.
