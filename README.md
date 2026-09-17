# harryzhang · personal site

Static site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

Live: https://merylstreep.github.io/website_redux/

## Editing content

Everything on the page comes from `src/content/site.ts`: name, about copy, current company,
recent work, talks, writing links, contact links. Edit that file, commit, push to `master`.
The workflow in `.github/workflows/deploy.yml` builds and deploys in about a minute.

Empty lists (`recentWork`, `talks`) render a quiet "coming soon" line. Empty URLs are hidden.

## Local

```sh
pnpm install
pnpm dev        # http://localhost:4321/website_redux/
pnpm check      # typecheck (needs TypeScript 6.x, pinned)
pnpm build      # output in dist/
```

## Layout

- `src/pages/index.astro` — the single page and its section order
- `src/layouts/Base.astro` — html head, meta, fonts
- `src/components/*.astro` — static pieces (header, section shell, lists)
- `src/components/Dog.tsx` — the only client-side JavaScript: a React island for the dog on the hero. Hydrates on idle, respects `prefers-reduced-motion`.
- `src/styles/global.css` — design tokens (light/dark via `prefers-color-scheme`), type scale, base styles

## Custom domain

When there is one: add a `public/CNAME` file with the domain, set `site` in `astro.config.mjs` to it,
remove `base`, and add the domain under repo Settings → Pages. Point DNS at GitHub's Pages IPs.
