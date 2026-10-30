import heroScene from "@/assets/scenes/hero-panda.jpg";
import villageScene from "@/assets/scenes/village.jpg";
import trainingScene from "@/assets/scenes/training.jpg";
import fiveScene from "@/assets/scenes/five.jpg";
import archiveScene from "@/assets/scenes/archive.jpg";
import gongmenScene from "@/assets/scenes/gongmen.jpg";
import pandaVillageScene from "@/assets/scenes/panda-village.jpg";
import spiritScene from "@/assets/scenes/spirit.jpg";
import peachScene from "@/assets/scenes/peach.jpg";
import ascentScene from "@/assets/scenes/ascent.jpg";
import lanternScene from "@/assets/scenes/lantern.jpg";
import valleyVideo from "@/assets/scenes/valley-hero.mp4.asset.json";
import lanternVideo from "@/assets/scenes/lantern-festival.mp4.asset.json";

export const identity = {
  fullName: "Chetan Rangari",
  handle: "CHETAN0E",
  role: "AI & ML ENGINEER / FULL-STACK DEVELOPER",
  email: "chetanrangari0e52@gmail.com",
  phone: "+91 9322134721",
  github: "https://github.com/Chetan0e",
  linkedin: "https://linkedin.com/in/chetan-rangari-97342832b",
  portfolio: "https://www.chetan0e.space/",
  resume: "/resume-chetan-rangari.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroCopy = {
  heading1: "EVERY LEGEND",
  heading2: "STARTS",
  heading3: "SOMEWHERE.",
  supporting:
    "I'm Chetan Rangari — a full-stack and AI engineer building intelligent applications, useful software products, and ambitious ideas into reality.",
  primaryCta: "EXPLORE MY JOURNEY",
  secondaryCta: "DISCOVER MY WORK",
};

export const aboutCopy = {
  chapter: "CHAPTER 01 — THE BEGINNING",
  heading: "CURIOSITY WAS THE BEGINNING.",
  bio: [
    "I'm Chetan Rangari, a Computer Science Engineering student at D. Y. Patil College of Engineering and Technology, Kolhapur.",
    "I build full-stack applications, AI-powered platforms, and automation tools, working across frontend development, backend architecture, machine-learning integrations, and deployment.",
    "I enjoy learning new technologies quickly and turning complex ideas into useful software.",
  ],
  facts: [
    { label: "B.Tech", value: "Computer Science Engineering" },
    { label: "Institution", value: "D. Y. Patil College of Engineering and Technology, Kolhapur" },
    { label: "SGPA", value: "9.00" },
    { label: "Expected graduation", value: "2028" },
  ],
};

export const trainingCopy = {
  chapter: "CHAPTER 02 — THE TRAINING",
  heading: "MASTERY COMES THROUGH PRACTICE.",
  supporting:
    "Every tool is a skill to learn. Every difficult problem is another opportunity to improve.",
};

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React.js", "Next.js", "Flutter", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "Flask", "REST APIs", "System Design", "Authentication"],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["MongoDB", "Firebase", "Firestore", "MySQL"],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    skills: ["Machine Learning", "LLMs", "Prompt Engineering", "RAG", "AI Agents", "Vector Databases", "ChromaDB", "FAISS"],
  },
  {
    id: "tools",
    label: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Railway", "Linux", "Ollama", "n8n", "OpenRouter", "Cloud Deployment"],
  },
];

export const disciplines = [
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    detail: "React.js, Next.js, FastAPI, Node.js — building complete products across the stack, from UI to deployment.",
    projects: ["INTRA AI", "MUSAFIR"],
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    detail: "LLMs, RAG pipelines, AI agents, vector databases — practical intelligence woven into real applications.",
    projects: ["INTRA AI", "BLOOM AI", "VERATH"],
  },
  {
    id: "backend",
    title: "Backend & System Design",
    detail: "REST APIs, authentication, system design, MongoDB and Firebase architecture that holds under real use.",
    projects: ["INTRA AI", "MUSAFIR", "VERATH"],
  },
  {
    id: "product",
    title: "Product Development",
    detail: "From problem to shipped product — Flutter cross-platform apps, production deployments, real users.",
    projects: ["ORBIT", "MUSAFIR"],
  },
  {
    id: "research",
    title: "Experimentation & Research",
    detail: "Prompt engineering, Whisper transcription, semantic retrieval — testing what's possible, then making it useful.",
    projects: ["VERATH", "BLOOM AI"],
  },
];

export const disciplinesCopy = {
  heading: "DIFFERENT PATHS. SHARED PURPOSE.",
  supporting:
    "Five disciplines, one practice — the way engineering work comes together on real projects.",
};

export interface Project {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "intra-ai",
    index: "01",
    name: "INTRA AI",
    tagline: "Adaptive Workforce Intelligence Engine",
    description:
      "An AI-powered platform that analyzes resumes and job descriptions to generate personalized, explainable upskilling roadmaps.",
    features: [
      "Skill-DNA profiling",
      "Graph-based dependency mapping",
      "Adaptive recommendations",
      "Docker-based containerization",
      "Production deployment",
    ],
    technologies: ["FastAPI", "Python", "Next.js", "Tailwind CSS", "Docker", "Machine Learning"],
    liveUrl: "https://intra-ai.vercel.app/",
    accent: "gold",
  },
  {
    id: "musafir",
    index: "02",
    name: "MUSAFIR",
    tagline: "AI Travel Planning Platform",
    description:
      "A full-stack AI travel platform using a conversational travel assistant and AI place scanner.",
    features: [
      "Conversational travel assistance",
      "AI place scanning",
      "JWT authentication",
      "REST APIs",
      "MongoDB backend",
      "Interactive maps",
      "PDF itinerary export",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://musafir-azure.vercel.app/",
    accent: "bamboo",
  },
  {
    id: "orbit",
    index: "03",
    name: "ORBIT",
    tagline: "Private Study Accountability Platform",
    description:
      "A cross-platform application supporting two-person study accountability through real-time presence synchronization and shared goals.",
    features: [
      "Real-time presence synchronization",
      "Shared goal tracking",
      "Productivity analytics",
      "Smart notifications",
      "Riverpod state management",
      "Firebase data streams",
    ],
    technologies: ["Flutter", "Firebase", "Riverpod"],
    repoUrl: "https://github.com/Chetan0e/Orbit",
    accent: "jade",
  },
  {
    id: "bloom-ai",
    index: "04",
    name: "BLOOM AI",
    tagline: "Interactive AI Learning Platform",
    description:
      "An AI-powered educational platform offering gamified and adaptive learning for AI/ML concepts.",
    features: [
      "Adaptive quizzes",
      "Difficulty adjustment based on learner performance",
      "AI mentor assistance",
      "Contextual guidance",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    accent: "crimson",
  },
  {
    id: "verath",
    index: "05",
    name: "VERATH",
    tagline: "AI-Powered Personal Memory System",
    description:
      "An open-source AI memory system that captures, transcribes, and semantically retrieves personal data.",
    features: [
      "Whisper-based audio transcription",
      "Semantic retrieval using ChromaDB",
      "FastAPI backend",
      "MongoDB integration",
      "Open-source contribution management",
    ],
    technologies: ["FastAPI", "MongoDB", "ChromaDB", "Whisper"],
    repoUrl: "https://github.com/Chetan0e/Verath",
    accent: "amber",
  },
];

export const archiveCopy = {
  chapter: "CHAPTER 03 — THE DRAGON SCROLLS",
  heading: "IDEAS TURNED INTO REALITY.",
  supporting:
    "Every project starts with a problem worth solving. These are some of the ideas I've brought to life.",
  unseal: "UNSEAL THE SCROLL",
};

export const challenges = [
  {
    id: "roadmaps",
    problem:
      "Learners drown in generic course lists. Resumes and job descriptions speak different languages, and nobody maps the path between them.",
    approach:
      "INTRA AI profiles a learner's 'Skill-DNA', builds a graph of skill dependencies against job descriptions, and generates explainable, adaptive upskilling roadmaps.",
    outcome: "Shipped with FastAPI, Next.js and Docker — live in production.",
    link: "https://intra-ai.vercel.app/",
    linkLabel: "INTRA AI",
  },
  {
    id: "memory",
    problem:
      "Personal knowledge scattered across voice notes and documents is unsearchable at the moment it matters most.",
    approach:
      "Verath captures audio, transcribes it with Whisper, and embeds it into ChromaDB for semantic retrieval through a FastAPI backend.",
    outcome: "Open source, maintained as a GirlScript Summer of Code project.",
    link: "https://github.com/Chetan0e/Verath",
    linkLabel: "VERATH",
  },
  {
    id: "sync",
    problem:
      "Study accountability falls apart without shared presence — two people in two places, tracking progress in two systems.",
    approach:
      "Orbit synchronizes presence in real time through Firebase data streams, with shared goals and Riverpod state management across platforms.",
    outcome: "Cross-platform Flutter app with real-time sync and analytics.",
    link: "https://github.com/Chetan0e/Orbit",
    linkLabel: "ORBIT",
  },
];

export const challengesCopy = {
  heading: "EVERY CHALLENGE HAS A WAY THROUGH.",
  supporting:
    "Engineering problems rarely announce their answers. Here is how real projects moved from problem to outcome.",
};

export const growthCopy = {
  heading: "GROWTH BEGINS WHEN YOU KEEP EXPLORING.",
  supporting:
    "From student to builder to mentor — each project and community role compounds into the next capability. Teaching open-source contributors, leading a coding community, and shipping AI platforms are all part of one continuous practice.",
};

export const wisdomCopy = {
  heading: "INNER PEACE. OUTER INNOVATION.",
  supporting:
    "I believe the best engineering begins with curiosity, grows through experimentation, and becomes meaningful when it solves real problems.",
  principles: [
    {
      title: "Stay Curious",
      detail: "Explore technologies, ask difficult questions, and continue learning.",
    },
    {
      title: "Build With Purpose",
      detail: "Create practical software that solves real problems.",
    },
    {
      title: "Improve Through Practice",
      detail: "Use experimentation, feedback, and iteration to develop better solutions.",
    },
  ],
};

export const ascentCopy = {
  chapter: "CHAPTER 04 — THE JOURNEY",
  heading: "GROWTH IS BUILT ONE STEP AT A TIME.",
};

export const experience = [
  {
    role: "Secretary, Coding Club",
    org: "DYPCET",
    period: "2025–2026",
    points: [
      "Promoted to Secretary within two months of joining based on leadership and execution performance.",
      "Leads a technical community of more than 300 members.",
      "Plans coding challenges, hackathons, and technical events.",
      "Develops project-based learning initiatives.",
    ],
  },
  {
    role: "Tech Team Member",
    org: "Microsoft Learn Student Ambassadors",
    period: "2025–2026",
    points: [
      "Supports technical initiatives and events.",
      "Contributes to student-facing developer programs and outreach.",
    ],
  },
  {
    role: "Project Admin — Verath",
    org: "GirlScript Summer of Code",
    period: "Present",
    points: [
      "Manages open-source contributions.",
      "Reviews issues and pull requests.",
      "Maintains contributor workflow quality.",
      "Supports code quality in an active open-source codebase.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "D. Y. Patil College of Engineering and Technology, Kolhapur",
  sgpa: "9.00",
  graduation: "Expected 2028",
};

export const certification = {
  name: "Google Cloud Gen AI Academy 2.0",
  focus: "Generative AI, LLMs, AI/ML",
};

export const opensourceRoles = ["Mentor", "Project Admin", "Contributor", "Ambassador"];

export const contactCopy = {
  heading: "EVERY GREAT JOURNEY STARTS WITH A CONVERSATION.",
  supporting:
    "Have an interesting problem, an ambitious idea, or a project worth building? Let's create something meaningful together.",
  cta: "LET'S BUILD SOMETHING",
};

export { heroScene, villageScene, trainingScene, fiveScene, archiveScene, gongmenScene, pandaVillageScene, spiritScene, peachScene, ascentScene, lanternScene, valleyVideo, lanternVideo };
