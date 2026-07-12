"use client";

import {
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type AnimatedContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function AnimatedContent({
  children,
  className = "",
  delay = 0,
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-reveal${isVisible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ "--motion-delay": `${delay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export function SplitText({ text }: { text: string }) {
  return (
    <span className="split-text" aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="split-text__word"
          key={`${word}-${index}`}
          style={{ "--word-index": index } as CSSProperties}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function MagneticLink({
  children,
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      className={`magnetic-link${className ? ` ${className}` : ""}`}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        node.style.setProperty("--magnet-x", `${x}px`);
        node.style.setProperty("--magnet-y", `${y}px`);
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        const node = ref.current;
        if (!node) return;
        node.style.setProperty("--magnet-x", "0px");
        node.style.setProperty("--magnet-y", "0px");
      }}
      {...props}
    >
      {children}
    </a>
  );
}

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SpotlightCard({
  children,
  className = "",
  onMouseMove,
  onMouseLeave,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`spotlight-card${className ? ` ${className}` : ""}`}
      onMouseMove={(event) => {
        onMouseMove?.(event);
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        node.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
        node.style.setProperty(
          "--tilt-x",
          `${((event.clientY - rect.top) / rect.height - 0.5) * -7}deg`,
        );
        node.style.setProperty(
          "--tilt-y",
          `${((event.clientX - rect.left) / rect.width - 0.5) * 7}deg`,
        );
      }}
      onMouseLeave={(event) => {
        onMouseLeave?.(event);
        const node = ref.current;
        if (!node) return;
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
      }}
      {...props}
    >
      {children}
    </div>
  );
}
