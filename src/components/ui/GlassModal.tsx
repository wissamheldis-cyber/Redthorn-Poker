"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  nashImageSrc?: string;
  nashMood?: "explaining" | "warning" | "thinking" | "coaching" | "welcome";
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  children,
  nashImageSrc,
}: GlassModalProps) {
  const guideImage =
    nashImageSrc || "/images/Gemini_Generated_Image_7y7ubq7y7ubq7y7u.png";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop sombre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
            style={{ background: "rgba(4, 1, 0, 0.75)", backdropFilter: "blur(8px)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden z-10 rounded-xl"
            style={{
              background: "rgba(20, 10, 5, 0.97)",
              border: "1px solid rgba(196, 132, 58, 0.14)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.70), inset 0 1px 0 rgba(196,132,58,0.07)",
              backgroundImage: `
                repeating-linear-gradient(93deg, transparent 0px, transparent 4px, rgba(180,90,20,0.016) 4px, rgba(180,90,20,0.016) 5px)
              `,
            }}
          >
            {/* Panneau gauche — personnage */}
            <div
              className="hidden md:flex relative w-[38%] flex-col justify-end overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(12,5,2,0) 0%, rgba(12,5,2,0.80) 100%)",
                borderRight: "1px solid rgba(196, 132, 58, 0.08)",
              }}
            >
              {/* Fond boisé du panneau */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(8,3,1,0.55), rgba(8,3,1,0.55)),
                    url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Label */}
              <p
                className="absolute top-5 left-5 text-xs tracking-[0.25em] uppercase z-10 font-sans"
                style={{ color: "#6A5042" }}
              >
                Analyse Redthorn
              </p>

              {/* Guide */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 25 }}
                className="relative z-10 w-full"
              >
                <img
                  src={guideImage}
                  alt="Redthorn Guide"
                  className="w-full h-auto object-contain object-bottom"
                  style={{
                    filter: "drop-shadow(0 -10px 30px rgba(123,30,42,0.30))",
                    maskImage: "linear-gradient(to top, black 65%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 65%, transparent 100%)",
                  }}
                />
              </motion.div>
            </div>

            {/* Panneau droit — contenu */}
            <div className="relative flex-1 flex flex-col p-7 sm:p-9 overflow-y-auto">
              {/* Titre */}
              <div className="flex justify-between items-start mb-6">
                <h2
                  className="font-display text-2xl font-semibold pr-8 leading-snug"
                  style={{ color: "#F0E6D0" }}
                >
                  {title}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-6 right-6"
                  style={{ color: "#6A5042" }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Filet ambre */}
              <div className="amber-divider mb-6" />

              {/* Contenu */}
              <div
                className="flex-1 font-sans text-sm leading-relaxed"
                style={{ color: "#C8B89A" }}
              >
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
