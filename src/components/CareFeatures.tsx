import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatedContent, MagneticLink } from "./MotionPrimitives";

type CareFeature = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  layout: string;
  tone: string;
};

export function CareFeatures({
  features,
  phoneHref,
}: {
  features: CareFeature[];
  phoneHref: string;
}) {
  return (
    <div className="care-features" id="about">
      {features.map((feature, index) => (
        <section
          className={`care-feature care-feature--${feature.tone}`}
          key={feature.title}
        >
          <div
            className={`container care-feature__inner ${
              feature.layout === "image-left" ? "is-reversed" : ""
            }`}
          >
            <AnimatedContent className="care-feature__copy">
              <span className="care-feature__number">0{index + 1}</span>
              <p className="eyebrow eyebrow--shimmer">{feature.eyebrow}</p>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
              <MagneticLink className="text-link" href={phoneHref}>
                Start a conversation
                <ArrowUpRight aria-hidden="true" size={17} />
              </MagneticLink>
            </AnimatedContent>
            <AnimatedContent className="offset-media" delay={120}>
              <div className="offset-media__line" aria-hidden="true" />
              <div className="offset-media__image">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 899px) 100vw, 48vw"
                />
              </div>
            </AnimatedContent>
          </div>
        </section>
      ))}
    </div>
  );
}
