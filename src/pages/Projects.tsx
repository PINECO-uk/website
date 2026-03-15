import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import consultingImage from "@/assets/strategy-consulting.jpg";
import trainingImage from "@/assets/training-workshop.jpg";
import projectImage from "@/assets/project-coordination.jpg";
import heroImage from "@/assets/hero-consultancy.jpg";

const projects = [
  { title: "Digital Transformation Strategy", client: "Nordic Financial Group", category: "Consultancy", description: "Developed a comprehensive digital transformation roadmap that modernised operations and improved customer experience across 12 branches.", image: consultingImage },
  { title: "Leadership Development Programme", client: "GreenBuild Corp", category: "Training", description: "Designed and delivered a 6-month leadership training programme for 45 senior managers, resulting in 35% improvement in team performance metrics.", image: trainingImage },
  { title: "EU-Funded Infrastructure Project", client: "Regional Development Agency", category: "Project Coordination", description: "Managed a €2.5M infrastructure project from inception to completion, delivering on time and 8% under budget.", image: projectImage },
  { title: "Organisational Restructuring", client: "TechVentures Ltd", category: "Consultancy", description: "Led organisational redesign affecting 200+ employees, streamlining processes and reducing operational costs by 22%.", image: heroImage },
  { title: "Sales Excellence Training", client: "AutoParts International", category: "Training", description: "Delivered intensive sales training programme across 5 countries, boosting quarterly revenue by 18% within 6 months.", image: trainingImage },
  { title: "Smart City Initiative", client: "Municipal Council", category: "Project Coordination", description: "Coordinated a multi-stakeholder smart city pilot project involving IoT infrastructure, citizen engagement, and data analytics.", image: projectImage },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <Navbar />
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("projects.title")} <span className="text-gradient-primary">{t("projects.titleHighlight")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
      </div>

      <section className="pb-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="group bg-card rounded-2xl overflow-hidden card-elevated hover:card-elevated-hover transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">{project.category}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">{project.client}</p>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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

export default Projects;
