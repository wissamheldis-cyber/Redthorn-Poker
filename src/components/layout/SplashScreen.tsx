"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/brand/Logo";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "rgba(6, 2, 1, 0.97)",
            backgroundImage: `
              linear-gradient(rgba(6, 2, 1, 0.55), rgba(6, 2, 1, 0.55)),
              url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Lueur centrale ambre */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(196,132,58,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Filets lumineux subtils */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(196,132,58,0.04) 80px, rgba(196,132,58,0.04) 81px)",
            }}
          />

          {/* Contenu central */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-8">
            {/* Logo Redthorn */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.3 }}
            >
              <Logo size={64} variant="wordmark" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-xs tracking-[0.30em] uppercase font-sans"
              style={{ color: "#6A5042" }}
            >
              Accès au club en cours…
            </motion.p>

            {/* Barre de chargement bordeaux */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="w-56 h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(26, 13, 7, 0.80)" }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: "easeInOut", delay: 1.1 }}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #5C1A1E, #9B2535, #C4843A)",
                }}
              />
            </motion.div>
          </div>

          {/* Personnage principal — ancré en bas */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, type: "spring", damping: 28 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ width: "min(55vw, 640px)" }}
          >
            <img
              src="/images/Gemini_Generated_Image_wb9rq9wb9rq9wb9r.png"
              alt="Redthorn Guide"
              className="w-full h-auto object-contain object-bottom"
              style={{
                filter: "drop-shadow(0 -20px 60px rgba(123,30,42,0.35))",
                maskImage:
                  "linear-gradient(to top, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 55%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
