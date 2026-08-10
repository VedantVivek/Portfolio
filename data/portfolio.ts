export const personalInfo = {
  name: "Vedant Vivek",

  subtitle: "Software Quality Engineer — Test Automation & API Reliability",

  oneLiner:
    "I build automated testing systems that catch defects before they reach production.",

  introduction:
    "Software Quality Engineer at Zinnia, where I design automated testing frameworks for insurance-technology platforms. I've cut manual validation effort by 50% with an API regression suite spanning 10+ REST endpoints, and built a validation engine that checks 900+ UI fields against live data. I also build full-stack applications with Next.js and TypeScript.",

  about:
    "I've worked both sides of the release cycle — writing requirements as a BA, then proving they hold up as a QA engineer. That means I test with business context in mind, not just a checklist. What I enjoy most is designing a framework once and watching it validate hundreds of scenarios reliably.",

  email: "vedantvivek496@gmail.com",
  phone: "+91-8279544936",
  location: "Noida, Uttar Pradesh, India",

  profileImage: "/vedant-profile.jpg",
  resumeUrl: "/Vedant-Vivek-Resume.pdf",

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/vedant-vivek-2063aa279/",
    github: "https://github.com/VedantVivek",
    leetcode: "https://leetcode.com/u/comeback28/",
    geeksForGeeks:
      "https://www.geeksforgeeks.org/profile/vedantvixfkm?tab=activity",
  },
};

export const portfolioStats = [
  {
    value: 50,
    suffix: "%",
    label: "Reduction in manual validation effort",
  },
  {
    value: 10,
    suffix: "+",
    label: "REST endpoints under automated regression",
  },
  {
    value: 900,
    suffix: "+",
    label: "UI fields validated across insurance carriers",
  },
  {
    value: 3,
    suffix: "+",
    label: "Browser environments in cross-browser regression",
  },
];

export const experiences = [
  {
    company: "Zinnia",
    location: "Noida, Uttar Pradesh",
    role: "Software Quality Engineer",
    period: "Jul 2026–Present",
    type: "Current Role",
    technologies: [
      "Playwright",
      "TypeScript",
      "Selenium",
      "Python",
      "Postman",
      "REST APIs",
      "SQL",
      "JIRA",
    ],
    achievements: [
      "Built an automated API regression framework covering 10+ REST endpoints — validating auth, payload integrity, and business-critical workflows — cutting manual validation effort by 50%.",
      "Designed a spec-driven validation engine in Playwright/TypeScript that parses Excel-based conditional rules to check 900+ UI fields against live carrier data.",
      "Automated cross-browser UI regression in Selenium/Python across 3+ browser environments, strengthening release confidence.",
    ],
  },
  {
    company: "Zinnia",
    location: "Noida, Uttar Pradesh",
    role: "Business Analyst Intern",
    period: "Jan 2026–Jun 2026",
    type: "Internship",
    technologies: [
      "SQL",
      "Postman",
      "REST APIs",
      "JIRA",
      "Confluence",
      "Apache JMeter",
    ],
    achievements: [
      "Wrote user stories and acceptance criteria for 8+ enhancements, removing requirement ambiguity before development.",
      "Validated business requirements across 15+ API endpoints with Postman/SQL and ran JMeter load tests ahead of UAT.",
    ],
  },
];

export const caseStudies = [
  {
    id: "api-regression",
    title: "API Regression Framework",
    // TODO: add case study context — problem statement from Vedant
    problem: null as string | null,
    action:
      "Built an automated API regression framework covering 10+ REST endpoints — validating auth, payload integrity, and business-critical workflows.",
    tech: ["Postman", "REST APIs", "TypeScript", "JIRA"],
    resultValue: "50%",
    resultLabel: "Reduction in manual validation effort",
    // TODO: add individual vs team contribution note from Vedant
    role: null as string | null,
  },
  {
    id: "field-validation",
    title: "900+ Field Validation Engine",
    // TODO: add case study context — problem statement from Vedant
    problem: null as string | null,
    action:
      "Designed a spec-driven validation engine in Playwright/TypeScript that parses Excel-based conditional rules to check 900+ UI fields against live carrier data.",
    tech: ["Playwright", "TypeScript", "Excel Rules", "SQL"],
    resultValue: "900+",
    resultLabel: "UI fields validated against live data",
    // TODO: add individual vs team contribution note from Vedant
    role: null as string | null,
  },
  {
    id: "cross-browser",
    title: "Cross-Browser UI Regression",
    // TODO: add case study context — problem statement from Vedant
    problem: null as string | null,
    action:
      "Automated cross-browser UI regression in Selenium/Python across 3+ browser environments, strengthening release confidence.",
    tech: ["Selenium", "Python", "Cross-Browser Testing"],
    resultValue: "3+",
    resultLabel: "Browser environments covered",
    // TODO: add individual vs team contribution note from Vedant
    role: null as string | null,
  },
  {
    id: "ba-impact",
    title: "BA Internship Impact",
    // TODO: add case study context — problem statement from Vedant
    problem: null as string | null,
    action:
      "Wrote user stories and acceptance criteria for 8+ enhancements, validated requirements across 15+ API endpoints with Postman/SQL, and ran JMeter load tests ahead of UAT.",
    tech: ["JIRA", "Confluence", "Postman", "SQL", "Apache JMeter"],
    resultValue: "15+",
    resultLabel: "API endpoints validated before UAT",
    // TODO: add individual vs team contribution note from Vedant
    role: null as string | null,
  },
];

export const skillCategories = [
  {
    title: "Automation & Testing",
    skills: [
      "Playwright",
      "Selenium",
      "Postman",
      "REST Assured",
      "TestNG",
      "API Testing",
      "UI Testing",
      "Regression Testing",
      "Data-Driven Testing",
    ],
  },
  {
    title: "Programming",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "C/C++"],
  },
  {
    title: "Development",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Tools & Process",
    skills: ["JIRA", "Git/GitHub", "Apache JMeter", "Agile/Scrum"],
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "DAX", "MongoDB"],
  },
];

export const featuredProjects = [
  {
    tier: "primary" as const,
    title: "Event Finder",
    tagline:
      "A full-stack event discovery platform with secure auth and end-to-end payment-integrated booking.",
    category: "Full-Stack Product",
    status: "Individual Project",
    description:
      "A full-stack event discovery and ticket-booking platform that allows users to discover location-based events, authenticate securely, explore event details, and complete ticket payments through one connected experience.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Stripe"],
    // TODO: confirm live demo URL when available
    github: "https://github.com/VedantVivek/Event_Finder",
    liveDemo: "",
    images: [
      "/projects/event-finder/01-home.png",
      "/projects/event-finder/02-events-listing.png",
      "/projects/event-finder/03-event-details.png",
      "/projects/event-finder/04-checkout.png",
      "/projects/event-finder/05-payment.png",
      "/projects/event-finder/06-mobile-home.png",
      "/projects/event-finder/07-mobile-events.png",
    ],
  },
  {
    tier: "secondary" as const,
    title: "LocalEstate",
    tagline: "Neighborhood real estate with search, favorites, and tour booking.",
    category: "Full-Stack Product",
    status: "Individual Project",
    description:
      "A full-stack neighborhood real-estate app with auth, property search and filters, match scores, favorites, compare homes, tour booking, mortgage calculator, and contact/newsletter flows.",
    technologies: ["JavaScript", "HTML", "CSS", "Express", "Node.js"],
    github: "https://github.com/VedantVivek/localEstate",
    liveDemo: "",
    images: [
      "/projects/localestate/popular1.jpg",
      "/projects/localestate/popular2.jpg",
      "/projects/localestate/popular3.jpg",
      "/projects/localestate/home.jpg",
      "/projects/localestate/value.jpg",
      "/projects/localestate/contact.png",
    ],
  },
];

export const moreProjects = [
  {
    title: "Power BI Operational Dashboard",
    category: "Business Intelligence",
    description:
      "Designed an executive Power BI dashboard to monitor sales performance, profitability, customer behaviour, regional trends, and product insights.",
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling", "Excel"],
    image: "/projects/adventureworks/dashboard.png",
    images: [
      "/projects/adventureworks/dashboard.png",
      "/projects/adventureworks/products.png",
      "/projects/adventureworks/customers.png",
      "/projects/adventureworks/map.png",
      "/projects/adventureworks/decomposition.png",
      "/projects/adventureworks/category-tooltip.png",
    ],
    github: "https://github.com/VedantVivek/Adventure-Sales-Dashboard",
  },
  {
    title: "Blinkit Sales Analysis",
    category: "Data Analysis",
    description:
      "Analyzed Blinkit retail data using Python to identify sales patterns, customer preferences, outlet performance, and business insights through exploratory data analysis.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
    ],
    image: "/projects/blinkit-python/analysis-1.png",
    images: ["/projects/blinkit-python/analysis-1.png"],
    github: "https://github.com/VedantVivek/Blink-IT-analysis-in-Python",
  },
  {
    title: "Blinkit Sales Dashboard",
    category: "Analytics Dashboard",
    description:
      "Built an interactive dashboard to analyse outlet performance, customer ratings, item categories, outlet size, and sales KPIs using Power BI.",
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    image: "/projects/blinkit-dashboard/dashboard.png",
    images: ["/projects/blinkit-dashboard/dashboard.png"],
    github: "https://github.com/VedantVivek/Blink-It-Dashboard-",
  },
  {
    title: "Zepto Sales Analysis",
    category: "Analytics Dashboard",
    description:
      "Built an interactive Power BI dashboard for a quick-commerce grocery scenario to analyse sales KPIs, outlet performance, product categories, customer ratings, and historical trends.",
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    image: "/projects/zepto-dashboard/dashboard.png",
    images: ["/projects/zepto-dashboard/dashboard.png"],
    github: "https://github.com/VedantVivek/Zepto-Sales-Analysis-PowerBI",
  },
];

export const credentials = {
  education: [
    {
      institution: "Jaypee Institute of Information Technology",
      qualification:
        "Bachelor of Technology in Electronics and Communication",
      period: "2022 – 2026",
      location: "Noida",
      score: "CGPA: 8.00 / 10",
    },
    {
      institution: "St. Joseph's School",
      qualification: "Class XII (CBSE)",
      period: "2020 – 2021",
      location: "Puranpur",
      score: "95%",
    },
  ],
  certifications: [
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      description:
        "Completed Cisco's Data Analytics Essentials certification covering analytical thinking, business intelligence, visualization, data preparation, and decision making.",
      skills: [
        "Data Analytics",
        "Data Cleaning",
        "Data Visualization",
        "Business Intelligence",
        "Analytical Thinking",
      ],
      credential: "Professional Certificate",
      image: "/certificates/cisco.png",
      // TODO: add certificate verification link
      link: "",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      description:
        "Completed Deloitte's virtual job simulation focused on business analytics, dashboard reporting, stakeholder communication, and solving business problems using data.",
      skills: [
        "Business Analytics",
        "Dashboard Reporting",
        "Stakeholder Communication",
        "Problem Solving",
        "Data Interpretation",
      ],
      credential: "Virtual Experience Program",
      image: "/certificates/deloitte.png",
      // TODO: add certificate verification link
      link: "",
    },
  ],
  leadership: {
    organization: "Parola: Literary Hub of JIIT",
    role: "Management Head",
    period: "June 2024 – May 2025",
    description:
      "Led planning, promotion, outreach, coordination, and execution for literary events while collaborating with multiple teams across the institute.",
    highlights: [
      "Promoted Delhi NCR's largest literary fest (JOUST).",
      "Expanded outreach across 170+ colleges.",
      "Coordinated participation across 9 competitions.",
      "Contributed to an event attended by 550+ participants.",
      "Helped increase overall participation by approximately 20%.",
    ],
  },
};

export const contactInfo = {
  heading: "Let's talk about quality engineering roles.",
  description:
    "Open to full-time Software Quality Engineer, SDET, and QA Automation opportunities. Email is fastest — include the role, stack, and what reliability means for your team.",
  email: "vedantvivek496@gmail.com",
  phone: "+91-8279544936",
  location: "Noida, Uttar Pradesh, India",
  availability: "Open to Full-Time Software Quality Engineering Opportunities",
  socials: {
    github: "https://github.com/VedantVivek",
    linkedin: "https://www.linkedin.com/in/vedant-vivek-2063aa279/",
    leetcode: "https://leetcode.com/u/comeback28/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/profile/vedantvixfkm?tab=activity",
  },
};
