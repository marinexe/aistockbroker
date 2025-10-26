import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Investment Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Вашиот Паметен
            <span className="block bg-gradient-to-r from-primary via-success to-primary bg-clip-text text-transparent">
              AI Брокер
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Инвестирајте со доверба. Наш AI систем анализира пазари 24/7, создава персонализирани стратегии и автоматски тргува за оптимални резултати.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-success hover:opacity-90 transition-opacity group">
              Започни Сега
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-card">
              Видете Како Работи
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <div className="text-3xl font-bold text-foreground">24/7</div>
              </div>
              <p className="text-sm text-muted-foreground">Анализа</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                <div className="text-3xl font-bold text-foreground">95%</div>
              </div>
              <p className="text-sm text-muted-foreground">Точност</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-success" />
                <div className="text-3xl font-bold text-foreground">1ms</div>
              </div>
              <p className="text-sm text-muted-foreground">Брзина</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
