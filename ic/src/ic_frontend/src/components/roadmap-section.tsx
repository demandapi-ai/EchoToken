import { Flag, Settings, Star, Globe } from "lucide-react";

export function RoadmapSection() {
  const roadmapPhases = [
    {
      title: "Phase 1: Foundation",
      status: "Completed",
      statusColor: "bg-primary/20 text-primary",
      icon: Flag,
      iconColor: "text-primary",
      borderColor: "border-primary/50",
      description: "Core protocol development, smart contract audits, and initial testnet deployment"
    },
    {
      title: "Phase 2: Expansion", 
      status: "In Progress",
      statusColor: "bg-secondary/20 text-secondary",
      icon: Settings,
      iconColor: "text-secondary",
      borderColor: "border-secondary/50",
      description: "Cross-chain integration, advanced bonding curves, and community governance implementation"
    },
    {
      title: "Phase 3: Innovation",
      status: "Q2 2024",
      statusColor: "bg-purple-400/20 text-purple-400",
      icon: Star,
      iconColor: "text-purple-400",
      borderColor: "border-purple-400/50",
      description: "AI-powered liquidity optimization, institutional partnerships, and ecosystem expansion"
    },
    {
      title: "Phase 4: Global Scale",
      status: "Q4 2024",
      statusColor: "bg-purple-600/20 text-purple-600",
      icon: Globe,
      iconColor: "text-purple-600",
      borderColor: "border-purple-600/50",
      description: "Global adoption, enterprise integrations, and next-generation DeFi infrastructure"
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 relative">
      <div className="absolute inset-0 mesh-gradient opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey towards revolutionizing decentralized finance
          </p>
        </div>

        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
                data-testid={`roadmap-phase-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl glassmorphism border ${phase.borderColor} flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${phase.iconColor}`} />
                  </div>
                </div>
                <div className="flex-grow glassmorphism rounded-xl p-6 border border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="font-orbitron font-bold text-xl text-foreground">{phase.title}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full font-medium ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
