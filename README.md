# Yiming Hua · Academic Homepage

A lightweight, bilingual academic homepage for GitHub Pages, built with HTML, CSS, and JavaScript. No package installation or build process is required.

## Local preview

```sh
python3 -m http.server 8765
```

Open http://localhost:8765 in your browser.

## Edit content

- `index.html`: English content and page structure.
- `script.js`: Chinese translations, language preference, and navigation.
- `styles.css`: typography, colors, desktop and mobile layouts.
- `assets/yiming-hua.jpg`: profile photo.

Use `data-i18n` keys for translated text. Keep English text in the HTML and the matching Chinese text in `script.js`.

## Publish

This repository targets `https://chimeraHHH.github.io/`. In repository Settings → Pages, select **GitHub Actions** as the source. The included workflow deploys only the public HTML, CSS, JavaScript, and assets when `main` changes.

## Content notes

HoRT is presented with its title and a short project description. The homepage does not distribute its manuscript or display submission status. Conference papers are labeled as accepted; no indexing claim is made. Project thumbnails are original illustrative graphics, not experimental results.

The layout takes inspiration from [Jianchun Yang's academic homepage](https://florian-yang.github.io/). Implementation and illustrations are original.
