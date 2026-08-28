export const personalInfo = {
  name: "Alex Morgan",
  firstName: "Alex",
  title: "Senior Full Stack Developer",
  subtitle: "Cloud Architect & Distributed Systems Specialist",
  tagline: "Full Stack • Cloud Architecture",
  location: "San Francisco, CA (Open to Remote)",
  email: "alex.morgan@example.com",
  linkedin: "https://linkedin.com/in/alexmorgan-demo",
  github: "https://github.com/alexmorgan-demo",
  summary: "Senior Full Stack Developer & Cloud Architect with 5+ years of experience designing and shipping high-performance web applications, microservices, and distributed cloud systems. Proven track record across React, Node.js, Python, and AWS with an emphasis on resilient architecture, micro-frontends, and intuitive user experiences.",
  detailedBio: "Passionate about engineering scalable, performant systems that solve real-world problems. Experienced across full-cycle software development, from intuitive frontend interfaces to robust distributed backends and automated cloud infrastructure.",
  educationFocus: "B.S. in Computer Science — UC Berkeley",
  careerGoal: "Senior Full Stack Engineer / Solutions Architect",
  focusAreas: "Full Stack Development · Cloud Architecture · Distributed Systems",
  activeStatus: "AWS Certified Solutions Architect & Engineering Consultant",
  stats: [
    { value: "15+", label: "Projects" },
    { value: "5+ Yrs", label: "Experience" },
    { value: "8+", label: "Certs" }
  ],
  aboutStats: [
    { value: "B.S. CS", label: "Degree" },
    { value: "Distributed Systems", label: "Specialization" },
    { value: "5+ Years", label: "Experience" },
    { value: "San Francisco, CA", label: "Location" }
  ]
};

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
  Cloud_DevOps: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  Tools: ["Git", "GitHub", "Vite", "Postman", "Jest", "Linux"],
  Core: ["System Design", "Microservices", "Clean Architecture", "Scalability", "Security"]
};

export const allProjects = [
  {
    id: "01",
    title: "PulseSync",
    subtitle: "Real-Time Distributed Collaboration Workspace",
    description: "Enterprise collaboration platform supporting real-time multiplayer document editing, live audio rooms, and end-to-end encrypted messaging across distributed nodes.",
    capabilities: [
      "Real-time CRDT synchronization",
      "End-to-end WebSocket architecture",
      "Role-based workspace access control",
      "Offline-first local caching"
    ],
    technology: ["React.js", "TypeScript", "Node.js", "WebSockets", "Redis", "Docker"]
  },
  {
    id: "02",
    title: "CloudSentinel",
    subtitle: "Automated Cloud Security & Compliance Scanner",
    description: "Cloud-native security intelligence platform that continuously analyzes infrastructure-as-code, scans cloud configurations for vulnerabilities, and auto-generates remediation PRs.",
    capabilities: [
      "Automated CVE & IaC vulnerability scanning",
      "Multi-cloud telemetry ingestion",
      "Compliance scoring engine (SOC2, HIPAA)",
      "Automated remediation workflows"
    ],
    technology: ["Python", "FastAPI", "React.js", "AWS", "Terraform", "PostgreSQL"]
  },
  {
    id: "03",
    title: "OmniCommerce",
    subtitle: "Headless E-Commerce Microservices Engine",
    description: "Modular e-commerce backend and modern storefront capable of handling 50k+ req/sec with instant global inventory sync, multi-currency processing, and dynamic checkout flows.",
    capabilities: [
      "Microservice architecture with event bus",
      "Real-time inventory decrement",
      "Stripe global payments integration",
      "Edge-cached product catalog"
    ],
    technology: ["Next.js", "Go", "PostgreSQL", "Redis", "GraphQL", "Docker"]
  },
  {
    id: "04",
    title: "NexusAI",
    subtitle: "Intelligent Document Analysis & Workflow Hub",
    description: "Generative AI workspace that parses enterprise documents, extracts semantic insights, and automates multi-step business workflows using vector retrieval and custom LLM agents.",
    capabilities: [
      "Semantic document vector indexing",
      "Autonomous agent task execution",
      "Custom conversational workflow builder",
      "Interactive data visualizations"
    ],
    technology: ["TypeScript", "Python", "React.js", "FastAPI", "Vector DB", "Docker"]
  },
  {
    id: "05",
    title: "DevMetrics",
    subtitle: "Developer Productivity & CI/CD Telemetry Suite",
    description: "Observability dashboard aggregating metrics across GitHub, Kubernetes, and cloud pipelines to surface deployment frequency, MTTR, and code health benchmarks.",
    capabilities: [
      "DORA metrics aggregation",
      "Real-time pipeline monitoring",
      "Interactive alerting thresholds",
      "Custom team telemetry dashboards"
    ],
    technology: ["React.js", "Node.js", "PostgreSQL", "Prometheus", "Grafana", "Tailwind CSS"]
  },
  {
    id: "06",
    title: "TaskFlow",
    subtitle: "Collaborative Agile Project Management Suite",
    description: "Full-featured task and sprint management portal featuring customizable kanban boards, automated burndown charts, and instant activity feeds for engineering teams.",
    capabilities: [
      "Drag-and-drop kanban boards",
      "Sprint planning & burndown analytics",
      "Granular permission matrix",
      "Webhook & third-party integrations"
    ],
    technology: ["React.js", "TypeScript", "Supabase", "Tailwind CSS", "Zustand"]
  }
];

export const education = [
  {
    degree: "B.S. in Computer Science",
    institution: "University of California, Berkeley",
    period: "2019–2023",
    score: "Honors Graduate"
  },
  {
    degree: "Software Engineering & Cloud Systems",
    institution: "Tech Academy of Engineering",
    period: "2018–2019",
    score: "Distinction"
  }
];

export const certifications = [
  "AWS Certified Solutions Architect – Professional",
  "Certified Kubernetes Administrator (CKA)",
  "Meta Senior Front-End Developer Specialization",
  "HashiCorp Certified: Terraform Associate",
  "Google Cloud Certified Associate Cloud Engineer",
  "MongoDB Certified Developer Associate",
  "Docker Certified Associate (DCA)",
  "Oracle Certified Professional: Java SE Developer"
];

export const softSkills = [
  "Technical Leadership",
  "System Architecture",
  "Agile & Scrum Delivery",
  "Cross-functional Collaboration",
  "Performance Optimization",
  "Mentorship & Code Review"
];
