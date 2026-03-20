import { PageContainer } from "@/components/layout/PageContainer";
import { MENTORS } from "@/mock-data/mentors";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/config/brand";

export default async function MentorDetail({ params }: { params: Promise<{ mentorId: string }> }) {
  const resolvedParams = await params;
  const mentor = MENTORS.find(m => m.id === resolvedParams.mentorId);

  if (!mentor) {
    notFound();
  }

  return (
    <PageContainer className="max-w-[1000px]">
      <Link href="/academy" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Retour à l'Académie
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
            <Image 
              src={mentor.imageSrc} 
              alt={mentor.name}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl font-bold font-serif tracking-tight text-white">{mentor.name}</h1>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">"{mentor.motto}"</h2>
          
          <div className="prose prose-invert mt-6 max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {mentor.philosophy}
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">La vision de {BRAND_CONFIG.coachName}</h3>
            <p className="text-muted-foreground bg-muted/20 p-5 rounded-xl border border-border/50 italic leading-relaxed">
              "J'ai intégré les concepts de {mentor.name} dans la matrice d'EVolve pour vous aider dans des 
              situations spécifiques. Si votre courbe de progression stagne à cause de votre {
                mentor.id === 'predator' ? 'passivité' : 
                mentor.id === 'calculator' ? 'manque de rigueur mathématique' : 
                mentor.id === 'reader' ? 'jeu stéréotypé' : 'tilt émotionnel'
              }, c'est ce modèle qu'il faut absolument étudier."
            </p>
          </div>
          
          <div className="mt-10">
            <Button size="lg" className="px-8 shadow-[0_0_15px_rgba(184,144,91,0.2)]">Voir ses leçons</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
