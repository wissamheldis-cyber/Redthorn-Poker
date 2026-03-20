"use client";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Topbar() {
  return (
    <header
      className="h-14 sticky top-0 z-30 flex items-center justify-between px-8"
      style={{
        background: "rgba(10, 5, 2, 0.70)",
        borderBottom: "1px solid rgba(196, 132, 58, 0.07)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div />
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          style={{ color: "#6A5042" }}
          onClick={() =>
            toast.info("Notifications", {
              description: "Aucune nouvelle alerte pour le moment.",
            })
          }
        >
          <Bell className="h-4 w-4" />
          <span
            className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#7B1E2A" }}
          />
        </Button>
      </div>
    </header>
  );
}
