# PopSplash

Static, single-page marketing site using Skeleton for layout, fullPage.js for section scrolling, and custom CSS/JS for the visual polish.

## Run locally
- Open `index.html` directly in a browser, or serve the folder with a simple HTTP server (e.g., `npx serve .`).
- Requires network access for CDN assets (Google Fonts, Skeleton, Font Awesome, jQuery).

## Key files
- `index.html` - section structure wired to fullPage.js anchors and nav.
- `style/style.css` - custom styling for the fixed header/footer, gradients/overlays, section typography, and the showcase image animation.
- `style/vendors/` - vendored CSS (fullPage, hamburgers).
- `js/script.js` - fullPage.js init (anchors, tooltips, background color transitions, showcase animation toggle) and hamburger toggle.
- `js/vendors/` - vendored JS (fullPage.js, scrolloverflow).

## Visual style
- Light, candy-colored palette that shifts per section; smooth background transitions driven by fullPage.js callbacks.
- Fixed, semi-transparent header/footer over a vertically scrolling, full-height section stack.
- Skeleton grid for simple column alignment; custom CSS handles the rest of the layout and motion.

## History
- Bulma was briefly tried as an experiment and then abandoned; the old Bulma version lives on the `bulma-backup` branch if you ever need to reference it.
