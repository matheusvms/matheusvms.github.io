# matheusvms.github.io

Personal academic website of Matheus Souza: https://matheusvms.github.io

Plain HTML, CSS and a few lines of JavaScript (the light/dark toggle), no build step.

```
index.html               all content (must stay at the root for GitHub Pages)
assets/
  css/style.css          layout and colors (light and dark palettes at the top)
  js/script.js           light/dark theme toggle
  icons/                 favicon.svg, favicon-32.png, apple-touch-icon.png
  images/
    profile.jpg          portrait
    og-card.jpg          preview image shown when the site is shared (LinkedIn, Slack, ...)
    papers/              one ~400 px-wide thumbnail per paper
    logos/               Meta, KAUST, UFRN
```

To add a paper: save its thumbnail in `assets/images/papers/`, then copy one `<article class="pub">`
block in the Publications section of `index.html`, paste it at the top and edit it.

Design inspired by [Jon Barron's website template](https://github.com/jonbarron/jonbarron_website).
