import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-consultancy.jpg";
import pinecoLogo from "@/assets/pineco-logo.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex items-center overflow-hidden py-32 md:py-40 lg:py-48">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="PINECO consultancy team collaborating in a modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img src={pinecoLogo} alt="PINECO logo" className="h-28 w-28 md:h-36 md:w-36 rounded-2xl object-cover shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Small Seeds,{" "}
            <span className="text-accent">Lasting Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-lg"
          >
            Consultancy, training and project coordination — empowering organisations to grow sustainably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button onClick={() => navigate("/services")} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/contact")}
              className="border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
