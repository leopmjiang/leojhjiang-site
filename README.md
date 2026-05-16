# Leo Jiang Portfolio Site

Refactored Next.js portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

## Refactor notes

- `app/page.tsx` is now a composition layer only.
- Portfolio content lives in `data/portfolio.ts`.
- Reusable sections live in `components/portfolio`.
- `tsconfig.json` includes `@/*` path aliases so Vercel can resolve imports like `@/data/portfolio`.
- `node_modules`, `.next`, `.git`, and Mac metadata are intentionally excluded from the deliverable zip.
