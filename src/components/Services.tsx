import {
  CalendarDays,
  HeartHandshake,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { AnimatedContent, SpotlightCard } from "./MotionPrimitives";

type Service = {
  number: string;
  title: string;
  summary: string;
  icon: string;
};

type ServicesProps = {
  services: Service[];
  eyebrow: string;
  title: string;
  body: string;
};

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  wand: WandSparkles,
  heart: HeartHandshake,
  message: MessageCircleMore,
  calendar: CalendarDays,
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
            const Icon = icons[service.icon] ?? Sparkles;
            return (
              <SpotlightCard
                className="service-card"
                key={service.number}
                role="article"
                style={{ "--motion-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="service-card__top">
                  <span>{service.number}</span>
                  <Icon aria-hidden="true" size={28} strokeWidth={1.35} />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <a href="#contact" aria-label={`Ask about ${service.title}`}>
                  Ask our team
                  <span aria-hidden="true">↗</span>
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
