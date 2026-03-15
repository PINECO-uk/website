import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pl";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", pl: "Strona główna" },
  "nav.about": { en: "About", pl: "O mnie" },
  "nav.services": { en: "Services", pl: "Usługi" },
  "nav.projects": { en: "Projects", pl: "Projekty" },
  "nav.recommendations": { en: "Recommendations", pl: "Rekomendacje" },
  "nav.contact": { en: "Contact", pl: "Kontakt" },
  "nav.getInTouch": { en: "Get in Touch", pl: "Napisz do mnie" },

  // Hero
  "hero.title1": { en: "Small Seeds,", pl: "Małe nasiona," },
  "hero.title2": { en: "Lasting Impact", pl: "Trwały wpływ" },
  "hero.subtitle": { en: "Consultancy, training and project coordination — empowering organisations to grow sustainably.", pl: "Doradztwo, szkolenia i koordynacja projektów — wspieramy organizacje w zrównoważonym rozwoju." },
  "hero.services": { en: "Our Services", pl: "Nasze usługi" },
  "hero.consultation": { en: "Schedule a Consultation", pl: "Umów konsultację" },

  // Trust Badges
  "trust.certified.title": { en: "Certified Experts", pl: "Certyfikowani eksperci" },
  "trust.certified.desc": { en: "Accredited consultants with 15+ years of industry experience", pl: "Akredytowani konsultanci z ponad 15-letnim doświadczeniem" },
  "trust.results.title": { en: "Results-Driven", pl: "Nastawieni na rezultaty" },
  "trust.results.desc": { en: "Proven track record of delivering measurable business outcomes", pl: "Udokumentowane osiągnięcia w dostarczaniu mierzalnych wyników" },
  "trust.collaborative.title": { en: "Collaborative Approach", pl: "Podejście oparte na współpracy" },
  "trust.collaborative.desc": { en: "We work alongside your team to build lasting capabilities", pl: "Pracujemy z Twoim zespołem, by budować trwałe kompetencje" },
  "trust.scalable.title": { en: "Scalable Solutions", pl: "Skalowalne rozwiązania" },
  "trust.scalable.desc": { en: "Strategies designed to grow with your organisation", pl: "Strategie zaprojektowane tak, by rosnąć razem z organizacją" },

  // Service Cards
  "services.title": { en: "Our", pl: "Nasze" },
  "services.titleHighlight": { en: "Services", pl: "Usługi" },
  "services.subtitle": { en: "Tailored solutions for organisations ready to grow, optimise, and make an impact", pl: "Rozwiązania szyte na miarę dla organizacji gotowych do wzrostu i wpływu" },
  "services.projectCoordination": { en: "Project Coordination", pl: "Koordynacja projektów" },
  "services.projectCoordination.desc": { en: "Social and strategic projects — local and international. From design and planning to evaluation and reporting, delivered in Agile methodology.", pl: "Projekty społeczne i strategiczne — lokalne i międzynarodowe. Od projektowania i planowania po ewaluację i raportowanie, realizowane w metodologii Agile." },
  "services.volunteeringManagement": { en: "Volunteering Management", pl: "Zarządzanie wolontariatem" },
  "services.volunteeringManagement.desc": { en: "Plan and implement a customised volunteering strategy from the early stages. Includes training of new volunteer coordinators.", pl: "Zaplanuj i wdróż dopasowaną strategię wolontariatu od wczesnych etapów. Obejmuje szkolenie nowych koordynatorów wolontariatu." },
  "services.training": { en: "Training", pl: "Szkolenia" },
  "services.training.desc": { en: "Online and offline training sessions for organisations and groups, with select courses open for individual sign-up.", pl: "Szkolenia online i stacjonarne dla organizacji i grup, z wybranymi kursami otwartymi na zapisy indywidualne." },
  "services.consulting": { en: "Consulting", pl: "Konsulting" },
  "services.consulting.desc": { en: "Individual sessions to take your organisation to the next level — volunteering, funding opportunities, onboarding, AI workflow, and strategy.", pl: "Sesje indywidualne, które wyniosą Twoją organizację na wyższy poziom — wolontariat, źródła finansowania, onboarding, AI i strategia." },

  // Testimonials
  "testimonials.title": { en: "Client", pl: "Rekomendacje" },
  "testimonials.titleHighlight": { en: "Recommendations", pl: "klientów" },
  "testimonials.subtitle": { en: "What our partners say about working with us", pl: "Co mówią nasi partnerzy o współpracy z nami" },

  // CTA
  "cta.title": { en: "Ready to Transform Your Business?", pl: "Gotowy na transformację?" },
  "cta.subtitle": { en: "Let's discuss how PINECO can help you achieve your goals. Book a free consultation today.", pl: "Porozmawiajmy, jak PINECO może pomóc w osiągnięciu Twoich celów. Umów bezpłatną konsultację." },
  "cta.startConversation": { en: "Start a Conversation", pl: "Rozpocznij rozmowę" },
  "cta.viewProjects": { en: "View Our Projects", pl: "Zobacz nasze projekty" },

  // Footer
  "footer.desc": { en: "Consultancy, training and project coordination — empowering organisations to achieve sustainable growth.", pl: "Doradztwo, szkolenia i koordynacja projektów — wspieramy organizacje w zrównoważonym rozwoju." },
  "footer.quickLinks": { en: "Quick Links", pl: "Szybkie linki" },
  "footer.services": { en: "Services", pl: "Usługi" },
  "footer.contact": { en: "Contact", pl: "Kontakt" },
  "footer.address": { en: "Address", pl: "Adres" },
  "footer.phone": { en: "Phone", pl: "Telefon" },
  "footer.email": { en: "Email", pl: "Email" },
  "footer.hours": { en: "Hours", pl: "Godziny" },
  "footer.rights": { en: "© 2024 PINECO. All rights reserved.", pl: "© 2024 PINECO. Wszelkie prawa zastrzeżone." },
  "footer.projectCoordination": { en: "Project Coordination", pl: "Koordynacja projektów" },
  "footer.volunteeringManagement": { en: "Volunteering Management", pl: "Zarządzanie wolontariatem" },
  "footer.training": { en: "Training", pl: "Szkolenia" },
  "footer.consulting": { en: "Consulting", pl: "Konsulting" },

  // About
  "about.hi": { en: "Hi, I'm", pl: "Cześć, jestem" },
  "about.anna": { en: "Anna", pl: "Anna" },
  "about.roles": { en: "Project Manager · Volunteer Coordinator · Trainer", pl: "Kierownik projektów · Koordynatorka wolontariatu · Trenerka" },
  "about.bio1": { en: "I'm an experienced project coordinator with a background in healthcare and volunteer management. Through PINECO, I help non-profit organisations, community groups and social enterprises grow through expert consultancy, impactful training, and hands-on project coordination.", pl: "Jestem doświadczoną koordynatorką projektów z doświadczeniem w ochronie zdrowia i zarządzaniu wolontariatem. Przez PINECO pomagam organizacjom pozarządowym, grupom społecznym i przedsiębiorstwom społecznym rosnąć dzięki eksperckiemu doradztwu, szkoleniom i koordynacji projektów." },
  "about.bio2": { en: "I'm also the co-founder of Association Level Up — a Polish non-profit founded in 2019, dedicated to improving quality of life through social projects, informal education, and international volunteering (Erasmus+ & ESC accredited).", pl: "Jestem również współzałożycielką Stowarzyszenia Level Up — polskiej organizacji pozarządowej założonej w 2019 roku, dedykowanej poprawie jakości życia poprzez projekty społeczne, edukację pozaformalną i wolontariat międzynarodowy (akredytacja Erasmus+ i ESC)." },
  "about.remoteEurope": { en: "Remote across Europe", pl: "Zdalnie w całej Europie" },
  "about.myJourney": { en: "My Journey", pl: "Moja droga" },
  "about.journeySubtitle": { en: "From laboratory medicine to leading international projects — a path driven by curiosity and impact.", pl: "Od medycyny laboratoryjnej do prowadzenia międzynarodowych projektów — droga napędzana ciekawością i wpływem." },
  "about.workExperience": { en: "Work Experience", pl: "Doświadczenie zawodowe" },
  "about.trainingCerts": { en: "Training & Certifications", pl: "Szkolenia i certyfikaty" },
  "about.skillsTools": { en: "Skills & Tools", pl: "Umiejętności i narzędzia" },
  "about.myValues": { en: "My Values", pl: "Moje wartości" },
  "about.photoPlaceholder": { en: "Your Photo Here", pl: "Twoje zdjęcie tutaj" },

  // About - Values
  "about.value.impact.title": { en: "Impact-Driven", pl: "Nastawienie na wpływ" },
  "about.value.impact.desc": { en: "Every project starts with a clear social purpose — improving lives and building stronger communities.", pl: "Każdy projekt zaczyna się od jasnego celu społecznego — poprawy życia i budowania silniejszych społeczności." },
  "about.value.collaboration.title": { en: "Collaboration", pl: "Współpraca" },
  "about.value.collaboration.desc": { en: "True partnership — working with international teams, volunteers, and organisations to achieve shared goals.", pl: "Prawdziwe partnerstwo — praca z międzynarodowymi zespołami, wolontariuszami i organizacjami w celu osiągnięcia wspólnych celów." },
  "about.value.growth.title": { en: "Growth Mindset", pl: "Nastawienie na rozwój" },
  "about.value.growth.desc": { en: "Constantly learning — from laboratory medicine to AI tools, always adapting to serve better.", pl: "Ciągłe uczenie się — od medycyny laboratoryjnej po narzędzia AI, zawsze adaptując się, by lepiej służyć." },
  "about.value.empowerment.title": { en: "Empowerment", pl: "Wzmacnianie" },
  "about.value.empowerment.desc": { en: "Equipping organisations and individuals with skills and strategies to thrive independently.", pl: "Wyposażanie organizacji i osób w umiejętności i strategie do samodzielnego rozwoju." },

  // Contact
  "contact.title": { en: "Get in", pl: "Skontaktuj" },
  "contact.titleHighlight": { en: "Touch", pl: "się" },
  "contact.subtitle": { en: "Have a project in mind or want to learn more? We'd love to hear from you.", pl: "Masz projekt na myśli lub chcesz dowiedzieć się więcej? Chętnie porozmawiamy." },
  "contact.sendMessage": { en: "Send Us a Message", pl: "Wyślij wiadomość" },
  "contact.yourName": { en: "Your Name", pl: "Twoje imię" },
  "contact.email": { en: "Email", pl: "Email" },
  "contact.company": { en: "Company", pl: "Firma" },
  "contact.message": { en: "Message", pl: "Wiadomość" },
  "contact.sendBtn": { en: "Send Message", pl: "Wyślij wiadomość" },
  "contact.reachOut": { en: "Reach Out", pl: "Skontaktuj się" },
  "contact.reachOutDesc": { en: "We offer free initial consultations — get in touch to discuss your needs.", pl: "Oferujemy bezpłatne wstępne konsultacje — skontaktuj się, by omówić swoje potrzeby." },
  "contact.namePlaceholder": { en: "Jane Doe", pl: "Jan Kowalski" },
  "contact.emailPlaceholder": { en: "jane@example.com", pl: "jan@przyklad.pl" },
  "contact.companyPlaceholder": { en: "Your company name", pl: "Nazwa firmy" },
  "contact.messagePlaceholder": { en: "Tell us about your project or enquiry...", pl: "Opowiedz o swoim projekcie lub pytaniu..." },
  "contact.missingFields": { en: "Missing fields", pl: "Brakujące pola" },
  "contact.missingFieldsDesc": { en: "Please fill in your name, email, and message.", pl: "Wypełnij imię, email i wiadomość." },
  "contact.messageSent": { en: "Message sent!", pl: "Wiadomość wysłana!" },
  "contact.messageSentDesc": { en: "We'll get back to you within 24 hours.", pl: "Odpowiemy w ciągu 24 godzin." },

  // Projects
  "projects.title": { en: "Our", pl: "Nasze" },
  "projects.titleHighlight": { en: "Projects", pl: "Projekty" },
  "projects.subtitle": { en: "A selection of projects that showcase our expertise and the results we deliver for our clients.", pl: "Wybrane projekty, które pokazują nasze kompetencje i wyniki, jakie dostarczamy klientom." },

  // Recommendations page
  "recommendations.title": { en: "Client", pl: "Rekomendacje" },
  "recommendations.titleHighlight": { en: "Recommendations", pl: "klientów" },
  "recommendations.subtitle": { en: "Don't just take our word for it — here's what our clients have to say about working with PINECO.", pl: "Nie musisz wierzyć nam na słowo — oto co mówią nasi klienci o współpracy z PINECO." },

  // Services page detailed
  "services.page.title": { en: "Our", pl: "Nasze" },
  "services.page.titleHighlight": { en: "Services", pl: "Usługi" },
  "services.page.subtitle": { en: "Four core areas of expertise to help your organisation grow, optimise, and deliver impact.", pl: "Cztery kluczowe obszary ekspertyzy, które pomogą Twojej organizacji rosnąć i dostarczać wpływ." },
  "services.page.projectDesc1": { en: "I coordinate social and strategic projects — both local and international. My involvement spans the full project lifecycle: from the design and planning phase through implementation, all the way to evaluation and reporting.", pl: "Koordynuję projekty społeczne i strategiczne — zarówno lokalne, jak i międzynarodowe. Moje zaangażowanie obejmuje pełny cykl życia projektu: od projektowania i planowania, przez wdrożenie, aż po ewaluację i raportowanie." },
  "services.page.projectDesc2": { en: "I work using Agile methodology, ensuring flexibility, transparency, and continuous improvement throughout the project.", pl: "Pracuję w metodologii Agile, zapewniając elastyczność, przejrzystość i ciągłe doskonalenie w całym projekcie." },
  "services.page.pricing": { en: "Pricing", pl: "Cennik" },
  "services.page.projectPricing": { en: "Set based on the scope of the project and the amount of hours required.", pl: "Ustalane na podstawie zakresu projektu i ilości wymaganych godzin." },
  "services.page.getQuote": { en: "Get a quote →", pl: "Zapytaj o wycenę →" },
  "services.page.volDesc1": { en: "I help organisations plan and implement the early stages of a customised volunteering strategy — tailored to your mission, capacity, and goals.", pl: "Pomagam organizacjom zaplanować i wdrożyć wczesne etapy spersonalizowanej strategii wolontariatu — dopasowanej do misji, możliwości i celów." },
  "services.page.volDesc2": { en: "This includes training for new volunteer coordinators, ensuring your team is equipped to manage and grow the programme independently.", pl: "Obejmuje to szkolenie nowych koordynatorów wolontariatu, zapewniając, że Twój zespół jest gotowy do samodzielnego zarządzania programem." },
  "services.page.volPricing": { en: "Set based on the scope of the organisation and the amount of hours required.", pl: "Ustalane na podstawie zakresu organizacji i ilości wymaganych godzin." },
  "services.page.trainingDesc": { en: "Available online and offline for organisations and groups. Offline sessions include travel costs on top of the training fee. Some sessions are also open for individual sign-up.", pl: "Dostępne online i stacjonarnie dla organizacji i grup. Sesje stacjonarne obejmują koszty podróży. Niektóre sesje są otwarte na zapisy indywidualne." },
  "services.page.trainingBrowse": { en: "Browse the training catalogue below:", pl: "Przejrzyj katalog szkoleń poniżej:" },
  "services.page.trainingCatalogue": { en: "Training Catalogue", pl: "Katalog szkoleń" },
  "services.page.polishTrainings": { en: "Polish-Language Trainings", pl: "Szkolenia w języku polskim" },
  "services.page.polishTrainingsDesc": { en: "Szkolenia dostępne w języku polskim", pl: "Szkolenia dostępne w języku polskim" },
  "services.page.trainingPricing": { en: "Training fee + travel costs for offline sessions.", pl: "Opłata za szkolenie + koszty podróży dla sesji stacjonarnych." },
  "services.page.enquireSession": { en: "Enquire about a session →", pl: "Zapytaj o sesję →" },
  "services.page.consultingDesc": { en: "Individual sessions designed to help you take your organisation to the next level. Whether you're exploring new opportunities or optimising what you already have, I'll provide focused, actionable guidance.", pl: "Sesje indywidualne zaprojektowane, by pomóc Ci wynieść organizację na wyższy poziom. Niezależnie od tego, czy szukasz nowych możliwości, czy optymalizujesz to, co masz — dostarczę skoncentrowane, praktyczne wskazówki." },
  "services.page.consultingTopics": { en: "Topics I consult on:", pl: "Tematy konsultacji:" },
  "services.page.bookConsulting": { en: "Book a Consulting Session", pl: "Zarezerwuj sesję konsultingową" },

  // Consulting topics
  "consulting.topic1": { en: "Volunteering strategy & programme development", pl: "Strategia wolontariatu i rozwój programu" },
  "consulting.topic2": { en: "New funding opportunities (Erasmus+ for UK)", pl: "Nowe źródła finansowania (Erasmus+ dla UK)" },
  "consulting.topic3": { en: "Onboarding and organisational processes", pl: "Onboarding i procesy organizacyjne" },
  "consulting.topic4": { en: "AI use for better workflow", pl: "Wykorzystanie AI do lepszego przepływu pracy" },
  "consulting.topic5": { en: "Strategy for your organisation's next phase", pl: "Strategia na kolejny etap Twojej organizacji" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
