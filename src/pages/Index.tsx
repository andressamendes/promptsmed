import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptsSection } from "@/components/PromptsSection";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { Footer } from "@/components/Footer";
import { ToolsSidebar } from "@/components/ToolsSidebar";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { TaskList } from "@/components/TaskList";
import { MentorSection } from "@/components/MentorSection";
import { EthicsSection } from "@/components/EthicsSection";
import { StudyMentor } from "@/components/StudyMentor";
import { FocusModeOverlay } from "@/components/FocusModeOverlay";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { useFocusMode } from "@/contexts/FocusModeContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const { isFocusMode } = useFocusMode();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FocusModeOverlay />
      
      <div className={cn(isFocusMode && "hidden")}>
        <Navbar onFavoritesClick={() => setFavoritesOpen(true)} />
      </div>
      
      <div className={cn(isFocusMode && "hidden")}>
        <Hero />
      </div>
      
      <div className="container">
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            <PromptsSection />
          </div>
          <ToolsSidebar />
        </div>
        
        <section id="ferramentas" className={cn("xl:hidden py-8 border-t border-border", isFocusMode && "hidden")}>
          <h2 className="text-lg font-semibold mb-4">Ferramentas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <PomodoroTimer />
            <TaskList />
          </div>
        </section>
        
        <div className={cn(isFocusMode && "hidden")}>
          <MentorSection />
          <EthicsSection />
        </div>
      </div>
      
      <div className={cn(isFocusMode && "hidden")}>
        <Footer />
      </div>
      
      <FavoritesDrawer 
        open={favoritesOpen} 
        onClose={() => setFavoritesOpen(false)} 
      />
      
      <StudyMentor />
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
