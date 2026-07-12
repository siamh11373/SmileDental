# Responsive Notes

## Captured Viewports

- Desktop: `1440 x 2200`, full page height about `13989`.
- iPad portrait: `834 x 1194`, full page height about `15382`.
- iPad landscape: `1194 x 834`, full page height about `14090`.
- Mobile: `390 x 844`, full page height about `21614`.

## Desktop Behavior

Desktop uses the complete two-row header. The top utility bar is always visible at the top of the page. The main nav is slim, centered, and link-heavy. The hero has a strong two-column composition with text on the left and team image on the right.

Desktop grids:

- Services: three columns.
- Featured service sections: two columns, alternating image/text order.
- Why choose: four narrow columns inside one panel.
- Testimonials: three columns/carousel cards.
- Team: centered card grid with three cards on the first row and four on the second.

## iPad Portrait Behavior

iPad portrait is not just a shrunken desktop. The utility bar remains visible, but the main navigation becomes a white floating bar with logo, hamburger, and phone icon. The hero content has more vertical flow: text and CTAs sit above a large team image.

iPad grids:

- Services: two columns.
- Featured service sections: mostly still two-column, but text and images are narrower.
- Why choose: two-by-two or compressed four-column panel depending on implementation width.
- Team: two or three columns depending on card width.

The iPad menu opens as a translucent light panel sliding from the right/center over the page. It shows the SmilePro logo at the top, hamburger/close and phone icons, and vertical nav items.

## iPad Landscape Behavior

iPad landscape is closer to desktop. The layout keeps wider two-column treatment sections and denser grids. It may still use compact navigation depending on exact breakpoint.

Use `1024px` as the practical breakpoint where the layout can start behaving more like desktop.

## Mobile Behavior

Mobile uses a large white header with the logo on the left and two icons on the right:

- Hamburger around the upper-right area.
- Phone icon at the far right.

The dark top utility bar is hidden on mobile. The hero stacks vertically:

1. Headline.
2. Large team image.
3. Supporting text.
4. Large rounded CTA buttons.
5. Rating row.

Mobile grids:

- Services: one column.
- Featured service sections: stacked text and image, with generous vertical spacing.
- Why choose: stacked benefit cards.
- Testimonials: one card at a time or vertical stack.
- Team: one or two columns, but one column is safest at `390px`.
- Footer: stacked blocks with centered text.

## Mobile Menu

The mobile menu opens from the right as a translucent off-white panel over the hero. The left side of the page remains visible and darkened. The panel has a large rounded top-left corner, logo at top, close icon, phone icon, and a vertical list of nav items.

Visible menu items:

- About with a dropdown chevron.
- Invisalign with a dropdown chevron.
- Offers.
- Services with a dropdown chevron.
- Appointment.
- Contact.
- Blog.

For Smile Dental, implement this as an accessible drawer:

- Use a real button for open/close.
- Trap focus while open.
- Close on Escape and overlay click.
- Use `aria-expanded`, `aria-controls`, and `aria-label`.
- Keep phone as a `tel:` link.

## Suggested Breakpoints

- `0-639px`: mobile stacked layout.
- `640-899px`: large mobile/small tablet with one or two column cards.
- `900-1199px`: iPad/tablet layout with compact nav and two-column content.
- `1200px+`: desktop layout with full navigation and wider sections.
