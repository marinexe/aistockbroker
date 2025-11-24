import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Брокер
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("dashboard")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Дашборд
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Можности
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Цени
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Најави се</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Најави се</DialogTitle>
                  <DialogDescription>
                    Пристапи до твојата AI брокерска платформа
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="vashe.ime@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Лозинка</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button className="w-full">Најави се</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary shadow-glow hover:shadow-glow-lg">
                  Започни Сега
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Започни со AI Брокер</DialogTitle>
                  <DialogDescription>
                    Креирај бесплатна сметка и почни со паметно инвестирање
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="vashe.ime@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Лозинка</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button className="w-full">Креирај Сметка</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("dashboard")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Дашборд
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Можности
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                Цени
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full">
                      Најави се
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Најави се</DialogTitle>
                      <DialogDescription>
                        Пристапи до твојата AI брокерска платформа
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile-login-email">Email</Label>
                        <Input
                          id="mobile-login-email"
                          type="email"
                          placeholder="vashe.ime@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile-login-password">Лозинка</Label>
                        <Input
                          id="mobile-login-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <Button className="w-full">Најави се</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-primary">
                      Започни Сега
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Започни со AI Брокер</DialogTitle>
                      <DialogDescription>
                        Креирај бесплатна сметка и почни со паметно инвестирање
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="mobile-signup-email">Email</Label>
                        <Input
                          id="mobile-signup-email"
                          type="email"
                          placeholder="vashe.ime@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile-signup-password">Лозинка</Label>
                        <Input
                          id="mobile-signup-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <Button className="w-full">Креирај Сметка</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
