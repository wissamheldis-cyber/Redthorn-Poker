"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENTORS } from "@/mock-data/mentors";
import { ChevronLeft, ChevronRight, BarChart3, Fingerprint } from "lucide-react";
import { toast } from "sonner";

export function MentorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((p) => (p + 1) % MENTORS.length);
  const handlePrev = () => setActiveIndex((p) => (p - 1 + MENTORS.length) % MENTORS.length);

  const activeMentor = MENTORS[activeIndex];

  return (
    <div className="relative w-full py-8 pb-16 flex flex-col items-center overflow-hidden">

      {/* ── Carousel 3D ── */}
      <div className="relative h-[380px] w-full max-w-5xl mx-auto flex items-center justify-center" style={{ perspective: "1100px" }}>
        <AnimatePresence initial={false} mode="popLayout">
          {MENTORS.map((mentor, index) => {
            const isActive = index === activeIndex;
            let dist = index - activeIndex;
            if (dist > MENTORS.length / 2) dist -= MENTORS.length;
            if (dist < -MENTORS.length / 2) dist += MENTORS.length;
            if (Math.abs(dist) > 2) return null;

            return (
              <motion.div
                key={mentor.id}
                layout
                initial={{ opacity: 0, x: dist > 0 ? 200 : -200, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  x: dist * 210,
                  z: isActive ? 80 : -Math.abs(dist) * 140,
                  scale: isActive ? 1.08 : 0.78,
                  rotateY: dist * -22,
                  filter: isActive ? "blur(0px)" : `blur(${Math.abs(dist) * 2.5}px)`,
                }}
                exit={{ opacity: 0, scale: 0.5, z: -300 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className={`absolute w-[300px] h-[360px] flex flex-col items-center justify-end cursor-pointer ${isActive ? "z-50" : "z-auto"}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Halo de couleur derrière l'actif */}
                {isActive && (
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full blur-[70px] -z-10 pointer-events-none"
                    style={{ background: `${mentor.accentColor}28` }}
                  />
                )}

                <img
                  src={mentor.imageSrc}
                  onError={(e) => { e.currentTarget.src = mentor.fallbackSrc; }}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top rounded-lg"
                  style={{
                    boxShadow: isActive
                      ? `0 24px 60px rgba(0,0,0,0.60), 0 0 0 1px ${mentor.accentColor}30`
                      : "0 8px 20px rgba(0,0,0,0.40)",
                  }}
                />

                {/* Nom en bas de la carte active */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg"
                    style={{
                      background: "linear-gradient(to top, rgba(8,3,1,0.92) 0%, transparent 100%)",
                    }}
                  >
                    <p className="font-display text-sm font-semibold text-center" style={{ color: "#F0E6D0" }}>
                      {mentor.name}
                    </p>
                    <p className="text-[10px] text-center tracking-wider uppercase mt-0.5" style={{ color: mentor.accentColor }}>
                      {mentor.role}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-50 p-3 rounded-full transition-all"
          style={{
            background: "rgba(18,9,4,0.90)",
            border: "1px solid rgba(196,132,58,0.18)",
            color: "#C8B89A",
          }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-50 p-3 rounded-full transition-all"
          style={{
            background: "rgba(18,9,4,0.90)",
            border: "1px solid rgba(196,132,58,0.18)",
            color: "#C8B89A",
          }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── Fiche mentor active ── */}
      <motion.div
        key={`desc-${activeMentor.id}`}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="w-full max-w-4xl mx-auto mt-6 px-4"
      >
        <div
          className="rounded-xl p-7 relative overflow-hidden"
          style={{
            background: "rgba(18, 9, 4, 0.90)",
            border: `1px solid ${activeMentor.accentColor}28`,
            boxShadow: `0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 ${activeMentor.accentColor}12`,
          }}
        >
          {/* Barre couleur accent en haut */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${activeMentor.accentColor}70, transparent)` }}
          />

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            {/* Description */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4" style={{ color: activeMentor.accentColor }} />
                <span className="text-xs font-medium tracking-[0.18em] uppercase" style={{ color: activeMentor.accentColor }}>
                  {activeMentor.role}
                </span>
              </div>
              <h2 className="font-display text-3xl font-semibold" style={{ color: "#F0E6D0" }}>
                {activeMentor.name}
              </h2>
              <p
                className="text-base italic font-light pl-4 py-1"
                style={{
                  color: "#C8B89A",
                  borderLeft: `3px solid ${activeMentor.accentColor}50`,
                }}
              >
                "{activeMentor.motto}"
              </p>
              <p className="text-sm leading-relaxed font-sans" style={{ color: "#6A5042" }}>
                {activeMentor.philosophy}
              </p>
            </div>

            {/* Stats */}
            <div className="flex-1 min-w-[260px] flex flex-col justify-center gap-3">
              <h3 className="text-xs font-medium tracking-[0.18em] uppercase mb-1 flex items-center gap-2" style={{ color: "#6A5042" }}>
                <BarChart3 className="w-3.5 h-3.5" /> Impact Estimé
              </h3>
              {activeMentor.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + idx * 0.08 }}
                  className="flex items-center justify-between px-4 py-3 rounded"
                  style={{
                    background: "rgba(12,6,2,0.60)",
                    border: "1px solid rgba(196,132,58,0.08)",
                  }}
                >
                  <span className="text-sm font-sans" style={{ color: "#8A7060" }}>{stat.label}</span>
                  <span className="text-sm font-semibold font-sans" style={{ color: activeMentor.accentColor }}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recommandation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-6 p-5 rounded relative overflow-hidden"
            style={{
              background: "rgba(10,5,2,0.70)",
              border: `1px solid ${activeMentor.accentColor}18`,
              borderLeft: `2px solid ${activeMentor.accentColor}55`,
            }}
          >
            <p className="text-[10px] font-medium tracking-[0.20em] uppercase mb-2" style={{ color: activeMentor.accentColor }}>
              Recommandation
            </p>
            <p className="text-sm leading-relaxed font-sans" style={{ color: "#8A7060" }}>
              {activeMentor.whyThisMentor}
            </p>
            <button
              onClick={() =>
                toast.info("Session bientôt disponible", {
                  description: `${activeMentor.name} sera disponible en V1.`,
                })
              }
              className="mt-3 text-xs font-medium flex items-center gap-1 transition-opacity hover:opacity-80"
              style={{ color: activeMentor.accentColor }}
            >
              Démarrer une session <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

