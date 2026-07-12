import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({
  compact = false,
  inverse = false,
}: BrandMarkProps) {
  return (
    <Link
      className={`brand-mark${compact ? " brand-mark--compact" : ""}${
        inverse ? " brand-mark--inverse" : ""
      }`}
      href="#top"
      aria-label="Smile Dental Care home"
    >
      <span className="brand-mark__monogram" aria-hidden="true">
        SD
      </span>
      <span className="brand-mark__words">
        <strong>Smile Dental</strong>
        <small>Care</small>
      </span>
    </Link>
  );
}
