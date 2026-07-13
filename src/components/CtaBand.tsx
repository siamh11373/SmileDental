import { Phone } from "lucide-react";
import { AnimatedContent, MagneticLink } from "./MotionPrimitives";

type CtaBandProps = {
  phone: string;
  phoneHref: string;
  eyebrow: string;
  title: string;
};

export function CtaBand({ phone, phoneHref, eyebrow, title }: CtaBandProps) {
  return (
    <section className="cta-band" aria-label="Plan your visit">
      <AnimatedContent className="container cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h2 className="cta-band__title">{title}</h2>
        </div>
        <MagneticLink className="button button--gold" href={phoneHref}>
          <Phone aria-hidden="true" size={17} />
          Call {phone}
        </MagneticLink>
      </AnimatedContent>
    </section>
  );
}
