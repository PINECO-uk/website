import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const allRecommendations = [
  { name: "Maria K.", role: "CEO, TechVentures Ltd", text: "PINECO transformed our project delivery process. Their strategic approach saved us months and significantly improved our outcomes.", rating: 5, initials: "MK" },
  { name: "James T.", role: "Director, Nordic Solutions", text: "The training programmes were exceptional — our team's productivity increased by 40% within the first quarter.", rating: 5, initials: "JT" },
  { name: "Anna L.", role: "COO, GreenBuild Corp", text: "Outstanding project coordination. They kept everything on track and all stakeholders aligned. Truly professional.", rating: 5, initials: "AL" },
  { name: "Peter S.", role: "Managing Director, AutoParts Int.", text: "We've worked with many consultancies, but PINECO stands apart. Their hands-on approach and genuine commitment to our success made all the difference.", rating: 5, initials: "PS" },
  { name: "Elena R.", role: "HR Director, MedTech Solutions", text: "The leadership training programme was exactly what we needed. Our managers are now more confident, more strategic, and more effective.", rating: 5, initials: "ER" },
  { name: "Thomas B.", role: "Project Lead, Municipal Council", text: "PINECO's coordination of our smart city project was exemplary. Complex stakeholder management handled with professionalism and ease.", rating: 5, initials: "TB" },
];

const Recommendations = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <Navbar />
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("recommendations.title")} <span className="text-gradient-primary">{t("recommendations.titleHighlight")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("recommendations.subtitle")}</p>
      </div>

      <section className="pb-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allRecommendations.map((rec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-2xl p-8 card-elevated hover:card-elevated-hover transition-all duration-300">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{rec.text}"</p>
              <div className="flex gap-1 mb-4">
                {[...Array(rec.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">{rec.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{rec.name}</p>
                  <p className="text-xs text-muted-foreground">{rec.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Recommendations;
