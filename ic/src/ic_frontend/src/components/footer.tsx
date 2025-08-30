import { Link } from "wouter";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="footer-logo">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.99 9 11 5.16-1.01 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <span className="font-orbitron font-bold text-xl text-gradient">
              EchoToken
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="footer-docs"
            >
              Docs
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="footer-github"
            >
              GitHub
            </a>
            <Link href="/app">
              <Button 
                className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                data-testid="footer-launch-app"
              >
                Launch App
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2024 EchoToken. All rights reserved. | Built on advanced DeFi infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
