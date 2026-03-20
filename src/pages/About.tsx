import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Globe, ArrowRight } from "lucide-react";

const PineconeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c-.4 0-.8.2-1 .5L9.5 4.2C8.6 3.8 7.5 4.2 7 5c-.4.7-.2 1.6.4 2.1L6 8.4C5.1 8 4 8.4 3.5 9.2c-.4.8-.1 1.7.6 2.2L3 12.8c-.8.3-1.3 1.2-1 2 .2.8 1 1.3 1.8 1.2l-.2 1.5c-.1.8.4 1.6 1.2 1.8.8.2 1.6-.3 1.9-1l.5 1.3c.3.8 1.1 1.2 1.9 1 .7-.2 1.2-.9 1.2-1.6H12h1.7c0 .7.5 1.4 1.2 1.6.8.2 1.6-.2 1.9-1l.5-1.3c.3.7 1.1 1.2 1.9 1 .8-.2 1.3-1 1.2-1.8l-.2-1.5c.8.1 1.6-.4 1.8-1.2.3-.8-.2-1.7-1-2l-.1-1.4c.7-.5 1-1.4.6-2.2C21 8.4 19.9 8 19 8.4l-1.4-1.3c.6-.5.8-1.4.4-2.1-.5-.8-1.6-1.2-2.5-.8L13 2.5c-.2-.3-.6-.5-1-.5zm0 4.5c.3 0 .6.1.8.3l1.2 1.1-1 .9c-.3-.1-.6-.1-1-.1s-.7 0-1 .1l-1-.9 1.2-1.1c.2-.2.5-.3.8-.3zm-2.5 3.2 1.3 1.1c-.2.3-.3.7-.3 1.2s.1.9.3 1.2l-1.3 1.1-1.3-1.1c.2-.3.3-.7.3-1.2s-.1-.9-.3-1.2l1.3-1.1zm5 0 1.3 1.1c-.2.3-.3.7-.3 1.2s.1.9.3 1.2l-1.3 1.1-1.3-1.1c.2-.3.3-.7.3-1.2s-.1-.9-.3-1.2l1.3-1.1zM12 12c.3 0 .5.1.7.2l.8.7-.8.7c-.2.1-.4.2-.7.2s-.5-.1-.7-.2l-.8-.7.8-.7c.2-.1.4-.2.7-.2z"/>
  </svg>
);
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import annaPhoto from "@/assets/Ania2.jpg";

const workExperience: { year: string; roleEn: string; rolePl: string; orgEn: string; orgPl: string; descEn: string | string[]; descPl: string | string[] }[] = [
  { year: "2025–Present", roleEn: "Founder & Lead Consultant", rolePl: "Założycielka i główna konsultantka", orgEn: "PINECO, Cambridge, UK", orgPl: "PINECO, Cambridge, UK", descEn: ["Designing and delivering training programmes", "Managing social and strategic projects", "Providing consultancy on organisational management, volunteer coordination, and digital transformation", "Advising on AI change in organisations"], descPl: ["Projektowanie i prowadzenie programów szkoleniowych", "Zarządzanie projektami społecznymi i strategicznymi", "Doradztwo w zakresie zarządzania organizacją, koordynacji wolontariatu i transformacji cyfrowej", "Doradztwo w zakresie wdrażania AI w organizacjach"] },
  { year: "2023–2024", roleEn: "Project Manager", rolePl: "Kierownik projektów", orgEn: "Association LEVEL UP, Poland (Hybrid)", orgPl: "Stowarzyszenie LEVEL UP, Polska (Hybrydowo)", descEn: ["Managed 7+ international and local projects (Erasmus+, European Solidarity Corps, British Council, NIW)", "Secured €150,000+ in grant funding", "Coordinated cross-functional teams and events for 50+ participants"], descPl: ["Zarządzanie ponad 7 międzynarodowymi i lokalnymi projektami (Erasmus+, Europejski Korpus Solidarności, British Council, NIW)", "Pozyskanie ponad 150 000 € w ramach grantów", "Koordynacja zespołów wielofunkcyjnych i wydarzeń dla ponad 50 uczestników"] },
  { year: "2020–2023", roleEn: "Junior Follow-Up Coordinator → Coordinator", rolePl: "Młodszy koordynator → Koordynator", orgEn: "DKMS Poland Foundation, Warsaw", orgPl: "Fundacja DKMS Polska, Warszawa", descEn: ["Coordinated post-donation care for stem cell donors", "Created manuals and learning materials for team members", "Conducted training sessions for new employees and helped to develop onboarding programme", "Represented the organisation at internal and external events, delivering presentations"], descPl: ["Koordynacja opieki po oddaniu komórek macierzystych przez dawców", "Tworzenie podręczników i materiałów szkoleniowych dla członków zespołu", "Prowadzenie szkoleń dla nowych pracowników i współtworzenie programu onboardingowego", "Reprezentowanie organizacji na wydarzeniach wewnętrznych i zewnętrznych, prowadzenie prezentacji"] },
  { year: "2019–Present", roleEn: "Volunteer Coordinator & Co-Founder", rolePl: "Koordynatorka wolontariatu i współzałożycielka", orgEn: "Association LEVEL UP, Poland (Online)", orgPl: "Stowarzyszenie LEVEL UP, Polska (Online)", descEn: ["Co-founded the association", "Managing e-volunteering with 550+ volunteers and 150+ interns", "Leading an international team of 10+ members", "Creating and implementing policies and strategies within the organisation", "Obtaining funding, creating reports and managing audits", "Representing the organisation at local and international events", "Creating partnerships and identifying beneficiaries for projects"], descPl: ["Współzałożycielka stowarzyszenia", "Zarządzanie e-wolontariatem z ponad 550 wolontariuszami i 150+ stażystami", "Kierowanie międzynarodowym zespołem ponad 10 osób", "Tworzenie i wdrażanie polityk i strategii w organizacji", "Pozyskiwanie finansowania, tworzenie raportów i zarządzanie audytami", "Reprezentowanie organizacji na wydarzeniach lokalnych i międzynarodowych", "Nawiązywanie partnerstw i identyfikowanie beneficjentów projektów"] },
  { year: "2024–2026", roleEn: "Shift Leader / Barista", rolePl: "Kierownik zmiany / Barista", orgEn: "Dulcedo Patisserie, Cambridge, UK", orgPl: "Dulcedo Patisserie, Cambridge, Wielka Brytania", descEn: ["Supervised and led a team of up to 6 people on shift, ensuring smooth daily operations", "Trained new staff members and supported their onboarding into the team", "Managed stock levels, placed supplier orders and handled inventory", "Implemented company policies and ensured team compliance with operational standards", "Completed daily paperwork including sales reports, incident logs and staff timesheets", "Handled customer service, complaints and special requests professionally"], descPl: ["Nadzorowanie i prowadzenie zespołu do 6 osób na zmianie, zapewnianie sprawnego funkcjonowania operacji", "Szkolenie nowych pracowników i wspieranie ich wdrożenia w zespole", "Zarządzanie poziomami zapasów, składanie zamówień u dostawców i obsługa inwentaryzacji", "Wdrażanie polityk firmy i zapewnianie zgodności zespołu ze standardami operacyjnymi", "Uzupełnianie codziennej dokumentacji: raporty sprzedaży, dzienniki incydentów i harmonogramy pracowników", "Profesjonalna obsługa klienta, reklamacji i specjalnych próśb"] },
  { year: "2019", roleEn: "Junior Diagnostician (Laboratory Technician)", rolePl: "Młodszy diagnosta laboratoryjny", orgEn: "Synevo Sp. z o.o., Warsaw, Poland", orgPl: "Synevo Sp. z o.o., Warszawa, Polska", descEn: ["Prepared and processed biological specimens for analysis", "Conducted diagnostic tests including blood, urine and tissue analyses", "Operated and maintained laboratory equipment", "Recorded and analysed test results, maintaining detailed logs in compliance with regulatory standards", "Assisted in quality control processes and proficiency testing"], descPl: ["Przygotowywanie i przetwarzanie próbek biologicznych do analizy", "Przeprowadzanie testów diagnostycznych: krew, mocz, analizy tkankowe", "Obsługa i konserwacja sprzętu laboratoryjnego", "Rejestrowanie i analiza wyników badań zgodnie z normami regulacyjnymi", "Udział w procesach kontroli jakości i testach biegłości"] },
  { year: "2018–2019", roleEn: "Animator & Guide", rolePl: "Animator i przewodnik", orgEn: "Experymentarium, Łódź, Poland", orgPl: "Experymentarium, Łódź, Polska", descEn: ["Led guided tours through scientific exhibits for diverse audience groups", "Designed and conducted educational workshops on ecology, biology, physics and chemistry for all age groups (nursery to high school)", "Animated birthday parties and organised events for children", "Handled cash register and managed ticket and merchandise transactions"], descPl: ["Prowadzenie wycieczek po ekspozycjach naukowych dla różnych grup odbiorców", "Projektowanie i prowadzenie warsztatów edukacyjnych z ekologii, biologii, fizyki i chemii dla wszystkich grup wiekowych (od przedszkola do liceum)", "Animowanie urodzin dla dzieci i prowadzenie zorganizowanych wydarzeń", "Obsługa kasy i zarządzanie transakcjami biletowymi i towarowymi"] },
  { year: "2015–2018", roleEn: "Shift Leader", rolePl: "Kierownik zmiany", orgEn: "Subway Restaurants, Łódź, Poland", orgPl: "Subway Restaurants, Łódź, Polska", descEn: ["Promoted from sandwich artist to shift leader within one year", "Managed and organised a team of up to 4 people during shifts", "Involved in recruitment and training of new employees", "Handled inventory management, supplier orders and stock monitoring", "Performed opening and closing duties and assisted with daily and monthly reports"], descPl: ["Awansowana ze stanowiska pracownika na kierownika zmiany w ciągu roku", "Zarządzanie i organizacja pracy zespołu do 4 osób podczas zmian", "Udział w rekrutacji i szkoleniu nowych pracowników", "Zarządzanie inwentarzem, zamawianie towarów u dostawców i monitorowanie zapasów", "Wykonywanie czynności otwarcia i zamknięcia oraz pomoc w raportach dziennych i miesięcznych"] },
];

const training = [
  { year: "2025", title: "AIDEAS — Building AI Agents & Business Solutions" },
  { year: "2025", title: "AI in the Third Sector — Laws & Good Practices" },
  { year: "2024", title: "Child Protection Policies for NGOs" },
  { year: "2024", title: "Facilitator — Become Young Entrepreneur (Youth Exchange)" },
  { year: "2023", title: "Facilitator — Closer to Nature (Youth Exchange)" },
  { year: "2023", title: "Legal & Formal Aspects of Volunteering" },
  { year: "2022", title: "International Digital Skills Training (WIDE)" },
  { year: "2022", title: "Microsoft Office Excel — Intermediate Level" },
  { year: "2022", title: "Microsoft Office Word — Advanced Level" },
  { year: "2021", title: "Agile PM Foundation Certificate" },
  { year: "2021", title: "Google for Managers" },
  { year: "2019", title: "Master's Degree — Laboratory Medicine, Medical University of Łódź" },
  { year: "2018", title: "Interpersonal Communication" },
  { year: "2013", title: "Eventlab — Project Management Course, Brandbjerg Højskole, Denmark" },
  { year: "2010", title: "ECDL Core" },
];

const About = () => {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

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
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start max-w-6xl mx-auto">

          {/* Left: photo + badges + CTA */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
            <div className="w-full aspect-square rounded-2xl border-4 border-[hsl(var(--pine-brown)/0.3)] overflow-hidden shadow-xl ring-4 ring-primary/20">
              <img src={annaPhoto} alt="Anna Szyszkowska" className="w-full h-full object-cover object-top" />
            </div>

            {/* Highlighted fields */}
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2.5 rounded-xl font-medium">
                <MapPin className="h-4 w-4 shrink-0" /> Cambridge, UK
              </span>
              <span className="inline-flex items-center gap-2 text-sm bg-accent/10 text-accent px-4 py-2.5 rounded-xl font-medium">
                <Globe className="h-4 w-4 shrink-0" /> {t("about.remoteEurope")}
              </span>
              <span className="inline-flex items-center gap-2 text-sm bg-[hsl(var(--pine-brown-light))] text-[hsl(var(--pine-brown))] px-4 py-2.5 rounded-xl font-medium">
                <GraduationCap className="h-4 w-4 shrink-0" /> MSc Laboratory Medicine
              </span>
            </div>

            {/* Work with me CTA */}
            <Button onClick={() => navigate("/contact")} size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg w-full">
              Work with me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Right: all text */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col justify-start pt-2">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              {t("about.hi")} <span className="text-gradient-primary">{t("about.anna")}</span>
            </h1>
            <p className="text-lg text-[hsl(var(--pine-brown))] font-heading font-semibold mb-6">{t("about.roles")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.bio1")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.bio2")}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("about.bio3")}</p>
            <p className="text-muted-foreground leading-relaxed italic">{t("about.bio4")}</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline - Horizontal */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            {t("about.myJourney")}
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">{t("about.journeySubtitle")}</p>

          {/* Work Experience */}
          <div className="mb-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-10">
              <Briefcase className="h-6 w-6 text-[hsl(var(--pine-brown))]" />
              <h3 className="font-heading text-xl font-bold text-[hsl(var(--pine-brown))]">{t("about.workExperience")}</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute top-8 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--pine-brown)/0.4)] to-transparent hidden lg:block" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {workExperience.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="flex flex-col items-center group cursor-default">
                      <div className="w-16 h-16 rounded-full bg-card card-elevated border-2 border-[hsl(var(--pine-brown)/0.3)] flex items-center justify-center z-10 mb-4 group-hover:border-[hsl(var(--pine-brown))] group-hover:bg-[hsl(var(--pine-brown-light))] transition-all duration-300">
                        <PineconeIcon className="h-7 w-7 text-[hsl(var(--pine-brown))]" />
                      </div>
                      <div className="bg-card rounded-2xl p-4 card-elevated w-full border-t-2 border-transparent group-hover:border-[hsl(var(--pine-brown)/0.4)] transition-all duration-300">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--pine-brown))] bg-[hsl(var(--pine-brown-light))] px-2 py-0.5 rounded-full mb-2">
                          <Calendar className="h-3 w-3" /> {item.year}
                        </span>
                        <h4 className="font-heading text-sm font-bold text-primary mb-1">{lang === "pl" ? item.rolePl : item.roleEn}</h4>
                        <p className="text-xs text-primary font-medium">{lang === "pl" ? item.orgPl : item.orgEn}</p>
                        <div className="overflow-hidden max-h-0 group-hover:max-h-64 transition-all duration-500">
                          <div className="mt-2 pt-2 border-t border-muted/20">
                            {Array.isArray(lang === "pl" ? item.descPl : item.descEn) ? (
                              <ul className="space-y-1">
                                {(lang === "pl" ? item.descPl : item.descEn as unknown as string[]).map((point: string, j: number) => (
                                  <li key={j} className="flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed">
                                    <span className="text-primary mt-0.5 shrink-0">•</span>
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs text-muted-foreground leading-relaxed">{lang === "pl" ? item.descPl : item.descEn}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-10">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="font-heading text-xl font-bold text-primary">{t("about.trainingCerts")}</h3>
            </motion.div>

            <div className="relative">
              <div className="absolute top-8 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {training.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <div className="flex flex-col items-center group cursor-default">
                      <div className="w-14 h-14 rounded-full bg-card card-elevated border-2 border-primary/20 flex items-center justify-center z-10 mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                        <PineconeIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="bg-card rounded-2xl p-3 card-elevated w-full border-t-2 border-transparent group-hover:border-primary/30 transition-all duration-300">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                          <Award className="h-3 w-3" /> {item.year}
                        </span>
                        <h4 className="font-heading text-xs font-bold text-primary leading-snug">{item.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">{t("about.skillsTools")}</h2>
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
            <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">{t("about.myValues")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.titleKey} className="bg-card rounded-2xl p-6 card-elevated border-l-4 border-accent/50">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{t(value.titleKey)}</h3>
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
