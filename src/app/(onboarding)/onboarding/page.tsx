import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { BRAND_CONFIG } from "@/config/brand";
import Link from "next/link";
import { User } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="h-20 flex items-center justify-center border-b border-border/50 bg-card/50">
        <Logo variant="wordmark" size={28} />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:p-10 relative">
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full point-events-none" />
        
        <div className="w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden relative z-10">
          <div className="p-8 md:p-10">
            <h1 className="text-2xl font-bold tracking-tight mb-2 text-center text-foreground font-serif">Évaluons votre profil</h1>
            <p className="text-muted-foreground text-center text-sm mb-10 leading-relaxed">
              Aidez {BRAND_CONFIG.coachName} à calibrer ses analyses pour votre style de jeu.<br/>
              <span className="text-primary font-medium mt-1 inline-block">Étape 1 sur 3</span>
            </p>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Nickname principal</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-5 w-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    className="flex h-12 w-full rounded-md border border-input bg-background/50 px-11 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-colors placeholder:text-muted-foreground" 
                    placeholder="ex: GrindMaster99" 
                    defaultValue="GrindMaster"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground">Format de prédilection</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <Card className="w-full shadow-[0_10px_30px_rgba(37,99,235,0.1)] bg-white/70 backdrop-blur-md border-primary/40 cursor-pointer overflow-hidden transition-all hover:bg-white/90">
                      <CardHeader className="p-5">
                        <div className="font-semibold text-primary mb-1">Cash Game</div>
                        <div className="text-xs text-muted-foreground">Short-handed ou Full Ring</div>
                      </CardHeader>
                    </Card>
                    <div className="absolute top-2 right-2 p-1">
                       <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    </div>
                  </div>
                  <div className="relative group">
                    <Card className="w-full shadow-sm bg-white/40 backdrop-blur-sm border-white/60 cursor-pointer overflow-hidden transition-all hover:bg-white/60 hover:border-primary/30">
                      <CardHeader className="p-5">
                        <div className="font-semibold text-foreground mb-1">MTT</div>
                        <div className="text-xs text-muted-foreground">Tournois multi-tables</div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-border flex justify-between items-center">
              <Link href="/">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Retour</Button>
              </Link>
              <Link href="/dashboard">
                <Button className="font-semibold h-10 px-8">Continuer</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
