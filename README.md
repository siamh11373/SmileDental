# Smile Dental Care Website

Production-ready Next.js marketing site for Smile Dental Care in Dearborn, Michigan.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Project Structure

- `public/images/` - web-ready images that can be referenced directly by the site.
- `assets/source/photos/` - original source copies of provided photos.
- `src/app/` - application routes or pages.
- `src/components/` - reusable UI components.
- `src/content/` - structured website copy, image references, and editable content.
- `src/lib/` - shared utilities and integrations.
- `src/styles/` - global styling and design tokens.
- `docs/context/` - project brief, asset inventory, and build context for AI agents.
- `docs/brand/` - brand notes, visual direction, and voice guidelines.
- `docs/seo/` - SEO research, page plans, and local search notes.
- `docs/copy/` - draft website copy and content revisions.

## Starting Context

The initial photo set includes a doctor portrait, team photos, and exterior/building photos. See `docs/context/asset-inventory.md` for exact paths.

The SmilePro Dental reference packet is in `docs/context/smilepro-reference/`. It includes screenshots, responsive notes, design tokens, and a section-by-section implementation brief for creating a very similar website layout.

## Implementation

- Next.js App Router with TypeScript.
- Content is managed in `src/content/site.json`.
- Reusable page sections live in `src/components/`.
- Global responsive styles and design tokens live in `src/app/globals.css`.
- The homepage is statically rendered and uses optimized local images.
- Appointment calls to action currently use the verified practice phone number.
