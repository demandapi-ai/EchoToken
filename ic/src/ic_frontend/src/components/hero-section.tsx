import { Link } from "wouter";
import { Button } from "./ui/button";
import { Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center mesh-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNBODU1RjciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Floating Robot Mascot */}
      <div className="absolute top-20 right-10 w-32 h-32 animate-float hidden lg:block">
        <div className="w-full h-full glassmorphism rounded-2xl p-4 flex items-center justify-center border border-primary/30">
          <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.5 8C8.33 8 9 8.67 9 9.5S8.33 11 7.5 11 6 10.33 6 9.5 6.67 8 7.5 8zm9 0c.83 0 1.5.67 1.5 1.5S17.33 11 16.5 11 15 10.33 15 9.5 15.67 8 16.5 8zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
            <svg className="w-12 h-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.99 9 11 5.16-1.01 9-5.45 9-11V7l-10-5z"/>
              <path d="M8 12l2 2 4-4"/>
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          <span className="text-gradient">
            EchoToken
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-orbitron font-medium">
          Deploy ChainFusion Tokens
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          An AI Agent build with FetchAI that deploys ChainFusion Tokens with natural language by 
          generating token meta-data from blog or twitter post
        </p>

        {/* CTA Button */}
<a 
  href="https://agentverse.ai/agents/details/agent1q2yx0qufvrhkfd29fw0yamze7v5smrnvp45pl027v7qet4xd0cjl2ghjn8c/profile"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button 
    className="group relative px-12 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl font-orbitron font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-105 glow-effect"
    data-testid="hero-launch-app"
  >
    <span className="relative z-10">Launch App</span>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <Rocket className="ml-3 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center" data-testid="stat-tvl">
            <div className="text-3xl font-orbitron font-bold text-primary">60</div>
            <div className="text-muted-foreground">Interractions</div>
          </div>
          <div className="text-center" data-testid="stat-volume">
            <div className="text-3xl font-orbitron font-bold text-secondary">10</div>
            <div className="text-muted-foreground">Tokens Launched</div>
          </div>
          <div className="text-center" data-testid="stat-users">
            <div className="text-3xl font-orbitron font-bold text-primary">100</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center" data-testid="stat-chains">
            <div className="text-3xl font-orbitron font-bold text-secondary">10</div>
            <div className="text-muted-foreground">Supported Chains</div>
          </div>
        </div>
      </div>
    </section>
  );
}
