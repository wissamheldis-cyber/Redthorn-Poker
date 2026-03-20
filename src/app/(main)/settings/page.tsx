"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { BRAND_CONFIG } from "@/config/brand";
import { toast } from "sonner";

export default function Settings() {
  return (
    <PageContainer>
      <SectionHeader 
        title="Paramètres" 
        description="Gérez votre compte et vos préférences."
      />

      <div className="max-w-3xl space-y-8">
        <section className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/40 pb-4">Profil Personnel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <div className="p-2.5 bg-white/50 rounded-md border border-white/40 text-sm">utilisateur@exemple.com</div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Plan Actuel</label>
              <div className="p-2.5 bg-primary/10 rounded-md border border-primary/30 text-sm text-primary font-medium">Pro Plan</div>
            </div>
          </div>
        </section>

        <section className="glass-card rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-white/40 pb-4">Préférences de Coaching</h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">Ton de {BRAND_CONFIG.coachName}</p>
                <p className="text-sm text-muted-foreground">Ajustez la dureté des retours post-session.</p>
              </div>
              <select className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary w-full sm:w-auto text-foreground">
                <option>Analytique (Standard)</option>
                <option>Direct et Sévère</option>
                <option>Encourageant</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">Format Principal par Défaut</p>
                <p className="text-sm text-muted-foreground">Utilisé pour filtrer les recommandations de l'Académie.</p>
              </div>
              <select className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary w-full sm:w-auto text-foreground">
                <option>Cash Game 6-Max</option>
                <option>Cash Game Full Ring</option>
                <option>Tournois (MTT)</option>
                <option>Spins / Expresso</option>
              </select>
            </div>
          </div>
        </section>
        
        <div className="flex justify-end gap-4 mt-8">
          <Button 
            variant="ghost" 
            className="text-slate-500 hover:text-slate-900"
            onClick={() => toast.info("Modifications annulées.")}
          >
            Annuler
          </Button>
          <Button 
            onClick={() => toast.success("Préférences sauvegardées !", { description: "Vos nouveaux paramètres GTO ont été appliqués à votre profil." })}
          >
            Sauvegarder les modifications
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
