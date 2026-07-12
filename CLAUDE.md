# Claude Context

This is the working repository for the Smile Dental Care website.

Claude should start with:

1. Read `AGENTS.md`.
2. Read `docs/context/project-brief.md`.
3. Read `docs/context/asset-inventory.md`.
4. Read `docs/context/smilepro-reference/README.md` when matching the SmilePro Dental reference layout.
5. Use `src/content/site.json` as the editable source of starter website content.

## Current State

- The website is implemented with Next.js App Router and TypeScript.
- Run `npm install`, then `npm run dev` for local development.
- Run `npm run lint` and `npm run build` before handing off changes.
- Provided photos have been copied into `public/images/` with semantic filenames.
- Original source copies are stored in `assets/source/photos/`.
- SmilePro Dental reference screenshots and layout notes are stored in `docs/context/smilepro-reference/`.
- The homepage is composed in `src/app/page.tsx`, reusable sections are in `src/components/`, and editable content is in `src/content/site.json`.

## Content Guidelines

- Use a professional dental tone: clear, reassuring, modern, and family-friendly.
- Do not invent regulated details such as credentials, services, insurance acceptance, financing, address, phone number, or emergency availability.
- Mark missing business facts as TODOs until the user provides them.
