import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pinecoLogo from "@/assets/pineco-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Recommendations", href: "/recommendations" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:5551234567" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </a>
            <Button onClick={() => navigate("/contact")} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-6 font-semibold">
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={() => { setIsOpen(false); navigate("/contact"); }} className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold mt-4">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
