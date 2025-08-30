import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-effect">
              <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.99 9 11 5.16-1.01 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <span className="font-orbitron font-bold text-2xl text-gradient">
              EchoToken
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-tokenomics"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </button>
           <a
  href="https://agentverse.ai/agents/details/agent1q2yx0qufvrhkfd29fw0yamze7v5smrnvp45pl027v7qet4xd0cjl2ghjn8c/profile"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    className="px-6 py-2 bg-primary text-primary-foreground rounded-xl font-medium glow-hover transition-all duration-300"
    data-testid="nav-launch-app"
  >
    Launch App
  </Button>
</a>

          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-how-it-works"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("tokenomics")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-tokenomics"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-roadmap"
            >
              Roadmap
            </button>
            <Link href="/app">
              <Button 
                className="w-full bg-primary text-primary-foreground rounded-xl font-medium"
                data-testid="mobile-nav-launch-app"
              >
                Launch App
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
