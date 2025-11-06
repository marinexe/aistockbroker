import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "За почетници кои сакаат да започнат со инвестирање",
      features: [
        "До $10,000 портфолио",
        "Основни AI препораки",
        "Месечни извештаи",
        "Email поддршка",
        "3 автоматски стратегии"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      description: "За сериозни инвеститори со поголем капитал",
      features: [
        "До $100,000 портфолио",
        "Напредни AI анализи",
        "Real-time известувања",
        "24/7 поддршка",
        "Неограничени стратегии",
        "Персонализиран AI асистент",
        "Само 5% од добивка"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "399",
      description: "За институции и големи инвеститори",
      features: [
        "Неограничено портфолио",
        "Premium AI модели",
        "Приоритетна поддршка",
        "Посветен account manager",
        "Кастомизирани стратегии",
        "API пристап",
        "Само 3% од добивка"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-success/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Транспарентни
            <span className="block bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Цени
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изберете го планот кој одговара на вашите цели. Плаќате само кога заработувате.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-to-br from-card to-secondary border-border relative overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary scale-105 shadow-glow' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-success text-white px-4 py-1 text-sm font-semibold">
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    Популарно
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/месец</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/20 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-success hover:opacity-90'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                    size="lg"
                  >
                    Избери План
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Изберете го {plan.name} планот</DialogTitle>
                    <DialogDescription>
                      Внесете ги вашите податоци за да започнете со ${plan.price}/месец
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="rounded-lg bg-card p-4 border border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{plan.name} План</span>
                        <span className="text-2xl font-bold">${plan.price}/мес</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan-name">Име и презиме</Label>
                      <Input 
                        id="plan-name" 
                        placeholder="Вашето име"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan-email">Email адреса</Label>
                      <Input 
                        id="plan-email" 
                        type="email" 
                        placeholder="ime@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-success">
                      Потврди Претплата
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      14-дневна гаранција за враќање на парите
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          * Дополнителни трошоци: Процент од вашата добивка (зависи од планот). Без скриени такси. Ако не заработувате, не плаќате провизија.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
