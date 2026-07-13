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
      <span className="brand-mark__icon" aria-hidden="true">
        <svg viewBox="0 0 96 96" focusable="false">
          <path
            d="M22.8 32c4.6-14 19.7-15.3 26.7-6.6 7-8.7 22.1-7.4 26.7 6.6 4.2 12.7-1.6 32.5-13.9 46.4-3.8 4.3-9.9 1.5-9.9-4.2V61.1c0-3.3-1.3-6.1-2.8-6.1s-2.8 2.8-2.8 6.1v13.1c0 5.7-6.1 8.5-9.9 4.2C24.4 64.5 18.6 44.7 22.8 32Z"
            fill="currentColor"
          />
          <path
            d="M29.1 36.1c3.5-9.9 14-9.8 20.3-2.4 6.2-7.4 16.8-7.5 20.3 2.4"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <path
            d="M31.7 55.3c10.6 9.3 25.2 9.3 35.8 0"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="4.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-mark__words">
        <strong>Smile Dental</strong>
        <small>Care</small>
      </span>
    </Link>
  );
}
