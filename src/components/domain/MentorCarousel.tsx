"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENTORS } from "@/mock-data/mentors";
import { ChevronLeft, ChevronRight, BarChart3, Fingerprint, Crosshair, BrainCircuit, Activity } from "lucide-react";
import { toast } from "sonner";

// Helper to get an icon based on the mentor id or stat index
const getStatIcon = (index: number) => {
  switch (index) {
    case 0: return <Activity className="w-4 h-4 text-primary" />;
    case 1: return <Crosshair className="w-4 h-4 text-primary" />;
    default: return <BrainCircuit className="w-4 h-4 text-primary" />;
  }
};

export function MentorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MENTORS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MENTORS.length) % MENTORS.length);
  };

  const activeMentor = MENTORS[activeIndex];

  return (
    <div className="relative w-full py-12 pb-24 flex flex-col items-center overflow-hidden">
      
      {/* 3D Carousel Stage */}
      <div className="relative h-[450px] w-full max-w-6xl mx-auto flex items-center justify-center perspective-[1200px]">
        <AnimatePresence initial={false} mode="popLayout">
          {MENTORS.map((mentor, index) => {
            const isActive = index === activeIndex;
            // Calculate distance from active
            let distance = index - activeIndex;
            // Handle wrap-around for visual continuity
            if (distance > MENTORS.length / 2) distance -= MENTORS.length;
            if (distance < -MENTORS.length / 2) distance += MENTORS.length;

            const isVisible = Math.abs(distance) <= 2; // Show only nearest 2 on each side

            if (!isVisible) return null;

            return (
              <motion.div
                key={mentor.id}
                layout
                initial={{ opacity: 0, x: distance > 0 ? 200 : -200, scale: 0.8 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  x: distance * 220, // Spread items horizontally
                  z: isActive ? 100 : -Math.abs(distance) * 150, // Push inactive items back
                  scale: isActive ? 1.1 : 0.8,
                  rotateY: distance * -25, // Angle items towards center
                  filter: isActive ? "blur(0px)" : `blur(${Math.abs(distance) * 3}px)`,
                }}
                exit={{ opacity: 0, scale: 0.5, z: -300 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
                className={`absolute w-[320px] h-[400px] flex flex-col items-center justify-center cursor-pointer ${isActive ? 'z-50' : 'z-auto'}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Visual Representation of Mentor (Transparent Image) */}
                <div className="relative w-full h-[350px] flex items-end justify-center drop-shadow-2xl">
                   {/* Fallback glow behind the character */}
                   {isActive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[60px] -z-10" />}
                   <img 
                      src={mentor.imageSrc} 
                      onError={(e) => { e.currentTarget.src = mentor.fallbackSrc }}
                      alt={mentor.name} 
                      className="max-h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Navigation Controls */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 md:left-12 z-50 p-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg text-slate-800 hover:bg-white hover:scale-110 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 md:right-12 z-50 p-4 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg text-slate-800 hover:bg-white hover:scale-110 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Active Mentor Descriptive Dashboard */}
      <motion.div 
        key={`desc-${activeMentor.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto mt-8 px-4"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
           {/* Decorative background element */}
           <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
           
           <div className="flex flex-col md:flex-row gap-8 relative z-10">
              {/* Core Description Block */}
              <div className="flex-1 space-y-4">
                 <div className="flex items-center gap-3 mb-2">
                    <Fingerprint className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-primary tracking-widest uppercase">{activeMentor.role}</span>
                 </div>
                 <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">{activeMentor.name}</h2>
                 <p className="text-lg italic font-medium text-slate-600 border-l-4 border-primary/40 pl-4 py-1">
                   "{activeMentor.motto}"
                 </p>
                 <p className="text-slate-600 leading-relaxed font-light">
                   {activeMentor.philosophy}
                 </p>
              </div>

              {/* Dynamic Stats Grid */}
              <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-3">
                 <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                   <BarChart3 className="w-4 h-4 text-primary" /> Impact Estimé
                 </h3>
                 {activeMentor.stats.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center justify-between bg-white/50 border border-white/60 p-3 rounded-xl shadow-sm"
                    >
                      <span className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        {getStatIcon(idx)} {stat.label}
                      </span>
                      <span className="font-bold text-slate-900">{stat.value}</span>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* The "Atypical Personalized Box" requested by the user */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
           >
              {/* Edge glow effect */}
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                 <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Recommandation du Système (Smart Analysis)</h4>
                 <h3 className="text-white text-xl font-semibold mb-3 flex items-center gap-2">
                    Pourquoi choisir {activeMentor.name} ?
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {activeMentor.whyThisMentor}
                 </p>
                 <button 
                  onClick={() => toast.info("Disponibilité Limitée", { description: `${activeMentor.name} analyse actuellement d'autres joueurs. Cette fonctionnalité (MVP) sera ouverte en V1.` })}
                  className="mt-4 text-xs font-semibold text-primary hover:text-white transition-colors flex items-center gap-1"
                 >
                   Démarrer une session avec ce mentor <ChevronRight className="w-3 h-3" />
                 </button>
              </div>
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
