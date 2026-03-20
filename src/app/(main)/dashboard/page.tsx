"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatCard } from "@/components/domain/StatCard";
import { LeakCard } from "@/components/domain/LeakCard";
import { NashMessageCard } from "@/components/domain/NashMessageCard";
import { MOCK_SESSIONS, MOCK_LEAKS, MOCK_USER_PROFILE } from "@/mock-data/sessions";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, AlertTriangle, Crosshair, BarChart3, ChevronRight, X, TrendingDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const latestSession = MOCK_SESSIONS[0];

  return (
    <PageContainer>
      <SectionHeader 
        title="Dashboard" 
        description={`Bienvenue, ${MOCK_USER_PROFILE.nickname}. Voici votre progression.`}
      >
        <Link href="/imports">
          <Button className="gap-2">
            Importer une session <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Link>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Score de Progression" 
          value={`${MOCK_USER_PROFILE.progressionScore}/100`}
          description="Votre note globale actuelle"
          icon={<TrendingUp className="w-4 h-4" />}
          trend="up"
          trendValue="+3"
        />
        <StatCard 
          title="Dernier Résultat Net" 
          value={`${latestSession.net > 0 ? '+' : ''}${latestSession.net}€`}
          description={`Session du ${latestSession.date}`}
          icon={<ArrowUpRight className="w-4 h-4" />}
          trend={latestSession.net > 0 ? "up" : "down"}
          trendValue={`${latestSession.bb100} bb/100`}
        />
        <StatCard 
          title="Focus de la Semaine" 
          value="Blind Defense"
          description="Track de The Calculator"
          icon={<Crosshair className="w-4 h-4" />}
        />
      </div>

      <div className="mb-10">
        <NashMessageCard 
          title="Le mot de Nash"
          message={
            <>
              <p className="mb-2">
                Excellente progression sur l'agression préflop cette semaine. Cependant, j'ai remarqué 
                une chute de rentabilité dans les pots 3-bet hors de position. 
              </p>
              <p>
                Je vous recommande fortement la lesson <strong>Blind Defense Avancée</strong> de la Track 2.
              </p>
            </>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" /> Top Leaks Actuels
              </h3>
              <Link href="/review">
                <Button variant="ghost" size="sm" className="text-muted-foreground">Voir tout</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <div className="space-y-4">
            {MOCK_LEAKS.slice(0, 2).map(leak => (
              <LeakCard key={leak.id} {...leak} />
            ))}
          </div>
        </Card>
        
        <div
          onClick={() => setIsChartModalOpen(true)}
          className="rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[300px] cursor-pointer transition-all group"
          style={{
            background: "rgba(22, 11, 6, 0.75)",
            border: "1px solid rgba(196, 132, 58, 0.10)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(196, 132, 58, 0.25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(196, 132, 58, 0.10)";
          }}
        >
          <div
            className="w-16 h-16 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
            style={{
              background: "rgba(123,30,42,0.20)",
              border: "1px solid rgba(196, 132, 58, 0.20)",
            }}
          >
            <BarChart3 className="w-8 h-8" style={{ color: "#C4843A" }} />
          </div>
          <h3
            className="font-display text-xl font-semibold mb-2"
            style={{ color: "#F0E6D0" }}
          >
            Projection GTO à 30 Jours
          </h3>
          <p className="text-sm max-w-[260px] mb-6" style={{ color: "#6A5042" }}>
            L'analyse prédictive de La Calculatrice sur votre trajectoire actuelle.
          </p>
          <Button variant="outline" size="sm" className="gap-2">
            Ouvrir l'Analyse <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* ── Drawer latéral Projection GTO ── */}
      <AnimatePresence>
        {isChartModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChartModalOpen(false)}
              className="fixed inset-0 z-[90]"
              style={{ background: "rgba(4,1,0,0.70)", backdropFilter: "blur(6px)" }}
            />

            {/* Panel droit */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[100] flex flex-col overflow-hidden"
              style={{
                width: "min(520px, 100vw)",
                background: "rgba(14, 7, 3, 0.98)",
                borderLeft: "1px solid rgba(196, 132, 58, 0.14)",
                boxShadow: "-40px 0 80px rgba(0,0,0,0.60)",
                backgroundImage: `repeating-linear-gradient(93deg, transparent 0px, transparent 4px, rgba(180,90,20,0.016) 4px, rgba(180,90,20,0.016) 5px)`,
              }}
            >
              {/* Header La Calculatrice */}
              <div
                className="relative flex items-end gap-4 px-7 pt-0 pb-5 flex-shrink-0 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(60,35,5,0.95), rgba(18,9,2,0.98))",
                  borderBottom: "1px solid rgba(196,132,58,0.12)",
                  minHeight: 120,
                }}
              >
                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C4843A80, transparent)" }} />

                {/* Image La Calculatrice */}
                <div className="relative flex-shrink-0" style={{ width: 70, height: 90 }}>
                  <img
                    src="/images/Gemini_Generated_Image_h4g9jch4g9jch4g9.png"
                    alt="La Calculatrice"
                    className="w-full h-full object-cover object-top"
                    style={{
                      borderRadius: 6,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.50)",
                      maskImage: "linear-gradient(to top, black 55%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to top, black 55%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="flex-1 pb-1">
                  <p className="text-[10px] tracking-[0.22em] uppercase mb-1" style={{ color: "#C4843A" }}>
                    Analyse GTO · La Calculatrice
                  </p>
                  <h2 className="font-display text-xl font-semibold leading-tight" style={{ color: "#F0E6D0" }}>
                    Projection à 30 Jours
                  </h2>
                  <p className="text-xs mt-0.5" style={{ color: "#6A5042" }}>
                    Basée sur vos 10 dernières sessions
                  </p>
                </div>

                <button
                  onClick={() => setIsChartModalOpen(false)}
                  className="absolute top-4 right-5 p-1.5 rounded transition-opacity hover:opacity-70"
                  style={{ color: "#6A5042" }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Contenu scrollable */}
              <div className="flex-1 overflow-y-auto px-7 py-6 space-y-6 font-sans">

                {/* EV global */}
                <div
                  className="p-5 rounded flex items-center justify-between"
                  style={{
                    background: "rgba(196,132,58,0.08)",
                    border: "1px solid rgba(196,132,58,0.18)",
                  }}
                >
                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase mb-1" style={{ color: "#6A5042" }}>Expected Value Projeté</p>
                    <p className="font-display text-3xl font-semibold" style={{ color: "#C4843A" }}>+18%</p>
                    <p className="text-xs mt-1" style={{ color: "#8A7060" }}>sur les 30 prochains jours</p>
                  </div>
                  <TrendingUp className="w-10 h-10 opacity-20" style={{ color: "#C4843A" }} />
                </div>

                {/* Métriques GTO */}
                <div>
                  <h3 className="text-xs font-medium tracking-[0.18em] uppercase mb-3" style={{ color: "#6A5042" }}>
                    Métriques GTO — État actuel
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "VPIP", value: 24, target: 26, unit: "%", status: "ok" },
                      { label: "PFR", value: 22, target: 22, unit: "%", status: "perfect" },
                      { label: "3-Bet %", value: 6.2, target: 9, unit: "%", status: "warn" },
                      { label: "Fold to 3-Bet", value: 58, target: 55, unit: "%", status: "ok" },
                      { label: "W$SD", value: 47, target: 52, unit: "%", status: "warn" },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span style={{ color: "#8A7060" }}>{m.label}</span>
                          <span style={{ color: m.status === "perfect" ? "#6A8060" : m.status === "ok" ? "#C4843A" : "#9B2535" }}>
                            {m.value}{m.unit}
                            <span style={{ color: "#4A3020" }}> / cible {m.target}{m.unit}</span>
                          </span>
                        </div>
                        <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: "rgba(26,13,7,0.80)" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min((m.value / (m.target * 1.3)) * 100, 100)}%` }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: m.status === "perfect"
                                ? "linear-gradient(90deg, #3A5A30, #6A8060)"
                                : m.status === "ok"
                                ? "linear-gradient(90deg, #5C1A1E, #C4843A)"
                                : "linear-gradient(90deg, #5C1A1E, #9B2535)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Citation Le Prédateur */}
                <div
                  className="p-5 rounded"
                  style={{
                    background: "rgba(12,6,2,0.60)",
                    border: "1px solid rgba(155,37,53,0.12)",
                    borderLeft: "2px solid rgba(155,37,53,0.45)",
                  }}
                >
                  <p className="text-[10px] tracking-[0.20em] uppercase mb-2" style={{ color: "#9B2535" }}>
                    Point de vigilance — Le Prédateur
                  </p>
                  <p className="text-xs italic leading-relaxed" style={{ color: "#8A7060" }}>
                    "Tu joues trop passivement tes tirages max hors de position. Sur 45 boards draw-heavy, tu n'as check-raise en semi-bluff que 8% au lieu des 25% recommandés."
                  </p>
                </div>

                {/* Recommandation */}
                <div
                  className="p-4 rounded"
                  style={{
                    background: "rgba(196,132,58,0.05)",
                    border: "1px solid rgba(196,132,58,0.10)",
                  }}
                >
                  <p className="text-xs leading-relaxed" style={{ color: "#8A7060" }}>
                    Continuez à travailler votre{" "}
                    <strong style={{ color: "#F0E6D0" }}>Blind Defense</strong> et votre agression post-flop pour maximiser cette projection de rentabilité sur le mois à venir.
                  </p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}
