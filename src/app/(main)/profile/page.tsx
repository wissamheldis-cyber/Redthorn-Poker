"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatCard } from "@/components/domain/StatCard";
import { MOCK_USER_PROFILE } from "@/mock-data/sessions";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, BarChart3, Crosshair } from "lucide-react";
import { toast } from "sonner";

export default function PlayerProfile() {
  const { traits } = MOCK_USER_PROFILE;

  return (
    <PageContainer>
      <SectionHeader 
        title="Profil Joueur Longitudinal" 
        description="Une vue d'ensemble de vos forces, faiblesses, et tendances sur le long terme."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 border border-border bg-card rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {MOCK_USER_PROFILE.nickname.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold">{MOCK_USER_PROFILE.nickname}</h3>
              <p className="text-muted-foreground text-sm">{MOCK_USER_PROFILE.mainFormat}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Agression</span>
                <span className="font-medium text-foreground">{traits.aggression}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${traits.aggression}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Discipline</span>
                <span className="font-medium text-foreground">{traits.discipline}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${traits.discipline}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Adaptation</span>
                <span className="font-medium text-foreground">{traits.adaptation}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${traits.adaptation}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Contrôle Émotionnel</span>
                <span className="font-medium text-foreground">{traits.emotionalControl}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: `${traits.emotionalControl}%` }} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div onClick={() => toast.info("Le calcul du style dominant nécessite 25 000 mains certifiées. Bientôt disponible.")} className="cursor-pointer hover:-translate-y-1 transition-transform">
              <StatCard 
                title="Style Dominant" 
                value="TAG-Agro"
                description="Basé sur 25,000 dernières mains"
                icon={<Crosshair className="w-4 h-4" />}
                className="h-full"
              />
            </div>
            <Card 
              className="glass-card h-full cursor-pointer hover:bg-white/80 transition-colors group"
              onClick={() => toast.success("Génération du rapport d'adaptation tactique...", { description: "Un export GTO de votre matrice sera disponible dans la V1." })}
            >
              <CardHeader className="border-b border-white/40 mb-4 p-4">
                <CardTitle className="text-sm">Distribution des Styles</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-4">
                {/* Radar Chart Placeholder for MVP */}
                <div className="relative w-32 h-32 border border-white/60 rounded-full flex items-center justify-center bg-white/30 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-slate-400 text-xs font-medium">Radar Chart (V1)</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div 
            onClick={() => toast.info("Carte de chaleur en cours d'élaboration par L'Architecte.", { description: "Vous pourrez bientôt analyser vos zones de leak exactes par position." })}
            className="bg-card glass-card border rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[250px] relative overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <BarChart3 className="w-12 h-12 text-primary/30 mb-4 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
            <h3 className="text-lg font-bold mb-2 z-10 text-slate-800">Carte de Chaleur VPIP/PFR</h3>
            <p className="text-slate-500 text-sm max-w-[300px] z-10 line-clamp-2">
              Génération du visuel spider chart des tendances positionnelles en cours. La version V1 incluera une matrice 3D.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
