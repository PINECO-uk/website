import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Users, Target } from "lucide-react";
import pinecoLogo from "@/assets/pineco-logo.jpg";
import pineconeIcon from "@/assets/pinecone-icon.png";

const workExperience = [
  { year: "2023–Present", role: "Founder & Lead Consultant", org: "PINECO", desc: "Consultancy, training & project coordination for NGOs and small businesses across Europe." },
  { year: "2021–2023", role: "Project Coordinator", org: "International NGO Sector", desc: "Led social and strategic projects using Agile methodology, from planning to evaluation." },
  { year: "2019–2021", role: "Volunteer Coordinator", org: "Non-Profit Organisations", desc: "Designed and implemented volunteering strategies, onboarding frameworks and team development." },
  { year: "2017–2019", role: "Programme Manager", org: "Community Sector", desc: "Managed Erasmus+ programmes and cross-border collaboration initiatives." },
];

const training = [
  { year: "2023", title: "Agile Project Management", provider: "Certified Training" },
  { year: "2022", title: "AI for Organisations", provider: "Digital Skills Programme" },
  { year: "2021", title: "Volunteer Management Certification", provider: "European Training" },
  { year: "2020", title: "Erasmus+ Programme Design", provider: "EU Accredited" },
  { year: "2019", title: "Leadership & Strategy", provider: "Professional Development" },
  { year: "2018", title: "Child Protection & Safeguarding", provider: "Certified Course" },
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
            About <span className="text-gradient-primary">PINECO</span>
          </h1>
          <p className="text-lg text-[hsl(var(--pine-brown))] font-heading font-semibold mb-4">
            Small Seeds, Lasting Impact
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cambridge-based, collaborating remotely across Europe. I help non-profit organisations, small businesses, community groups and social enterprises unlock their full potential through expert consultancy, impactful training, and hands-on project coordination.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
              <MapPin className="h-3.5 w-3.5" /> Cambridge, UK
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
              <Target className="h-3.5 w-3.5" /> Remote across Europe
            </span>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Pine Tree Timeline */}
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
          Growing expertise, branching out — like a pinecone, rooted in experience and reaching for impact.
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

            {/* Right side: Training */}
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
                    <p className="text-sm text-muted-foreground">{item.provider}</p>
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

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Integrity", desc: "Transparency and honesty in every engagement." },
              { title: "Excellence", desc: "Delivering the highest quality of work, every time." },
              { title: "Collaboration", desc: "True partnership — I succeed when you succeed." },
              { title: "Innovation", desc: "Fresh perspectives and creative solutions for your challenges." },
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
