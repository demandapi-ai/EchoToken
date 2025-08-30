import { Twitter, MessageCircle, Github, Zap, Gem } from "lucide-react";

export function CommunitySection() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      color: "text-primary group-hover:scale-110",
      borderColor: "hover:border-primary/50",
      count: "12.4K",
      href: "#"
    },
    {
      name: "Discord", 
      icon: MessageCircle,
      color: "text-secondary group-hover:scale-110",
      borderColor: "hover:border-secondary/50",
      count: "8.7K",
      href: "#"
    },
    {
      name: "GitHub",
      icon: Github,
      color: "text-purple-400 group-hover:scale-110", 
      borderColor: "hover:border-purple-400/50",
      count: "2.1K",
      href: "#"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
              <span className="text-gradient">
                Join Our Community
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with developers, traders, and enthusiasts building the future of DeFi. 
              Get early access to features, participate in governance, and shape the protocol's evolution.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className={`flex items-center space-x-3 px-6 py-3 glassmorphism rounded-xl border border-border/50 text-foreground ${social.borderColor} transition-all duration-300 group`}
                    data-testid={`social-link-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className={`w-5 h-5 ${social.color} transition-transform`} />
                    <span className="font-medium">{social.name}</span>
                    <span className="text-muted-foreground">{social.count}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mascot Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Robot Mascot */}
              <div className="w-80 h-80 glassmorphism rounded-2xl p-6 animate-float border border-primary/30 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-effect">
                    <div className="w-8 h-8 rounded-full bg-primary-foreground"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-gradient">Echo Bot</div>
                    <div className="text-muted-foreground">DeFi Assistant</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl glassmorphism border border-primary/50 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-xl glassmorphism border border-secondary/50 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Gem className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
