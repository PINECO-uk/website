import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Handshake, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const badges = [
  {
    icon: GraduationCap,
    title: "Real-world experience",
    desc: "MSc-qualified, created and collaborated with Erasmus+ accredited organisation, and shaped by years of hands-on work in nonprofits, healthcare and international volunteering — not just theory.",
  },
  {
    icon: Lightbulb,
    title: "Practical, not generic",
    desc: "No one-size-fits-all templates. Every session, plan and workshop is built around your organisation's actual situation, capacity and goals.",
  },
  {
    icon: Handshake,
    title: "A partner, not a consultant",
    desc: "I work with you, not at you. Whether it's a one-off session or ongoing support, you'll always feel like we're figuring it out together.",
  },
  {
    icon: Heart,
    title: "Built for organisations like yours",
    desc: "Small teams, limited budgets, big ambitions — I understand the reality of running a nonprofit or community group, because I've lived it.",
  },
];

const TrustBadges = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              onClick={() => navigate("/about")}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card card-elevated cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground group border-2 border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <badge.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-primary-foreground transition-colors duration-300">{badge.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
