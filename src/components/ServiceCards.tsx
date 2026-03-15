import { motion } from "framer-motion";
import { FolderKanban, Heart, GraduationCap, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import consultingImage from "@/assets/strategy-consulting.jpg";
import trainingImage from "@/assets/training-workshop.jpg";
import projectImage from "@/assets/project-coordination.jpg";
import heroImage from "@/assets/hero-consultancy.jpg";

const ServiceCards = () => {
  const { t } = useLanguage();

  const services = [
    { icon: FolderKanban, titleKey: "services.projectCoordination", descKey: "services.projectCoordination.desc", image: projectImage },
    { icon: Heart, titleKey: "services.volunteeringManagement", descKey: "services.volunteeringManagement.desc", image: heroImage },
    { icon: GraduationCap, titleKey: "services.training", descKey: "services.training.desc", image: trainingImage },
    { icon: MessageCircle, titleKey: "services.consulting", descKey: "services.consulting.desc", image: consultingImage },
  ];

  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")} <span className="text-gradient-primary">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.titleKey} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="group bg-card rounded-2xl overflow-hidden card-elevated hover:card-elevated-hover transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={t(service.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">{t(service.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
