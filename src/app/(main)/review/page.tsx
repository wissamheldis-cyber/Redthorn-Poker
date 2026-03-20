import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatCard } from "@/components/domain/StatCard";
import { LeakCard } from "@/components/domain/LeakCard";
import { NashMessageCard } from "@/components/domain/NashMessageCard";
import { MOCK_SESSIONS, MOCK_LEAKS } from "@/mock-data/sessions";
import { Activity, Target, ShieldQuestion, MinusCircle } from "lucide-react";

export default function SessionReview() {
  const session = MOCK_SESSIONS[0];

  return (
    <PageContainer>
      <SectionHeader 
        title="Revue de Session" 
        description={`Session du ${session.date} • ${session.format} • ${session.duration} • ${session.handsAnalyzed} mains analysées.`}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Résultat Net" 
          value={`+${session.net}€`}
          trendValue={`${session.bb100} bb/100`}
          trend="up"
          className="border-primary/20 bg-primary/5"
          icon={<Activity className="w-4 h-4 text-primary" />}
        />
        <StatCard 
          title="Erreurs Critiques" 
          value={session.leakOccurrences}
          description="Occurrences"
          trend="down"
          icon={<MinusCircle className="w-4 h-4 text-destructive" />}
        />
        <StatCard 
          title="Bons Plays" 
          value={session.goodDecisions}
          description="Validation GTO"
          trend="up"
          icon={<Target className="w-4 h-4 text-emerald-500" />}
        />
        <StatCard 
          title="Incertitudes" 
          value={4}
          description="À surveiller"
          icon={<ShieldQuestion className="w-4 h-4 text-orange-500" />}
        />
      </div>

      <div className="mb-10">
        <NashMessageCard 
          title="Analyse Post-Session par Nash"
          message={
            <>
              <p className="mb-2">
                Une session globalement solide en termes de discipline préflop. Vous avez bien réagi à l'agression 
                adverse dans les premiers niveaux. 
              </p>
              <p className="mb-2">
                Cependant, dès l'entrée dans la deuxième heure, The Calculator a identifié une détérioration 
                de vos fréquences de bluff river. Vous avez abandonné 3 pots moyens où la théorie recommandait 
                une relance en bluff avec vos bloqueurs.
              </p>
              <p>
                Coût estimé sur cette session : <strong>environ 15 bb</strong>. Revoir la sélection de bloqueurs.
              </p>
            </>
          }
        />
      </div>

      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        Détail des Leaks Identifiés
      </h3>
      <div className="space-y-4 max-w-4xl">
        {MOCK_LEAKS.map(leak => (
          <LeakCard key={leak.id} {...leak} />
        ))}
      </div>
    </PageContainer>
  );
}
