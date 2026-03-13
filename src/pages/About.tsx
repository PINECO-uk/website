import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Users, Target, Globe } from "lucide-react";
import pinecoLogo from "@/assets/pineco-logo.jpg";
import pineconeIcon from "@/assets/pinecone-icon.png";

const workExperience = [
  { year: "2025–Present", role: "Founder & Lead Consultant", org: "PINECO, Cambridge, UK", desc: "Designing and delivering training programmes, managing social and strategic projects, and providing consultancy on organisational management, volunteer coordination, and digital transformation." },
  { year: "2023–2024", role: "Project Manager", org: "Association Level Up, Poland (Hybrid)", desc: "Managed 7+ international and local projects (Erasmus+, European Solidarity Corps). Secured €150,000+ in grant funding. Coordinated cross-functional teams and events for 50+ participants." },
  { year: "2020–2023", role: "Junior Follow-Up Coordinator → Coordinator", org: "DKMS Poland Foundation, Warsaw", desc: "Coordinated post-donation care for stem cell donors. Conducted training sessions for new employees and developed onboarding programmes." },
  { year: "2019–Present", role: "Volunteer Coordinator & Co-Founder", org: "Association Level Up, Poland (Online)", desc: "Co-founded the association. Managing e-volunteering with 550+ volunteers and 150 interns. Leading an international team of 12 members." },
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

const About = () => (
  <div className="bg-background">
    <Navbar />

    {/* Hero / Intro */}
    <section className="pt-28 pb-16 container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-[hsl(var(--pine-brown-light))] border-4 border-[hsl(var(--pine-brown)/0.3)] flex items-center justify-center overflow-hidden shadow-xl ring-4 ring-primary/20">
              {/* Replace with actual photo */}
              <div className="text-center p-6">
                <Users className="h-16 w-16 text-[hsl(var(--pine-brown))] mx-auto mb-3" />
                <p className="text-sm text-muted-foreground font-medium">Your Photo Here</p>
              </div>
            </div>
            {/* Decorative pinecone accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <img src={pineconeIcon} alt="Pinecone" className="h-10 w-10 object-contain" />
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
            Hi, I'm <span className="text-gradient-primary">Anna</span>
          </h1>
          <p className="text-lg text-[hsl(var(--pine-brown))] font-heading font-semibold mb-4">
            Project Manager · Volunteer Coordinator · Trainer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm an experienced project coordinator with a background in healthcare and volunteer management. Through <strong className="text-foreground">PINECO</strong>, I help non-profit organisations, community groups and social enterprises grow through expert consultancy, impactful training, and hands-on project coordination.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm also the co-founder of <strong className="text-foreground">Association Level Up</strong> — a Polish non-profit founded in 2019, dedicated to improving quality of life through social projects, informal education, and international volunteering (Erasmus+ & ESC accredited).
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
              <MapPin className="h-3.5 w-3.5" /> Cambridge, UK
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
              <Globe className="h-3.5 w-3.5" /> Remote across Europe
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          My Journey
        </motion.h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          From laboratory medicine to leading international projects — a path driven by curiosity and impact.
        </p>

        <div className="relative">
          {/* Central trunk line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--pine-brown))] via-primary to-accent rounded-full hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* Left side: Work Experience */}
            <div className="md:pr-12 space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 md:justify-end mb-2"
              >
                <Briefcase className="h-6 w-6 text-[hsl(var(--pine-brown))]" />
                <h3 className="font-heading text-xl font-bold text-[hsl(var(--pine-brown))]">Work Experience</h3>
              </motion.div>

              {workExperience.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Branch connector */}
                  <div className="hidden md:block absolute right-0 top-6 w-12 h-0.5 bg-[hsl(var(--pine-brown)/0.4)]" style={{ right: '-3rem' }} />
                  <div className="hidden md:block absolute top-4 w-3 h-3 rounded-full bg-[hsl(var(--pine-brown))] border-2 border-background" style={{ right: '-3.85rem' }} />

                  <div className="bg-card rounded-xl p-5 card-elevated md:text-right border-l-4 md:border-l-0 md:border-r-4 border-[hsl(var(--pine-brown)/0.4)]">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--pine-brown))] bg-[hsl(var(--pine-brown-light))] px-2.5 py-1 rounded-full mb-2">
                      <Calendar className="h-3 w-3" /> {item.year}
                    </span>
                    <h4 className="font-heading text-base font-bold text-card-foreground">{item.role}</h4>
                    <p className="text-sm text-primary font-medium">{item.org}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side: Training & Certifications */}
            <div className="md:pl-12 space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-2"
              >
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="font-heading text-xl font-bold text-primary">Training & Certifications</h3>
              </motion.div>

              {training.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Branch connector */}
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

          {/* Logo at bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <img src={pinecoLogo} alt="PINECO Logo" className="w-32 h-32 object-contain rounded-2xl shadow-md" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Skills & Tools */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Skills & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile Project Management", "Grant Writing", "Erasmus+", "European Solidarity Corps",
              "Volunteer Coordination", "Team Leadership", "Trello", "Jira", "Confluence",
              "Google Workspace", "MS Office", "Canva", "AI Tools", "Zoom", "MS Teams",
              "Polish (Native)", "English (B2/C1)",
            ].map((skill) => (
              <span key={skill} className="text-sm bg-card px-4 py-2 rounded-full card-elevated text-foreground font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Impact-Driven", desc: "Every project starts with a clear social purpose — improving lives and building stronger communities." },
              { title: "Collaboration", desc: "True partnership — working with international teams, volunteers, and organisations to achieve shared goals." },
              { title: "Growth Mindset", desc: "Constantly learning — from laboratory medicine to AI tools, always adapting to serve better." },
              { title: "Empowerment", desc: "Equipping organisations and individuals with skills and strategies to thrive independently." },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 card-elevated border-l-4 border-accent/50">
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;