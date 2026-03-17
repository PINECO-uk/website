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
  "nav.contact": { en: "Contact", pl: "Kontakt" },
  "nav.getInTouch": { en: "Get in Touch", pl: "Napisz do mnie" },

  // Hero
  "hero.title1": { en: "Small Seeds,", pl: "Małe nasiona," },
  "hero.title2": { en: "Lasting Impact.", pl: "Trwały wpływ." },
  "hero.subtitle": { en: "Consultancy, training and project coordination for nonprofits, community groups and social enterprises across Europe.", pl: "Doradztwo, szkolenia i koordynacja projektów dla organizacji pozarządowych, grup społecznych i przedsiębiorstw społecznych w całej Europie." },
  "hero.services": { en: "My Services", pl: "Moje usługi" },
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
  "services.title": { en: "My", pl: "Moje" },
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
  "testimonials.subtitle": { en: "What my partners say about working with me", pl: "Co mówią moi partnerzy o współpracy ze mną" },

  // CTA
  "cta.title": { en: "Ready to take the next step?", pl: "Gotowa/y na kolejny krok?" },
  "cta.subtitle": { en: "Let's figure it out together — book a free consultation.", pl: "Razem to rozgryziemy — umów bezpłatną konsultację." },
  "cta.startConversation": { en: "Book a Free Consultation", pl: "Umów bezpłatną konsultację" },
  "cta.viewProjects": { en: "See My Services", pl: "Zobacz moje usługi" },

  // Footer
  "footer.desc": { en: "Small seeds, lasting impact. Helping others to grow.", pl: "Małe nasiona, trwały wpływ. Pomagamy innym rosnąć." },
  "footer.quickLinks": { en: "Quick Links", pl: "Szybkie linki" },
  "footer.services": { en: "Services", pl: "Usługi" },
  "footer.contact": { en: "Contact", pl: "Kontakt" },
  "footer.address": { en: "Address", pl: "Adres" },
  "footer.phone": { en: "Phone", pl: "Telefon" },
  "footer.email": { en: "Email", pl: "Email" },
  "footer.hours": { en: "Hours", pl: "Godziny" },
  "footer.rights": { en: "© 2024 PINECO. All rights reserved.", pl: "© 2024 PINECO. Wszelkie prawa zastrzeżone." },
  "footer.collaborations": { en: "Past Collaborations", pl: "Dotychczasowe współprace" },
  "footer.projectCoordination": { en: "Project Coordination", pl: "Koordynacja projektów" },
  "footer.volunteeringManagement": { en: "Volunteering Management", pl: "Zarządzanie wolontariatem" },
  "footer.training": { en: "Training", pl: "Szkolenia" },
  "footer.consulting": { en: "Consulting", pl: "Konsulting" },

  // About
  "about.hi": { en: "Hi, I'm", pl: "Cześć, jestem" },
  "about.anna": { en: "Anna Szyszkowska", pl: "Anna Szyszkowska" },
  "about.roles": { en: "Project Coordinator · Volunteer Manager · Trainer · Founder of PINECO", pl: "Koordynatorka projektów · Menedżerka wolontariatu · Trenerka · Założycielka PINECO" },
  "about.bio1": { en: "My background spans healthcare, informal education, and international volunteering. I hold an MSc in Laboratory Medicine, which gave me a deep appreciation for precision, process, and evidence-based thinking — qualities I now bring to the world of social impact consultancy.", pl: "Moje doświadczenie obejmuje ochronę zdrowia, edukację pozaformalną i wolontariat międzynarodowy. Posiadam tytuł magistra analityki medycznej, który dał mi głębokie zrozumienie precyzji, procesów i myślenia opartego na dowodach — cechy, które teraz wnoszę do świata doradztwa w zakresie wpływu społecznego." },
  "about.bio2": { en: "In 2019, I co-founded Association LEVEL UP, a Polish nonprofit dedicated to improving quality of life through social projects and international volunteering programmes under Erasmus+ and ESC. That experience — building something meaningful from scratch, across borders, with limited resources — is exactly what shaped the work I do today.", pl: "W 2019 roku współzałożyłam Stowarzyszenie LEVEL UP — polską organizację pozarządową dedykowaną poprawie jakości życia poprzez projekty społeczne i programy wolontariatu międzynarodowego w ramach Erasmus+ i ESC. To doświadczenie — budowanie czegoś wartościowego od podstaw, ponad granicami, przy ograniczonych zasobach — ukształtowało moją dzisiejszą pracę." },
  "about.bio3": { en: "Through PINECO, I support nonprofits, community groups and social enterprises across Europe with expert consultancy, practical training, and hands-on project coordination. I'm based in Cambridge, UK, and work remotely with organisations across the continent.", pl: "Przez PINECO wspieram organizacje pozarządowe, grupy społeczne i przedsiębiorstwa społeczne w całej Europie, oferując eksperckie doradztwo, praktyczne szkolenia i bezpośrednią koordynację projektów. Mieszkam w Cambridge, w Wielkiej Brytanii, i pracuję zdalnie z organizacjami z całego kontynentu." },
  "about.bio4": { en: "If you're ready to take your next step, I'd love to help you get there.", pl: "Jeśli jesteś gotowa/y na kolejny krok, chętnie Ci w tym pomogę." },
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
  "about.value.impact.desc": { en: "Every project I take on starts with a simple question: who does this help? Social purpose isn't a nice-to-have — it's the whole point. I'm here to support work that genuinely improves lives and builds stronger communities.", pl: "Każdy projekt, który podejmuję, zaczyna się od prostego pytania: komu to pomaga? Cel społeczny to nie miły dodatek — to sedno wszystkiego. Jestem tu, by wspierać pracę, która naprawdę poprawia życie i buduje silniejsze społeczności." },
  "about.value.collaboration.title": { en: "Collaboration", pl: "Współpraca" },
  "about.value.collaboration.desc": { en: "I've worked across borders, languages and cultures — with international teams, volunteers, and organisations of all sizes. Good work happens when people genuinely pull together, and that's always how I prefer to work.", pl: "Pracowałam ponad granicami, językami i kulturami — z międzynarodowymi zespołami, wolontariuszami i organizacjami różnej wielkości. Dobra praca rodzi się wtedy, gdy ludzie naprawdę działają razem — i tak zawsze wolę pracować." },
  "about.value.growth.title": { en: "Growth Mindset", pl: "Nastawienie na rozwój" },
  "about.value.growth.desc": { en: "My background spans laboratory medicine, nonprofit management and AI tools — and I'm still learning. I believe the best consultants stay curious, keep adapting, and bring fresh thinking to every organisation they work with.", pl: "Moje doświadczenie obejmuje medycynę laboratoryjną, zarządzanie organizacjami pozarządowymi i narzędzia AI — i wciąż się uczę. Wierzę, że najlepsi konsultanci pozostają ciekawi, ciągle się adaptują i wnoszą świeże myślenie do każdej organizacji, z którą pracują." },
  "about.value.empowerment.title": { en: "Empowerment", pl: "Wzmacnianie" },
  "about.value.empowerment.desc": { en: "My goal is never to make you dependent on me. I want to leave every organisation I work with more capable, more confident, and more ready to grow on their own — with the skills and strategies to keep going long after our work together ends.", pl: "Moim celem nigdy nie jest uzależnienie Cię ode mnie. Chcę zostawiać każdą organizację, z którą pracuję, bardziej kompetentną, pewną siebie i gotową do samodzielnego rozwoju — z umiejętnościami i strategiami, które pozwolą jej działać długo po zakończeniu naszej współpracy." },

  // Contact
  "contact.title": { en: "Get in", pl: "Skontaktuj" },
  "contact.titleHighlight": { en: "Touch", pl: "się" },
  "contact.subtitle": { en: "Have a project in mind or want to learn more? I'd love to hear from you.", pl: "Masz projekt na myśli lub chcesz dowiedzieć się więcej? Chętnie porozmawiam." },
  "contact.sendMessage": { en: "Send Me a Message", pl: "Wyślij wiadomość" },
  "contact.yourName": { en: "Your Name", pl: "Twoje imię" },
  "contact.email": { en: "Email", pl: "Email" },
  "contact.company": { en: "Company", pl: "Firma" },
  "contact.message": { en: "Message", pl: "Wiadomość" },
  "contact.sendBtn": { en: "Send Message", pl: "Wyślij wiadomość" },
  "contact.reachOut": { en: "Reach Out", pl: "Skontaktuj się" },
  "contact.reachOutDesc": { en: "I offer free initial consultations — get in touch to discuss your needs.", pl: "Oferuję bezpłatne wstępne konsultacje — skontaktuj się, by omówić swoje potrzeby." },
  "contact.namePlaceholder": { en: "Jane Doe", pl: "Jan Kowalski" },
  "contact.emailPlaceholder": { en: "jane@example.com", pl: "jan@przyklad.pl" },
  "contact.companyPlaceholder": { en: "Your company name", pl: "Nazwa firmy" },
  "contact.messagePlaceholder": { en: "Tell us about your project or enquiry...", pl: "Opowiedz o swoim projekcie lub pytaniu..." },
  "contact.missingFields": { en: "Missing fields", pl: "Brakujące pola" },
  "contact.missingFieldsDesc": { en: "Please fill in your name, email, and message.", pl: "Wypełnij imię, email i wiadomość." },
  "contact.messageSent": { en: "Message sent!", pl: "Wiadomość wysłana!" },
  "contact.messageSentDesc": { en: "I'll get back to you within 24 hours.", pl: "Odpiszę w ciągu 24 godzin." },

  // Past Collaborations page
  "collab.title": { en: "Past", pl: "Dotychczasowe" },
  "collab.titleHighlight": { en: "Collaborations", pl: "Współprace" },
  "collab.subtitle": { en: "Projects, tools, and partnerships that shaped the work PINECO does today.", pl: "Projekty, narzędzia i partnerstwa, które ukształtowały dzisiejsze działania PINECO." },
  "collab.projects": { en: "Projects at Other Organisations", pl: "Projekty w innych organizacjach" },
  "collab.projectsSubtitle": { en: "Work delivered across nonprofits, foundations and international programmes before and alongside PINECO.", pl: "Praca realizowana w organizacjach pozarządowych, fundacjach i programach międzynarodowych." },
  "collab.tools": { en: "PINECO Tools on GitHub", pl: "Narzędzia PINECO na GitHubie" },
  "collab.toolsSubtitle": { en: "Open resources and templates built to support the third sector.", pl: "Otwarte zasoby i szablony stworzone z myślą o sektorze pozarządowym." },
  "collab.viewRepo": { en: "View repository →", pl: "Zobacz repozytorium →" },
  "collab.recommendations": { en: "What Others Say", pl: "Co mówią inni" },
  "collab.recommendationsSubtitle": { en: "Feedback from collaborators, volunteers, and partner organisations.", pl: "Opinie od współpracowników, wolontariuszy i organizacji partnerskich." },

  // Services page detailed
  "services.page.title": { en: "My", pl: "Moje" },
  "services.page.titleHighlight": { en: "Services", pl: "Usługi" },
  "services.page.subtitle": { en: "Four core areas of expertise to help your organisation grow, optimise, and deliver impact.", pl: "Cztery kluczowe obszary ekspertyzy, które pomogą Twojej organizacji rosnąć i dostarczać wpływ." },
  "services.page.projectTagline": { en: "Keeping your projects on track, start to finish", pl: "Prowadzę Twoje projekty od początku do końca" },
  "services.page.projectDesc1": { en: "Good ideas don't always translate into well-run projects — and that's where things can fall apart. Whether you're launching a new programme, managing a funded project, or coordinating across multiple partners, I bring the structure, systems and oversight you need to deliver on time and on brief. Think of me as your steady pair of hands behind the scenes.", pl: "Dobre pomysły nie zawsze przekładają się na dobrze prowadzone projekty — i właśnie wtedy sprawy mogą się posypać. Niezależnie od tego, czy uruchamiasz nowy program, zarządzasz finansowanym projektem, czy koordynujesz pracę wielu partnerów, wnoszę strukturę, systemy i nadzór, których potrzebujesz, aby dostarczyć go na czas i zgodnie z założeniami. Myśl o mnie jak o swojej niezawodnej parze rąk za kulisami." },
  "services.page.whatsIncluded": { en: "What's included", pl: "Co wchodzi w skład" },
  "services.page.projectInclude1": { en: "Project planning, timelines and milestone tracking", pl: "Planowanie projektu, harmonogramy i śledzenie kamieni milowych" },
  "services.page.projectInclude2": { en: "Stakeholder and partner communication", pl: "Komunikacja z interesariuszami i partnerami" },
  "services.page.projectInclude3": { en: "Risk identification and problem-solving support", pl: "Identyfikacja ryzyk i wsparcie w rozwiązywaniu problemów" },
  "services.page.projectInclude4": { en: "Reporting and documentation for funders", pl: "Raportowanie i dokumentacja dla donatorów" },
  "services.page.projectInclude5": { en: "Coordination of international or multi-site projects (including Erasmus+ & ESC)", pl: "Koordynacja projektów międzynarodowych lub wielolokalizacyjnych (w tym Erasmus+ i ESC)" },
  "services.page.pricing": { en: "Pricing", pl: "Cennik" },
  "services.page.projectPricing": { en: "Set based on the scope of the project and the amount of hours required.", pl: "Ustalane na podstawie zakresu projektu i ilości wymaganych godzin." },
  "services.page.getQuote": { en: "Get a quote →", pl: "Zapytaj o wycenę →" },
  "services.page.volDesc1": { en: "Volunteers are at the heart of many nonprofits and community organisations — but managing them well takes more than goodwill. From recruitment to retention, I help you build volunteer programmes that are well-structured, motivating, and sustainable. Drawing on my experience co-founding and running a volunteer-led nonprofit, I understand both the challenges and the rewards from the inside.", pl: "Wolontariusze są sercem wielu organizacji pozarządowych i społecznych — ale zarządzanie nimi dobrze wymaga więcej niż tylko dobrej woli. Od rekrutacji po utrzymanie, pomagam budować programy wolontariatu, które są dobrze ustrukturyzowane, motywujące i zrównoważone. Czerpiąc z doświadczenia współzakładania i prowadzenia organizacji opartej na wolontariacie, rozumiem zarówno wyzwania, jak i nagrody od środka." },
  "services.page.volInclude1": { en: "Volunteer programme design and policy development", pl: "Projektowanie programu wolontariatu i opracowanie polityk" },
  "services.page.volInclude2": { en: "Recruitment, onboarding and induction processes", pl: "Procesy rekrutacji, onboardingu i wdrożenia" },
  "services.page.volInclude3": { en: "Role definition and volunteer journey mapping", pl: "Definiowanie ról i mapowanie ścieżki wolontariusza" },
  "services.page.volInclude4": { en: "Retention strategies and recognition frameworks", pl: "Strategie retencji i systemy uznania" },
  "services.page.volInclude5": { en: "Support with international volunteering programmes (Erasmus+ & ESC)", pl: "Wsparcie przy programach wolontariatu międzynarodowego (Erasmus+ i ESC)" },
  "services.page.volPricing": { en: "Set based on the scope of the organisation and the amount of hours required.", pl: "Ustalane na podstawie zakresu organizacji i ilości wymaganych godzin." },
  "services.page.trainingDesc": { en: "Training should leave people feeling equipped, not overwhelmed. I design and deliver workshops and learning sessions that are practical, engaging, and tailored to your group's needs — drawing on years of experience in informal education and group facilitation. Whether you need a one-off session or an ongoing learning programme, I'll make sure it's relevant, accessible and genuinely useful.", pl: "Szkolenie powinno pozostawiać ludzi z poczuciem gotowości, a nie przytłoczenia. Projektuję i prowadzę warsztaty i sesje edukacyjne, które są praktyczne, angażujące i dopasowane do potrzeb Twojej grupy — czerpiąc z lat doświadczenia w edukacji pozaformalnej i facylitacji grupowej. Niezależnie od tego, czy potrzebujesz jednorazowej sesji czy ciągłego programu nauki, zadbam o to, aby była trafna, przystępna i naprawdę użyteczna." },
  "services.page.trainingInclude1": { en: "Bespoke workshop design and facilitation", pl: "Indywidualnie zaprojektowane warsztaty i facylitacja" },
  "services.page.trainingInclude2": { en: "Training needs analysis for teams and organisations", pl: "Analiza potrzeb szkoleniowych dla zespołów i organizacji" },
  "services.page.trainingInclude3": { en: "Online and in-person delivery across Europe", pl: "Realizacja online i stacjonarna w całej Europie" },
  "services.page.trainingInclude4": { en: "Follow-up resources and action planning support", pl: "Materiały uzupełniające i wsparcie w planowaniu działań" },
  "services.page.trainingBrowse": { en: "Browse the training catalogue below:", pl: "Przejrzyj katalog szkoleń poniżej:" },
  "services.page.trainingCatalogue": { en: "Training Catalogue", pl: "Katalog szkoleń" },
  "services.page.polishTrainings": { en: "Polish-Language Trainings", pl: "Szkolenia w języku polskim" },
  "services.page.polishTrainingsDesc": { en: "Szkolenia dostępne w języku polskim", pl: "Szkolenia dostępne w języku polskim" },
  "services.page.trainingPricing": { en: "Training fee + travel costs for offline sessions.", pl: "Opłata za szkolenie + koszty podróży dla sesji stacjonarnych." },
  "services.page.enquireSession": { en: "Enquire about a session →", pl: "Zapytaj o sesję →" },
  "services.page.consultingTagline": { en: "Individual sessions to take your organisation to the next level", pl: "Indywidualne sesje, które wyniosą Twoją organizację na wyższy poziom" },
  "services.page.consultingDesc": { en: "Every organisation has untapped potential — sometimes you just need a fresh pair of eyes and a clear plan to unlock it. Through focused one-to-one consultancy sessions, I work with nonprofits, community groups and social enterprises to tackle the challenges holding them back and map out a practical path forward. No generic advice. No corporate jargon. Just honest, experienced support tailored to where you are right now.", pl: "Każda organizacja ma niewykorzystany potencjał — czasem potrzeba po prostu świeżego spojrzenia i jasnego planu, aby go odblokować. Poprzez skupione sesje konsultacyjne jeden na jeden pracuję z organizacjami pozarządowymi, grupami społecznymi i przedsiębiorstwami społecznymi, aby stawić czoła wyzwaniom, które je hamują i wyznaczyć praktyczną drogę naprzód. Żadnych ogólnych porad. Żadnego korporacyjnego żargonu. Tylko uczciwe, doświadczone wsparcie dostosowane do Twojej aktualnej sytuacji." },
  "services.page.consultingTopics": { en: "What we can work on together", pl: "Co możemy razem przepracować" },
  "services.page.consultingNote": { en: "Sessions are available online and in person in Cambridge. Each session is tailored to your organisation's specific needs — no two are the same.", pl: "Sesje dostępne online i stacjonarnie w Cambridge. Każda sesja jest dopasowana do specyficznych potrzeb Twojej organizacji — żadne dwie nie są takie same." },
  "services.page.bookConsulting": { en: "Book a Consulting Session", pl: "Zarezerwuj sesję konsultingową" },
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
