"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { LayoutDashboard, Upload, History, User, BookOpen, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard",       href: "/dashboard", icon: LayoutDashboard },
  { name: "Imports",         href: "/imports",   icon: Upload },
  { name: "Session Review",  href: "/review",    icon: History },
  { name: "Player Profile",  href: "/profile",   icon: User },
  { name: "Academy",         href: "/academy",   icon: BookOpen },
  { name: "Settings",        href: "/settings",  icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-64 hidden md:flex flex-col relative z-20 flex-shrink-0"
      style={{
        /* Panneau bois sombre — même matière que la pièce */
        backgroundColor: "rgba(10, 5, 2, 0.97)",
        backgroundImage: `
          repeating-linear-gradient(
            92deg,
            transparent 0px, transparent 3px,
            rgba(160, 80, 15, 0.022) 3px, rgba(160, 80, 15, 0.022) 4px,
            transparent 4px, transparent 8px,
            rgba(80, 30, 5, 0.014) 8px, rgba(80, 30, 5, 0.014) 9px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0px, transparent 72px,
            rgba(0, 0, 0, 0.10) 72px, rgba(0, 0, 0, 0.10) 73px,
            rgba(196, 132, 58, 0.022) 73px, rgba(196, 132, 58, 0.022) 74px,
            transparent 74px
          )
        `,
        borderRight: "1px solid rgba(196, 132, 58, 0.09)",
      }}
    >
      {/* Logo */}
      <div
        className="px-5 h-20 flex items-center"
        style={{ borderBottom: "1px solid rgba(196, 132, 58, 0.08)" }}
      >
        <Logo variant="wordmark" size={30} />
      </div>

      {/* Filet doré décoratif sous le logo */}
      <div className="amber-divider opacity-60 mx-4" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium transition-all duration-200",
                isActive
                  ? "text-[#F0E6D0]"
                  : "text-[#8A7060] hover:text-[#C8B89A]"
              )}
              style={
                isActive
                  ? {
                      background:
                        "linear-gradient(90deg, rgba(123,30,42,0.28), rgba(123,30,42,0.08))",
                      borderLeft: "2px solid rgba(196, 132, 58, 0.60)",
                      paddingLeft: "10px",
                      boxShadow: "inset 0 0 20px rgba(123,30,42,0.10)",
                    }
                  : {
                      borderLeft: "2px solid transparent",
                    }
              }
            >
              <item.icon
                className="h-4 w-4 flex-shrink-0"
                style={{
                  color: isActive ? "#C4843A" : "#6A5042",
                }}
              />
              <span className="tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Filet doré au-dessus du user */}
      <div className="amber-divider opacity-40 mx-4" />

      {/* User card */}
      <div
        className="p-4"
        style={{ borderTop: "1px solid rgba(196, 132, 58, 0.06)" }}
      >
        <div className="flex items-center gap-3 px-2 py-2">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #7B1E2A, #5C1220)",
              color: "#F5EDD8",
              border: "1px solid rgba(196, 132, 58, 0.25)",
            }}
          >
            G
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-[#EDE0C4] truncate">
              GrindMaster
            </span>
            <span className="text-xs text-[#6A5042] tracking-wide uppercase">
              Membre Pro
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
