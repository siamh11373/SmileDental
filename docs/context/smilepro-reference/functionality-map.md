# Functionality Map

## Navigation

Desktop navigation should support dropdowns for About, Invisalign, and Services. Keep the dropdowns simple, clean, and keyboard accessible. The reference has a premium but understated nav, so avoid large mega-menu visuals unless requested later.

Mobile and iPad compact navigation should use a right-side drawer. The drawer should include nested menu affordances for items with subpages.

Required nav actions:

- Logo links to home.
- Book Now links to appointment page or booking URL.
- Phone icon and Call Now use `tel:` links.
- Service cards link to service detail pages.
- Read More links go to related service pages.
- Contact links scroll or route to contact section/page.

## CTAs

Primary CTAs are gold filled pill buttons with uppercase serif or small caps labels. Secondary content CTAs are small outlined pills on light sections.

CTA examples:

- Book Now.
- Call Now.
- Request an Appointment.
- See All Our Services.
- Read More.
- About Us.

## Service Cards

Cards are clickable image tiles. Each tile has a white label band near the bottom. Desktop and tablet should use equal-height cards. Mobile cards should stay full-width and preserve image crop quality.

Implementation detail:

- Use real links, not div click handlers.
- Include descriptive alt text.
- Use hover states on desktop: slight image scale, label lift, or gold border.

## Featured Treatment Blocks

Each treatment block should have a heading, body, optional bullet list, image, and read-more link. Keep this data-driven so sections can be edited from content files.

Recommended content fields:

- `title`
- `slug`
- `summary`
- `bullets`
- `image`
- `imageAlt`
- `layout`
- `background`

## Testimonials

The reference presents testimonials as a carousel-like row in a dark section. For the first build, implement either:

- A simple accessible carousel with previous/next controls.
- A static responsive grid that becomes swipeable later.

Review cards should include quote title, star rating, body, and reviewer name. Do not invent real patient testimonials. Use placeholder labels or omit this section until approved reviews are supplied.

## Team Cards

Team cards should be data-driven and support missing portraits. If individual portraits are unavailable, use placeholders or crop from group photography temporarily.

Recommended content fields:

- `name`
- `role`
- `image`
- `bioUrl`
- `alt`

## Map And Contact

The map section should be a placeholder until the verified address is supplied. When available, embed a Google Map or link to Google Maps.

Contact section should include:

- Phone.
- Address.
- Hours.
- Appointment CTA.
- Optional contact form.

## Chat Widget

The live reference site shows a floating chat widget in some captures. Treat this as optional. Do not add a third-party chat service until the user chooses one.

## Accessibility Requirements

- Use semantic landmarks: header, nav, main, section, footer.
- Ensure all icons have accessible labels.
- Keep gold-on-white and gold-on-dark contrast readable.
- Mobile drawer must be keyboard navigable.
- Avoid putting essential text inside images.
- Use descriptive alt text for dental/team photos.
