"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "monogram" | "wordmark";
  className?: string;
  size?: number;
}

export function Logo({ variant = "wordmark", className = "", size = 40 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>

      {variant === "wordmark" ? (
        /* ── Version horizontale : icon + "Redthorn" ── */
        <div
          className="flex items-center gap-2.5"
          style={{ height: size }}
        >
          {/* Icône dans un écrin crème — rend le fond blanc du PNG intentionnel */}
          <div
            className="flex-shrink-0 rounded overflow-hidden"
            style={{
              width: size,
              height: size,
              background: "#F0E6D0",
              padding: "3px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.40), 0 0 0 1px rgba(196,132,58,0.25)",
            }}
          >
            <Image
              src="/images/logo redthorne.png"
              alt="Redthorn"
              width={size}
              height={size}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Wordmark texte */}
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-semibold tracking-[0.12em] uppercase"
              style={{
                fontSize: size * 0.52,
                color: "#F0E6D0",
                textShadow: "0 1px 8px rgba(196,132,58,0.18)",
              }}
            >
              Redthorn
            </span>
            <span
              className="font-sans font-light tracking-[0.26em] uppercase"
              style={{
                fontSize: size * 0.28,
                color: "#6A5042",
              }}
            >
              Coaching Poker
            </span>
          </div>
        </div>
      ) : (
        /* ── Version monogramme : icône seule ── */
        <div
          className="flex-shrink-0 rounded overflow-hidden"
          style={{
            width: size,
            height: size,
            background: "#F0E6D0",
            padding: "4px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.40), 0 0 0 1px rgba(196,132,58,0.25)",
          }}
        >
          <Image
            src="/images/logo redthorne.png"
            alt="Redthorn"
            width={size}
            height={size}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      )}

    </Link>
  );
}
