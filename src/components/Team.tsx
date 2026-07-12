import { ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedContent, MagneticLink, SpotlightCard } from "./MotionPrimitives";

type TeamProps = {
  doctorName: string;
  doctorImage: string;
  teamImage: string;
  phoneHref: string;
  eyebrow: string;
  title: string;
  body: string;
  storyTitle: string;
  storyBody: string;
};

export function Team({
  doctorName,
  doctorImage,
  teamImage,
  phoneHref,
  eyebrow,
  title,
  body,
  storyTitle,
  storyBody,
}: TeamProps) {
  return (
    <section className="team section" id="team">
      <div className="container">
        <AnimatedContent className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--shimmer">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{body}</p>
        </AnimatedContent>

        <div className="team__layout">
          <SpotlightCard className="doctor-card" role="article">
            <div className="doctor-card__image">
              <Image
                src={doctorImage}
                alt={`${doctorName} of Smile Dental Care`}
                fill
                sizes="(max-width: 699px) 100vw, 36vw"
              />
            </div>
            <div className="doctor-card__body">
              <p>Dentist</p>
              <h3>{doctorName}</h3>
              <MagneticLink href={phoneHref}>
                Schedule a visit
                <ArrowUpRight aria-hidden="true" size={17} />
              </MagneticLink>
            </div>
          </SpotlightCard>

          <AnimatedContent className="team-story" delay={130}>
            <div className="team-story__image">
              <Image
                src={teamImage}
                alt="The Smile Dental Care team standing outside the clinic"
                fill
                sizes="(max-width: 899px) 100vw, 60vw"
              />
            </div>
            <div className="team-story__body">
              <span>{storyTitle}</span>
              <p>{storyBody}</p>
              <MagneticLink className="button button--outline" href={phoneHref}>
                <Phone aria-hidden="true" size={17} />
                Call our team
              </MagneticLink>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
