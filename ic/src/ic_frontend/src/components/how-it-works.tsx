import { Wallet, Settings, Rocket } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Launching Tokens with Natural Language in Four-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center group" data-testid="step-1">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-2xl glassmorphism border border-primary/30 flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-orbitron font-bold">
                1
              </div>
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">Launch App & Chat with Agent </h3>
            <p className="text-muted-foreground leading-relaxed">
              Tell the Agent that you want to Launch a Token & the agent will request for your Token metadata
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group" data-testid="step-2">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-2xl glassmorphism border border-secondary/30 flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                <Wallet className="w-12 h-12 text-secondary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-orbitron font-bold">
                2
              </div>
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">Fund your account to cover cost</h3>
            <p className="text-muted-foreground leading-relaxed">
              Thanks to ICP reverse gas model, pay for token deploy in your prefered currency eg;Fetch,BTC,ETH,SOL,ICP,USDT
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group" data-testid="step-3">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-2xl glassmorphism border border-primary/30 flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-orbitron font-bold">
                3
              </div>
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">Deploy Token</h3>
            <p className="text-muted-foreground leading-relaxed">
              Agent Deduct Fee and deploys your ICRC-2 Token and Token ID is returned
            </p>
          </div>
          {/* Step 4 */}
          <div className="text-center group" data-testid="step-4">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-2xl glassmorphism border border-primary/30 flex items-center justify-center group-hover:glow-effect transition-all duration-300">
                <Settings className="w-12 h-12 text-secondary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-orbitron font-bold">
                4
              </div>
            </div>
            <h3 className="font-orbitron font-bold text-xl mb-4 text-foreground">Manage and Airdrop Token</h3>
            <p className="text-muted-foreground leading-relaxed">
              Manage your Token and Airdrop to your community with time locks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
