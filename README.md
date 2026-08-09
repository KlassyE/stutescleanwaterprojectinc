# Stutes Clean Water Project

A custom, responsive multi-page website for Stutes Clean Water Project Inc., focused on the organization’s clean-water systems, school outreach, and WASH education work in Uganda.

## Project stack

- React 19 and TypeScript
- Vite
- Custom responsive CSS
- Lucide icons
- Locally bundled DM Sans and Newsreader fonts
- Sharp image preparation pipeline

## Website pages

| Page | URL |
| --- | --- |
| Home | `/` |
| Our work | `/work/` |
| Field stories | `/stories/` |
| Project gallery | `/gallery/` |
| About | `/about/` |
| Team | `/team/` |
| Contact and support | `/contact/` |

Each URL has a separate HTML document with its own title, description, canonical URL, and social metadata. Shared React components provide consistent navigation, footer, page heroes, support prompts, and gallery behavior.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

The development server uses Vite. The current VS Code build task runs the production build.

## Validation commands

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

The production output is generated in `dist/`, including a directory entry for every page and a custom `404.html`.

## Content and image provenance

- All project and leadership photographs in `src/assets/` were sourced directly from the organization’s Facebook-hosted posts or supplied by the organization for this project. No Google-sourced or stock images are used.
- Public organization details were collected from the organization’s public Facebook presence and public nonprofit information available during development.
- The site currently presents Kampala, Uganda as the field location and 4148 Highway 101 North, Gray Court, South Carolina 29645 as the US nonprofit address.
- The site identifies the organization as a registered 501(c)(3), EIN 87-4575994.
- The team page lists Tony Stutes and Sandy Stutes as founders, Katuura Johnson as Chief Executive Officer, and Kabunga Justus as Operations Manager. It uses the supplied official portraits, including a chest-length crop of Kabunga Justus.
- The header and footer use the organization’s supplied official logo with a transparent background. The mark keeps its official colours on light surfaces and switches to a clean white treatment on dark surfaces for visibility.
- The separate `facebook-archive/` contains all 305 unique downloadable Facebook photo assets found across 312 photo links, plus JSON and CSV provenance manifests. Seven duplicate assets were excluded.
- Field photographs are organized in the production gallery as Schools & young people, Purifier deliveries, On the road & in the field, and Community moments. Photographs of children, school visits, and purifiers lead their respective collections; the supplied logo is not included as a gallery photograph.
- Production photographs are WebP files. The gallery loads 640 × 480 thumbnails progressively and requests the larger, maximum-1600-pixel version only when an image is opened.

Verify contact, registration, impact, and campaign details with the organization before changing or publishing new claims.

## Project structure

- Route selection and the shared page shell are in `src/App.tsx`.
- Page components are in `src/pages/`.
- Shared navigation, footer, page hero, support banner, and lightbox components are in `src/components/`.
- Organization constants, navigation, gallery entries, image references, and the team roster are in `src/site-data.ts`.
- The generated list of Facebook photo IDs is in `src/facebook-archive.ts`.
- Global design tokens, layouts, animations, and responsive rules are in `src/index.css`.
- Page-specific SEO metadata is in `index.html` and each page directory’s `index.html`.
- Structured organization data is in the root `index.html`.
- Brand and discovery files are in `public/`, including the favicon, web manifest, robots file, and sitemap.
- Original Facebook downloads and provenance data remain in `facebook-archive/`. Production full images and thumbnails are generated in `public/images/facebook/`.

Use named field photography only when the organization has confirmed the person pictured.

## Facebook image preparation

After adding verified organization-owned originals to the archive manifest, regenerate the WebP files, thumbnails, contact sheets, and TypeScript ID list with:

```powershell
npm.cmd run images:prepare
```

The current prepared outputs contain 305 full images and 305 thumbnails. The full WebP set is 31.1% smaller than the archived JPEG originals; thumbnails are separate lightweight assets used by the gallery grid.

The supplied official logo and the Kabunga Justus team portrait are prepared by `scripts/prepare-brand-assets.mjs`.

## Responsive behavior

The layout has been checked from 320px mobile widths through 1440px desktop widths, including short landscape screens. Mobile navigation is scrollable on short viewports, the gallery lightbox is viewport-fixed, and all tested widths avoid horizontal page scrolling.

## Namecheap cPanel Git deployment

This repository is configured for Namecheap hosting through cPanel Git Version Control. cPanel requires the deployment manifest to use the exact root-level filename `.cpanel.yml`; `cpanel.yaml` is not recognized.

The shared-hosting deployment shell does not provide `npm`, so the site is built locally and the `dist/` output is committed to the repository. The checked-in deployment manifest only copies the committed `dist/` contents into the addon domain document root `/home/tecnyqbq/stutescleanwaterprojectinc.com/`, without exposing the repository, source files, or `node_modules` in the public document root.

The copy step does not delete unrelated files already managed by cPanel, such as `.well-known` SSL-validation files.

### One-time Namecheap setup

1. In **cPanel → Files → Git Version Control**, clone `https://github.com/KlassyE/stutescleanwaterprojectinc.git` into a non-public path such as `/home/CPANEL_USER/repositories/stutescleanwaterprojectinc`. Do not clone the repository into the domain document root; cPanel refuses to deploy a repository whose folder is the document root and reports that a valid `.cpanel.yml` is required.
2. Use the `main` branch.
3. If the document root changes, update only the `DEPLOYPATH` value in `.cpanel.yml` to the document root shown in cPanel Domains.
4. In the repository’s **Manage → Pull or Deploy** screen, select **Update from Remote**, then **Deploy HEAD Commit**.

For later releases, run `npm.cmd run build`, commit the changes including `dist/`, push to GitHub, use **Update from Remote** in cPanel, and then run **Deploy HEAD Commit**. A GitHub push updates the remote repository but does not by itself run a pull deployment on Namecheap unless an additional automation hook has been configured.

The deployed host must serve each directory’s `index.html` for trailing-slash URLs and use `404.html` for unknown paths. Keep canonical URLs, Open Graph URLs, the manifest start URL, sitemap, and structured data synchronized with the production domain.
