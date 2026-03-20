import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { FloatingSymbols } from "@/components/layout/FloatingSymbols";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { NashOmniPopup } from "@/components/ui/NashOmniPopup";
import { Toaster } from "sonner";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main
          className="flex-1 overflow-x-hidden overflow-y-auto relative rounded-br-2xl"
          style={{
            background: "rgba(14, 7, 3, 0.55)",
            backdropFilter: "blur(0.5px)",
          }}
        >
          <SplashScreen />
          <FloatingSymbols />
          <NashOmniPopup />
          {children}
        </main>
      </div>
      <Toaster
        position="bottom-right"
        richColors
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(26, 13, 7, 0.97)",
            border: "1px solid rgba(196, 132, 58, 0.20)",
            color: "#F0E6D0",
          },
        }}
      />
    </div>
  );
}
