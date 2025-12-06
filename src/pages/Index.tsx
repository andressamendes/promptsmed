import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptsSection } from "@/components/PromptsSection";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { Footer } from "@/components/Footer";
import { ToolsSidebar } from "@/components/ToolsSidebar";
import { PomodoroTimer } from "@/components/PomodoroTimer";
import { TaskList } from "@/components/TaskList";

const Index = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onFavoritesClick={() => setFavoritesOpen(true)} />
      <Hero />
      
      <div className="container">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <PromptsSection />
          </div>
          
          {/* Sidebar with Tools */}
          <ToolsSidebar />
        </div>
        
        {/* Mobile Tools */}
        <section id="ferramentas" className="xl:hidden py-8 border-t border-border">
          <h2 className="text-lg font-semibold mb-4">Ferramentas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <PomodoroTimer />
            <TaskList />
          </div>
        </section>
      </div>
      
      <Footer />
      <FavoritesDrawer 
        open={favoritesOpen} 
        onClose={() => setFavoritesOpen(false)} 
      />
    </div>
  );
};

export default Index;
