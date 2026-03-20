"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatCard } from "@/components/domain/StatCard";
import { LeakCard } from "@/components/domain/LeakCard";
import { NashMessageCard } from "@/components/domain/NashMessageCard";
import { MOCK_SESSIONS, MOCK_LEAKS, MOCK_USER_PROFILE } from "@/mock-data/sessions";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, AlertTriangle, Crosshair, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { GlassModal } from "@/components/ui/GlassModal";

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

      <GlassModal 
        isOpen={isChartModalOpen}
        onClose={() => setIsChartModalOpen(false)}
        title="Analyse Prédictive & Trajectoire"
        nashMood="explaining"
      >
        <div className="space-y-5" style={{ color: "#C8B89A" }}>
          <p className="text-base" style={{ color: "#F0E6D0" }}>
            Votre trajectoire actuelle indique un{" "}
            <span style={{ color: "#C4843A", fontWeight: 600 }}>
              +18% Expected Value (EV)
            </span>{" "}
            sur les 30 prochains jours.
          </p>
          <p className="text-sm leading-relaxed">
            La Calculatrice a analysé vos 10 dernières sessions. Votre PFR est désormais
            aligné avec les standards GTO (22%).
          </p>
          <div
            className="p-5 rounded my-4"
            style={{
              background: "rgba(12,6,2,0.60)",
              border: "1px solid rgba(196,132,58,0.10)",
              borderLeft: "2px solid rgba(196,132,58,0.40)",
            }}
          >
            <h4
              className="font-semibold mb-3 flex items-center gap-2 text-sm"
              style={{ color: "#F0E6D0" }}
            >
              <Crosshair className="w-4 h-4" style={{ color: "#C4843A" }} />
              Point de vigilance — Le Prédateur
            </h4>
            <p className="text-sm italic">
              "Tu joues trop passivement tes tirages max hors de position. Sur 45 boards
              draw-heavy, tu n'as check-raise en semi-bluff que 8% au lieu des 25%
              recommandés. Tu laisses trop d'équité gratuite."
            </p>
          </div>
          <p className="text-sm leading-relaxed">
            Continuez à travailler votre{" "}
            <strong style={{ color: "#F0E6D0" }}>Blind Defense</strong> pour maximiser
            cette projection de rentabilité.
          </p>
        </div>
      </GlassModal>
    </PageContainer>
  );
}
