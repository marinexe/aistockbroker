import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import AIFeatures from "@/components/AIFeatures";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Dashboard />
      <AIFeatures />
      <Pricing />
      
      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-semibold text-foreground mb-2">AI Брокер Платформа</p>
            <p className="text-sm">© 2024 Сите права задржани. Паметно инвестирање со вештачка интелигенција.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
