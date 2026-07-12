import { CalendarDays, Phone } from "lucide-react";

type StickyCallBarProps = {
  phone: string;
  phoneHref: string;
};

export function StickyCallBar({ phone, phoneHref }: StickyCallBarProps) {
  return (
    <div className="sticky-call-bar" aria-label="Quick contact">
      <a
        className="sticky-call-bar__call"
        href={phoneHref}
        aria-label={`Call Smile Dental Care at ${phone}`}
      >
        <Phone aria-hidden="true" size={18} />
        Call {phone}
      </a>
      <a className="sticky-call-bar__book" href={phoneHref}>
        <CalendarDays aria-hidden="true" size={18} />
        Request Appointment
      </a>
    </div>
  );
}
