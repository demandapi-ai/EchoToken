import { Navigation } from "../components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Wallet, Settings, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>EchoToken App - DeFi Protocol Interface</title>
      <meta 
        name="description" 
        content="Access the EchoToken DeFi protocol interface. Manage your bonding curves, cross-chain operations, and automated liquidity." 
      />
      
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="back-button">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-orbitron font-bold text-3xl text-gradient">EchoToken App</h1>
              <p className="text-muted-foreground">Advanced DeFi Protocol Interface</p>
            </div>
          </div>

          {/* Coming Soon Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="glassmorphism border-border/50" data-testid="feature-card-wallet">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-orbitron">Wallet Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect your Web3 wallet and manage your assets across multiple chains.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-border/50" data-testid="feature-card-bonding">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="font-orbitron">Bonding Curves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create and manage dynamic bonding curves with real-time price adjustments.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-border/50" data-testid="feature-card-settings">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-400/20 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="font-orbitron">Protocol Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Configure your DeFi parameters and cross-chain preferences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect mb-8">
              <svg className="w-12 h-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.99 9 11 5.16-1.01 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 12l2 2 4-4"/>
              </svg>
            </div>
            <h2 className="font-orbitron font-bold text-4xl mb-4 text-gradient">Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The EchoToken app is currently in development. Join our community to get early access 
              and stay updated on our progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#community">
                <Button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium glow-hover" data-testid="join-community-button">
                  Join Community
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="px-8 py-3 rounded-xl font-medium" data-testid="back-home-button">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
