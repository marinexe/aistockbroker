import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Марко Петровски",
    role: "Инвеститор",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "AI Брокерот ми помогна да ја зголемам добивката за 45% во првите 3 месеци. Автоматското тргување е неверојатно!",
  },
  {
    name: "Ана Јовановска",
    role: "Почетник Инвеститор",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "Немав никакво искуство со инвестирање, но платформата е толку едноставна. Сега инвестирам со самодоверба!",
  },
  {
    name: "Стефан Димитриев",
    role: "Трговец",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    text: "24/7 анализата и моментални препораки го направија мојот портфолио многу поефикасен. Одлична платформа!",
  },
  {
    name: "Елена Николовска",
    role: "Недвижности Инвеститор",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Користам за инвестиции во недвижности. AI анализата на пазарот е прецизна и ми заштедува многу време.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--success)/0.1),transparent_50%)]" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Искуства на Корисници
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Што велат нашите корисници
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Илјадници инвеститори веќе им верујат на нашата AI платформа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-success text-success"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground/80 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <p className="text-muted-foreground">Активни Корисници</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              €50M+
            </div>
            <p className="text-muted-foreground">Вкупно Инвестирано</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-muted-foreground">Прецизност</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-muted-foreground">AI Мониторинг</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
