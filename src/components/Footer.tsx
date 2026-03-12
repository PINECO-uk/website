import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import pinecoLogo from "@/assets/pineco-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={pinecoLogo} alt="PINECO logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                PINECO
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Consultancy, training and project coordination — empowering organisations to achieve sustainable growth.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["About", "Services", "Projects", "Recommendations", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Project Coordination</li>
              <li>Volunteering Management</li>
              <li>Training</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                123 Business Avenue, London, EC2A 1BB
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                hello@pineco.com
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                Mon-Fri: 9am-6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © 2024 PINECO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
