"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SYMBOLS = ["♠", "♣", "♥", "♦", "♠"];

// Palette Redthorn : bordeaux, ambre, rouge sombre
const STYLES = [
  { color: "rgba(123,30,42,0.45)",  glow: "rgba(123,30,42,0.25)" },
  { color: "rgba(196,132,58,0.30)", glow: "rgba(196,132,58,0.15)" },
  { color: "rgba(92,26,30,0.40)",   glow: "rgba(92,26,30,0.20)" },
  { color: "rgba(184,160,96,0.25)", glow: "rgba(184,160,96,0.12)" },
  { color: "rgba(155,37,53,0.35)",  glow: "rgba(155,37,53,0.18)" },
];

export function FloatingSymbols() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const elements = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    symbol: SYMBOLS[i % SYMBOLS.length],
    style: STYLES[i % STYLES.length],
    size: Math.random() * 32 + 14,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 25 + 28,
    delay: Math.random() * 18,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          style={{
            position: "absolute",
            fontSize: el.size,
            left: el.left,
            bottom: -80,
            color: el.style.color,
            filter: `drop-shadow(0 0 8px ${el.style.glow})`,
          }}
          animate={{
            y: ["0vh", "-115vh"],
            rotate: [0, 180],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {el.symbol}
        </motion.div>
      ))}
    </div>
  );
}
