import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PromptsSection } from "@/components/PromptsSection";
import { MentorSection } from "@/components/MentorSection";
import { EthicsSection } from "@/components/EthicsSection";
import { FavoritesDrawer } from "@/components/FavoritesDrawer";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onFavoritesClick={() => setFavoritesOpen(true)} />
      <Hero />
      <PromptsSection />
      <EthicsSection />
      <Footer />
      <MentorSection />
      <FavoritesDrawer 
        open={favoritesOpen} 
        onClose={() => setFavoritesOpen(false)} 
      />
    </div>
  );
};

export default Index;
