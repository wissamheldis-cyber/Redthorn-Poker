import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { MentorCarousel } from "@/components/domain/MentorCarousel";
import { ACADEMY_TRACKS, CHRONICLES } from "@/mock-data/academy";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, Clock } from "lucide-react";

export default function Academy() {
  return (
    <PageContainer>
      <SectionHeader 
        title="Académie EVolve" 
        description="La bibliothèque stratégique ultime. Apprenez des meilleurs esprits du jeu."
      />

      <div className="mb-16 w-full relative z-20">
        <h3 className="text-xl font-semibold mb-2 px-4 md:px-0">Vos Mentors</h3>
        <p className="text-slate-500 mb-6 px-4 md:px-0 max-w-2xl">Sélectionnez le mentor qui correspond à vos besoins actuels. Le Carousel 3D vous permet de visualiser leur impact sur votre jeu en temps réel.</p>
        <div className="w-full -mx-4 md:mx-0">
          <MentorCarousel />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Tracks Recommandées
          </h3>
          <div className="space-y-4">
            {ACADEMY_TRACKS.map(track => (
              <Card key={track.id} className="glass-card hover:border-primary/40 transition-colors">
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-bold">{track.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{track.description}</p>
                  </div>
                  <Button variant="secondary" size="sm" className="gap-2 shrink-0 ml-4">
                    <PlayCircle className="w-4 h-4" /> Continuer
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/50" />
                      {track.completed}/{track.courses} leçons
                    </span>
                    <span className="flex items-center gap-1">
                      Mentor: <span className="font-medium text-foreground capitalize">{track.mentorId}</span>
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-muted mt-4 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${(track.completed / track.courses) * 100}%` }} 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-xl font-semibold mb-6 text-foreground">Les Chroniques</h3>
           <div className="space-y-4">
             {CHRONICLES.map(chronicle => (
               <div key={chronicle.id} className="p-5 rounded-xl border border-white/40 bg-white/50 backdrop-blur-sm hover:bg-white/80 cursor-pointer shadow-sm transition-all group flex flex-col h-full">
                 <div className="flex items-center justify-between mb-2">
                   <span className="text-xs font-medium text-primary uppercase tracking-wider">{chronicle.author}</span>
                   <span className="text-xs text-muted-foreground flex items-center gap-1">
                     <Clock className="w-3 h-3" /> {chronicle.readTime}
                   </span>
                 </div>
                 <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                   {chronicle.title}
                 </h4>
                 <p className="text-sm text-muted-foreground line-clamp-3">
                   {chronicle.description}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </PageContainer>
  );
}
