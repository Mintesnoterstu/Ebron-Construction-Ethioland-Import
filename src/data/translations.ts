import type { Lang } from "@/lib/types";

const en = {
  skip: "Skip to content",
  langToggle: "Switch language",
  themeToggle: "Toggle theme",
  themeLight: "Switch to light theme",
  themeDark: "Switch to dark theme",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  backToTop: "Back to top",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    import: "Import",
    contact: "Contact",
  },
  meta: {
    home: {
      title: "Ebron Construction & Ethioland Import | Turnkey Contractor in Ethiopia",
      description:
        "Turnkey construction and materials import in Ethiopia. Civil works, industrial infrastructure, water treatment, finishing, and Ethioland Import since 2014.",
    },
    about: {
      title: "About Us | Ebron Construction",
      description:
        "Ebron Construction & Ethioland Import was founded in 2014 by Engineer Elias Yimer. Quality, Speed, and Trust across all regions of Ethiopia.",
    },
    services: {
      title: "Our Services | Ebron Construction",
      description:
        "Five divisions: civil contracting, industrial infrastructure, water works, electromechanical finishing, and Ethioland Import.",
    },
    projects: {
      title: "Our Projects | Ebron Construction",
      description:
        "Selected work including Heineken brewery plants, Dashen & Habesha Breweries, industrial WWTPs, commercial buildings, and the Sanku Project.",
    },
    import: {
      title: "Ethioland Import Division | Ebron Construction",
      description:
        "Ethioland Import sources cement, reinforcement steel, ceramics, and electrical finishing materials to keep Ebron projects on schedule.",
    },
    contact: {
      title: "Contact Us | Ebron Construction",
      description:
        "Reach Ebron Construction & Ethioland Import in Addis Ababa. Hotline +251 95 389 8989, email viaebron@gmail.com.",
    },
    notFound: {
      title: "Page not found | Ebron Construction",
      description: "The page you requested is not available.",
    },
  },
  hero: {
    title: "Turnkey construction and materials import across Ethiopia",
    subtitle:
      "A general contractor serving multinational, industrial, and commercial clients from Addis Ababa to every region of Ethiopia.",
    motto: "Quality, Speed, and Trust",
    ctaPrimary: "Start a project",
    ctaSecondary: "View projects",
  },
  stats: {
    founded: "Founded",
    foundedValue: "2014",
    divisions: "Divisions",
    divisionsValue: "5",
    clients: "Clients",
    clientsValue: "Multinational",
    regions: "Coverage",
    regionsValue: "All regions",
  },
  homeAbout: {
    kicker: "About Ebron",
    title: "Built on engineering discipline since 2014",
    body: "Ebron Construction & Ethioland Import is an Ethiopian general contractor founded by Engineer Elias Yimer. We combine on-site construction with direct materials import for turnkey delivery.",
    link: "Read our story",
  },
  homeServices: {
    kicker: "What we do",
    title: "Five divisions, one contractor",
    link: "Explore services",
  },
  homeProjects: {
    kicker: "Selected work",
    title: "Projects that show our range",
    link: "See all projects",
  },
  homeImport: {
    kicker: "Ethioland Import",
    title: "Materials in our own supply chain",
    body: "The import division sources cement, reinforcement steel, ceramics, and electrical finishing materials so local supply gaps do not stall construction.",
    link: "Learn about import",
  },
  cta: {
    title: "Talk with Ebron about your next site",
    body: "Call the hotline or write to the office in Addis Ababa.",
    call: "Call hotline",
    email: "Email us",
  },
  about: {
    heroKicker: "About us",
    heroTitle: "An Ethiopian contractor with a dual construction and import model",
    heroSubtitle:
      "Founded in 2014 and headquartered in Addis Ababa, Ebron operates across all regions of Ethiopia.",
    storyKicker: "Our story",
    storyTitle: "From 2014 to turnkey delivery",
    storyBody:
      "Ebron Construction & Ethioland Import was established in 2014 to deliver civil, industrial, and commercial work with a reliable materials pipeline. The firm is a construction company, engineering service, and commercial and industrial equipment supplier.",
    founderKicker: "Founder",
    founderTitle: "Engineer Elias Yimer",
    founderBody:
      "Engineer Elias Yimer brings more than 20 years of civil engineering, structural consultation, and project management experience to the company’s operations.",
    valuesKicker: "Motto and values",
    valuesTitle: "Quality, Speed, and Trust",
    valuesQuality: "Quality in construction, materials, and finishing standards.",
    valuesSpeed: "Speed through daily timeline monitoring and an import supply line.",
    valuesTrust: "Trust through ethical corporate management and tested materials.",
    principlesKicker: "How we operate",
    principlesTitle: "Operational principles",
    ethicsTitle: "Ethical corporate management",
    ethicsBody: "Projects are run with accountable corporate management.",
    monitoringTitle: "Daily timeline monitoring",
    monitoringBody: "Schedules are reviewed daily so delivery stays on track.",
    testingTitle: "Concrete and material quality testing",
    testingBody: "Concrete and materials are tested to protect structural quality.",
    scopeKicker: "Reach",
    scopeTitle: "All regions of Ethiopia",
    scopeBody:
      "Headquartered in Addis Ababa, Ebron undertakes work across all regions of Ethiopia for multinational, industrial, and commercial clients.",
  },
  services: {
    heroKicker: "Services",
    heroTitle: "End-to-end construction with an import division",
    heroSubtitle: "Five business divisions covering site work and materials acquisition.",
    jump: "On this page",
    civilTitle: "Civil & General Contracting",
    civilP1:
      "Civil and general contracting covers multi-story commercial buildings, residential complexes, and general contracting assignments.",
    civilP2:
      "Teams deliver structural and building works for commercial developers and institutional clients.",
    civilP3: "The division supports turnkey building programmes from site works through handover.",
    civilB1: "Multi-story commercial development",
    civilB2: "Residential complexes",
    civilB3: "General contracting",
    industrialTitle: "Industrial Infrastructure",
    industrialP1:
      "Industrial infrastructure covers the design and erection of industrial facilities for manufacturing and processing clients.",
    industrialP2:
      "The division also delivers specialized perimeter security fencing and heavy concrete factory hardstands.",
    industrialP3: "Work is suited to plants that need durable yards, structures, and site protection.",
    industrialB1: "Industrial facilities",
    industrialB2: "Perimeter security fencing",
    industrialB3: "Heavy concrete factory hardstands",
    waterTitle: "Water Works & Wastewater Treatment",
    waterP1:
      "Water works focus on eco-friendly wastewater treatment plants (WWTP) for beverage and manufacturing sites.",
    waterP2: "The division also supports bio-ethanol refinery plant works tied to process water and industrial treatment.",
    waterP3: "Systems are engineered for industrial clients that must treat process effluent.",
    waterB1: "Industrial WWTP delivery",
    waterB2: "Eco-treatment systems",
    waterB3: "Bio-ethanol plant related works",
    electroTitle: "Electromechanical & Finishing",
    electroP1:
      "Electromechanical and finishing covers high-standard architectural building finishing and heavy industrial partitions.",
    electroP2: "Internal sanitary and plumbing works and electrical installations complete the building services package.",
    electroP3: "The division supports both commercial interiors and industrial plant fit-out.",
    electroB1: "Architectural finishing",
    electroB2: "Sanitary, plumbing, and electrical works",
    electroB3: "Heavy industrial partitions",
    importTitle: "Ethioland Import Division",
    importP1:
      "Ethioland Import sources international-standard construction materials and clears them through customs for Ebron projects.",
    importP2:
      "The catalogue includes cement, reinforcement steel, premium ceramics, and electrical finishing materials.",
    importP3: "Direct import is used to prevent delays caused by gaps in the local supply chain.",
    importB1: "Cement and reinforcement steel",
    importB2: "Ceramics and electrical finishing materials",
    importB3: "Customs clearing for project supply",
    howKicker: "Method",
    howTitle: "How we work",
    howBody:
      "Delivery is structured around ethical corporate management, daily timeline monitoring, and concrete and material quality testing.",
  },
  projectsPage: {
    heroKicker: "Projects",
    heroTitle: "Selected industrial, commercial, water, and road work",
    heroSubtitle: "Confirmed assignments for multinational and national clients in Ethiopia.",
    empty: "No projects in this category.",
    valueLabel: "Contract value",
    filters: {
      all: "All",
      industrial: "Industrial",
      commercial: "Commercial",
      water: "Water",
      road: "Road",
      import: "Import",
    },
    items: {
      heineken: {
        summary:
          "Specialized industrial expansions, structural maintenance, and concrete hardstands at the Harar and Bedele locations.",
      },
      "dashen-habesha": {
        summary:
          "Multi-phase structural additions, painting, and heavy equipment insulation works across regional processing facilities, including Debre Birhan.",
      },
      wwtp: {
        summary:
          "Fully functional eco-treatment systems (WWTP) built and handed over for beverage and manufacturing plants across Ethiopia.",
      },
      "g5-commercial": {
        summary:
          "Completed G+5 mixed-use commercial and administrative building layout valued at 86.5 Million ETB.",
      },
      kessem: {
        summary: "Protective industrial fencing and peripheral structure engineering at the bio-ethanol plant.",
      },
      yabelo: {
        summary: "Localized civil work focusing on road development and structural drainage infrastructure.",
      },
      sanku: {
        summary: "Engineering services for the localized, ongoing Sanku industrial initiative.",
      },
    },
  },
  importPage: {
    heroKicker: "Ethioland Import",
    heroTitle: "Direct sourcing for construction programmes",
    heroSubtitle:
      "An in-house import division that supplies Ebron sites with cement, steel, ceramics, and electrical finishing materials.",
    aboutKicker: "Why import sits inside Ebron",
    aboutTitle: "Construction plus materials acquisition",
    aboutBody:
      "Ethioland Import is the materials arm of Ebron Construction. It sources international-standard products and handles customs clearing so project teams are not waiting on fragmented local supply.",
    materialsKicker: "Materials",
    materialsTitle: "What we bring in",
    cement: "Cement",
    steel: "Reinforcement steel",
    ceramics: "Ceramics",
    electrical: "Electrical finishing materials",
    problemKicker: "Problem solved",
    problemTitle: "Fewer delays from the local supply chain",
    problemBody:
      "Direct sourcing and customs clearing help prevent programme delays when local markets cannot supply the required materials on time.",
  },
  contact: {
    heroKicker: "Contact",
    heroTitle: "Reach the Addis Ababa office",
    heroSubtitle: "Use the hotline, email, or the form. The published office address is in Bole Sub City.",
    hotline: "Hotline",
    email: "Email",
    address: "Address",
    facebook: "Facebook",
    directory: "2merkato listing",
    formTitle: "Send a message",
    name: "Name",
    namePlaceholder: "Your name",
    senderEmail: "Email",
    emailPlaceholder: "you@company.com",
    phone: "Phone",
    phonePlaceholder: "+251 …",
    message: "Message",
    messagePlaceholder: "How can we help?",
    submit: "Open email draft",
    formNote: "The form opens your email app with a draft to viaebron@gmail.com. No data is stored on this website.",
    mailSubject: "Inquiry from the Ebron website",
  },
  notFound: {
    title: "This page is not available",
    body: "The address may be incorrect, or the page has moved.",
    action: "Return home",
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "General contractor · Ethioland Import",
  },
  alts: {
    hero: "Ebron Construction site in Ethiopia",
    about: "Ebron team members on a construction site",
    partner: "Ebron representatives with project partners",
    machines: "Construction machinery used on an Ebron site",
    building: "Multi-story building delivered by Ebron",
    finishing: "Building finishing works",
    road: "Road and civil works",
    sanku: "Exterior view of the Sanku Project",
    workers: "Workers on an Ebron construction site",
    interior: "Interior of a completed building",
  },
} as const;

const am: typeof en = {
  skip: "ወደ ይዘት ይዝለሉ",
  langToggle: "ቋንቋ ቀይር",
  themeToggle: "ገጽታ ቀይር",
  themeLight: "ወደ ብሩህ ገጽታ ቀይር",
  themeDark: "ወደ ጨለማ ገጽታ ቀይር",
  openMenu: "ምናሌ ክፈት",
  closeMenu: "ምናሌ ዝጋ",
  backToTop: "ወደ ላይ ተመለስ",
  nav: {
    home: "መነሻ",
    about: "ስለ እኛ",
    services: "አገልግሎቶች",
    projects: "ፕሮጀክቶች",
    import: "ኢምፖርት",
    contact: "አግኙን",
  },
  meta: {
    home: {
      title: "Ebron Construction & Ethioland Import | Turnkey Contractor in Ethiopia",
      description:
        "በኢትዮጵያ የተሟላ ግንባታ እና የግብአት ኢምፖርት። ሲቪል ሥራ፣ የኢንዱስትሪ መሠረተ ልማት፣ የውሃ አያያዝ፣ ፊኒሺንግ እና Ethioland Import ከ2014 ጀምሮ።",
    },
    about: {
      title: "About Us | Ebron Construction",
      description:
        "Ebron Construction & Ethioland Import በ2014 በመሐንዲስ ኤሊያስ ይመር ተመሠረተ። ጥራት፣ ፍጥነትና እምነት በሁሉም የኢትዮጵያ ክልሎች።",
    },
    services: {
      title: "Our Services | Ebron Construction",
      description: "አምስት ክፍሎች፦ ሲቪል ኮንትራክት፣ የኢንዱስትሪ መሠረተ ልማት፣ የውሃ ሥራ፣ ኤሌክትሮሜካኒካል ፊኒሺንግ እና Ethioland Import።",
    },
    projects: {
      title: "Our Projects | Ebron Construction",
      description:
        "የተመረጡ ሥራዎች፦ Heineken የቢራ ፋብሪካዎች፣ Dashen & Habesha Breweries፣ የኢንዱስትሪ WWTP፣ የንግድ ሕንጻዎች እና The Sanku Project።",
    },
    import: {
      title: "Ethioland Import Division | Ebron Construction",
      description:
        "Ethioland Import ሲሚንቶ፣ የማጠናከሪያ ብረት፣ ሴራሚክ እና የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ በማስመጣት የፕሮጀክት መርሐ ግብር ይጠብቃል።",
    },
    contact: {
      title: "Contact Us | Ebron Construction",
      description: "Ebron Construction & Ethioland Importን በአዲስ አበባ ያግኙ። ሆትላይን +251 95 389 8989፣ ኢሜይል viaebron@gmail.com።",
    },
    notFound: {
      title: "ገጹ አልተገኘም | Ebron Construction",
      description: "የጠየቁት ገጽ አይገኝም።",
    },
  },
  hero: {
    title: "በኢትዮጵያ የተሟላ ግንባታ እና የግብአት ኢምፖርት",
    subtitle: "ከአዲስ አበባ ጀምሮ በሁሉም የኢትዮጵያ ክልሎች ለባለብዙ አገር፣ የኢንዱስትሪ እና የንግድ ደንበኞች የሚያገለግል ጠቅላላ ተቋራጭ።",
    motto: "ጥራት፣ ፍጥነትና እምነት",
    ctaPrimary: "ፕሮጀክት ይጀምሩ",
    ctaSecondary: "ፕሮጀክቶችን ይመልከቱ",
  },
  stats: {
    founded: "ተመሠረተ",
    foundedValue: "2014",
    divisions: "ክፍሎች",
    divisionsValue: "5",
    clients: "ደንበኞች",
    clientsValue: "ባለብዙ አገር",
    regions: "ሽፋን",
    regionsValue: "ሁሉም ክልሎች",
  },
  homeAbout: {
    kicker: "ስለ ኤብሮን",
    title: "ከ2014 ጀምሮ በምህንድስና ሥርዓት የተገነባ",
    body: "Ebron Construction & Ethioland Import በመሐንዲስ ኤሊያስ ይመር የተመሠረተ የኢትዮጵያ ጠቅላላ ተቋራጭ ነው። በቦታው ላይ ግንባታን ከቀጥታ የግብአት ኢምፖርት ጋር እናጣምራለን።",
    link: "ታሪካችንን ያንብቡ",
  },
  homeServices: {
    kicker: "የምንሠራው",
    title: "አምስት ክፍሎች፣ አንድ ተቋራጭ",
    link: "አገልግሎቶችን ይመልከቱ",
  },
  homeProjects: {
    kicker: "የተመረጡ ሥራዎች",
    title: "ክልላችንን የሚያሳዩ ፕሮጀክቶች",
    link: "ሁሉንም ፕሮጀክቶች ይመልከቱ",
  },
  homeImport: {
    kicker: "Ethioland Import",
    title: "በራሳችን የአቅርቦት ሰንሰለት ውስጥ ያሉ ግብአቶች",
    body: "የኢምፖርት ክፍሉ ሲሚንቶ፣ የማጠናከሪያ ብረት፣ ሴራሚክ እና የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ በማስመጣት የአካባቢ አቅርቦት ክፍተት ግንባታን እንዳያቆም ያደርጋል።",
    link: "ስለ ኢምፖርት ይወቁ",
  },
  cta: {
    title: "ስለ ቀጣዩ ጣቢያዎ ከኤብሮን ጋር ይነጋገሩ",
    body: "ሆትላይኑን ይደውሉ ወይም በአዲስ አበባ ቢሮ ይጻፉ።",
    call: "ሆትላይን ይደውሉ",
    email: "ኢሜይል ይላኩ",
  },
  about: {
    heroKicker: "ስለ እኛ",
    heroTitle: "ግንባታንና ኢምፖርትን ያጣመረ የኢትዮጵያ ተቋራጭ",
    heroSubtitle: "በ2014 ተመሥርቶ ዋና መሥሪያ ቤቱ አዲስ አበባ ሲሆን በሁሉም የኢትዮጵያ ክልሎች ይሠራል።",
    storyKicker: "ታሪካችን",
    storyTitle: "ከ2014 እስከ የተሟላ አቅርቦት",
    storyBody:
      "Ebron Construction & Ethioland Import በ2014 ሲቪል፣ የኢንዱስትሪ እና የንግድ ሥራን በታማኝ የግብአት መስመር ለማቅረብ ተመሠረተ። ኩባንያው የግንባታ፣ የምህንድስና አገልግሎት እና የንግድና የኢንዱስትሪ መሣሪያ አቅራቢ ነው።",
    founderKicker: "መሥራች",
    founderTitle: "Engineer Elias Yimer",
    founderBody:
      "መሐንዲስ ኤሊያስ ይመር ከ20 ዓመት በላይ የሲቪል ምህንድስና፣ የመዋቅር ምክር እና የፕሮጀክት አስተዳደር ልምድ ወደ ኩባንያው ሥራ ያመጣል።",
    valuesKicker: "መሪ ቃል እና እሴቶች",
    valuesTitle: "ጥራት፣ ፍጥነትና እምነት",
    valuesQuality: "በግንባታ፣ በግብአት እና በፊኒሺንግ ደረጃዎች ጥራት።",
    valuesSpeed: "በዕለታዊ የጊዜ ሰሌዳ ክትትል እና በኢምፖርት አቅርቦት ፍጥነት።",
    valuesTrust: "በሥነ ምግባራዊ የድርጅት አስተዳደር እና በተፈተኑ ግብአቶች እምነት።",
    principlesKicker: "እንዴት እንሠራለን",
    principlesTitle: "የሥራ መርሆዎች",
    ethicsTitle: "ሥነ ምግባራዊ የድርጅት አስተዳደር",
    ethicsBody: "ፕሮጀክቶች በተጠያቂ የድርጅት አስተዳደር ይመራሉ።",
    monitoringTitle: "ዕለታዊ የጊዜ ሰሌዳ ክትትል",
    monitoringBody: "መርሐ ግብሮች በየቀኑ ይገመገማሉ አቅርቦቱ እንዲጠበቅ።",
    testingTitle: "የኮንክሪት እና የግብአት ጥራት ምርመራ",
    testingBody: "ኮንክሪት እና ግብአቶች የመዋቅር ጥራትን ለመጠበቅ ይፈተናሉ።",
    scopeKicker: "ሽፋን",
    scopeTitle: "ሁሉም የኢትዮጵያ ክልሎች",
    scopeBody: "ዋና መሥሪያ ቤቱ አዲስ አበባ ሲሆን ኤብሮን ለባለብዙ አገር፣ የኢንዱስትሪ እና የንግድ ደንበኞች በሁሉም ክልሎች ሥራ ይወስዳል።",
  },
  services: {
    heroKicker: "አገልግሎቶች",
    heroTitle: "ከጫፍ እስከ ጫፍ ግንባታ ከኢምፖርት ክፍል ጋር",
    heroSubtitle: "የቦታ ሥራን እና የግብአት ማግኛን የሚሸፍኑ አምስት የንግድ ክፍሎች።",
    jump: "በዚህ ገጽ",
    civilTitle: "Civil & General Contracting",
    civilP1: "የሲቪል እና ጠቅላላ ኮንትራክት ብዙ ፎቅ የንግድ ሕንጻዎችን፣ የመኖሪያ ኮምፕሌክሶችን እና ጠቅላላ የኮንትራክት ሥራዎችን ይሸፍናል።",
    civilP2: "ቡድኖች ለንግድ ገንቢዎች እና ለተቋማት ደንበኞች መዋቅራዊ እና የሕንጻ ሥራ ያቀርባሉ።",
    civilP3: "ክፍሉ የተሟላ የሕንጻ ፕሮግራሞችን ከቦታ ሥራ እስከ ማስረከብ ይደግፋል።",
    civilB1: "ብዙ ፎቅ የንግድ ልማት",
    civilB2: "የመኖሪያ ኮምፕሌክሶች",
    civilB3: "ጠቅላላ ኮንትራክት",
    industrialTitle: "Industrial Infrastructure",
    industrialP1: "የኢንዱስትሪ መሠረተ ልማት ለማምረቻ እና ማቀነባበሪያ ደንበኞች የኢንዱስትሪ ተቋማትን መንደፍ እና ማቆምን ይሸፍናል።",
    industrialP2: "ክፍሉ ልዩ የዙሪያ ደህንነት አጥር እና ከባድ የኮንክሪት የፋብሪካ ሃርድስታንድም ያቀርባል።",
    industrialP3: "ሥራው ጠንካራ ጓሮ፣ መዋቅር እና የቦታ ጥበቃ ለሚያስፈልጋቸው ፋብሪካዎች ተስማሚ ነው።",
    industrialB1: "የኢንዱስትሪ ተቋማት",
    industrialB2: "የዙሪያ ደህንነት አጥር",
    industrialB3: "ከባድ የኮንክሪት የፋብሪካ ሃርድስታንድ",
    waterTitle: "Water Works & Wastewater Treatment",
    waterP1: "የውሃ ሥራዎች ለመጠጥ እና ማምረቻ ጣቢያዎች ለአካባቢ ተስማሚ የፍሳሽ ውሃ ማጣሪያ ጣቢያዎችን (WWTP) ያተኩራሉ።",
    waterP2: "ክፍሉ ከሂደት ውሃ እና ከኢንዱስትሪ አያያዝ ጋር የተያያዙ የባዮ-ኤታኖል ማጣሪያ ፋብሪካ ሥራዎችንም ይደግፋል።",
    waterP3: "ስርዓቶች የሂደት ፍሳሽ ማከም ለሚገባቸው የኢንዱስትሪ ደንበኞች ይነደፋሉ።",
    waterB1: "የኢንዱስትሪ WWTP አቅርቦት",
    waterB2: "ለአካባቢ ተስማሚ የሕክምና ስርዓቶች",
    waterB3: "ከባዮ-ኤታኖል ፋብሪካ ጋር የተያያዙ ሥራዎች",
    electroTitle: "Electromechanical & Finishing",
    electroP1: "ኤሌክትሮሜካኒካል እና ፊኒሺንግ ከፍተኛ ደረጃ ያለው የሕንጻ ፊኒሺንግ እና ከባድ የኢንዱስትሪ ክፍልፋዮችን ይሸፍናል።",
    electroP2: "የውስጥ ሳኒታሪ እና የቧንቧ ሥራ እንዲሁም የኤሌክትሪክ ጭነቶች የሕንጻ አገልግሎት ጥቅሉን ያጠናቅቃሉ።",
    electroP3: "ክፍሉ የንግድ የውስጥ ክፍሎችን እና የኢንዱስትሪ ፋብሪካ ማስተካከያን ይደግፋል።",
    electroB1: "የሕንጻ ፊኒሺንግ",
    electroB2: "ሳኒታሪ፣ ቧንቧ እና የኤሌክትሪክ ሥራ",
    electroB3: "ከባድ የኢንዱስትሪ ክፍልፋዮች",
    importTitle: "Ethioland Import Division",
    importP1: "Ethioland Import ዓለም አቀፍ ደረጃ ያላቸውን የግንባታ ግብአቶች በማምጣት ለኤብሮን ፕሮጀክቶች በጉምሩክ ያስለቅቃል።",
    importP2: "ዝርዝሩ ሲሚንቶ፣ የማጠናከሪያ ብረት፣ ከፍተኛ ደረጃ ሴራሚክ እና የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ ያካትታል።",
    importP3: "ቀጥተኛ ኢምፖርት በአካባቢ አቅርቦት ሰንሰለት ክፍተት የሚመጡ መዘግየቶችን ለመከላከል ይውላል።",
    importB1: "ሲሚንቶ እና የማጠናከሪያ ብረት",
    importB2: "ሴራሚክ እና የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ",
    importB3: "ለፕሮጀክት አቅርቦት ጉምሩክ ማስለቀቅ",
    howKicker: "ዘዴ",
    howTitle: "እንዴት እንሠራለን",
    howBody: "አቅርቦት በሥነ ምግባራዊ የድርጅት አስተዳደር፣ ዕለታዊ የጊዜ ሰሌዳ ክትትል እና የኮንክሪትና የግብአት ጥራት ምርመራ ላይ የተመሠረተ ነው።",
  },
  projectsPage: {
    heroKicker: "ፕሮጀክቶች",
    heroTitle: "የተመረጡ የኢንዱስትሪ፣ የንግድ፣ የውሃ እና የመንገድ ሥራዎች",
    heroSubtitle: "በኢትዮጵያ ለባለብዙ አገር እና ብሔራዊ ደንበኞች የተረጋገጡ ሥራዎች።",
    empty: "በዚህ ምድብ ፕሮጀክት የለም።",
    valueLabel: "የውል ዋጋ",
    filters: {
      all: "ሁሉም",
      industrial: "ኢንዱስትሪ",
      commercial: "ንግድ",
      water: "ውሃ",
      road: "መንገድ",
      import: "ኢምፖርት",
    },
    items: {
      heineken: {
        summary: "በሐረር እና በበደሌ የኢንዱስትሪ ማስፋፋት፣ የመዋቅር ጥገና እና የኮንክሪት ሃርድስታንድ ሥራ።",
      },
      "dashen-habesha": {
        summary: "በክልላዊ ማቀነባበሪያ ተቋማት፣ ደብረ ብርሃንን ጨምሮ፣ የብዙ ደረጃ መዋቅራዊ ጭማሪ፣ ቀለም እና ከባድ መሣሪያ መከላከያ ሥራ።",
      },
      wwtp: {
        summary: "ለመጠጥ እና ማምረቻ ፋብሪካዎች ሙሉ በሙሉ የሚሠሩ የፍሳሽ ማጣሪያ ስርዓቶች (WWTP) ተገንብተው ተረክበዋል።",
      },
      "g5-commercial": {
        summary: "በ86.5 ሚሊዮን ብር የተገመተ G+5 ድብልቅ አገልግሎት የንግድና አስተዳደር ሕንጻ አቀማመጥ ተጠናቋል።",
      },
      kessem: {
        summary: "በባዮ-ኤታኖል ፋብሪካ የመከላከያ የኢንዱስትሪ አጥር እና የዙሪያ መዋቅር ምህንድስና።",
      },
      yabelo: {
        summary: "በመንገድ ልማት እና በመዋቅራዊ የፍሳሽ መሠረተ ልማት ላይ ያተኮረ የአካባቢ ሲቪል ሥራ።",
      },
      sanku: {
        summary: "ለቀጣይ የSanku የኢንዱስትሪ ተነሳሽነት የምህንድስና አገልግሎቶች።",
      },
    },
  },
  importPage: {
    heroKicker: "Ethioland Import",
    heroTitle: "ለግንባታ ፕሮግራሞች ቀጥተኛ ምንጭ",
    heroSubtitle: "ለኤብሮን ጣቢያዎች ሲሚንቶ፣ ብረት፣ ሴራሚክ እና የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ የሚያቀርብ የውስጥ ኢምፖርት ክፍል።",
    aboutKicker: "ኢምፖርት በኤብሮን ውስጥ ለምን አለ",
    aboutTitle: "ግንባታ እና የግብአት ማግኛ",
    aboutBody:
      "Ethioland Import የኤብሮን ኮንስትራክሽን የግብአት ክንድ ነው። ዓለም አቀፍ ደረጃ ያላቸውን ምርቶች በማምጣት ጉምሩክ ያስለቅቃል፣ የፕሮጀክት ቡድኖች በተበታተነ የአካባቢ አቅርቦት እንዳይቆዩ።",
    materialsKicker: "ግብአቶች",
    materialsTitle: "የምናመጣው",
    cement: "ሲሚንቶ",
    steel: "የማጠናከሪያ ብረት",
    ceramics: "ሴራሚክ",
    electrical: "የኤሌክትሪክ ፊኒሺንግ ቁሳቁስ",
    problemKicker: "የሚፈታው ችግር",
    problemTitle: "ከአካባቢ አቅርቦት ሰንሰለት የሚመጡ መዘግየቶች ይቀንሳሉ",
    problemBody: "ቀጥተኛ ምንጭ እና ጉምሩክ ማስለቀቅ የአካባቢ ገበያዎች በጊዜው ግብአት ማቅረብ ሲያቅታቸው የፕሮግራም መዘግየትን ለመከላከል ይረዳሉ።",
  },
  contact: {
    heroKicker: "አግኙን",
    heroTitle: "የአዲስ አበባ ቢሮን ያግኙ",
    heroSubtitle: "ሆትላይን፣ ኢሜይል ወይም ቅጹን ይጠቀሙ። የሚታተመው የቢሮ አድራሻ በቦሌ ክፍለ ከተማ ነው።",
    hotline: "ሆትላይን",
    email: "ኢሜይል",
    address: "አድራሻ",
    facebook: "ፌስቡክ",
    directory: "2merkato መዝገብ",
    formTitle: "መልእክት ይላኩ",
    name: "ስም",
    namePlaceholder: "ስምዎ",
    senderEmail: "ኢሜይል",
    emailPlaceholder: "you@company.com",
    phone: "ስልክ",
    phonePlaceholder: "+251 …",
    message: "መልእክት",
    messagePlaceholder: "እንዴት ልንረዳዎት እንችላለን?",
    submit: "የኢሜይል ረቂቅ ክፈት",
    formNote: "ቅጹ ወደ viaebron@gmail.com የሚሄድ ረቂቅ በኢሜይል መተግበሪያዎ ይከፍታል። በዚህ ድረ ገጽ ላይ መረጃ አይቀመጥም።",
    mailSubject: "ከኤብሮን ድረ ገጽ የመጣ ጥያቄ",
  },
  notFound: {
    title: "ይህ ገጽ አይገኝም",
    body: "አድራሻው ሊሳሳት ወይም ገጹ ተወስዶ ሊሆን ይችላል።",
    action: "ወደ መነሻ ተመለስ",
  },
  footer: {
    rights: "መብቱ በህግ የተጠበቀ ነው።",
    tagline: "ጠቅላላ ተቋራጭ · Ethioland Import",
  },
  alts: {
    hero: "በኢትዮጵያ የኤብሮን ግንባታ ጣቢያ",
    about: "የኤብሮን ቡድን አባላት በግንባታ ጣቢያ",
    partner: "የኤብሮን ተወካዮች ከፕሮጀክት አጋሮች ጋር",
    machines: "በኤብሮን ጣቢያ ላይ የሚውሉ የግንባታ ማሽኖች",
    building: "በኤብሮን የተገነባ ብዙ ፎቅ ሕንጻ",
    finishing: "የሕንጻ ፊኒሺንግ ሥራዎች",
    road: "የመንገድ እና ሲቪል ሥራዎች",
    sanku: "የSanku Project ውጫዊ እይታ",
    workers: "ሰራተኞች በኤብሮን ግንባታ ጣቢያ",
    interior: "የተጠናቀቀ ሕንጻ ውስጠኛ ክፍል",
  },
};

export const translations: Record<Lang, typeof en> = { en, am };

export type Translations = typeof en;

export const LANG_STORAGE_KEY = "ebron-lang";
export const LANG_COOKIE_KEY = "ebron-lang";
