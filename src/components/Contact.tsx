import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { AnimatedContent, MagneticLink, SpotlightCard } from "./MotionPrimitives";

type ContactProps = {
  address: string;
  addressLines: string[];
  mapsUrl: string;
  phone: string;
  phoneHref: string;
  facebookUrl: string;
  buildingImage: string;
};

export function Contact({
  address,
  addressLines,
  mapsUrl,
  phone,
  phoneHref,
  facebookUrl,
  buildingImage,
}: ContactProps) {
  return (
    <>
      <section className="appointment-cta" id="contact">
        <div className="appointment-cta__texture" aria-hidden="true" />
        <div className="container appointment-cta__inner">
          <AnimatedContent>
            <p className="eyebrow eyebrow--light eyebrow--shimmer">
              Your next visit
            </p>
            <h2>Ready to give your smile a little more care?</h2>
          </AnimatedContent>
          <AnimatedContent delay={120}>
            <p>
              Call Smile Dental Care to ask a question or plan your visit with
              our Dearborn team.
            </p>
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
              <p className="eyebrow eyebrow--shimmer">Find us in Dearborn</p>
              <h2>Visit Smile Dental Care.</h2>
            </div>
            <p>
              Conveniently located on Dix Avenue. Use the map link for live
              directions, then call our team to plan your visit.
            </p>
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
                Open live directions
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
                Get directions
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <a
                className="visit-card__social"
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">f</span>
                Follow us on Facebook
              </a>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
