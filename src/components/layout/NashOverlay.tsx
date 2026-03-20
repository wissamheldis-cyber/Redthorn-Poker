"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MESSAGES: Record<string, string> = {
  "/dashboard": "Voici votre tableau de bord. Chaque chiffre ici représente une décision prise à la table.",
  "/imports": "Déposez vos mains pour que nous les analysions ensemble. C'est là que tout commence.",
  "/review": "C'est ici que l'apprentissage devient concret. Décortiquons ces situations.",
  "/profile": "Votre profil long terme se dessine. Regardez comment vos traits évoluent.",
  "/academy": "Les mentors vous attendent. Choisissez votre école pour aujourd'hui.",
  "/settings": "Ajustez les paramètres selon vos préférences de coaching.",
};

export function NashOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (pathname && pathname !== "/" && !pathname.startsWith("/onboarding")) {
      const key = Object.keys(MESSAGES).find((k) => pathname.startsWith(k));
      if (key) {
        setMessage(MESSAGES[key]);
        setIsVisible(true);
        const t = setTimeout(() => setIsVisible(false), 5500);
        return () => clearTimeout(t);
      }
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-end pr-16 pb-10">
          {/* Backdrop très léger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-auto"
            style={{ background: "rgba(4,1,0,0.10)" }}
            onClick={() => setIsVisible(false)}
          />

          <div className="relative z-50 flex items-end gap-4 pointer-events-auto">
            {/* Bulle de message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 8 }}
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.15 }}
              className="relative max-w-[300px] p-5 rounded-lg"
              style={{
                background: "rgba(18, 9, 4, 0.97)",
                border: "1px solid rgba(196, 132, 58, 0.14)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.60)",
              }}
            >
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3"
                style={{ color: "#4A3020" }}
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {/* Petite flèche pointant vers le personnage */}
              <div
                className="absolute -bottom-2.5 right-8 w-5 h-5 rotate-45"
                style={{
                  background: "rgba(18, 9, 4, 0.97)",
                  borderRight: "1px solid rgba(196, 132, 58, 0.14)",
                  borderBottom: "1px solid rgba(196, 132, 58, 0.14)",
                }}
              />
              <p className="font-sans text-sm leading-relaxed pr-4" style={{ color: "#C8B89A" }}>
                {message}
              </p>
            </motion.div>

            {/* Personnage */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 120, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 24 }}
              className="w-40 h-52 relative flex-shrink-0"
            >
              <img
                src="/images/Gemini_Generated_Image_7y7ubq7y7ubq7y7u.png"
                alt="Guide Redthorn"
                className="w-full h-full object-contain object-bottom"
                style={{
                  filter: "drop-shadow(-4px 0 20px rgba(123,30,42,0.30))",
                }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
