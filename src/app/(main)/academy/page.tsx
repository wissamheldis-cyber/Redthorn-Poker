"use client";

import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { MentorCarousel } from "@/components/domain/MentorCarousel";
import { ACADEMY_TRACKS, CHRONICLES } from "@/mock-data/academy";
import { BookOpen, PlayCircle, Clock } from "lucide-react";

export default function Academy() {
  return (
    <PageContainer>
      <SectionHeader
        title="Académie Redthorn"
        description="La bibliothèque stratégique ultime. Apprenez des meilleurs esprits du jeu."
      />

      <div className="mb-16 w-full relative z-20">
        <h3 className="text-xl font-semibold mb-2 px-4 md:px-0">Vos Mentors</h3>
        <p className="mb-6 px-4 md:px-0 max-w-2xl text-sm" style={{ color: "#6A5042" }}>Sélectionnez le mentor qui correspond à vos besoins actuels. Le Carousel 3D vous permet de visualiser leur impact sur votre jeu en temps réel.</p>
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
              <div
                key={track.id}
                className="rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  background: "rgba(22, 11, 6, 0.78)",
                  border: "1px solid rgba(196, 132, 58, 0.09)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.30)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,132,58,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,132,58,0.09)"; }}
              >
                {/* Barre accent top */}
                <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(196,132,58,0.50), transparent)" }} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold font-display mb-1" style={{ color: "#F0E6D0" }}>{track.title}</h4>
                      <p className="text-sm font-sans" style={{ color: "#6A5042" }}>{track.description}</p>
                    </div>
                    <button
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded flex-shrink-0 transition-opacity hover:opacity-80"
                      style={{
                        background: "rgba(123,30,42,0.18)",
                        border: "1px solid rgba(155,37,53,0.30)",
                        color: "#F0AABB",
                      }}
                    >
                      <PlayCircle className="w-3.5 h-3.5" /> Continuer
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-xs mb-3" style={{ color: "#4A3020" }}>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(196,132,58,0.50)" }} />
                      {track.completed}/{track.courses} leçons
                    </span>
                    <span>
                      Mentor : <span style={{ color: "#C8B89A" }} className="capitalize">{track.mentorId}</span>
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: "rgba(26,13,7,0.80)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(track.completed / track.courses) * 100}%`,
                        background: "linear-gradient(90deg, #5C1A1E, #C4843A)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-xl font-semibold mb-6 text-foreground">Les Chroniques</h3>
           <div className="space-y-4">
             {CHRONICLES.map(chronicle => (
               <div
                 key={chronicle.id}
                 className="p-5 rounded-lg cursor-pointer transition-all group"
                 style={{
                   background: "rgba(22, 11, 6, 0.78)",
                   border: "1px solid rgba(196, 132, 58, 0.09)",
                 }}
                 onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,132,58,0.22)"; }}
                 onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,132,58,0.09)"; }}
               >
                 <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#C4843A" }}>
                     {chronicle.author}
                   </span>
                   <span className="text-[10px] flex items-center gap-1" style={{ color: "#4A3020" }}>
                     <Clock className="w-3 h-3" /> {chronicle.readTime}
                   </span>
                 </div>
                 <h4
                   className="font-display text-sm font-semibold mb-2 transition-colors"
                   style={{ color: "#EDE0C4" }}
                 >
                   {chronicle.title}
                 </h4>
                 <p className="text-xs leading-relaxed line-clamp-3 font-sans" style={{ color: "#6A5042" }}>
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
