# demosaii — links

Link-in-bio page for [demosaii](https://www.instagram.com/demosaii): HANPAN, music stores, JOSEON STORIES, HAJIMA!, socials and tools.

Static site. No build step, no dependencies.

```
index.html        the page (all CSS and JS inline)
hanpan-cover.jpg  album cover, 800×800
og.jpg            share preview image, 1200×630
vercel.json       clean URLs + cache headers
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo → Deploy. Framework preset: **Other**. No build command, no output directory.
3. Optional: Settings → Domains → add `links.demosaii.com` (or `demosaii.com`).

## After the first deploy

Open `index.html` and update the share image URL to the real address:

```html
<meta property="og:image" content="https://demosaii-links.vercel.app/og.jpg">
```

Replace `demosaii-links.vercel.app` with whatever Vercel gave you (or your custom domain). Without this, WhatsApp / Twitter / KakaoTalk previews show no image.

## Editing links

Every link is a plain `<a href="…">` in `index.html`. The HANPAN block at the top is the one that changes with each release: swap the cover image, the two store URLs, and the title.

The discount code lives in the "For ARMY" block: search for `DEMOSARMY10`.

## Tap feedback

`navigator.vibrate` (Android only — iOS Safari has no vibration API) plus a 60 ms synthesized tick via Web Audio. To turn the sound off, delete the `tick()` call inside the `pointerdown` listener at the bottom of `index.html`.
