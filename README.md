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

## Logo
The logo is `assets/images/logo.png`, with `logo-white.png` for the dark footer. The browser tab icon is `favicon.png`, and `apple-touch-icon.png` is used on phones. To replace the logo, save new files with the same names.

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

### Primary
| Color | Hex | Use |
|---|---|---|
| Cream | `#FCF8F2` | Page background |
| Clay | `#A9532F` | Main buttons and accents |
| Deep blue | `#1F3B50` | Headings and top bar |
| Harbor blue | `#2E5470` | Patient Portal button and links |
| Apricot | `#E8A87C` | Highlights |

### Secondary
| Color | Hex | Use |
|---|---|---|
| Linen | `#F5ECE0` | Soft section backgrounds |
| Soft clay | `#F3DFD3` | Warm notices and icon backgrounds |
| Soft blue | `#E4EDF3` | Notices and icon backgrounds |
| Sage | `#7E9A82` | Small natural accents |
| Charcoal | `#34302D` | Body text |

A few small working shades, such as borders and hover colors, are listed at the top of `assets/css/styles.css`.

Fonts: **Fraunces** (headings) and **Nunito Sans** (body), both from Google Fonts.
