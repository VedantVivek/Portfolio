export const personalInfo = {
  name: "Vedant Vivek",

  subtitle: "Software Quality Engineer — Test Automation, APIs & AI-Assisted Testing",

  oneLiner:
    "I build automated and AI-assisted testing systems that catch defects before they reach production.",

  introduction:
    "Software Quality Engineer at Zinnia, where I build Playwright + TypeScript automation for enterprise platforms: a framework that executes 700+ Excel-driven scenarios across 4 domains, plus an LLM-assisted self-healing layer that keeps tests resilient to UI changes. I run these suites through CI with Jenkins, GitHub Actions and Docker, and I build full-stack applications with Next.js and TypeScript.",

  about:
    "I've worked both sides of the release cycle — writing requirements as a BA, then proving they hold up as an SDET. That means I test where the risk actually is, from APIs to UI flows, and I build frameworks that run in CI, report clearly and stay stable as the product changes. What I enjoy most is designing a framework once and watching it validate hundreds of scenarios reliably.",

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
    value: 700,
    suffix: "+",
    label: "Excel-driven scenarios across 4 domains",
  },
  {
    value: 645,
    suffix: "",
    label: "Generated forms validated against spec",
  },
  {
    value: 167,
    suffix: "",
    label: "Learned mappings captured by the self-healing layer",
  },
  {
    value: 50,
    suffix: "+",
    label: "Automated runs published to Allure and dashboards",
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
      "Jenkins",
      "Allure",
      "REST APIs",
      "AI-Assisted Testing",
    ],
    achievements: [
      "Architected a modular Playwright-TypeScript framework executing 700+ Excel-driven scenarios across 4 domains, integrated with Jenkins for on-demand regression testing.",
      "Automated SAML SSO, OAuth, and multi-step API authentication workflows, validating end-to-end transaction lifecycles, status updates, and document generation.",
      "Designed a reusable rule-based field-mapping engine spanning 15+ domains with persistent learning and LLM-assisted self-healing fallback, accumulating 167 learned mappings to improve UI-change resilience.",
      "Engineered automated spec-compliance validation across 645 generated forms and 29 UAT transactions, with discrepancy detection, field-level auditing and Allure/dashboard reporting across 50+ runs.",
    ],
  },
  {
    company: "Zinnia",
    location: "Noida, Uttar Pradesh",
    role: "Business Analyst Intern",
    period: "Jan 2026–Jun 2026",
    type: "Internship",
    technologies: ["SQL", "Postman", "REST APIs", "Apache JMeter"],
    achievements: [
      "Partnered with business and product teams to translate strategic requirements into 8+ actionable product enhancements, accelerating development readiness and cutting requirement ambiguity by aligning scope upfront.",
      "Drove cross-functional alignment with product owners and stakeholders across 3+ sprint releases, prioritizing initiatives against business goals and driving them to on-time delivery.",
      "Collaborated with QA to validate requirements across 15+ API endpoints using Postman and SQL, with Apache JMeter used for performance validation ahead of UAT.",
    ],
  },
];

export const caseStudies = [
  {
    id: "playwright-framework",
    title: "Playwright Test Framework",
    problem: null as string | null,
    action:
      "Architected a modular Playwright-TypeScript framework executing 700+ Excel-driven scenarios across 4 domains, integrated with Jenkins for on-demand regression testing.",
    tech: ["Playwright", "TypeScript", "Jenkins"],
    resultValue: "700+",
    resultLabel: "Excel-driven scenarios across 4 domains",
    role: null as string | null,
  },
  {
    id: "self-healing",
    title: "Self-Healing Field Mapping",
    problem: null as string | null,
    action:
      "Designed a reusable rule-based field-mapping engine spanning 15+ domains with persistent learning and LLM-assisted self-healing fallback to improve UI-change resilience.",
    tech: ["TypeScript", "Playwright", "LLM"],
    resultValue: "167",
    resultLabel: "Learned mappings captured",
    role: null as string | null,
  },
  {
    id: "spec-compliance",
    title: "Spec-Compliance Validation",
    problem: null as string | null,
    action:
      "Engineered automated spec-compliance validation across 645 generated forms and 29 UAT transactions, with discrepancy detection, field-level auditing and Allure/dashboard reporting across 50+ runs.",
    tech: ["Playwright", "TypeScript", "Allure"],
    resultValue: "645",
    resultLabel: "Generated forms validated against spec",
    role: null as string | null,
  },
  {
    id: "ba-impact",
    title: "BA Internship Impact",
    problem: null as string | null,
    action:
      "Translated strategic requirements into 8+ product enhancements and validated requirements across 15+ API endpoints with Postman and SQL, with Apache JMeter for performance validation ahead of UAT.",
    tech: ["SQL", "Postman", "REST APIs", "Apache JMeter"],
    resultValue: "15+",
    resultLabel: "API endpoints validated before UAT",
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
      "API Testing",
      "UI Testing",
      "Regression Testing",
      "Data-Driven Testing",
      "Page Object Model",
      "AI-Assisted Testing",
    ],
  },
  {
    title: "Programming",
    skills: ["TypeScript", "Python", "JavaScript", "SQL", "C/C++"],
  },
  {
    title: "Development",
    skills: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Process",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "Allure",
      "JIRA",
      "Git/GitHub",
      "Apache JMeter",
      "Agile/Scrum",
    ],
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "DAX", "Power Query"],
  },
];

export const featuredProjects = [
  {
    tier: "primary" as const,
    title: "LocalEstate Playwright Tests",
    tagline:
      "A public Playwright + TypeScript test suite for my LocalEstate app, running in GitHub Actions CI and Docker.",
    category: "Test Automation",
    status: "Individual Project",
    description:
      "24 UI and API tests with Page Objects, custom fixtures and shared test data, running on every push and pull request through GitHub Actions and in a Docker container. While building it, I found 2 real bugs in the mortgage API and reported them as GitHub issues with repro steps and root cause.",
    technologies: [
      "Playwright",
      "TypeScript",
      "GitHub Actions",
      "Page Object Model",
      "Docker",
    ],
    github: "https://github.com/VedantVivek/localestate-playwright-tests",
    liveDemo: "",
    images: ["/projects/localestate-tests/report.png", "/projects/localestate-tests/known-bugs.png"],
  },
  {
    tier: "primary" as const,
    title: "Event Dazzle",
    tagline:
      "A full-stack event discovery platform with secure auth and end-to-end payment-integrated booking.",
    category: "Full-Stack Product",
    status: "Individual Project",
    description:
      "A full-stack event booking platform integrating Ticketmaster, Bushdrum and Stripe APIs across 7 Indian cities, with 3-tier zone-based tickets, UPI payments and email OTP authentication.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Email OTP", "Stripe"],
    github: "https://github.com/VedantVivek/Event_Finder",
    liveDemo: "https://event-finder-dusky.vercel.app",
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
      "A full-stack neighborhood real-estate app with auth, property search and filters, match scores, favorites, compare homes, tour booking, mortgage calculator, and contact/newsletter flows, backed by a 10-endpoint Express REST API and MongoDB.",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
    github: "https://github.com/VedantVivek/localEstate",
    liveDemo: "https://local-estate-main.vercel.app",
    images: [
      "/projects/localestate/popular1.jpg",
      "/projects/localestate/popular2.jpg",
      "/projects/localestate/popular3.jpg",
      "/projects/localestate/home.jpg",
      "/projects/localestate/value.jpg",
      "/projects/localestate/contact.png",
    ],
  },
  {
    tier: "secondary" as const,
    title: "Nexora Requirements Assistant",
    tagline:
      "An AI-assisted requirements drafting assistant with a human review gate.",
    category: "AI-Assisted Tool",
    status: "Individual Project",
    description:
      "Drop in a stakeholder call transcript and it drafts a scope statement and user stories. Nothing goes to the backlog until a BA has reviewed and signed off on it.",
    technologies: ["Next.js", "TypeScript", "Anthropic SDK", "Tailwind CSS"],
    github: "https://github.com/VedantVivek/nexora-requirements-assistant",
    liveDemo: "https://nexora-requirements-assistant.vercel.app",
    images: ["/projects/nexora/home.png"],
  },
  {
    tier: "secondary" as const,
    title: "Churnlens",
    tagline: "Finds where users drop off between signup and churn.",
    category: "Analytics Product",
    status: "Individual Project",
    description:
      "Tracks the whole journey from signup to churn, shows where users drop off, and sketches what an A/B test to fix it might look like. Built on 100% synthetic data for demonstration.",
    technologies: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    github: "https://github.com/VedantVivek/churnlens",
    liveDemo: "https://churnlens-mzc5.vercel.app",
    images: ["/projects/churnlens/home.png", "/projects/churnlens/insights.png"],
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
    github: "https://github.com/VedantVivek/Blink-It-Dashboard",
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
      score: "CGPA: 7.96 / 10",
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
  heading: "Let's talk about SDET and software engineering roles.",
  description:
    "Open to full-time SDET, Software Quality Engineer, and Software Engineer opportunities. Email is fastest — include the role, stack, and what reliability means for your team.",
  email: "vedantvivek496@gmail.com",
  phone: "+91-8279544936",
  location: "Noida, Uttar Pradesh, India",
  availability: "Open to Full-Time SDET and Software Engineering Opportunities",
  socials: {
    github: "https://github.com/VedantVivek",
    linkedin: "https://www.linkedin.com/in/vedant-vivek-2063aa279/",
    leetcode: "https://leetcode.com/u/comeback28/",
    geeksforgeeks:
      "https://www.geeksforgeeks.org/profile/vedantvixfkm?tab=activity",
  },
};