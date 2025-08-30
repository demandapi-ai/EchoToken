import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

export function TokenomicsSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const config: ChartConfiguration = {
      type: "doughnut",
      data: {
        labels: ["Community & Rewards", "Development", "Liquidity Provision", "Team & Advisors"],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: [
            "hsl(262 83% 58%)",
            "hsl(270 95% 75%)", 
            "hsl(270 75% 70%)",
            "hsl(270 85% 60%)"
          ],
          borderColor: [
            "hsl(262 83% 58%)",
            "hsl(270 95% 75%)",
            "hsl(270 75% 70%)",
            "hsl(270 85% 60%)"
          ],
          borderWidth: 2,
          hoverBorderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "#fff",
            bodyColor: "#fff",
            borderColor: "hsl(262 83% 58%)",
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: true
          }
        },
        animation: {
          duration: 2000
        },
        elements: {
          arc: {
            borderWidth: 2
          }
        },
        cutout: "60%"
      }
    };

    chartInstance.current = new Chart(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const tokenomicsData = [
    {
      label: "Community & Rewards",
      percentage: 40,
      color: "bg-primary",
      textColor: "text-primary",
      description: "Distributed to community through staking rewards and governance participation"
    },
    {
      label: "Development",
      percentage: 25,
      color: "bg-secondary",
      textColor: "text-secondary",
      description: "Allocated for protocol development and infrastructure expansion"
    },
    {
      label: "Liquidity Provision",
      percentage: 20,
      color: "bg-purple-400",
      textColor: "text-purple-400",
      description: "Initial liquidity and cross-chain bridge reserves"
    },
    {
      label: "Team & Advisors",
      percentage: 15,
      color: "bg-purple-600",
      textColor: "text-purple-600",
      description: "Team allocation with 4-year vesting schedule"
    }
  ];

  return (
    <section id="tokenomics" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6">
            <span className="text-gradient">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sustainable and deflationary token economics designed for long-term value creation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <div className="glassmorphism rounded-2xl p-8 border border-border/50" data-testid="tokenomics-chart">
            <canvas ref={chartRef} width="400" height="400"></canvas>
          </div>

          {/* Breakdown */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-xl p-6 border border-border/50"
                data-testid={`tokenomics-item-${index}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="font-orbitron font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className={`font-bold ${item.textColor}`}>{item.percentage}%</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
