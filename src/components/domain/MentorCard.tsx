import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface MentorCardProps {
  id: string;
  name: string;
  motto: string;
  philosophy: string;
  imageSrc: string;
}

export function MentorCard({ name, motto, philosophy, imageSrc }: MentorCardProps) {
  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/40 transition-colors cursor-pointer flex flex-col relative">
      <div className="relative h-64 w-full bg-gradient-to-br from-white/40 to-muted/20 overflow-hidden flex items-end justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={250}
          height={300}
          className="object-contain object-bottom transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-2xl font-bold text-foreground drop-shadow-md tracking-tight">{name}</h3>
          <p className="text-primary text-sm font-semibold mt-1 drop-shadow-sm">{motto}</p>
        </div>
      </div>
      <CardContent className="p-6 flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {philosophy}
        </p>
      </CardContent>
    </Card>
  );
}
