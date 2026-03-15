import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustBadges = () => {
  const { t } = useLanguage();

  const badges = [
    { icon: ShieldCheck, titleKey: "trust.certified.title", descKey: "trust.certified.desc" },
    { icon: Target, titleKey: "trust.results.title", descKey: "trust.results.desc" },
    { icon: Users, titleKey: "trust.collaborative.title", descKey: "trust.collaborative.desc" },
    { icon: TrendingUp, titleKey: "trust.scalable.title", descKey: "trust.scalable.desc" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div key={badge.titleKey} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="flex flex-col items-center text-center p-6 rounded-2xl bg-card card-elevated hover:card-elevated-hover transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{t(badge.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(badge.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
