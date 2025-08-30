import { Navigation } from "../components/navigation";
import { ParticleSystem } from "../components/particle-system";
import { HeroSection } from "../components/hero-section";
import { FeaturesGrid } from "../components/features-grid";
import { HowItWorks } from "../components/how-it-works";
import { TokenomicsSection } from "../components/tokenomics-section";
import { RoadmapSection } from "../components/roadmap-section";
import { CommunitySection } from "../components/community-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>EchoToken - Advanced DeFi Protocol</title>
      <meta 
        name="description" 
        content="Revolutionary bonding curves meet cross-chain liquidity in the most advanced DeFi ecosystem. Experience zero-liquidity launches with automated burn mechanisms." 
      />
      
      <ParticleSystem />
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <TokenomicsSection />
        <RoadmapSection />
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  );
}
