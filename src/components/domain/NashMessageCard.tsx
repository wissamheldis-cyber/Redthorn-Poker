import { BRAND_CONFIG } from "@/config/brand";

interface NashMessageCardProps {
  message: string | React.ReactNode;
  title?: string;
  variant?: "default" | "critical" | "praise";
}

export function NashMessageCard({
  message,
  title = `Analyse de ${BRAND_CONFIG.coachName}`,
}: NashMessageCardProps) {
  return (
    <div
      className="flex flex-col sm:flex-row overflow-hidden rounded-lg relative"
      style={{
        background: "rgba(22, 11, 6, 0.80)",
        border: "1px solid rgba(196, 132, 58, 0.11)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      }}
    >
      {/* Panneau image */}
      <div
        className="w-full sm:w-44 flex-shrink-0 relative overflow-hidden flex items-end justify-center"
        style={{
          minHeight: 160,
          background: "rgba(10, 5, 2, 0.50)",
          borderRight: "1px solid rgba(196, 132, 58, 0.07)",
        }}
      >
        <img
          src="/images/Gemini_Generated_Image_7y7ubq7y7ubq7y7u.png"
          alt={BRAND_CONFIG.coachName}
          className="w-full h-auto object-contain object-bottom"
          style={{
            filter: "drop-shadow(0 -8px 20px rgba(123,30,42,0.25))",
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Contenu */}
      <div className="p-6 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#C4843A" }}
          />
          <h3
            className="font-display text-base font-semibold tracking-wide"
            style={{ color: "#F0E6D0" }}
          >
            {title}
          </h3>
        </div>
        <div
          className="text-sm leading-relaxed font-sans"
          style={{ color: "#8A7060" }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
