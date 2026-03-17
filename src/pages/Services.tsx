import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FolderKanban, Heart, GraduationCap, MessageCircle, Clock, ArrowRight, Check,
  Globe, Users, Bot, Target, Handshake, FileText, Shield, Laptop,
} from "lucide-react";

const trainings = [
  { title: "Onboarding — Volunteers / Workers", duration: "3 hours", icon: Users },
  { title: "AI Solutions for Easier Job", duration: "2 hours", icon: Bot },
  { title: "Strategy for the Organisation", duration: "3 hours", icon: Target },
  { title: "Remote Team Collaboration — Tools & Procedures", duration: "2 hours", icon: Laptop },
  { title: "AI for NGOs", duration: "2 hours", icon: Bot },
  { title: "Erasmus+ for UK Organisations — Introduction", duration: "2 hours", icon: Globe },
  { title: "How to Write a Grant Proposal", duration: "2 hours", icon: FileText },
  { title: "Communication & Proactivity in the Team", duration: "2 hours", icon: Handshake },
  { title: "Plan a Volunteering Programme", duration: "3 hours", icon: Heart },
  { title: "Basics of Project Management", duration: "2 hours", icon: FolderKanban },
  { title: "How to Apply Agile Methodology to Organisation Workflow", duration: "", icon: Target },
];

const polishTrainings = [
  { title: "Child Protection Policy", duration: "2 hours", icon: Shield },
  { title: "Documentation for the Project", duration: "2 hours", icon: FileText },
  { title: "RODO (GDPR)", duration: "2 hours", icon: Shield },
  { title: "Guide to the New Organisation — Formalities & Procedures", duration: "", icon: Globe },
  { title: "Volunteer Programme — Basics", duration: "1 hour", icon: Heart },
  { title: "How to Plan a Volunteering Programme", duration: "2 hours", icon: Heart },
];

const consultingItems = [
  {
    title: "Erasmus+ funding for UK organisations",
    desc: "Since 2027, UK organisations will be able to once again access Erasmus+ funding. I'll help you understand what's available, whether your organisation is eligible, and how to apply — including youth exchanges, staff training, and international volunteering projects.",
  },
  {
    title: "Volunteering strategy",
    desc: "Build or strengthen your volunteering programme — from recruitment and retention to international placements through Erasmus+ and ESC.",
  },
  {
    title: "New funding opportunities",
    desc: "Identify the right grants and funding streams for your organisation, including European programmes newly accessible to UK nonprofits.",
  },
  {
    title: "Onboarding & internal processes",
    desc: "Design clear, effective onboarding journeys and internal processes that save time, reduce confusion, and help your team and volunteers hit the ground running.",
  },
  {
    title: "AI for better workflow",
    desc: "Practical, no-jargon guidance on using AI tools to save time on admin, communications, reporting and day-to-day tasks — so your team can focus on what matters most.",
  },
  {
    title: "Strategy for what's next",
    desc: "Whether you're planning a new programme, restructuring, or simply figuring out your next step — I'll help you think it through and build a clear, realistic strategy to move forward.",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      <Navbar />
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("services.page.title")} <span className="text-gradient-primary">{t("services.page.titleHighlight")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.page.subtitle")}</p>
      </div>


      {/* Consulting */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">{t("services.consulting")}</h2>
            </div>
            <p className="text-accent font-medium mb-5 ml-16">{t("services.page.consultingTagline")}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("services.page.consultingDesc")}</p>
            <div className="mb-6">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("services.page.consultingTopics")}</h3>
              <ul className="space-y-4">
                {consultingItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground"><span className="font-semibold">{item.title}:</span> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">{t("services.page.consultingNote")}</p>
            <Button onClick={() => navigate("/contact")} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-base font-semibold">
              {t("services.page.bookConsulting")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Training */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">{t("services.training")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("services.page.trainingDesc")}</p>
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("services.page.whatsIncluded")}</h3>
              <ul className="space-y-3">
                {["trainingInclude1","trainingInclude2","trainingInclude3","trainingInclude4"].map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`services.page.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{t("services.page.trainingBrowse")}</p>

            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("services.page.trainingCatalogue")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trainings.map((tr, i) => (
                  <motion.div key={tr.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between bg-card rounded-xl p-4 card-elevated">
                    <div className="flex items-center gap-3">
                      <tr.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{tr.title}</span>
                    </div>
                    {tr.duration && (
                      <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0 ml-3">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">{tr.duration}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{t("services.page.polishTrainings")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("services.page.polishTrainingsDesc")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {polishTrainings.map((tr, i) => (
                  <motion.div key={tr.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between bg-card rounded-xl p-4 card-elevated">
                    <div className="flex items-center gap-3">
                      <tr.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{tr.title}</span>
                    </div>
                    {tr.duration && (
                      <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0 ml-3">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">{tr.duration}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">{t("services.page.pricing")}</p>
              <p className="text-muted-foreground text-sm">{t("services.page.trainingPricing")} <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">{t("services.page.enquireSession")}</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteering Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">{t("services.volunteeringManagement")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("services.page.volDesc1")}</p>
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("services.page.whatsIncluded")}</h3>
              <ul className="space-y-3">
                {["volInclude1","volInclude2","volInclude3","volInclude4","volInclude5"].map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`services.page.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">{t("services.page.pricing")}</p>
              <p className="text-muted-foreground text-sm">{t("services.page.volPricing")} <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">{t("services.page.getQuote")}</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Coordination */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">{t("services.projectCoordination")}</h2>
            </div>
            <p className="text-accent font-medium mb-5 ml-16">{t("services.page.projectTagline")}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("services.page.projectDesc1")}</p>
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("services.page.whatsIncluded")}</h3>
              <ul className="space-y-3">
                {["projectInclude1","projectInclude2","projectInclude3","projectInclude4","projectInclude5"].map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{t(`services.page.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">{t("services.page.pricing")}</p>
              <p className="text-muted-foreground text-sm">{t("services.page.projectPricing")} <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">{t("services.page.getQuote")}</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
