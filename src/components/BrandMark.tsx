import Link from "next/link";
import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({
  compact = false,
  inverse = false,
}: BrandMarkProps) {
  const logoSrc = compact
    ? "/favicon-512x512.png"
    : "/brand/smile-dental-logo-clean.png";
  const logoSize = compact
    ? { width: 512, height: 512 }
    : { width: 1281, height: 575 };

  return (
    <Link
      className={`brand-mark${compact ? " brand-mark--compact" : ""}${
        inverse ? " brand-mark--inverse" : ""
      }`}
      href="#top"
      aria-label="Smile Dental Care home"
    >
      <Image
        className="brand-mark__logo"
        src={logoSrc}
        alt=""
        aria-hidden="true"
        width={logoSize.width}
        height={logoSize.height}
        priority={!compact}
      />
    </Link>
  );
}
