import type { CSSProperties } from "react";
import { AnimatedContent, SpotlightCard } from "./MotionPrimitives";

type Benefit = {
  number: string;
  title: string;
  body: string;
};

export function WhyChooseUs({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <AnimatedContent className="section-heading section-heading--center">
          <p className="eyebrow eyebrow--shimmer">Why Smile Dental Care</p>
          <h2>Professional care. A genuinely welcoming experience.</h2>
        </AnimatedContent>
        <div className="why-us__grid">
          {benefits.map((benefit, index) => (
            <SpotlightCard
              key={benefit.number}
              role="article"
              style={{ "--motion-delay": `${index * 80}ms` } as CSSProperties}
            >
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
