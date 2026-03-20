"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "monogram" | "wordmark";
  className?: string;
  size?: number;
}

export function Logo({ variant = "wordmark", className = "", size = 40 }: LogoProps) {
  const iconSize = variant === "monogram" ? size : size;

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Symbole Redthorn — Pique + Rose */}
      <div style={{ width: iconSize, height: iconSize }} className="flex-shrink-0">
        <svg
          viewBox="0 0 60 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(123,30,42,0.50)]"
        >
          <defs>
            {/* Dégradé bordeaux pour le pique */}
            <linearGradient id="spadeGrad" x1="30" y1="4" x2="30" y2="73" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5C1220" />
              <stop offset="50%" stopColor="#7B1E2A" />
              <stop offset="100%" stopColor="#3A0C14" />
            </linearGradient>
            {/* Dégradé doré pour le contour */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A84B" />
              <stop offset="50%" stopColor="#B8903A" />
              <stop offset="100%" stopColor="#C4A055" />
            </linearGradient>
            {/* Clip du pique pour la rose */}
            <clipPath id="spadeClip">
              <path d="M30 5 C30 5 5 22 5 43 C5 55 13 62 22 59 C18 66 16 71 13 74 L47 74 C44 71 42 66 38 59 C47 62 55 55 55 43 C55 22 30 5 30 5 Z" />
            </clipPath>
            {/* Lueur ambre derrière le logo */}
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(196,132,58,0.25)" />
              <stop offset="100%" stopColor="rgba(196,132,58,0)" />
            </radialGradient>
          </defs>

          {/* Lueur derrière */}
          <ellipse cx="30" cy="40" rx="28" ry="32" fill="url(#glowGrad)" />

          {/* Corps du pique */}
          <path
            d="M30 5 C30 5 5 22 5 43 C5 55 13 62 22 59 C18 66 16 71 13 74 L47 74 C44 71 42 66 38 59 C47 62 55 55 55 43 C55 22 30 5 30 5 Z"
            fill="url(#spadeGrad)"
          />

          {/* Contour doré du pique */}
          <path
            d="M30 5 C30 5 5 22 5 43 C5 55 13 62 22 59 C18 66 16 71 13 74 L47 74 C44 71 42 66 38 59 C47 62 55 55 55 43 C55 22 30 5 30 5 Z"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="0.7"
            opacity="0.6"
          />

          {/* Rose — pétales extérieurs (5) */}
          <g clipPath="url(#spadeClip)" transform="translate(30, 38)">
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <ellipse
                key={`outer-${i}`}
                cx="0"
                cy="-10"
                rx="7"
                ry="12"
                fill={i % 2 === 0 ? "#8B2535" : "#7A1E2D"}
                fillOpacity="0.92"
                transform={`rotate(${angle})`}
              />
            ))}

            {/* Pétales intérieurs (5) */}
            {[36, 108, 180, 252, 324].map((angle, i) => (
              <ellipse
                key={`inner-${i}`}
                cx="0"
                cy="-6.5"
                rx="5"
                ry="8"
                fill="#A83040"
                fillOpacity="0.95"
                transform={`rotate(${angle})`}
              />
            ))}

            {/* Bouton central */}
            <circle r="4.5" fill="#C03850" />
            <circle r="2.5" fill="#D04060" />
            <circle r="1" fill="#E87080" />

            {/* Reflet sur la rose */}
            <ellipse cx="-1.5" cy="-2" rx="2" ry="1.5" fill="rgba(255,255,255,0.12)" />
          </g>
        </svg>
      </div>

      {/* Wordmark */}
      {variant === "wordmark" && (
        <div
          className="flex flex-col leading-none"
          style={{ fontSize: size * 0.52 }}
        >
          <span
            className="font-display font-semibold tracking-[0.12em] uppercase"
            style={{
              color: "#F0E6D0",
              letterSpacing: "0.14em",
              textShadow: "0 1px 8px rgba(196,132,58,0.20)",
            }}
          >
            Redthorn
          </span>
          <span
            className="font-sans font-light tracking-[0.22em] uppercase"
            style={{
              fontSize: size * 0.28,
              color: "#8A7060",
              letterSpacing: "0.28em",
            }}
          >
            Coaching Poker
          </span>
        </div>
      )}
    </Link>
  );
}
