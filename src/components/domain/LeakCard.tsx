"use client";

import { AlertCircle, ChevronRight, Activity } from "lucide-react";
import { useState } from "react";
import { GlassModal } from "@/components/ui/GlassModal";

interface LeakCardProps {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  costEstimate?: string;
  frequency?: string;
}

const SEVERITY = {
  high: {
    label: "Critique",
    bg: "rgba(155, 37, 53, 0.14)",
    border: "rgba(155, 37, 53, 0.30)",
    text: "#F0AABB",
    icon: "#9B2535",
    // Popup : Le Prédateur — design "alerte" rouge
    modalChar: "/images/Gemini_Generated_Image_80g3lm80g3lm80g3.png",
    modalLabel: "ALERTE CRITIQUE",
    modalAccent: "#9B2535",
    modalHeaderBg: "linear-gradient(135deg, rgba(80,10,18,0.95), rgba(20,5,3,0.98))",
  },
  medium: {
    label: "Moyen",
    bg: "rgba(180, 100, 20, 0.12)",
    border: "rgba(196, 132, 58, 0.28)",
    text: "#D4944A",
    icon: "#C4843A",
    // Popup : La Calculatrice — design "analyse" ambre
    modalChar: "/images/Gemini_Generated_Image_h4g9jch4g9jch4g9.png",
    modalLabel: "ANALYSE GTO",
    modalAccent: "#C4843A",
    modalHeaderBg: "linear-gradient(135deg, rgba(60,35,5,0.95), rgba(18,9,2,0.98))",
  },
  low: {
    label: "Faible",
    bg: "rgba(60, 100, 60, 0.10)",
    border: "rgba(80, 140, 80, 0.22)",
    text: "#80B080",
    icon: "#60A060",
    // Popup : La Stoïque — design "note" sobre vert/neutre
    modalChar: "/images/Gemini_Generated_Image_19vrl519vrl519vr.png",
    modalLabel: "POINT D'ATTENTION",
    modalAccent: "#6A8060",
    modalHeaderBg: "linear-gradient(135deg, rgba(20,35,15,0.95), rgba(10,14,8,0.98))",
  },
};

export function LeakCard({ title, description, severity, costEstimate, frequency }: LeakCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cfg = SEVERITY[severity];

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg cursor-pointer transition-all duration-200 group overflow-hidden"
        style={{
          background: "rgba(22, 11, 6, 0.78)",
          border: "1px solid rgba(196, 132, 58, 0.09)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.30)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(196, 132, 58, 0.22)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(196, 132, 58, 0.09)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Barre de sévérité en haut */}
        <div
          className="h-[2px]"
          style={{ background: cfg.icon, opacity: 0.60 }}
        />

        <div className="p-4">
          {/* En-tête */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {severity === "high" && (
                <AlertCircle className="w-4 h-4 flex-shrink-0" style={{ color: cfg.icon }} />
              )}
              <h4
                className="text-sm font-semibold truncate font-sans"
                style={{ color: "#EDE0C4" }}
              >
                {title}
              </h4>
            </div>
            <span
              className="text-[10px] font-medium tracking-[0.12em] uppercase px-2 py-0.5 rounded flex-shrink-0"
              style={{
                background: cfg.bg,
                border: `1px solid ${cfg.border}`,
                color: cfg.text,
              }}
            >
              {cfg.label}
            </span>
          </div>

          <p className="text-xs leading-relaxed mb-4 font-sans" style={{ color: "#6A5042" }}>
            {description}
          </p>

          {/* Footer */}
          {(costEstimate || frequency) && (
            <div
              className="flex flex-wrap gap-4 text-xs pt-3"
              style={{ borderTop: "1px solid rgba(196, 132, 58, 0.07)" }}
            >
              {costEstimate && (
                <div className="space-y-0.5">
                  <span className="block" style={{ color: "#4A3020" }}>Coût estimé</span>
                  <span className="font-medium" style={{ color: "#C8B89A" }}>{costEstimate}</span>
                </div>
              )}
              {frequency && (
                <div className="space-y-0.5">
                  <span className="block" style={{ color: "#4A3020" }}>Fréquence</span>
                  <span className="font-medium" style={{ color: "#C8B89A" }}>{frequency}</span>
                </div>
              )}
              <div
                className="ml-auto flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-xs"
                style={{ color: "#C4843A" }}
              >
                Analyser <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          )}
        </div>
      </div>

      <GlassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${cfg.modalLabel} — ${title}`}
        nashImageSrc={cfg.modalChar}
      >
        <div className="space-y-5 font-sans">
          {/* Badge sévérité */}
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-semibold tracking-[0.20em] uppercase px-3 py-1 rounded"
              style={{
                background: cfg.bg,
                border: `1px solid ${cfg.border}`,
                color: cfg.text,
              }}
            >
              {cfg.label}
            </span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: cfg.icon, opacity: 0.7 }}>
              Redthorn Analysis
            </span>
          </div>

          {/* Impact financier */}
          <div
            className="flex gap-4 p-4 rounded"
            style={{
              background: `${cfg.modalAccent}14`,
              border: `1px solid ${cfg.modalAccent}30`,
            }}
          >
            <Activity className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: cfg.modalAccent }} />
            <div>
              <h4 className="text-sm font-semibold mb-1" style={{ color: "#F0E6D0" }}>
                Impact Financier Estimé
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#8A7060" }}>
                Ce leak vous coûte environ{" "}
                <strong style={{ color: cfg.modalAccent }}>{costEstimate || "15 bb/100"}</strong>.
                C'est une priorité de correction identifiée par Redthorn.
              </p>
            </div>
          </div>

          {/* Pattern identifié */}
          <div>
            <h4 className="text-sm font-semibold mb-2" style={{ color: "#F0E6D0" }}>
              Pattern Identifié
            </h4>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "#8A7060" }}>
              Une déviation majeure de vos fréquences a été détectée dans cette situation.
              Vous avez tendance à{" "}
              {severity === "high"
                ? "sur-défendre vos blindes hors de position avec des ranges marginaux"
                : severity === "medium"
                ? "jouer trop passivement face aux check-raises sur les boards connectés"
                : "négliger vos sizing d'ouverture en position tardive"}.
            </p>
            <div
              className="p-4 rounded italic text-xs"
              style={{
                background: "rgba(12, 6, 2, 0.60)",
                border: `1px solid ${cfg.modalAccent}12`,
                borderLeft: `2px solid ${cfg.modalAccent}55`,
                color: "#8A7060",
              }}
            >
              "Dans cette configuration (SRP, OOP vs BU), la ligne GTO dicte un fold de 62%.
              Votre fréquence de fold sur les 10 dernières sessions est de 38%."
            </div>
          </div>

          {/* Fréquence */}
          {frequency && (
            <div
              className="flex items-center justify-between px-4 py-3 rounded"
              style={{
                background: "rgba(12,6,2,0.50)",
                border: `1px solid ${cfg.modalAccent}10`,
              }}
            >
              <span className="text-xs" style={{ color: "#6A5042" }}>Fréquence observée</span>
              <span className="text-sm font-semibold" style={{ color: cfg.modalAccent }}>{frequency}</span>
            </div>
          )}
        </div>
      </GlassModal>
    </>
  );
}
