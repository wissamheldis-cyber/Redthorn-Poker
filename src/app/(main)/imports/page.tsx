"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { Terminal, UploadCloud, ShieldAlert, Loader2, CheckCircle2 } from "lucide-react";
import { GlassModal } from "@/components/ui/GlassModal";
import { toast } from "sonner";

export default function Imports() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFakeImport = () => {
    setIsModalOpen(true);
    setIsAnalyzing(true);
    
    // Simulate an analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Analyse terminée ! 142 mains traitées.");
    }, 2500);
  };

  return (
    <PageContainer>
      <SectionHeader 
        title="Importation de Sessions" 
        description="Analysez vos historiques à froid. Jamais pendant que vous jouez."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div 
          onClick={handleFakeImport}
          className="border border-dashed border-border/60 bg-card rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer group"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <UploadCloud className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Historiques de Mains</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-[250px]">
            Glissez vos fichiers .txt issus de PokerStars, Winamax, ou GG Poker.
          </p>
          <Button variant="secondary" onClick={(e) => { e.stopPropagation(); handleFakeImport(); }}>Parcourir les fichiers</Button>
        </div>

        <div 
          onClick={handleFakeImport}
          className="border border-dashed border-border/60 bg-card rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer group"
        >
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Terminal className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Coller le texte brut</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-[250px]">
            Collez une main spécifique copiée dans le presse-papier.
          </p>
          <Button variant="outline" className="border-orange-500/30 text-orange-500 hover:bg-orange-500/10" onClick={(e) => { e.stopPropagation(); handleFakeImport(); }}>
            Coller (Ctrl+V)
          </Button>
        </div>
      </div>

      <div className="mt-12 max-w-4xl p-6 bg-primary/5 border border-primary/20 rounded-xl flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-primary mb-1">Rappel Éthique</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            EVolve Poker est un outil d'étude <strong>post-session</strong>. Son utilisation pendant 
            que les tables sont ouvertes est strictement interdite par les conditions d'utilisation 
            des rooms. Assurez-vous d'avoir fermé vos tables avant l'analyse.
          </p>
        </div>
      </div>

      <GlassModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Traitement des Données"
        nashMood="thinking"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            {isAnalyzing ? (
              <>
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
                <p className="font-medium text-slate-700">Nash et le panel de coachs analysent vos historiques en temps réel...</p>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                <p className="font-medium text-emerald-700">Analyse GTO terminée. 142 profils adverses mis à jour.</p>
              </>
            )}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Processus en cours :</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-primary animate-pulse' : 'bg-emerald-500'}`} />
                Parsing des mains régulières (Cash Game 6-Max)
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-slate-300' : 'bg-emerald-500'}`} />
                Calculs d'Expected Value (EV) par The Calculator
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-slate-300' : 'bg-emerald-500'}`} />
                Extraction des patterns de tilt par The Stoic
              </li>
            </ul>
          </div>
          
          {!isAnalyzing && (
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Button onClick={() => setIsModalOpen(false)}>Consulter le Dashboard</Button>
            </div>
          )}
        </div>
      </GlassModal>
    </PageContainer>
  );
}
