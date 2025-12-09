# PopSplash (non-Bulma)

Static, single-page marketing site using Skeleton, fullPage.js, and custom CSS/JS. This branch reflects the original non-Bulma version.

## Run locally
- Open `index.html` directly in a browser, or serve the folder with a simple HTTP server (e.g., `npx serve .`).
- Requires network access for CDN assets (Google Fonts, Skeleton, Font Awesome, jQuery).

## Key files
- `index.html` – layout and section structure hooked to fullPage.js anchors.
- `style/style.css` – custom styling (header/footer, sections, animations).
- `style/vendors/` – vendored CSS (fullPage, hamburgers).
- `js/script.js` – fullPage.js initialization and simple interactions.
- `js/vendors/` – vendored JS (fullPage.js, scrolloverflow).

## Notes
- Background colors animate on scroll via fullPage.js callbacks.
- If you need the later Bulma rewrite, check the `master` branch; this branch intentionally omits Bulma.
