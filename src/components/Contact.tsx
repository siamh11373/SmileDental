import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { AnimatedContent, MagneticLink, SpotlightCard } from "./MotionPrimitives";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

type ContactProps = {
  address: string;
  addressLines: string[];
  mapsUrl: string;
  phone: string;
  phoneHref: string;
  facebookUrl: string;
  instagramUrl: string;
  buildingImage: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  visitEyebrow: string;
  visitTitle: string;
  visitBody: string;
};

export function Contact({
  address,
  addressLines,
  mapsUrl,
  phone,
  phoneHref,
  facebookUrl,
  instagramUrl,
  buildingImage,
  ctaEyebrow,
  ctaTitle,
  ctaBody,
  visitEyebrow,
  visitTitle,
  visitBody,
}: ContactProps) {
  return (
    <>
      <section className="appointment-cta" id="contact">
        <div className="appointment-cta__texture" aria-hidden="true" />
        <div className="container appointment-cta__inner">
          <AnimatedContent>
            <p className="eyebrow eyebrow--light eyebrow--shimmer">
              {ctaEyebrow}
            </p>
            <h2>{ctaTitle}</h2>
          </AnimatedContent>
          <AnimatedContent delay={120}>
            <p>{ctaBody}</p>
            <MagneticLink className="button button--gold" href={phoneHref}>
              <Phone aria-hidden="true" size={17} />
              {phone}
            </MagneticLink>
          </AnimatedContent>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="container">
          <AnimatedContent className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--shimmer">{visitEyebrow}</p>
              <h2>{visitTitle}</h2>
            </div>
            <p>{visitBody}</p>
          </AnimatedContent>

          <div className="visit__grid">
            <AnimatedContent className="visit__image">
              <Image
                src={buildingImage}
                alt="Smile Dental Care team in front of the clinic building"
                fill
                sizes="(max-width: 899px) 100vw, 64vw"
              />
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" size={18} />
                Get directions
              </a>
            </AnimatedContent>
            <SpotlightCard
              className="visit-card"
              aria-label="Contact details"
              role="complementary"
            >
              <div className="visit-card__route" aria-hidden="true" />
              <span className="visit-card__monogram" aria-hidden="true">
                SD
              </span>
              <div>
                <MapPin aria-hidden="true" size={21} />
                <p>{addressLines.join(", ")}</p>
              </div>
              <div>
                <Phone aria-hidden="true" size={21} />
                <a href={phoneHref}>{phone}</a>
              </div>
              <a
                className="text-link"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Get directions to ${address}`}
              >
                Open in Google Maps
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <div className="visit-card__socials" aria-label="Social media">
                <a
                  className="visit-card__social"
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon size={16} />
                  Facebook
                </a>
                <a
                  className="visit-card__social"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
