"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const GUIDE_MESSAGES: Record<string, { generic: string; personalized: string }> = {
  "/dashboard": {
    generic: "Bienvenue sur votre tableau de bord. Voici l'état de votre progression — chaque chiffre ici représente une décision prise à la table.",
    personalized: "J'ai repéré une stagnation de votre agressivité depuis 4 sessions — votre 3-Bet est en recul de 15%. Reprenez l'initiative ce soir.",
  },
  "/imports": {
    generic: "L'importation de vos mains est la matière première de l'analyse. Chaque main importée est une donnée de plus pour comprendre votre jeu.",
    personalized: "N'oubliez pas d'importer votre session d'hier soir. Je veux vérifier si l'ajustement de vos bluffs en late position a porté ses fruits.",
  },
  "/review": {
    generic: "La Session Review est le cœur du dispositif. C'est ici que chaque décision est décortiquée avec précision — calcul d'EV, exploitation, timing.",
    personalized: "Focalisez-vous sur les pots 3-Bet hors de position. Mes calculs indiquent que c'est là que vous perdez le plus de BB/100 actuellement.",
  },
  "/academy": {
    generic: "L'Académie est votre espace de formation. La Stoïque, La Calculatrice, Le Prédateur, Le Lecteur et Le Chaos — chaque mentor couvre un pilier du jeu.",
    personalized: "Vu votre légère baisse de discipline mentale cette semaine, une session avec La Stoïque avant votre prochaine table serait idéale.",
  },
  "/profile": {
    generic: "Votre profil trace votre évolution tactique et mentale dans le temps. Une vision longue durée de votre progression comme joueur.",
    personalized: "Votre score d'Adaptation a progressé de 4 points cette semaine. Vous maîtrisez mieux les déviations contre les joueurs récréatifs.",
  },
  "/settings": {
    generic: "Configurez les paramètres de la plateforme selon vos préférences — format, ton du coaching, fréquence des interventions.",
    personalized: "Je vous suggère de conserver le ton Analytique. Votre auto-discipline est solide — la dureté n'ajouterait rien pour vous.",
  },
};

export function NashOmniPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (pathname && GUIDE_MESSAGES[pathname] && !hasSeen[pathname]) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasSeen((prev) => ({ ...prev, [pathname]: true }));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (!pathname || !GUIDE_MESSAGES[pathname]) return null;

  const content = GUIDE_MESSAGES[pathname];
  const pageName =
    pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-auto"
            style={{ background: "rgba(4, 1, 0, 0.78)", backdropFilter: "blur(10px)" }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -16 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-3xl overflow-hidden pointer-events-auto flex flex-col md:flex-row rounded-xl"
            style={{
              background: "rgba(16, 8, 4, 0.98)",
              border: "1px solid rgba(196, 132, 58, 0.14)",
              boxShadow: "0 50px 100px rgba(0,0,0,0.75), inset 0 1px 0 rgba(196,132,58,0.07)",
              backgroundImage:
                "repeating-linear-gradient(93deg, transparent 0px, transparent 4px, rgba(180,90,20,0.015) 4px, rgba(180,90,20,0.015) 5px)",
            }}
          >
            {/* Fermer */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 z-50 p-1.5 rounded transition-colors"
              style={{ color: "#6A5042", background: "rgba(26,13,7,0.60)" }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Panneau gauche — personnage */}
            <div
              className="hidden md:flex w-[40%] relative flex-col justify-end overflow-hidden"
              style={{ minHeight: 440 }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(6,2,1,0.52), rgba(6,2,1,0.52)),
                    url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(10,4,2,0.85), transparent)",
                }}
              />
              {/* Guide */}
              <div className="relative z-10 w-full">
                <img
                  src="/images/Gemini_Generated_Image_mrp044mrp044mrp0.png"
                  alt="Redthorn Guide"
                  className="w-full h-auto object-contain object-bottom"
                  style={{
                    filter: "drop-shadow(0 -10px 30px rgba(123,30,42,0.35))",
                    maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to top, black 60%, transparent 100%)",
                  }}
                />
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium tracking-[0.15em] uppercase"
                style={{
                  background: "rgba(123, 30, 42, 0.25)",
                  border: "1px solid rgba(196, 132, 58, 0.25)",
                  color: "#C4843A",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#C4843A" }}
                />
                Redthorn Active
              </div>
            </div>

            {/* Panneau droit — contenu */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              {/* Label page */}
              <p
                className="text-xs tracking-[0.22em] uppercase mb-5 font-sans"
                style={{ color: "#6A5042" }}
              >
                Analyse · {pageName}
              </p>

              {/* Contenu */}
              <div className="space-y-5">
                <p
                  className="text-base leading-relaxed font-light font-sans"
                  style={{ color: "#8A7060" }}
                >
                  "{content.generic}"
                </p>

                <div className="amber-divider" />

                {/* Message personnalisé */}
                <div
                  className="rounded p-5 relative overflow-hidden"
                  style={{
                    background: "rgba(20, 10, 5, 0.70)",
                    border: "1px solid rgba(196, 132, 58, 0.10)",
                    borderLeft: "2px solid rgba(196, 132, 58, 0.45)",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed italic font-sans"
                    style={{ color: "#C8B89A" }}
                  >
                    "{content.personalized}"
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={() => setIsOpen(false)} className="gap-2 tracking-wide">
                  Compris, au travail
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
