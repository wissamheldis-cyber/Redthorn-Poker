"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

// ─── Pétales déterministes (évite les erreurs d'hydratation SSR) ───────────
const PETALS = Array.from({ length: 26 }, (_, i) => {
  const a = ((i * 7919 + 12345) % 1000) / 1000;
  const b = ((i * 3571 + 98765) % 1000) / 1000;
  const c = ((i * 1234 + 45678) % 1000) / 1000;
  const d = ((i * 9876 + 11111) % 1000) / 1000;
  const e = ((i * 2468 + 33333) % 1000) / 1000;
  const layer = i % 3; // 0 = fond, 1 = milieu, 2 = avant
  return {
    id: i,
    size: a * 36 + 16,                     // 16 – 52 px
    left: b * 100,                          // 0 – 100 %
    delay: c * 3.8,                         // 0 – 3.8 s
    duration: d * 5 + 7,                    // 7 – 12 s
    rotStart: e * 360,
    rotEnd: (a - 0.5) * 540,               // ±270 °
    driftX: (b - 0.5) * 90,               // ±45 px
    opacity: layer === 0 ? 0.35 : layer === 1 ? 0.60 : 0.85,
    scale:   layer === 0 ? 0.70 : layer === 1 ? 0.90 : 1.10,
    blur:    layer === 0 ? 1.5 : layer === 1 ? 0.5 : 0,
  };
});

// ─── Composant pétale velours ──────────────────────────────────────────────
function VelvetPetal({ p }: { p: (typeof PETALS)[0] }) {
  const gId = `pvg${p.id}`;
  const sId = `pvs${p.id}`;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${p.left}%`,
        top: -70,
        opacity: p.opacity,
        filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
        willChange: "transform",
      }}
      animate={{
        y: ["0px", "115vh"],
        rotate: [p.rotStart, p.rotStart + p.rotEnd],
        x: [0, p.driftX * 0.4, p.driftX, p.driftX * 0.6, 0],
      }}
      transition={{
        duration: p.duration,
        delay: p.delay,
        repeat: Infinity,
        ease: "linear",
        x: {
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.55, 0.80, 1],
        },
      }}
    >
      <svg
        viewBox="-14 -68 28 70"
        width={p.size * p.scale}
        height={p.size * p.scale * 2.4}
        style={{
          filter: `drop-shadow(0 6px 12px rgba(100,10,25,${0.55 * p.opacity}))`,
          overflow: "visible",
        }}
      >
        <defs>
          {/* ── Dégradé velours : cœur chaud → bords sombres absorbants ── */}
          <radialGradient id={gId} cx="36%" cy="30%" r="65%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#D04868" />  {/* reflet chaud */}
            <stop offset="18%"  stopColor="#B03050" />
            <stop offset="40%"  stopColor="#8B1E30" />  {/* bordeaux central */}
            <stop offset="65%"  stopColor="#620F22" />  {/* ombre velours */}
            <stop offset="85%"  stopColor="#3E0812" />  {/* bord absorbant */}
            <stop offset="100%" stopColor="#1C0308" />  {/* noir velours */}
          </radialGradient>

          {/* ── Reflet directionnel (pli du velours) ── */}
          <linearGradient id={sId} x1="15%" y1="8%" x2="85%" y2="92%">
            <stop offset="0%"   stopColor="rgba(255,160,140,0.22)" />
            <stop offset="25%"  stopColor="rgba(255,140,120,0.10)" />
            <stop offset="55%"  stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(30,0,8,0.14)" />
          </linearGradient>
        </defs>

        {/* Corps du pétale — larme effilée légèrement asymétrique */}
        <path
          d="M 0 0
             C -8 -10 -13 -26 -12 -42
             C -11 -56 -5 -65 0 -67
             C 5 -65 12 -56 12 -42
             C 13 -26 8 -10 0 0 Z"
          fill={`url(#${gId})`}
        />

        {/* Couche reflet velours */}
        <path
          d="M 0 0
             C -8 -10 -13 -26 -12 -42
             C -11 -56 -5 -65 0 -67
             C 5 -65 12 -56 12 -42
             C 13 -26 8 -10 0 0 Z"
          fill={`url(#${sId})`}
        />

        {/* Nervure centrale */}
        <path
          d="M 0 -1 C 0.4 -22 0.2 -46 0 -65"
          stroke="rgba(210,90,110,0.18)"
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Nervures latérales */}
        <path d="M 0 -22 C -4 -28 -7 -34 -9 -42" stroke="rgba(210,90,110,0.10)" strokeWidth="0.4" fill="none" />
        <path d="M 0 -22 C  4 -28  7 -34  9 -42" stroke="rgba(210,90,110,0.10)" strokeWidth="0.4" fill="none" />
      </svg>
    </motion.div>
  );
}

// ─── Mots du slogan avec animation décalée ────────────────────────────────
const SLOGAN_LINES = [
  { text: "Le coaching poker",       delay: 1.3 },
  { text: "qui commence",            delay: 1.75 },
  { text: "après la partie.",        delay: 2.2 },
];

// ─── Page de chargement principale ────────────────────────────────────────
interface LoadingScreenProps {
  isVisible: boolean;
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] overflow-hidden flex flex-col items-center justify-center"
          style={{
            background: "rgba(4, 1, 0, 0.97)",
            backgroundImage: `
              linear-gradient(rgba(4,1,0,0.72), rgba(4,1,0,0.72)),
              url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* ── Lueur centrale ambre ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 50% 46%, rgba(196,132,58,0.09) 0%, transparent 70%)",
            }}
          />

          {/* ── Grille fine ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(196,132,58,0.025) 80px, rgba(196,132,58,0.025) 81px),
                repeating-linear-gradient(0deg,  transparent, transparent 80px, rgba(196,132,58,0.025) 80px, rgba(196,132,58,0.025) 81px)
              `,
              opacity: 0.5,
            }}
          />

          {/* ── Pluie de pétales velours ── */}
          <div className="absolute inset-0 pointer-events-none">
            {PETALS.map((p) => (
              <VelvetPetal key={p.id} p={p} />
            ))}
          </div>

          {/* ── Contenu central ── */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, type: "spring", bounce: 0.25 }}
            >
              <Logo variant="wordmark" size={52} />
            </motion.div>

            {/* Filet ambre */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
              style={{
                width: 200,
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(196,132,58,0.55), transparent)",
                transformOrigin: "center",
              }}
            />

            {/* Slogan */}
            <div className="flex flex-col items-center gap-1">
              {SLOGAN_LINES.map(({ text, delay }) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay, ease: "easeOut" }}
                  className="font-display font-light tracking-[0.08em]"
                  style={{
                    fontSize: "clamp(1.1rem, 2.8vw, 1.65rem)",
                    color: "#C8B89A",
                    lineHeight: 1.35,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Barre de chargement bordeaux → ambre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-48 h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(26,13,7,0.80)" }}
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, delay: 2.7, ease: "easeInOut" }}
                  style={{
                    height: "100%",
                    borderRadius: 9999,
                    background: "linear-gradient(90deg, #5C1A1E, #9B2535, #C4843A)",
                  }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="font-sans text-[10px] tracking-[0.28em] uppercase"
                style={{ color: "#4A3020" }}
              >
                Accès au club…
              </motion.p>
            </motion.div>
          </div>

          {/* ── Personnage ancré en bas ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring", damping: 26 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: "min(48vw, 560px)" }}
          >
            <img
              src="/images/Gemini_Generated_Image_wb9rq9wb9rq9wb9r.png"
              alt=""
              className="w-full h-auto object-contain object-bottom"
              style={{
                filter: "drop-shadow(-6px 0 30px rgba(123,30,42,0.40))",
                maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* ── Dégradé bas de page ── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(4,1,0,0.85), transparent)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
