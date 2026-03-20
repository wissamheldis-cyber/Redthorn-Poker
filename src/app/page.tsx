import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { ArrowRight, BarChart3, Crosshair, BrainCircuit, ShieldAlert, Cpu, Activity } from "lucide-react";
import { LeakCard } from "@/components/domain/LeakCard";
import { StatCard } from "@/components/domain/StatCard";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{ color: "#F0E6D0", background: "#0D0806" }}
    >
      {/* ============ HEADER ============ */}
      <header
        className="fixed top-0 w-full z-50 flex items-center justify-between px-8 lg:px-14 h-[72px]"
        style={{
          background: "rgba(8, 3, 1, 0.82)",
          borderBottom: "1px solid rgba(196, 132, 58, 0.09)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Logo variant="wordmark" size={26} />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#8A7060" }}>
          <Link href="#plateforme" className="hover:text-[#C8B89A] transition-colors">La Plateforme</Link>
          <Link href="#mentors"   className="hover:text-[#C8B89A] transition-colors">Les Mentors</Link>
          <Link href="/academy"   className="hover:text-[#C8B89A] transition-colors">L'Académie</Link>
        </nav>

        <Link href="/dashboard">
          <Button size="sm" className="tracking-wide">
            Entrer dans le Club
          </Button>
        </Link>
      </header>

      {/* ============ HERO ============ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(5,2,1,0.58), rgba(5,2,1,0.58)),
            url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Lueur bordeaux centrale */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 55% at 35% 60%, rgba(123,30,42,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Grille décorative fine */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(196,132,58,0.04) 80px, rgba(196,132,58,0.04) 81px),
              repeating-linear-gradient(0deg,  transparent, transparent 80px, rgba(196,132,58,0.04) 80px, rgba(196,132,58,0.04) 81px)
            `,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-14 flex items-center gap-12 lg:gap-20 min-h-[calc(100vh-72px)]">
          {/* Texte hero — gauche */}
          <div className="flex-1 flex flex-col justify-center py-20">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded text-xs font-medium tracking-[0.18em] uppercase mb-8 self-start"
              style={{
                background: "rgba(123, 30, 42, 0.22)",
                border: "1px solid rgba(196, 132, 58, 0.25)",
                color: "#C4843A",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C4843A" }}
              />
              Coaching Poker Post-Session
            </div>

            {/* Headline */}
            <h1
              className="font-display font-semibold leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", color: "#F0E6D0" }}
            >
              Le coaching poker
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #C4843A, #E0A84A, #B87A30)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                qui commence après
              </span>
              <br />
              la partie.
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 max-w-lg font-light"
              style={{ color: "#8A7060" }}
            >
              Importez vos sessions, analysez vos erreurs, construisez votre profil joueur.
              Redthorn transforme chaque main jouée en progression concrète.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="gap-2 tracking-wide">
                  Accéder au Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#plateforme">
                <Button size="lg" variant="outline">
                  Voir la Plateforme
                </Button>
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="mt-14 flex gap-10 pt-8" style={{ borderTop: "1px solid rgba(196,132,58,0.10)" }}>
              {[
                { val: "5", label: "Mentors spécialisés" },
                { val: "Post-session", label: "Coaching ciblé" },
                { val: "100%", label: "Stratégique" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-semibold" style={{ color: "#C4843A" }}>{val}</div>
                  <div className="text-xs tracking-wider uppercase mt-0.5" style={{ color: "#5A3A2A" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Personnage principal — droite */}
          <div className="hidden lg:flex flex-col justify-end self-stretch relative w-[38%] max-w-[500px] flex-shrink-0">
            {/* Lueur derrière le personnage */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[70%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(123,30,42,0.35) 0%, transparent 70%)",
              }}
            />
            <img
              src="/images/Gemini_Generated_Image_wb9rq9wb9rq9wb9r.png"
              alt="Redthorn — Votre guide"
              className="w-full h-auto object-contain object-bottom relative z-10"
              style={{
                filter: "drop-shadow(-8px 0 40px rgba(123,30,42,0.30))",
                maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Dégradé de transition vers la section suivante */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0D0806)" }}
        />
      </section>

      {/* ============ SHOWCASE DASHBOARD ============ */}
      <section id="plateforme" className="px-8 lg:px-14 max-w-7xl mx-auto py-28">
        {/* En-tête de section */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ color: "#6A5042" }}>
            La Plateforme
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5"
            style={{ color: "#F0E6D0" }}
          >
            Un centre de contrôle
            <br />
            stratégique élégant.
          </h2>
          <div className="amber-divider mt-6 w-32" />
        </div>

        {/* Mockup sombre */}
        <div
          className="w-full rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(196, 132, 58, 0.12)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.60)",
          }}
        >
          {/* Chrome bar */}
          <div
            className="h-10 flex items-center gap-3 px-4"
            style={{
              background: "rgba(10, 5, 2, 0.97)",
              borderBottom: "1px solid rgba(196, 132, 58, 0.08)",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ background: "#5C1220" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#3A2008" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#1A3010" }} />
            </div>
            <div
              className="flex-1 max-w-xs mx-auto h-5 rounded text-xs flex items-center justify-center font-sans"
              style={{
                background: "rgba(26,13,7,0.80)",
                border: "1px solid rgba(196,132,58,0.08)",
                color: "#6A5042",
              }}
            >
              app.redthorn.gg/dashboard
            </div>
          </div>

          {/* Contenu dashboard */}
          <div
            className="p-8 md:p-12"
            style={{
              background: "rgba(14, 7, 3, 0.96)",
              backgroundImage: "repeating-linear-gradient(93deg, transparent 0px, transparent 4px, rgba(180,90,20,0.015) 4px, rgba(180,90,20,0.015) 5px)",
            }}
          >
            <h3 className="font-display text-2xl font-semibold mb-1" style={{ color: "#F0E6D0" }}>
              Bienvenue, GrindMaster.
            </h3>
            <p className="text-sm mb-8" style={{ color: "#6A5042" }}>
              Votre guide a identifié{" "}
              <span style={{ color: "#C4843A" }}>3 fuites critiques</span>{" "}
              lors de votre dernière session.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <StatCard
                  title="VPIP / PFR"
                  value="24% / 18%"
                  description="Légèrement trop passif"
                  icon={<Activity className="w-4 h-4" style={{ color: "#C4843A" }} />}
                />
                <StatCard
                  title="3-Bet Total"
                  value="6.5%"
                  description="Optimal (GTO: 6–8%)"
                  icon={<Crosshair className="w-4 h-4" style={{ color: "#5A8A5A" }} />}
                />
                <div className="col-span-2">
                  <LeakCard
                    title="Fold trop élevé vs 3-Bet OOP"
                    description="Vous couchez 72% de vos mains face à un 3-Bet hors de position. Le standard GTO recommande de défendre au moins 45%."
                    severity="high"
                    costEstimate="12 bb/100"
                    frequency="Contre les joueurs agressifs (>8% 3Bet)"
                  />
                </div>
              </div>

              {/* Panneau guide */}
              <div
                className="rounded-lg p-6 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: "rgba(26, 13, 7, 0.80)",
                  border: "1px solid rgba(196, 132, 58, 0.12)",
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center mb-4"
                    style={{ background: "rgba(123,30,42,0.25)", border: "1px solid rgba(123,30,42,0.40)" }}
                  >
                    <BrainCircuit className="w-5 h-5" style={{ color: "#C4843A" }} />
                  </div>
                  <h4 className="font-display text-base font-semibold mb-3" style={{ color: "#F0E6D0" }}>
                    Analyse du Session
                  </h4>
                  <div
                    className="rounded p-3 mb-4"
                    style={{
                      background: "rgba(12,6,2,0.60)",
                      border: "1px solid rgba(196,132,58,0.08)",
                    }}
                  >
                    <p className="text-xs leading-relaxed italic" style={{ color: "#8A7060" }}>
                      "En corrigeant cette fuite sur le 3-Bet OOP, votre EV projetée sur
                      les 10 000 prochaines mains augmente de{" "}
                      <span style={{ color: "#C4843A", fontWeight: 600 }}>+18%</span>."
                    </p>
                  </div>
                </div>
                <Link href="/academy" className="w-full">
                  <Button variant="outline" size="sm" className="w-full gap-1.5">
                    Ouvrir l'Académie <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENTO FEATURES ============ */}
      <section id="features" className="px-8 lg:px-14 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Grand bloc — Coaching incarné */}
          <div
            className="md:col-span-2 rounded-xl p-10 lg:p-12 relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(rgba(5,2,1,0.70), rgba(5,2,1,0.70)),
                url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(196, 132, 58, 0.12)",
            }}
          >
            <div
              className="absolute bottom-0 right-0 w-60 h-60 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(123,30,42,0.30) 0%, transparent 70%)" }}
            />
            <BrainCircuit className="w-12 h-12 mb-6" style={{ color: "#C4843A" }} />
            <h3 className="font-display text-3xl font-semibold mb-4" style={{ color: "#F0E6D0" }}>
              Un coaching incarné,<br />pas un solver froid.
            </h3>
            <p className="text-base leading-relaxed max-w-md font-light" style={{ color: "#8A7060" }}>
              Votre guide analyse vos patterns cognitifs, identifie vos fuites techniques et mentales,
              et vous parle avec le ton précis d'un coach de haut niveau — pas d'un algorithme anonyme.
            </p>
          </div>

          {/* Bloc Leaks */}
          <div
            className="rounded-xl p-10 flex flex-col"
            style={{
              background: "rgba(22, 11, 6, 0.90)",
              border: "1px solid rgba(196, 132, 58, 0.10)",
            }}
          >
            <ShieldAlert className="w-10 h-10 mb-6" style={{ color: "#9B2535" }} />
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F0E6D0" }}>
              Détection de Leaks
            </h3>
            <p className="text-sm leading-relaxed flex-1 font-light" style={{ color: "#6A5042" }}>
              Vos mains croisées avec des millions de simulations solver pour flagger exactement
              les spots où vous perdez de l'argent.
            </p>
          </div>

          {/* Bloc Projection */}
          <div
            className="rounded-xl p-10 flex flex-col"
            style={{
              background: "rgba(22, 11, 6, 0.90)",
              border: "1px solid rgba(196, 132, 58, 0.10)",
            }}
          >
            <BarChart3 className="w-10 h-10 mb-6" style={{ color: "#B8A060" }} />
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F0E6D0" }}>
              Projection Winrate
            </h3>
            <p className="text-sm leading-relaxed flex-1 font-light" style={{ color: "#6A5042" }}>
              Voyez comment corriger une seule erreur majeure impacte concrètement
              votre winrate à 30 jours.
            </p>
          </div>

          {/* Grand bloc — Panel mentors */}
          <div
            className="md:col-span-2 rounded-xl p-10 lg:p-12 relative overflow-hidden"
            style={{
              background: "rgba(20, 10, 5, 0.92)",
              border: "1px solid rgba(196, 132, 58, 0.12)",
            }}
          >
            <Cpu className="w-12 h-12 mb-6" style={{ color: "#C4843A" }} />
            <h3 className="font-display text-3xl font-semibold mb-4" style={{ color: "#F0E6D0" }}>
              Cinq mentors.<br />Un seul objectif.
            </h3>
            <p className="text-base leading-relaxed max-w-md font-light mb-8" style={{ color: "#6A5042" }}>
              La Stoïque, La Calculatrice, Le Prédateur, Le Lecteur, Le Chaos.
              Chaque mentor incarne une dimension du jeu. Choisissez votre école.
            </p>
            <Link href="/academy">
              <Button variant="outline" className="gap-2">
                Découvrir l'Académie <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MENTORS PREVIEW ============ */}
      <section id="mentors" className="px-8 lg:px-14 max-w-7xl mx-auto py-28">
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ color: "#6A5042" }}>
            Les Mentors
          </p>
          <h2 className="font-display text-4xl font-semibold" style={{ color: "#F0E6D0" }}>
            Entrez dans le cercle.
          </h2>
          <div className="amber-divider mt-6 w-24" />
        </div>

        {/* Tableau de famille */}
        <div
          className="w-full rounded-xl overflow-hidden relative"
          style={{
            border: "1px solid rgba(196, 132, 58, 0.10)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.50)",
          }}
        >
          <img
            src="/images/Gemini_Generated_Image_c0z79dc0z79dc0z7.png"
            alt="Les mentors Redthorn autour de la table"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "520px", objectPosition: "center top" }}
          />
          {/* Overlay texte */}
          <div
            className="absolute bottom-0 left-0 right-0 p-8"
            style={{
              background: "linear-gradient(to top, rgba(5,2,1,0.92) 0%, transparent 100%)",
            }}
          >
            <p className="font-display text-xl font-medium mb-1" style={{ color: "#F0E6D0" }}>
              La Table Redthorn
            </p>
            <p className="text-sm" style={{ color: "#6A5042" }}>
              Cinq archétypes, une académie, une progression durable.
            </p>
          </div>
        </div>

        {/* Grille rapide des mentors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {[
            { img: "Gemini_Generated_Image_19vrl519vrl519vr", name: "La Stoïque",      role: "Sang-froid" },
            { img: "Gemini_Generated_Image_h4g9jch4g9jch4g9", name: "La Calculatrice", role: "GTO & Calcul" },
            { img: "Gemini_Generated_Image_80g3lm80g3lm80g3", name: "Le Prédateur",    role: "Pression" },
            { img: "Gemini_Generated_Image_x807kgx807kgx807", name: "Le Lecteur",      role: "Psychologie" },
            { img: "Gemini_Generated_Image_ydpradydpradydpr", name: "Le Chaos",        role: "Variance" },
          ].map(({ img, name, role }) => (
            <div
              key={name}
              className="rounded-lg overflow-hidden text-center"
              style={{
                background: "rgba(20, 10, 5, 0.80)",
                border: "1px solid rgba(196, 132, 58, 0.09)",
              }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#100600]">
                <img
                  src={`/images/${img}.png`}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-3">
                <p className="font-display text-sm font-semibold" style={{ color: "#EDE0C4" }}>{name}</p>
                <p className="text-xs mt-0.5 tracking-wide" style={{ color: "#6A5042" }}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="px-8 lg:px-14 max-w-7xl mx-auto py-24">
        <div
          className="rounded-xl p-14 md:p-20 text-center relative overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(5,2,1,0.75), rgba(5,2,1,0.75)),
              url('/images/Gemini_Generated_Image_hjnepzhjnepzhjne.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid rgba(196, 132, 58, 0.14)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.50)",
          }}
        >
          {/* Filet doré en haut */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(196,132,58,0.50), transparent)" }}
          />

          <p className="text-xs tracking-[0.22em] uppercase mb-6" style={{ color: "#6A5042" }}>
            Rejoindre Redthorn
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight" style={{ color: "#F0E6D0" }}>
            Analysez vos sessions.
            <br />
            Corrigez vos erreurs.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #C4843A, #E0A84A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Élevez votre jeu.
            </span>
          </h2>
          <p className="text-base mb-12 max-w-lg mx-auto font-light" style={{ color: "#6A5042" }}>
            Rejoignez les joueurs qui ont choisi un coaching plus incarné, plus précis et plus ambitieux.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="gap-2 px-10 tracking-wide">
              Accéder au Dashboard <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        className="py-10 text-center"
        style={{ borderTop: "1px solid rgba(196, 132, 58, 0.07)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <Logo variant="wordmark" size={22} />
          <p className="text-xs tracking-wide" style={{ color: "#4A3020" }}>
            &copy; {new Date().getFullYear()} Redthorn. Le coaching poker qui commence après la partie.
          </p>
        </div>
      </footer>
    </div>
  );
}
