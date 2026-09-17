# harryzhang.dev

Personal site. Astro, static HTML, no client JS. Deployed to GitHub Pages on every push to `master`.

## Editing

All content is in `src/content/site.ts`. Change it, commit, push. The site rebuilds in about a minute.

Empty lists (`recentWork`, `talks`) show "coming soon". Links with an empty URL don't render.

## Running locally

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # typecheck. Needs TypeScript 6, which is pinned; astro check doesn't work with 7 yet.
pnpm build    # writes dist/
```

## Files

- `src/pages/index.astro` – the page
- `src/layouts/Base.astro` – head, meta, fonts
- `src/components/` – header, section wrapper, lists
- `src/styles/global.css` – colours, type, base styles. Dark mode follows the OS.
- `.github/workflows/deploy.yml` – build and deploy

## DNS

Cloudflare, all records DNS only (grey cloud). Proxying breaks GitHub's certificate.

| Type  | Name | Content               |
|-------|------|-----------------------|
| A     | @    | 185.199.108.153       |
| A     | @    | 185.199.109.153       |
| A     | @    | 185.199.110.153       |
| A     | @    | 185.199.111.153       |
| CNAME | www  | merylstreep.github.io |

`public/CNAME` and `site` in `astro.config.mjs` both say `harryzhang.dev`.

## Privacy

Everything in `site.ts` ends up in the HTML. Comments don't ship, strings do.
