import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, Building2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const orgProjects = [
  {
    org: "DKMS Poland Foundation",
    role: "Coordinator",
    category: "Healthcare / Volunteering",
    description: "Coordinated post-donation care for stem cell donors and developed onboarding programmes for new employees across the organisation.",
    tags: ["Onboarding", "Volunteer Care", "Training"],
  },
  {
    org: "Association Level Up",
    role: "Co-Founder & Project Manager",
    category: "Erasmus+ / ESC",
    description: "Co-founded the association and managed 7+ international projects under Erasmus+ and European Solidarity Corps, securing over €150,000 in grant funding.",
    tags: ["Erasmus+", "Grant Writing", "International Projects"],
  },
  {
    org: "Association Level Up",
    role: "Volunteer Coordinator",
    category: "E-Volunteering",
    description: "Built and managed an e-volunteering programme with 550+ volunteers and 150 interns, leading an international coordination team of 12.",
    tags: ["Volunteer Management", "Team Leadership", "ESC"],
  },
  {
    org: "Youth Exchange — Become Young Entrepreneur",
    role: "Facilitator",
    category: "Non-Formal Education",
    description: "Facilitated a youth exchange focused on entrepreneurship and self-employment skills for participants from multiple European countries.",
    tags: ["Facilitation", "Youth Work", "Erasmus+"],
  },
  {
    org: "Youth Exchange — Closer to Nature",
    role: "Facilitator",
    category: "Non-Formal Education",
    description: "Led workshops and group activities connecting young people with environmental themes through experiential learning methods.",
    tags: ["Facilitation", "Environmental Education", "Erasmus+"],
  },
];

const githubRepos = [
  {
    name: "pineco-volunteer-toolkit",
    description: "Templates and checklists for setting up a volunteer programme — from recruitment to onboarding and retention.",
    topics: ["volunteering", "nonprofit", "templates"],
    url: "https://github.com/pineco",
  },
  {
    name: "erasmus-project-planner",
    description: "A planning framework and timeline tool for Erasmus+ and ESC project coordinators.",
    topics: ["erasmus", "project-management", "nonprofit"],
    url: "https://github.com/pineco",
  },
  {
    name: "ngo-onboarding-guide",
    description: "Structured onboarding guide for NGOs welcoming new volunteers, staff, or interns.",
    topics: ["onboarding", "ngo", "documentation"],
    url: "https://github.com/pineco",
  },
];

const recommendations = [
  { name: "Add a recommendation", role: "Your name, Role & Organisation", text: "This is a placeholder — real recommendations from collaborators, volunteers, and partner organisations will appear here.", rating: 5, initials: "?" },
];

const Collaborations = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("collab.title")} <span className="text-gradient-primary">{t("collab.titleHighlight")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("collab.subtitle")}</p>
      </div>

      {/* Section 1 — Projects at Other Organisations */}
      <section className="pb-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
          <Building2 className="h-6 w-6 text-[hsl(var(--pine-brown))]" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{t("collab.projects")}</h2>
        </motion.div>
        <p className="text-muted-foreground mb-10 max-w-2xl">{t("collab.projectsSubtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgProjects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="bg-card rounded-2xl p-6 card-elevated hover:card-elevated-hover transition-all duration-300 flex flex-col">
              <div className="mb-3">
                <span className="text-xs font-semibold bg-[hsl(var(--pine-brown-light))] text-[hsl(var(--pine-brown))] px-3 py-1 rounded-full">{project.category}</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{project.role}</p>
              <h3 className="font-heading text-base font-bold text-card-foreground mb-3">{project.org}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2 — GitHub Repos */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
            <ExternalLink className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{t("collab.tools")}</h2>
          </motion.div>
          <p className="text-muted-foreground mb-10 max-w-2xl">{t("collab.toolsSubtitle")}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {githubRepos.map((repo, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-2xl p-6 card-elevated hover:card-elevated-hover transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono text-sm font-semibold text-foreground">{repo.name}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{repo.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">{topic}</span>
                  ))}
                </div>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t("collab.viewRepo")}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Recommendations */}
      <section className="py-20 container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
          <Users className="h-6 w-6 text-accent" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{t("collab.recommendations")}</h2>
        </motion.div>
        <p className="text-muted-foreground mb-10 max-w-2xl">{t("collab.recommendationsSubtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec, i) => (
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

export default Collaborations;
