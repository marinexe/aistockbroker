import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap, Sparkles, Brain, BarChart3 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-success/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Brain className="h-16 w-16 text-primary animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20">
        <BarChart3 className="h-20 w-20 text-success animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-1/3 right-10 opacity-20">
        <Sparkles className="h-12 w-12 text-primary animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-success hover:opacity-90 transition-opacity group">
                  Започни Сега
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Започнете со AI инвестирање</DialogTitle>
                  <DialogDescription>
                    Регистрирајте се и добијте бесплатна 14-дневна пробна верзија
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Име и презиме</Label>
                    <Input 
                      id="name" 
                      placeholder="Вашето име"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email адреса</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ime@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-success">
                    Започни Бесплатно
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Без кредитна картичка. Откажете во секое време.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:bg-card">
                  Видете Како Работи
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Како функционира AI Брокерот?</DialogTitle>
                  <DialogDescription>
                    Откријте ја моќта на вештачката интелигенција во инвестирањето
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/20 p-3">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">1. AI Анализа</h4>
                      <p className="text-sm text-muted-foreground">
                        Нашиот AI систем анализира илјадници податоци од глобалните пазари во реално време
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/20 p-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">2. Персонализирани Стратегии</h4>
                      <p className="text-sm text-muted-foreground">
                        Создаваме уникатна стратегија базирана на вашите цели и толеранција на ризик
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/20 p-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">3. Автоматско Тргување</h4>
                      <p className="text-sm text-muted-foreground">
                        AI автоматски извршува трансакции во оптималното време за максимална профит
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/20 p-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">4. Управување со Ризик</h4>
                      <p className="text-sm text-muted-foreground">
                        Постојано следење и прилагодување за минимизирање на ризикот
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
