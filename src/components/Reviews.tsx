import { ArrowUpRight, Phone } from "lucide-react";
import type { CSSProperties } from "react";
import { AnimatedContent, MagneticLink, SpotlightCard } from "./MotionPrimitives";

type ReviewHighlight = {
  title: string;
  body: string;
};

type ReviewsProps = {
  profileUrl: string;
  highlights: ReviewHighlight[];
  phoneHref: string;
  eyebrow: string;
  title: string;
  body: string;
};

export function Reviews({
  profileUrl,
  highlights,
  phoneHref,
  eyebrow,
  title,
  body,
}: ReviewsProps) {
  return (
    <section className="reviews section" id="experience">
      <div className="container">
        <AnimatedContent className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--shimmer">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{body}</p>
        </AnimatedContent>

        <div className="reviews__layout">
          <AnimatedContent className="reviews__summary">
            <p className="reviews__kicker">Start here</p>
            <p className="reviews__score">
              <strong>Call</strong>
              <span>for current scheduling</span>
            </p>
            <p className="reviews__count">
              We will help you confirm availability, directions, and the right
              appointment type before you visit.
            </p>
            <div className="reviews__actions">
              <MagneticLink className="button button--gold" href={phoneHref}>
                <Phone aria-hidden="true" size={17} />
                Call to Schedule
              </MagneticLink>
              <MagneticLink
                className="button button--ghost-light"
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
              >
                Google Profile
                <ArrowUpRight aria-hidden="true" size={17} />
              </MagneticLink>
            </div>
          </AnimatedContent>

          <div className="reviews__grid">
            {highlights.map((highlight, index) => (
              <SpotlightCard
                className="review-card"
                key={highlight.title}
                role="article"
                style={{ "--motion-delay": `${index * 80}ms` } as CSSProperties}
              >
                <span className="review-card__index">0{index + 1}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.body}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
