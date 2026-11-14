# Yiming Hua · Academic Homepage

Built with the actual [AcadHomepage Jekyll template](https://github.com/RayeRen/acad-homepage.github.io), customized to follow [Jianchun Yang's homepage](https://florian-yang.github.io/).

Live site: https://chimerahhh.github.io/

## Update content

- `_config.yml`: profile, email, affiliation, and site metadata.
- `_pages/about.md`: English content and section structure.
- `_data/navigation.yml`: navigation links.
- `assets/css/custom.css`: reference-aligned additions to the template.
- `assets/css/main.scss` and `_sass/`: original AcadHomepage theme.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. GitHub Actions builds the rendered site on every branch; only `main` deploys to GitHub Pages.

## Content and attribution

HoRT has a title and a short introduction only. Its full manuscript and submission status are not distributed here. Conference papers retain their documented acceptance labels. Thumbnails are illustrative covers, not experimental results.

AcadHomepage and its bundled resources retain the upstream license and notices. See `LICENSE` and `UPSTREAM.md`.
