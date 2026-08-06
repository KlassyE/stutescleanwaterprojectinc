# Facebook photo archive

This folder stores organization-owned photography collected from the logged-in Stutes Clean Water Project Inc. Facebook Photos page.

- 312 Facebook photo links were inventoried.
- 305 unique image assets were identified.
- 7 duplicate image assets were excluded.
- `manifest.json` and `manifest.csv` preserve the Facebook photo page, source URL, dimensions, and local filename for each unique asset.
- Downloaded files are stored in `images/`.

Run `node download-images.cjs` soon after refreshing the manifest because Facebook CDN source URLs expire. Existing non-empty image files are skipped, and any failures are written to `download-failures.json`.

No Facebook cookies, passwords, tokens, or account credentials are stored here.
