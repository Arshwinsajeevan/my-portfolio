// portfolioData.js - Verified single source of truth for Arshwin Sajeevan's portfolio

export const personalInfo = {
  name: "Arshwin Sajeevan",
  shortBrand: "Arshwin.",
  role: "Software Developer",
  tagline: "Software Developer building full-stack products from interface to production.",
  description:
    "I build real-world web applications across frontend, backend, APIs, databases and cloud environments, with hands-on experience in React, Next.js, FastAPI, PostgreSQL and AWS.",
  location: "Kerala, India",
  email: "arshwin619@gmail.com",
  phone: "+91 7593071195",
  github: "https://github.com/Arshwinsajeevan",
  linkedin: "https://www.linkedin.com/in/arshwin-sajeevan/",
  portfolioUrl: "https://arshwin-sajeevan.vercel.app/",
  resumeUrl: "/resume.pdf",
  techStackSummary: ["React", "Next.js", "FastAPI", "PostgreSQL", "AWS EC2"],
};

export const verifiedMetrics = [
  {
    value: "100+",
    label: "Infrastructure Projects Added",
    detail: "Maintained data pipelines and integration for enterprise infrastructure assets",
  },
  {
    value: "~500ms → ~100ms",
    label: "Measured Loading-Time Improvement",
    detail: "Optimized API query execution and frontend data delivery cycles",
  },
  {
    value: "Full-Stack",
    label: "Frontend + Backend + APIs",
    detail: "Architected end-to-end features connecting React/Next.js to FastAPI & Django",
  },
  {
    value: "Production",
    label: "AWS EC2 Deployment Experience",
    detail: "Configured Linux server environments, Nginx reverse proxies, and PM2 processes",
  },
];

export const professionalWork = [
  {
    id: "infracapitalist",
    slug: "infracapitalist",
    title: "Infracapitalist",
    category: "Infrastructure Intelligence / Web Platform",
    featured: true,
    tagline: "Enterprise infrastructure platform handling real-world project intelligence and performance optimization.",
    description:
      "A real-world infrastructure platform where I worked across frontend, backend integration, project data, deployment and application performance.",
    metrics: [
      { label: "Projects Added", val: "100+" },
      { label: "Observed Loading Time", val: "~500 ms → ~100 ms" },
      { label: "Deployment", val: "AWS EC2 / Linux" },
    ],
    contributions: [
      "Developed and maintained the core web platform.",
      "Added and managed 100+ infrastructure projects.",
      "Engineered frontend interfaces using Next.js.",
      "Built and maintained FastAPI backend services.",
      "Integrated frontend seamlessly with backend REST APIs.",
      "Engineered PostgreSQL-backed data queries and schemas.",
      "Managed AWS EC2 production deployment and maintenance.",
      "Configured Linux server environments, Nginx reverse proxy, and PM2 process manager.",
      "Managed Git-based development and deployment lifecycles.",
      "Optimized API calls and data loading, reducing observed loading time from approximately 500 ms to approximately 100 ms.",
    ],
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "AWS EC2", "Linux", "Nginx", "PM2", "Git"],
    isCompanyProject: true,
    hasDetail: true,
  },
  {
    id: "caaalmly",
    slug: "caaalmly",
    title: "Caaalmly",
    category: "Web Product / Digital Platform",
    featured: false,
    tagline: "In-house web product engineered for speed, clean UX, and high search visibility.",
    description:
      "An in-house web product where I worked primarily on frontend development, SEO, performance optimization and user experience.",
    contributions: [
      "Engineered responsive and accessible UI components with Next.js and React.",
      "Audited and executed technical SEO enhancements for indexing and discovery.",
      "Optimized Core Web Vitals and frontend asset loading for snappy user interactions.",
      "Refined design hierarchy and interaction feedback for user engagement.",
    ],
    technologies: ["Next.js", "React", "SEO", "Performance", "Frontend"],
    isCompanyProject: true,
    hasDetail: true,
  },
  {
    id: "naval-etms",
    slug: "naval-etms",
    title: "Naval Armament Depot ETMS",
    subtitle: "E-Training Management System",
    category: "Defense Enterprise System",
    featured: false,
    tagline: "Secure internal management platform supporting structured training workflows and reporting.",
    description:
      "Contributed to an E-Training Management System supporting training workflows and reporting.",
    contributions: [
      "Contributed to user interface views for tracking training modules and schedules.",
      "Collaborated on data models backed by PostgreSQL for records and reporting.",
      "Maintained data integrity and role-oriented access patterns.",
    ],
    technologies: ["React", "PostgreSQL"],
    isCompanyProject: true,
    hasDetail: false,
  },
  {
    id: "pmc-garden",
    slug: "pmc-garden",
    title: "Pune Municipal Corporation Garden Platform",
    category: "Municipal Services Platform",
    featured: false,
    tagline: "Citizen ticketing platform and administrative operational dashboard.",
    description:
      "Contributed to the garden ticketing platform and admin dashboard for garden management and analytics.",
    contributions: [
      "Contributed to the ticketing frontend workflow for municipal garden visitors.",
      "Assisted in developing dashboard analytics and record management for administrative personnel.",
      "Connected UI views to backend REST endpoints for ticket status verification.",
    ],
    technologies: ["React", "REST APIs", "Analytics"],
    isCompanyProject: true,
    hasDetail: false,
  },
];

export const experienceData = [
  {
    company: "NeoMegaOne LLP",
    role: "Software Development Engineer Intern",
    period: "Apr 2026 – Present",
    type: "Remote",
    summary:
      "Building and maintaining production web applications, optimizing API performance, and managing cloud deployments across infrastructure and municipal systems.",
    highlights: [
      {
        product: "Infracapitalist",
        details:
          "Developed full-stack features with Next.js and FastAPI; configured AWS EC2, Nginx, and PM2; integrated PostgreSQL; added 100+ infrastructure projects; cut observed loading time from ~500 ms to ~100 ms.",
      },
      {
        product: "Caaalmly",
        details:
          "Led frontend development, technical SEO optimizations, and user experience enhancements for an in-house product.",
      },
      {
        product: "Naval Armament Depot ETMS",
        details:
          "Contributed to training workflow modules and PostgreSQL-backed reporting for the E-Training Management System.",
      },
      {
        product: "Pune Municipal Corporation Garden Platform",
        details:
          "Contributed to the garden ticketing platform and administrative analytics dashboard.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "AWS EC2",
      "Linux",
      "Nginx",
      "PM2",
      "Git",
    ],
  },
  {
    company: "VIndia Infrasec Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Feb 2025 – May 2025",
    type: "Bengaluru, India",
    summary:
      "Engineered web applications and internal CRM services using React and Django within an Agile team structure.",
    highlights: [
      {
        product: "Construction Firm Web & CRM Platform",
        details:
          "Developed responsive web applications and CRM modules using React and Django.",
      },
      {
        product: "Backend REST Services",
        details:
          "Designed and consumed REST APIs for backend services.",
      },
      {
        product: "Database & Performance",
        details:
          "Implemented MySQL schemas and optimized queries.",
      },
      {
        product: "Collaboration",
        details:
          "Collaborated within cross-functional engineering teams using Git, code reviews, and Agile sprints.",
      },
    ],
    technologies: ["React", "Django", "Python", "MySQL", "REST APIs", "Git", "Agile"],
  },
];

export const pipelineStages = [
  {
    step: "01",
    name: "Frontend Architecture",
    desc: "Next.js App Router hierarchy, reusable React components, and responsive Tailwind styling.",
    tech: "Next.js / React / Tailwind",
  },
  {
    step: "02",
    name: "Version Control",
    desc: "Feature branching, pull requests, semantic commits, and team collaboration.",
    tech: "Git / GitHub",
  },
  {
    step: "03",
    name: "Backend & APIs",
    desc: "RESTful route handlers, authentication layers, and data validation.",
    tech: "FastAPI / Node.js",
  },
  {
    step: "04",
    name: "Database Layer",
    desc: "Relational data modeling, foreign key integrity, and query planning.",
    tech: "PostgreSQL / MySQL",
  },
  {
    step: "05",
    name: "Cloud Compute",
    desc: "Virtual server provisioning, security groups, and SSH/SCP workflows.",
    tech: "AWS EC2",
  },
  {
    step: "06",
    name: "Web Server & Daemon",
    desc: "Reverse proxying, SSL termination, and process monitoring with auto-restart.",
    tech: "Linux / Nginx / PM2",
  },
  {
    step: "07",
    name: "Performance & SSR",
    desc: "Next.js SSR caching, asset optimization, query tuning, and ~500ms → ~100ms API latency.",
    tech: "Next.js SSR / Optimization",
  },
  {
    step: "08",
    name: "Production Delivery",
    desc: "Accessible, fast, live applications running reliably in production.",
    tech: "Live System",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    desc: "Interfaces, state management, accessibility, and modern web standards",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML5", "CSS3", "Redux", "Vite", "SEO"],
  },
  {
    category: "Backend",
    desc: "Server runtimes, REST API design, service layers, and authentication",
    skills: ["FastAPI", "Node.js", "Express.js", "Python", "Django", "Flask", "REST APIs", "JWT", "Swagger"],
  },
  {
    category: "Databases",
    desc: "Relational schemas, NoSQL documents, cloud databases, and ORMs",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQLite", "Prisma"],
  },
  {
    category: "DevOps / Deployment",
    desc: "Cloud infrastructure, server administration, and continuous deployment",
    skills: ["AWS EC2", "Linux", "Nginx", "PM2", "Vercel", "Render", "SCP"],
  },
  {
    category: "Tools",
    desc: "Developer tooling, API testing, versioning, and environment setup",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "Engineering",
    desc: "Core software engineering disciplines, data pipelines, and machine learning",
    skills: ["Full-Stack Architecture", "API Integration", "Pandas", "TensorFlow", "Performance Optimization"],
  },
];

export const personalProjects = [
  {
    id: "cropcare",
    slug: "cropcare",
    title: "CropCare",
    category: "AI Crop Disease Detection System",
    description:
      "AI-powered, CNN-based web application using Flask APIs, Supabase for data storage, and user authentication.",
    points: [
      "Trained Convolutional Neural Network models to classify plant diseases from leaf imagery.",
      "Engineered Flask REST API endpoints to process client image uploads and return inference results.",
      "Integrated Supabase for secure cloud database persistence and user alert history.",
    ],
    technologies: ["Python", "Flask", "TensorFlow", "CNN", "Supabase"],
    github: "https://github.com/Arshwinsajeevan/CropCare",
    live: "https://cropcare-7v18.onrender.com",
    hasDetail: true,
  },
  {
    id: "mazhacar",
    slug: "mazhacar",
    title: "MazhaCar (മഴക്കാർ)",
    shortTitle: "MazhaCar",
    category: "AI Weather Decision Platform",
    description:
      "AI-powered weather decision platform designed for India, answering practical everyday questions (drying clothes, travel, farming) with multilingual support and offline caching.",
    points: [
      "Engineered decision engines calculating safety indices for travel, farming, outdoor work, and drying clothes.",
      "Implemented multilingual support for Malayalam (Default), English, and Hindi with an instant header toggle.",
      "Built resilient offline caching via localStorage and interactive Leaflet map coordinate tracking.",
    ],
    technologies: ["Next.js", "React", "Leaflet", "REST APIs", "Vercel"],
    github: "https://github.com/Arshwinsajeevan/mazhacar",
    live: "https://mazhacar.vercel.app/",
    hasDetail: true,
  },
  {
    id: "ai-live-chat",
    slug: "ai-live-chat",
    title: "AI Live Chat",
    category: "Intelligent Customer Support",
    description:
      "Customer support application using Node.js and React with LLM integration, Prisma ORM, and session persistence.",
    points: [
      "Built responsive conversation interface in React with real-time message stream handling.",
      "Integrated LLM APIs with custom prompt context for customer support flows.",
      "Implemented Prisma ORM with SQLite for persistent conversation sessions and user audit trails.",
    ],
    technologies: ["Node.js", "TypeScript", "React", "Prisma", "SQLite", "LLM"],
    github: "https://github.com/Arshwinsajeevan/AI-chat.git",
    hasDetail: true,
  },
  {
    id: "rustique",
    slug: "rustique",
    title: "Rustique",
    category: "MERN Antique Marketplace",
    description:
      "Full-stack marketplace with user authentication, admin-verified listings, REST APIs, and MongoDB integration.",
    points: [
      "Architected MERN application with role-based authorization for buyers, sellers, and administrators.",
      "Implemented RESTful endpoints with Express and MongoDB for catalog indexing and verification.",
      "Designed clean UI interactions for item discovery and secure order management.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    github: "https://github.com/Arshwinsajeevan/Rustique",
    hasDetail: true,
  },
  {
    id: "nl-image-studio",
    slug: "nl-image-studio",
    title: "NL Image Studio",
    category: "Browser Natural Language Image Editor",
    description:
      "Fast, client-side AI-powered image editor driven by natural-language commands, real-time BodyPix person segmentation, and Canvas processing.",
    points: [
      "Parsed natural-language commands like 'blur background' or 'replace background with beach' via a rule-based parser.",
      "Utilized TensorFlow.js BodyPix models for real-time person segmentation and background masking.",
      "Executed 100% client-side canvas rendering—ensuring zero API inference cost and total user privacy.",
    ],
    technologies: ["React", "TensorFlow.js", "BodyPix", "Node.js", "Express", "Canvas"],
    github: "https://github.com/Arshwinsajeevan/NL-Image-Editor.git",
    live: "https://nl-image-editor.vercel.app/",
    hasDetail: true,
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Web Data Aggregation & Analytics Platform",
    category: "Scraping & Analytical Pipeline",
    description:
      "Python-based data engineering pipeline extracting, cleaning, storing, and analyzing structured web data using Scrapy, SQLite, and Pandas.",
    points: [
      "Constructed multi-source Scrapy spiders with pagination handling to extract structured web records.",
      "Employed Pandas and Regex for ETL data sanitization, outlier filtering, and structural aggregation.",
      "Generated automated analytical summaries and Matplotlib price distribution reports stored in SQLite.",
    ],
    technologies: ["Python", "Scrapy", "Pandas", "SQLite", "Matplotlib"],
    github: "https://github.com/Arshwinsajeevan/scrapy-data-analytics-platform.git",
    hasDetail: true,
  },
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chinmaya Institute of Technology, Kannur, Kerala",
    period: "2023 – 2025",
    score: "76%",
    details: "Focused on advanced software engineering, distributed databases, web frameworks, and application development.",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Mahatma Gandhi College",
    period: "2019 – 2022",
    score: "72%",
    details: "Strong foundational coursework in computer science principles, data structures, algorithms, and database systems.",
  },
];

export const certificationsData = [
  {
    title: "MERN Full Stack Development",
    issuer: "Luminar Technolab",
    focus: "MongoDB, Express.js, React, Node.js, RESTful API architecture, and full-stack web application development.",
  },
  {
    title: "AI Internship",
    issuer: "Alpha Innovation",
    focus: "Practical exposure to machine learning workflows, model evaluation, and software integration.",
  },
];

export const careerTimeline = [
  {
    year: "Apr 2026 – Present",
    title: "Software Development Engineer Intern",
    org: "NeoMegaOne LLP (Remote)",
    desc: "Working across Infracapitalist, Caaalmly, Naval ETMS, and PMC Garden; Next.js, FastAPI, PostgreSQL, AWS EC2, Linux, Nginx, PM2.",
  },
  {
    year: "Feb 2025 – May 2025",
    title: "Full Stack Developer Intern",
    org: "VIndia Infrasec (Bengaluru)",
    desc: "Built CRM features and REST APIs using React and Django; optimized MySQL queries and collaborated via Agile/Git.",
  },
  {
    year: "2023 – 2025",
    title: "Master of Computer Applications (MCA)",
    org: "Chinmaya Institute of Technology",
    desc: "Graduated with 76%, mastering advanced software architecture, systems, and full-stack engineering.",
  },
  {
    year: "2022 – 2023",
    title: "MERN Full Stack Training",
    org: "Luminar Technolab",
    desc: "Intensive training in MongoDB, Express, React, and Node.js with hands-on project builds.",
  },
  {
    year: "2019 – 2022",
    title: "Bachelor of Computer Science",
    org: "Mahatma Gandhi College",
    desc: "Built solid fundamentals in computer science, core programming, and algorithms (72%).",
  },
];

export const engineeringPrinciples = [
  {
    title: "End-to-End Ownership",
    desc: "From initial interface components down to database queries, server reverse proxies, and production runtime health.",
  },
  {
    title: "Performance by Design",
    desc: "Reducing latency through efficient API query structures, payload trimming, and clean client-side state lifecycles.",
  },
  {
    title: "Pragmatic Architecture",
    desc: "Choosing reliable, maintainable tools (PostgreSQL, FastAPI, Next.js, AWS EC2) over unnecessary complexity.",
  },
  {
    title: "Verified Reliability",
    desc: "Delivering real production outcomes with measurable improvements and clean, auditable Git workflows.",
  },
];

// Deep Case Study content for dedicated project routes (/projects/:id)
export const caseStudies = {
  infracapitalist: {
    title: "Infracapitalist",
    category: "Infrastructure Intelligence / Web Platform",
    tagline: "Enterprise infrastructure platform handling real-world project intelligence and performance optimization.",
    overview:
      "Infracapitalist is an enterprise-grade infrastructure intelligence platform designed to manage and display extensive real-world infrastructure project data. As a Software Development Engineer Intern at NeoMegaOne LLP, I contributed actively across the entire stack—from Next.js frontend interfaces to FastAPI backend services, PostgreSQL database queries, and AWS EC2 production deployment.",
    role: "Full-Stack Development, API Optimization & AWS EC2 Deployment",
    status: "Production Platform",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "AWS EC2", "Linux", "Nginx", "PM2", "Git"],
    metrics: [
      { label: "Projects Added", val: "100+" },
      { label: "Observed Loading Time", val: "~500 ms → ~100 ms" },
      { label: "Server Environment", val: "AWS EC2 (Linux / Nginx / PM2)" },
      { label: "Database", val: "PostgreSQL" },
    ],
    sections: [
      {
        heading: "What I Worked On",
        content: [
          "Developed and maintained the production web platform with Next.js frontend components.",
          "Added and managed 100+ infrastructure projects within the database and interface.",
          "Engineered backend REST API endpoints using FastAPI for reliable data delivery.",
          "Constructed optimized PostgreSQL queries and relational data structures.",
          "Managed production deployments on AWS EC2 running Linux, Nginx reverse proxy, and PM2 process management.",
          "Maintained Git-based deployment workflows with clean version control and environment configuration.",
        ],
      },
      {
        heading: "Engineering Challenges & Performance Optimization",
        content: [
          "Data-Loading Latency: With extensive infrastructure project records, initial loading times suffered under multiple roundtrips.",
          "API Call Optimization: Streamlined endpoint payloads, batched client-side requests, and tuned database query execution.",
          "Measured Impact: Successfully reduced observed loading time from approximately 500 ms to approximately 100 ms, delivering an instant, seamless browsing experience.",
        ],
      },
      {
        heading: "Deployment & Production Setup",
        content: [
          "Configured AWS EC2 virtual machine instances with Ubuntu Linux.",
          "Configured Nginx as a reverse proxy to route web traffic.",
          "Employed PM2 for zero-downtime restarts, environment variable isolation, and daemon health checks.",
        ],
      },
    ],
    disclaimer: "Professional enterprise project. Architecture details presented at an engineering level without exposing sensitive client data.",
  },

  caaalmly: {
    title: "Caaalmly",
    category: "Web Product / Digital Platform",
    tagline: "In-house web product engineered for speed, clean UX, and high search visibility.",
    overview:
      "Caaalmly is an in-house digital web product built to deliver a tranquil, high-performance web experience. During my internship at NeoMegaOne LLP, my primary responsibilities centered around frontend development, technical SEO, and user experience engineering.",
    role: "Frontend Developer, SEO & Performance Specialist",
    status: "Live Product",
    technologies: ["Next.js", "React", "SEO", "Performance Optimization", "Frontend"],
    metrics: [
      { label: "Focus", val: "Frontend & UX" },
      { label: "Optimization", val: "Core Web Vitals & SEO" },
      { label: "Framework", val: "Next.js & React" },
    ],
    sections: [
      {
        heading: "Key Contributions",
        content: [
          "Engineered accessible, responsive frontend components using Next.js and modern React patterns.",
          "Conducted comprehensive technical SEO enhancements including structured data, metadata hygiene, and crawlability improvements.",
          "Optimized asset loading, component rendering cycles, and Cumulative Layout Shift (CLS).",
          "Collaborated closely with design requirements to ensure polished typography, micro-interactions, and visual harmony.",
        ],
      },
    ],
  },

  cropcare: {
    title: "CropCare",
    category: "AI Crop Disease Detection System",
    tagline: "Deep learning web application diagnosing plant diseases from leaf imagery in real time.",
    overview:
      "CropCare is an end-to-end full-stack web application designed to help agricultural workers and researchers rapidly identify plant diseases. Users upload or capture photos of infected plant leaves, and a Convolutional Neural Network (CNN) analyzes the imagery and returns disease diagnoses alongside treatment suggestions.",
    role: "Full-Stack & Machine Learning Developer",
    status: "Completed & Deployed",
    technologies: ["Python", "Flask", "TensorFlow", "CNN", "Supabase", "JavaScript"],
    github: "https://github.com/Arshwinsajeevan/CropCare",
    live: "https://cropcare-7v18.onrender.com",
    metrics: [
      { label: "Model Architecture", val: "CNN (Convolutional Neural Network)" },
      { label: "Backend API", val: "Python / Flask" },
      { label: "Cloud Database", val: "Supabase" },
    ],
    sections: [
      {
        heading: "Architecture & Implementation",
        content: [
          "Trained a multi-class CNN image classification model on plant leaf disease datasets.",
          "Built a Flask backend providing RESTful endpoints for image ingestion, preprocessing, and model inference.",
          "Integrated Supabase for secure cloud database persistence, logging user detection histories and alert notices.",
          "Created a responsive web interface allowing image drag-and-drop, camera uploads, and immediate visual feedback.",
        ],
      },
      {
        heading: "What I Learned",
        content: [
          "Handling image preprocessing pipelines (resizing, normalization, tensor conversion) in production Flask services.",
          "Architecting full-stack integrations between custom Python ML backends and managed cloud databases.",
        ],
      },
    ],
  },

  rustique: {
    title: "Rustique",
    category: "MERN Antique Marketplace",
    tagline: "Full-stack marketplace platform connecting vintage collectors with verified antique listings.",
    overview:
      "Rustique is a comprehensive full-stack marketplace application built with the MERN stack (MongoDB, Express, React, Node.js). It provides end-to-end capabilities for buyers to explore curated vintage goods and for sellers to submit listings subject to administrative authenticity verification.",
    role: "Full-Stack MERN Developer",
    status: "Completed Project",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT"],
    github: "https://github.com/Arshwinsajeevan/Rustique",
    metrics: [
      { label: "Stack", val: "MongoDB + Express + React + Node.js" },
      { label: "Security", val: "JWT Authentication & Role Control" },
      { label: "Architecture", val: "RESTful Backend with MongoDB" },
    ],
    sections: [
      {
        heading: "Core Features & Architecture",
        content: [
          "Engineered RESTful API server with Express.js handling item indexing, order transactions, and user sessions.",
          "Implemented JWT authentication and role-based permissions separating regular users from administrative reviewers.",
          "Built an administrative verification dashboard to inspect and approve antique listings prior to public visibility.",
          "Designed dynamic React frontend views with search filters, category sorting, and interactive shopping interactions.",
        ],
      },
    ],
  },

  "ai-live-chat": {
    title: "AI Live Chat",
    category: "Intelligent Customer Support",
    tagline: "Full-stack customer support agent combining LLM reasoning with Prisma and SQLite persistence.",
    overview:
      "AI Live Chat is an intelligent real-time conversational support platform built using Node.js, TypeScript, and React. It harnesses Large Language Model (LLM) APIs to provide instant context-aware assistance to customers while preserving full conversation threads via Prisma ORM and SQLite.",
    role: "Full-Stack Developer",
    status: "Completed Project",
    technologies: ["Node.js", "TypeScript", "React", "Prisma", "SQLite", "LLM APIs"],
    github: "https://github.com/Arshwinsajeevan/AI-chat.git",
    metrics: [
      { label: "Language", val: "TypeScript & Node.js" },
      { label: "Database ORM", val: "Prisma with SQLite" },
      { label: "AI Integration", val: "LLM Session Context" },
    ],
    sections: [
      {
        heading: "System Architecture",
        content: [
          "Developed conversational UI in React with live message streaming and typing state indicators.",
          "Engineered Node.js/TypeScript backend services managing conversation context windows and LLM prompt templates.",
          "Structured relational schemas with Prisma ORM and SQLite for reliable session recovery and message history auditing.",
        ],
      },
    ],
  },

  mazhacar: {
    title: "MazhaCar (മഴക്കാർ)",
    category: "AI Weather Decision Platform",
    tagline: "AI-powered weather decision platform designed for India, answering practical everyday questions in Malayalam, English, and Hindi.",
    overview:
      "MazhaCar is an AI-powered weather decision platform designed for India, with Malayalam as the default language. Instead of just showing raw temperature values, it calculates complex meteorological variables to answer practical everyday questions: Can I dry clothes today? Should I carry an umbrella? Is it safe to travel? Is it suitable for farming?",
    role: "Creator & Full-Stack Developer",
    status: "Live Production Platform",
    technologies: ["Next.js", "React", "Leaflet", "REST APIs", "Vercel", "localStorage"],
    github: "https://github.com/Arshwinsajeevan/mazhacar",
    live: "https://mazhacar.vercel.app/",
    metrics: [
      { label: "Default Language", val: "Malayalam (മല)" },
      { label: "Other Languages", val: "English (EN) & Hindi (हिं)" },
      { label: "Decision Engine", val: "Multi-factor Safety Scores" },
      { label: "Offline Storage", val: "localStorage Resilient Cache" },
    ],
    sections: [
      {
        heading: "Decision Engines & Practical Intelligence",
        content: [
          "Practical Decision Engines: Computes safety percentages for drying clothes, travel, farming, and outdoors rather than generic metrics.",
          "Multilingual Support: Supports Malayalam (മല), English (EN), and Hindi (हिं) with an instant language toggle right in the mobile header.",
          "Resilient Offline Cache: Automatically stores weather data in localStorage so the application continues to work even during intermittent connectivity.",
          "Interactive Leaflet Map: Centers on active coordinates, marks bookmarked cities, and updates location coordinates when interacting with the map.",
        ],
      },
      {
        heading: "Architecture & Deployment",
        content: [
          "Architected using Next.js with modular component architecture and responsive mobile-first views.",
          "Deployed to Vercel with dedicated root directory configuration for rapid continuous deployment.",
          "Integrated meteorological REST API endpoints with client-side caching to reduce redundant network calls.",
        ],
      },
    ],
  },

  "nl-image-studio": {
    title: "NL Image Studio",
    category: "Browser Natural Language Image Editor",
    tagline: "Fast, client-side AI-powered image editor built with React, Node/Express, and BodyPix.",
    overview:
      "NL Image Studio is a lightweight AI-powered image editor that works entirely in the browser. Users can upload a photo, select visual effects, or type natural-language instructions like 'Blur background', 'Cartoonify the image', or 'Replace background with beach'. All intensive processing happens directly in the browser using TensorFlow.js BodyPix person segmentation—with zero paid APIs, zero server load, and total client-side privacy.",
    role: "Full-Stack Developer & Creator",
    status: "Live Deployed Platform",
    technologies: ["React", "Vite", "Canvas API", "BodyPix", "TensorFlow.js", "Node.js", "Express", "Vercel", "Render"],
    github: "https://github.com/Arshwinsajeevan/NL-Image-Editor.git",
    live: "https://nl-image-editor.vercel.app/",
    metrics: [
      { label: "Client Processing", val: "100% In-Browser (Zero API Cost)" },
      { label: "AI Segmentation", val: "TensorFlow.js BodyPix" },
      { label: "Frontend", val: "React (Vite) on Vercel" },
      { label: "Backend", val: "Node.js + Express on Render" },
    ],
    sections: [
      {
        heading: "Features & Client-Side Image Processing",
        content: [
          "Background Replacement: Seamlessly swaps backgrounds (Beach, Studio, Nature, Retro) served via a lightweight Node/Express backend.",
          "Portrait Background Blur: Real-time depth-of-field effect isolating the human subject using BodyPix segmentation masks.",
          "Color Pop Effect: Keeps the segmented subject in full vibrant color while converting the background to black and white.",
          "Cartoonify & Visual Filters: Non-destructive HTML5 Canvas manipulation including edge detection, posterization, and lighting enhancement.",
          "Natural-Language Command Box: Parses natural-language prompts like 'replace background with beach' or 'blur background 10' with a rule-based parser.",
          "Three-View Preview & Privacy: Instant toggle between Original, Black & White, and Edited views—user images never leave their device.",
        ],
      },
      {
        heading: "System Architecture & Performance",
        content: [
          "Architecture Flow: React UI → Natural-Language Command Parser → Effect Pipeline → HTML5 Canvas Rendering.",
          "Minimal Backend: Node.js and Express backend hosted on Render solely serves preset background assets and image URLs.",
          "Zero Inference Cost: All computational workloads (segmentation, blurring, masking, compositing) execute purely on the client side.",
        ],
      },
    ],
  },

  "data-analytics": {
    title: "Web Data Aggregation & Analytics Platform",
    category: "Scraping & Analytical Pipeline",
    tagline: "Python-based data engineering pipeline extracting, cleaning, storing, and analyzing structured web data using Scrapy, SQLite, and Pandas.",
    overview:
      "A Python-based data engineering platform that extracts, stores, cleans, and analyzes structured web data from multiple public sources. Built using Scrapy, SQLite, and Pandas, this project demonstrates a complete data engineering workflow including multi-source web crawling, automated ETL processing, relational database storage, and analytical report generation.",
    role: "Data Engineering & Python Developer",
    status: "Completed Project",
    technologies: ["Python", "Scrapy", "Pandas", "SQLite", "Matplotlib", "Regex", "Git"],
    github: "https://github.com/Arshwinsajeevan/scrapy-data-analytics-platform.git",
    metrics: [
      { label: "Web Crawling", val: "Scrapy Multi-Source Spiders" },
      { label: "ETL & Cleaning", val: "Pandas & Regular Expressions" },
      { label: "Database", val: "SQLite Relational Storage" },
      { label: "Reporting", val: "Automated CSV & Matplotlib Charts" },
    ],
    sections: [
      {
        heading: "Data Pipeline & ETL Workflow",
        content: [
          "Multi-Source Web Scraping: Built resilient Scrapy spiders with pagination handling to systematically extract structured web records.",
          "Automated ETL Processing: Cleansed, transformed, and validated raw data using Pandas and Regex to ensure schema consistency.",
          "Relational Database Storage: Persisted processed datasets into indexed SQLite tables for efficient querying and downstream retrieval.",
        ],
      },
      {
        heading: "Analytics & Automated Reporting",
        content: [
          "Generated statistical summaries: average book prices, rating distributions, top quoted authors, most frequent tags, and text length analysis.",
          "Rendered analytical charts and price distribution histograms using Matplotlib, outputting automated CSV and visual reports.",
          "Enterprise Alignment: Demonstrates real-world data workflow capabilities aligned with data engineering, aggregation, cleaning, and reporting.",
        ],
      },
    ],
  },
};
