import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import pinecoLogo from "@/assets/pineco-logo.jpg";
import pineconeIcon from "@/assets/pinecone-icon.png";

const workExperience = [
  { year: "2025–Present", roleEn: "Founder & Lead Consultant", rolePl: "Założycielka i główna konsultantka", orgEn: "PINECO, Cambridge, UK", orgPl: "PINECO, Cambridge, UK", descEn: "Designing and delivering training programmes, managing social and strategic projects, and providing consultancy on organisational management, volunteer coordination, and digital transformation.", descPl: "Projektowanie i prowadzenie programów szkoleniowych, zarządzanie projektami społecznymi i strategicznymi oraz doradztwo w zakresie zarządzania organizacją, koordynacji wolontariatu i transformacji cyfrowej." },
  { year: "2023–2024", roleEn: "Project Manager", rolePl: "Kierownik projektów", orgEn: "Association Level Up, Poland (Hybrid)", orgPl: "Stowarzyszenie Level Up, Polska (Hybrydowo)", descEn: "Managed 7+ international and local projects (Erasmus+, European Solidarity Corps). Secured €150,000+ in grant funding. Coordinated cross-functional teams and events for 50+ participants.", descPl: "Zarządzanie ponad 7 międzynarodowymi i lokalnymi projektami (Erasmus+, Europejski Korpus Solidarności). Pozyskanie ponad 150 000 € w ramach grantów. Koordynacja zespołów i wydarzeń dla ponad 50 uczestników." },
  { year: "2020–2023", roleEn: "Junior Follow-Up Coordinator → Coordinator", rolePl: "Młodszy koordynator → Koordynator", orgEn: "DKMS Poland Foundation, Warsaw", orgPl: "Fundacja DKMS Polska, Warszawa", descEn: "Coordinated post-donation care for stem cell donors. Conducted training sessions for new employees and developed onboarding programmes.", descPl: "Koordynacja opieki po oddaniu komórek macierzystych. Prowadzenie szkoleń dla nowych pracowników i opracowywanie programów onboardingowych." },
  { year: "2019–Present", roleEn: "Volunteer Coordinator & Co-Founder", rolePl: "Koordynatorka wolontariatu i współzałożycielka", orgEn: "Association Level Up, Poland (Online)", orgPl: "Stowarzyszenie Level Up, Polska (Online)", descEn: "Co-founded the association. Managing e-volunteering with 550+ volunteers and 150 interns. Leading an international team of 12 members.", descPl: "Współzałożycielka stowarzyszenia. Zarządzanie e-wolontariatem z ponad 550 wolontariuszami i 150 stażystami. Kierowanie międzynarodowym zespołem 12 osób." },
];

const training = [
  { year: "2025", title: "AIDEAS — Building AI Agents & Business Solutions" },
  { year: "2025", title: "AI in the Third Sector — Laws & Good Practices" },
  { year: "2024", title: "Child Protection Policies for NGOs" },
  { year: "2024", title: "Facilitator — Become Young Entrepreneur (Youth Exchange)" },
  { year: "2023", title: "Facilitator — Closer to Nature (Youth Exchange)" },
  { year: "2023", title: "Legal & Formal Aspects of Volunteering" },
  { year: "2022", title: "International Digital Skills Training (WIDE)" },
  { year: "2021", title: "Agile PM Foundation Certificate" },
  { year: "2021", title: "Google for Managers" },
  { year: "2019", title: "Master's Degree — Laboratory Medicine, Medical University of Łódź" },
];

const About = () => {
  const { lang, t } = useLanguage();

  const values = [
    { titleKey: "about.value.impact.title", descKey: "about.value.impact.desc" },
    { titleKey: "about.value.collaboration.title", descKey: "about.value.collaboration.desc" },
    { titleKey: "about.value.growth.title", descKey: "about.value.growth.desc" },
    { titleKey: "about.value.empowerment.title", descKey: "about.value.empowerment.desc" },
  ];

  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero / Intro */}
      <section className="pt-28 pb-16 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[hsl(var(--pine-brown-light))] border-4 border-[hsl(var(--pine-brown)/0.3)] flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-primary/20">
                <div className="text-center p-6">
                  <Users className="h-16 w-16 text-[hsl(var(--pine-brown))] mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground font-medium">{t("about.photoPlaceholder")}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={pineconeIcon} alt="Pinecone" className="h-10 w-10 object-contain" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
              {t("about.hi")} <span className="text-gradient-primary">{t("about.anna")}</span>
            </h1>
            <p className="text-lg text-[hsl(var(--pine-brown))] font-heading font-semibold mb-4">{t("about.roles")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.bio1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.bio2")}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                <MapPin className="h-3.5 w-3.5" /> Cambridge, UK
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
                <Globe className="h-3.5 w-3.5" /> {t("about.remoteEurope")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm bg-[hsl(var(--pine-brown-light))] text-[hsl(var(--pine-brown))] px-3 py-1.5 rounded-full font-medium">
                <GraduationCap className="h-3.5 w-3.5" /> MSc Laboratory Medicine
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {t("about.myJourney")}
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">{t("about.journeySubtitle")}</p>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--pine-brown))] via-primary to-accent rounded-full hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
              <div className="md:pr-12 space-y-8">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 md:justify-end mb-2">
                  <Briefcase className="h-6 w-6 text-[hsl(var(--pine-brown))]" />
                  <h3 className="font-heading text-xl font-bold text-[hsl(var(--pine-brown))]">{t("about.workExperience")}</h3>
                </motion.div>

                {workExperience.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                    <div className="hidden md:block absolute right-0 top-6 w-12 h-0.5 bg-[hsl(var(--pine-brown)/0.4)]" style={{ right: '-3rem' }} />
                    <div className="hidden md:block absolute top-4 w-3 h-3 rounded-full bg-[hsl(var(--pine-brown))] border-2 border-background" style={{ right: '-3.85rem' }} />
                    <div className="bg-card rounded-xl p-5 card-elevated md:text-right border-l-4 md:border-l-0 md:border-r-4 border-[hsl(var(--pine-brown)/0.4)]">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--pine-brown))] bg-[hsl(var(--pine-brown-light))] px-2.5 py-1 rounded-full mb-2">
                        <Calendar className="h-3 w-3" /> {item.year}
                      </span>
                      <h4 className="font-heading text-base font-bold text-card-foreground">{lang === "pl" ? item.rolePl : item.roleEn}</h4>
                      <p className="text-sm text-primary font-medium">{lang === "pl" ? item.orgPl : item.orgEn}</p>
                      <p className="text-sm text-muted-foreground mt-1">{lang === "pl" ? item.descPl : item.descEn}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="md:pl-12 space-y-8">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-primary">{t("about.trainingCerts")}</h3>
                </motion.div>

                {training.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                    <div className="hidden md:block absolute left-0 top-6 w-12 h-0.5 bg-primary/30" style={{ left: '-3rem' }} />
                    <div className="hidden md:block absolute top-4 w-3 h-3 rounded-full bg-primary border-2 border-background" style={{ left: '-3.85rem' }} />
                    <div className="bg-card rounded-xl p-5 card-elevated border-l-4 border-primary/40">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-2">
                        <Award className="h-3 w-3" /> {item.year}
                      </span>
                      <h4 className="font-heading text-base font-bold text-card-foreground">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center mt-16">
              <img src={pinecoLogo} alt="PINECO Logo" className="w-32 h-32 object-contain rounded-2xl shadow-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">{t("about.skillsTools")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile Project Management", "Grant Writing", "Erasmus+", "European Solidarity Corps",
                "Volunteer Coordination", "Team Leadership", "Trello", "Jira", "Confluence",
                "Google Workspace", "MS Office", "Canva", "AI Tools", "Zoom", "MS Teams",
                "Polish (Native)", "English (B2/C1)",
              ].map((skill) => (
                <span key={skill} className="text-sm bg-card px-4 py-2 rounded-full card-elevated text-foreground font-medium">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">{t("about.myValues")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.titleKey} className="bg-card rounded-xl p-6 card-elevated border-l-4 border-accent/50">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{t(value.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(value.descKey)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
