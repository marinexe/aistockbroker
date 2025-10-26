import { Card } from "@/components/ui/card";
import { Bot, Brain, LineChart, Shield, Sparkles, Clock } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Паметна Анализа",
      description: "AI систем кој анализира милиони податоци од глобалниот пазар во реално време",
      color: "text-primary"
    },
    {
      icon: LineChart,
      title: "Автоматско Тргување",
      description: "Автоматски купува и продава според вашите цели и ризик толеранција",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Менаџмент на Ризик",
      description: "Интелигентна заштита на вашите инвестиции со напредни алгоритми",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Мониторинг",
      description: "Постојано следење на пазарните движења и моментална реакција",
      color: "text-success"
    },
    {
      icon: Sparkles,
      title: "Персонализирани Стратегии",
      description: "Креира уникатни инвестициски стратегии базирани на вашите цели",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "AI Асистент",
      description: "Достапен 24/7 за прашања, совети и анализи на вашето портфолио",
      color: "text-success"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Моќта на
            <span className="block bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Вештачка Интелигенција
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Напредни AI технологии кои работат за вас 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-secondary border-border hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center mb-4`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* AI Chat Preview */}
        <Card className="mt-16 p-8 bg-gradient-to-br from-card to-secondary border-border max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center flex-shrink-0">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground mb-2">AI Препорака</p>
              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground">
                  "Врз основа на моментната анализа на пазарот, препорачувам да зголемите инвестиција во технолошкиот сектор за 15%. Apple и Microsoft покажуваат силен раст со низок ризик."
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">Висока Доверба: 94%</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Среден Ризик</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIFeatures;
