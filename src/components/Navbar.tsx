import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import pinecoLogo from "@/assets/pineco-logo.jpg";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.recommendations", href: "/recommendations" },
  { key: "nav.contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={pinecoLogo} alt="PINECO logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="font-heading text-2xl font-bold text-foreground tracking-tight">
              PINECO
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language flags */}
            <div className="flex items-center gap-1.5 border border-border rounded-full px-2 py-1">
              <button
                onClick={() => setLang("en")}
                className={`text-base leading-none rounded-full px-1.5 py-0.5 transition-all ${lang === "en" ? "bg-primary/15 ring-1 ring-primary/30" : "opacity-60 hover:opacity-100"}`}
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => setLang("pl")}
                className={`text-base leading-none rounded-full px-1.5 py-0.5 transition-all ${lang === "pl" ? "bg-primary/15 ring-1 ring-primary/30" : "opacity-60 hover:opacity-100"}`}
                title="Polski"
              >
                🇵🇱
              </button>
            </div>
            <Button onClick={() => navigate("/contact")} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 font-semibold">
              {t("nav.getInTouch")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile language flags */}
            <div className="flex items-center gap-1">
              <button onClick={() => setLang("en")} className={`text-base ${lang === "en" ? "opacity-100" : "opacity-50"}`}>🇬🇧</button>
              <button onClick={() => setLang("pl")} className={`text-base ${lang === "pl" ? "opacity-100" : "opacity-50"}`}>🇵🇱</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            <Button onClick={() => { setIsOpen(false); navigate("/contact"); }} className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold mt-4">
              {t("nav.getInTouch")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
