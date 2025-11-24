import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, PieChart, Activity } from "lucide-react";

const Dashboard = () => {
  const portfolio = [
    { name: "Apple Inc.", symbol: "AAPL", change: 2.4, value: "$15,240", shares: 85 },
    { name: "Microsoft", symbol: "MSFT", change: 1.8, value: "$22,100", shares: 65 },
    { name: "Bitcoin", symbol: "BTC", change: -1.2, value: "$8,450", shares: 0.15 },
    { name: "Tesla", symbol: "TSLA", change: 5.3, value: "$12,890", shares: 50 },
  ];

  return (
    <section id="dashboard" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ваш Персонален
            <span className="block bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Инвестициски Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Целосен преглед на вашето портфолио со real-time AI анализа и препораки
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-glow hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg animate-pulse">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center text-success text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12.5%
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Вкупна Вредност</p>
              <p className="text-3xl font-bold">$58,680</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-glow hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-success/10 rounded-lg animate-pulse">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div className="flex items-center text-success text-sm font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8.2%
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Добивка (30 дена)</p>
              <p className="text-3xl font-bold">+$4,850</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-glow hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-lg animate-pulse">
                <PieChart className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-center text-muted-foreground text-sm font-medium">
                Средно
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Ниво на Ризик</p>
              <p className="text-3xl font-bold">Средно</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-glow hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-success/10 rounded-lg animate-pulse">
                <Activity className="h-6 w-6 text-success" />
              </div>
              <div className="flex items-center text-primary text-sm font-medium">
                Активно
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">AI Стратегии</p>
              <p className="text-3xl font-bold">3</p>
            </div>
          </Card>
        </div>

        {/* Portfolio Table */}
        <Card className="p-6 bg-gradient-to-br from-card to-secondary border-border">
          <h3 className="text-2xl font-bold mb-6">Вашите Инвестиции</h3>
          <div className="space-y-4">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{item.symbol[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.symbol} • {item.shares} shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{item.value}</p>
                  <div className={`flex items-center justify-end gap-1 ${item.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {item.change >= 0 ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">{Math.abs(item.change)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
