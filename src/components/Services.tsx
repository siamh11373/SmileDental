import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { AnimatedContent, SpotlightCard } from "./MotionPrimitives";

type Service = {
  number: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

type ServicesProps = {
  services: Service[];
  eyebrow: string;
  title: string;
  body: string;
};

export function Services({ services, eyebrow, title, body }: ServicesProps) {
  return (
    <section className="services section" id="care">
      <div className="container">
        <AnimatedContent className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--shimmer">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{body}</p>
        </AnimatedContent>

        <div className="services__grid">
          {services.map((service, index) => {
            return (
              <SpotlightCard
                className="service-card"
                key={service.number}
                role="article"
                style={{ "--motion-delay": `${index * 70}ms` } as CSSProperties}
              >
                <a
                  className="service-card__link"
                  href="#contact"
                  aria-label={`Call to ask about ${service.title}`}
                >
                  <div className="service-card__image">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 899px) 50vw, 33vw"
                    />
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__top">
                      <span>{service.number}</span>
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.summary}</p>
                    </div>
                    <span className="service-card__cta">
                      Ask our team
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </span>
                  </div>
                </a>
              </SpotlightCard>
            );
          })}
        </div>
        <p className="services__disclaimer">
          Looking for something specific? Call us and we&apos;ll help you find
          the right next step.
        </p>
      </div>
    </section>
  );
}
