# Implementation Brief

## Goal

Build a Smile Dental Center website that is very close to the SmilePro Dental reference layout. The reference is a premium dental homepage with a dark hero, gold CTAs, cream/blush content blocks, image-driven service cards, alternating treatment sections, trust/review sections, team cards, insurance content, a map, and a large footer.

## Page Personality

- Premium but approachable.
- Warm dental clinic, not generic medical startup.
- Strong use of real staff photography.
- High-contrast dark hero followed by soft cream and blush sections.
- Serif headings with refined gold accents.
- Clear CTAs for booking and calling.

## Recommended Homepage Section Order

1. Announcement/contact top bar.
2. Main navigation with centered logo.
3. Hero with dark blurred background, headline, rating, CTAs, and large team image.
4. Comprehensive services grid with six image cards.
5. Alternating featured service sections.
6. Why choose us benefit grid.
7. Dark appointment CTA and testimonial carousel.
8. Team card grid.
9. Insurance/payment section.
10. Visit us map section.
11. Office hours and footer CTA.
12. Footer quick links and service links.

## Build Guidance

- Start with a static homepage that mirrors the reference structure closely.
- Keep all editable text in `src/content/site.json` or split content files under `src/content/`.
- Use Smile Dental's uploaded photography first. Add placeholders only where a reference section needs more individual team or service photos.
- For missing business details, keep visible TODO content out of production UI and use safe fallback copy only during development.
- Prioritize desktop, iPad portrait, and mobile at the same time. The reference changes significantly between these widths.

## Current Business Details

- Practice name: Smile Dental Center
- Primary doctor image provided: Dr. Bassam Ali
- Missing: address, phone, hours, appointment URL, services list, insurance details, reviews, and official bios.

## Critical Similarities To Preserve

- Dark charcoal hero with a soft blurred background image.
- Gold rounded CTAs with uppercase labels.
- Cream and blush section backgrounds.
- Alternating two-column treatment sections with offset gold image borders.
- Thin gold line dividers with a centered small gold medallion.
- Team cards on a warm beige/cream panel.
- Mobile slide-out menu from the right with translucent overlay.
