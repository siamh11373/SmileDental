import { Phone } from "lucide-react";
import { AnimatedContent, MagneticLink } from "./MotionPrimitives";

type CtaBandProps = {
  phone: string;
  phoneHref: string;
};

export function CtaBand({ phone, phoneHref }: CtaBandProps) {
  return (
    <section className="cta-band" aria-label="Plan your visit">
      <AnimatedContent className="container cta-band__inner">
        <div>
          <p className="eyebrow eyebrow--light">Ready when you are</p>
          <p className="cta-band__title">
            Have a question, or ready to plan your visit?
          </p>
        </div>
        <MagneticLink className="button button--gold" href={phoneHref}>
          <Phone aria-hidden="true" size={17} />
          Call {phone}
        </MagneticLink>
      </AnimatedContent>
    </section>
  );
}
