# Renewed Health Outreach — website

A plain HTML/CSS website (no build step) designed to be hosted free on **GitHub Pages**.

## Pages
| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Jodi + counseling team |
| `services.html` | Services |
| `insurance.html` | Insurance & FAQ |
| `contact.html` | Contact, map, portal |

## Patient Portal link
The InSync sign-in address is set in **`assets/js/site-config.js`** (`portalUrl`). Change it there and every Patient Portal button updates.

That file also has an optional `weaveTextConnectSrc` setting for a Weave chat bubble, which is currently blank.

## Adding the logo (when it's ready)
1. Save it as `assets/images/logo.png` (transparent background works best).
2. In each `.html` file, find the comment `LOGO PLACEHOLDER` and replace the `<svg ...>...</svg>` right below it with:
   `<img src="assets/images/logo.png" alt="" class="brand-mark">`
3. Optional: replace `assets/images/favicon.svg` with a square version for the browser tab.

## Photos
In `assets/images/`. To swap one, save the new photo with the same file name.
`building.png` is large (~2.6 MB). Run it through https://squoosh.app (export as JPEG/WebP, ~1600px wide) to speed up the Contact page.

## Publishing on GitHub Pages
1. Create a new repository on GitHub and upload all of these files (keep the folder structure).
2. Go to **Settings → Pages**, under *Build and deployment* choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and click Save.
3. In about a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

### Using renhealthout.com
1. In **Settings → Pages → Custom domain**, enter `www.renhealthout.com` and save (this creates a `CNAME` file).
2. At the domain registrar (where the domain is managed, currently pointed at Squarespace), update DNS:
   - `CNAME` record: `www` → `<your-username>.github.io`
   - `A` records for the bare domain `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Once DNS updates, tick **Enforce HTTPS**.
4. Only cancel the Squarespace site *after* the new one is live on the domain.

## Previewing locally
From this folder run `python -m http.server 8080` and open http://localhost:8080.

## Color palette
All colors are set at the top of `assets/css/styles.css`.

| Color | Hex | CSS name | Use |
|---|---|---|---|
| Cream | `#FCF8F2` | `--cream` | Page background |
| Linen | `#F5ECE0` | `--linen` | Soft section backgrounds |
| Sand | `#EBDCC8` | `--sand` | Outline button borders |
| Border | `#E6D9C8` | `--line` | Card borders and divider lines |
| White | `#FFFFFF` | `--white` | Cards |
| Clay | `#A9532F` | `--clay` | Main buttons and accents |
| Dark clay | `#8C4325` | `--clay-dark` | Main button hover |
| Soft clay | `#F3DFD3` | `--clay-soft` | Icon backgrounds and warm notices |
| Apricot | `#E8A87C` | `--apricot` | Highlights and focus outlines |
| Harbor blue | `#2E5470` | `--blue` | Portal button, links and icons |
| Deep blue | `#1F3B50` | `--blue-dark` | Headings and top bar |
| Soft blue | `#E4EDF3` | `--blue-soft` | Icon backgrounds and notices |
| Footer navy | `#1A3245` | none | Footer background |
| Sage | `#7E9A82` | `--sage` | Small natural accents |
| Charcoal | `#34302D` | `--ink` | Body text |
| Muted brown | `#6B625B` | `--muted` | Secondary text |

Fonts: **Fraunces** (headings) and **Nunito Sans** (body), both from Google Fonts.
