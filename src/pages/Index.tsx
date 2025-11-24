import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketTicker from "@/components/MarketTicker";
import Dashboard from "@/components/Dashboard";
import AIFeatures from "@/components/AIFeatures";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <MarketTicker />
        <Dashboard />
        <AIFeatures />
        <Testimonials />
        <Pricing />
        <FAQ />
      
        {/* Footer */}
        <footer className="border-t border-border py-12 bg-card">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">AI Брокер</h3>
                <p className="text-sm text-muted-foreground">
                  Паметно инвестирање со вештачка интелигенција
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Продукт</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#features" className="hover:text-foreground transition-colors">
                      Можности
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-foreground transition-colors">
                      Цени
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-foreground transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Компанија</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      За Нас
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Блог
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Кариери
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакт</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>support@aibroker.mk</li>
                  <li>+389 2 123 4567</li>
                  <li>Скопје, Македонија</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© 2024 AI Брокер Платформа. Сите права задржани.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
