import {
  ArrowUpRight,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { BrandMark } from "./BrandMark";

type NavigationItem = {
  label: string;
  href: string;
};

type FooterProps = {
  navigation: NavigationItem[];
  services: { title: string }[];
  addressLines: string[];
  phone: string;
  phoneHref: string;
  mapsUrl: string;
  facebookUrl: string;
};

export function Footer({
  navigation,
  services,
  addressLines,
  phone,
  phoneHref,
  mapsUrl,
  facebookUrl,
}: FooterProps) {
  return (
    <footer className="footer">
      <Image
        className="footer__texture"
        src="/images/generated/footer-charcoal-texture.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="container footer__main">
        <section className="footer__brand" aria-label="Smile Dental Care">
          <div className="footer__brand-card">
            <BrandMark />
          </div>
          <p>
            Family dentistry in Dearborn. Kind staff, clear care, and a
            welcoming place for your smile.
          </p>
          <div className="footer__socials" aria-label="Social links">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Smile Dental Care on Facebook"
            >
              <span aria-hidden="true">f</span>
            </a>
            <a href="#top" aria-label="Back to top">
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>

        <nav className="footer__column" aria-label="Footer quick links">
          <h2>Quick Links</h2>
          <a href="#top">Home</a>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="footer__column" aria-label="Footer services">
          <h2>Services</h2>
          {services.slice(0, 6).map((service) => (
            <a key={service.title} href="#care">
              {service.title}
            </a>
          ))}
        </nav>

        <section className="footer__column footer__contact">
          <h2>Contact Info</h2>
          <a href={phoneHref}>
            <Phone aria-hidden="true" size={18} />
            {phone}
          </a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" size={18} />
            <span>{addressLines.join(", ")}</span>
          </a>
          <p>
            <Clock aria-hidden="true" size={18} />
            <span>Call for hours and scheduling.</span>
          </p>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">f</span>
            Facebook updates
          </a>
        </section>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Smile Dental Care.</p>
        <div>
          <a href="#top">Privacy Policy</a>
          <a href="#top">Accessibility</a>
          <a href={phoneHref}>Call Now</a>
        </div>
      </div>
    </footer>
  );
}
