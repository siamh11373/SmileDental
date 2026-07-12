import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { AnimatedContent, MagneticLink, SpotlightCard } from "./MotionPrimitives";
import { Stars } from "./Stars";

type ReviewHighlight = {
  name: string;
  quote: string;
};

type ReviewMention = {
  topic: string;
  count: number;
};

type ReviewsProps = {
  rating: number;
  count: number;
  profileUrl: string;
  mentions: ReviewMention[];
  highlights: ReviewHighlight[];
  eyebrow: string;
  title: string;
  body: string;
};

export function Reviews({
  rating,
  count,
  profileUrl,
  mentions,
  highlights,
  eyebrow,
  title,
  body,
}: ReviewsProps) {
  return (
    <section className="reviews section" id="reviews">
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
            <Stars
              rating={rating}
              size={26}
              label={`Rated ${rating} out of 5 stars on Google`}
            />
            <p className="reviews__score">
              <strong>{rating}</strong>
              <span>out of 5</span>
            </p>
            <p className="reviews__count">
              From {count} Google reviews and counting.
            </p>
            <ul className="reviews__mentions" aria-label="Most mentioned in reviews">
              {mentions.map((mention) => (
                <li key={mention.topic}>
                  “{mention.topic}” × {mention.count}
                </li>
              ))}
            </ul>
            <MagneticLink
              className="button button--gold"
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read Google Reviews
              <ArrowUpRight aria-hidden="true" size={17} />
            </MagneticLink>
          </AnimatedContent>

          <div className="reviews__grid">
            {highlights.map((review, index) => (
              <SpotlightCard
                className="review-card"
                key={review.name}
                role="article"
                style={{ "--motion-delay": `${index * 80}ms` } as CSSProperties}
              >
                <Stars rating={5} size={16} label="Five star Google review" />
                <blockquote>“{review.quote}”</blockquote>
                <footer>
                  <strong>{review.name}</strong>
                  <a href={profileUrl} target="_blank" rel="noreferrer">
                    Google review
                  </a>
                </footer>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
