import { ArrowDown, ArrowUpRight, Check, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedContent, MagneticLink, SplitText } from "./MotionPrimitives";
import { Stars } from "./Stars";

type HeroProps = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  phoneHref: string;
  teamImage: string;
  trustChips: string[];
  rating: number;
  reviewCount: number;
  reviewsUrl: string;
};

export function Hero({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  phoneHref,
  teamImage,
  trustChips,
  rating,
  reviewCount,
  reviewsUrl,
}: HeroProps) {
  return (
    <section className="hero" id="top">
      <Image
        className="hero__ambient-image"
        src="/images/generated/hero-ambient-charcoal-gold.png"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__inner">
        <AnimatedContent className="hero__copy">
          <p className="eyebrow eyebrow--light eyebrow--shimmer">{eyebrow}</p>
          <h1>
            <SplitText text={headline} />
          </h1>
          <p className="hero__body">{body}</p>
          <a
            className="hero__rating"
            href={reviewsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Rated ${rating} stars from ${reviewCount} Google reviews — read them on Google`}
          >
            <Stars rating={rating} size={19} />
            <span>
              <strong>{rating} Rating</strong> From {reviewCount} Google Reviews
            </span>
          </a>
          <div className="hero__actions">
            <MagneticLink className="button button--gold hero__call" href={phoneHref}>
              <Phone aria-hidden="true" size={18} />
              {primaryCta}
            </MagneticLink>
            <MagneticLink className="button button--ghost-light" href="#team">
              {secondaryCta}
              <ArrowUpRight aria-hidden="true" size={17} />
            </MagneticLink>
          </div>
          <ul className="hero__trust" aria-label="Practice highlights">
            {trustChips.map((chip) => (
              <li key={chip}>
                <Check aria-hidden="true" size={14} strokeWidth={2.5} />
                {chip}
              </li>
            ))}
          </ul>
        </AnimatedContent>

        <AnimatedContent className="hero__media" delay={140}>
          <div className="hero__media-frame">
            <Image
              src={teamImage}
              alt="Smile Dental Care team outside the Dearborn clinic"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 56vw"
            />
          </div>
          <div className="hero__media-label">
            <span>Dearborn team</span>
            <strong>Ready for your smile</strong>
          </div>
        </AnimatedContent>
      </div>
      <a className="hero__scroll" href="#care" aria-label="Explore our care">
        <span>Explore</span>
        <ArrowDown aria-hidden="true" size={17} />
      </a>
    </section>
  );
}
