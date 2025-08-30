import { BentoCard } from "./bento-card";
import { TrendingUp, Network, Rocket, Flame, Shield } from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient">
              Advanced Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-Powerd Token Generation Built Onchain
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
          {/* Feature 1 - Large Card */}
          <BentoCard size="large" data-testid="feature-bonding-curve">
            <div className="h-full flex flex-col">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 glow-effect">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-foreground">Use Natural Language</h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                Echo Token Agent lets anyone describe their token in plain English 
                (“Create a token called ApeCoin with 1 billion supply, symbol APE”) 
                and it’s automatically deployed & minted.Extract token metadata from blogs & X Post.
              </p>
              <div className="mt-8">
                <div className="h-32 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-muted-foreground">Fetch Ai Chat Agent</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Feature 2 */}
          <BentoCard data-testid="feature-cross-chain">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">Deploy ChainFusion Tokens</h3>
            <p className="text-muted-foreground leading-relaxed">
              ICRC-2 Token Standards that is compatiple with other chains.
              Twin tokencreation on other chains.
            </p>
          </BentoCard>

          {/* Feature 3 */}
          <BentoCard data-testid="feature-zero-liquidity">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">Create an NFT collection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Support both 1/1 art and collections stored onchain in canisters.
            </p>
          </BentoCard>

          {/* Feature 4 */}
          <BentoCard data-testid="feature-auto-burn">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
              <Flame className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">Airdrop To community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Use Natural Language to launch airdrops with timelocks to your vibrant community.
            </p>
          </BentoCard>

          {/* Feature 5 */}
          <BentoCard data-testid="feature-security">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground">Deloy to LauchPad, Dex & MarketPlaces</h3>
            <p className="text-muted-foreground leading-relaxed">
              Launchpad,Dexes & marketplaces intergration to list tokens and NFTs using natural Language.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
