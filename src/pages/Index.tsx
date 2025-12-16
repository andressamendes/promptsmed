import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptsSection } from "@/components/PromptsSection";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { Footer } from "@/components/Footer";
import { EthicsSection } from "@/components/EthicsSection";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";

const Index = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onFavoritesClick={() => setFavoritesOpen(true)} />
      <Hero />
      
      <div className="container">
        <PromptsSection />
        <EthicsSection />
      </div>
      
      <Footer />
      
      <FavoritesDrawer 
        open={favoritesOpen} 
        onClose={() => setFavoritesOpen(false)} 
      />
      
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;