import { Star } from "lucide-react";
import type { CSSProperties } from "react";

type StarsProps = {
  rating: number;
  size?: number;
  label?: string;
};

export function Stars({ rating, size = 20, label }: StarsProps) {
  const fill = Math.max(0, Math.min(100, (rating / 5) * 100));
  const stars = [0, 1, 2, 3, 4];

  return (
    <span
      className="stars"
      style={{ "--star-fill": `${fill}%` } as CSSProperties}
      role="img"
      aria-label={label ?? `Rated ${rating} out of 5 stars`}
    >
      <span className="stars__row stars__row--base" aria-hidden="true">
        {stars.map((index) => (
          <Star key={index} size={size} strokeWidth={1.4} />
        ))}
      </span>
      <span className="stars__row stars__row--fill" aria-hidden="true">
        {stars.map((index) => (
          <Star key={index} size={size} strokeWidth={1.4} />
        ))}
      </span>
    </span>
  );
}
