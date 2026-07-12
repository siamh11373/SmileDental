"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { MagneticLink } from "./MotionPrimitives";

type NavigationItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  addressLines: string[];
  phone: string;
  phoneHref: string;
  navigation: NavigationItem[];
};

export function Header({
  addressLines,
  phone,
  phoneHref,
  navigation,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 36);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const menuTrigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);

      if (event.key === "Tab") {
        const drawer = document.getElementById("mobile-navigation");
        const focusable = drawer?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p className="utility-bar__notice">
            <span>Welcoming</span>
            <strong>New Patients</strong>
          </p>
          <a
            className="utility-bar__address"
            href="#visit"
            aria-label={`Visit us at ${addressLines.join(", ")}`}
          >
            {addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </a>
          <a className="utility-bar__phone" href={phoneHref}>
            {phone}
          </a>
          <MagneticLink className="button button--gold button--small" href={phoneHref}>
            Call Now
          </MagneticLink>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="desktop-nav-actions">
            <MagneticLink className="desktop-nav-actions__phone" href={phoneHref}>
              <Phone aria-hidden="true" size={17} />
              Call Us
            </MagneticLink>
            <MagneticLink
              className="button button--gold button--small"
              href={phoneHref}
            >
              Book Appointment
            </MagneticLink>
          </div>
          <div className="nav-actions">
            <a
              className="nav-actions__phone"
              href={phoneHref}
              aria-label={`Call Smile Dental Care at ${phone}`}
            >
              <Phone aria-hidden="true" size={22} />
            </a>
            <button
              ref={triggerRef}
              className="nav-actions__menu"
              type="button"
              aria-label="Open navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={27} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          aria-modal="true"
          role="dialog"
        >
          <div className="mobile-nav__header">
            <BrandMark compact />
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <X aria-hidden="true" size={28} />
            </button>
          </div>
          <div className="mobile-nav__links">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav__footer">
            <p>Ready to book your visit?</p>
            <MagneticLink className="button button--gold" href={phoneHref}>
              <Phone aria-hidden="true" size={17} />
              {phone}
            </MagneticLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
