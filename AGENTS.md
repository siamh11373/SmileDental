# Agent Instructions

Use this repository to maintain the Smile Dental Care website.

## Priorities

- Keep the site professional, warm, trustworthy, and conversion-focused.
- Favor accessible, responsive layouts that work well on mobile first.
- Use the provided real clinic and team photography before placeholder imagery.
- Keep content editable through files in `src/content/` where practical.
- Avoid inventing phone numbers, addresses, insurance claims, credentials, or service guarantees unless provided by the user.

## Useful Context

- Project brief: `docs/context/project-brief.md`
- Asset inventory: `docs/context/asset-inventory.md`
- SmilePro reference packet: `docs/context/smilepro-reference/README.md`
- Structured content starter: `src/content/site.json`
- Public web images: `public/images/`
- Source photos: `assets/source/photos/`

## Build Notes

- Framework: Next.js App Router with TypeScript.
- Install dependencies with `npm install`.
- Run locally with `npm run dev`.
- Verify changes with `npm run lint` and `npm run build`.
- The homepage composition is in `src/app/page.tsx`.
- The main content source is `src/content/site.json`.
- Global responsive styles are in `src/app/globals.css`.
- If code is modified after the knowledge graph exists, run `graphify update .`.
