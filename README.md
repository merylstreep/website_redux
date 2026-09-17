# harryzhang · personal site

Static site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

Live: https://harryzhang.dev (DNS on Cloudflare, must be "DNS only", not proxied, for GitHub's certificate to issue)

## Editing content

Everything on the page comes from `src/content/site.ts`: name, about copy, current company,
recent work, talks, writing links, contact links. Edit that file, commit, push to `master`.
The workflow in `.github/workflows/deploy.yml` builds and deploys in about a minute.

Empty lists (`recentWork`, `talks`) render a quiet "coming soon" line. Empty URLs are hidden.

## Local

```sh
pnpm install
pnpm dev        # http://localhost:4321/
pnpm check      # typecheck (needs TypeScript 6.x, pinned)
pnpm build      # output in dist/
```

## Layout

- `src/pages/index.astro` — the single page and its section order
- `src/layouts/Base.astro` — html head, meta, fonts
- `src/components/*.astro` — static pieces (header, section shell, lists)
- `src/styles/global.css` — design tokens (light/dark via `prefers-color-scheme`), type scale, base styles

## Domain

`public/CNAME` holds `harryzhang.dev` and `site` in `astro.config.mjs` matches. Cloudflare DNS records:

| Type  | Name | Content                  | Proxy    |
|-------|------|--------------------------|----------|
| A     | @    | 185.199.108.153          | DNS only |
| A     | @    | 185.199.109.153          | DNS only |
| A     | @    | 185.199.110.153          | DNS only |
| A     | @    | 185.199.111.153          | DNS only |
| CNAME | www  | merylstreep.github.io    | DNS only |

## What ships to the browser

Zero JavaScript. The page is static HTML and CSS built from `src/content/site.ts`. Every string in
that file is public. Comments are not shipped, but do not put anything private in a string.
