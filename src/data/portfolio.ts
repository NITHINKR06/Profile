export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Skill {
  category: string;
  items: {
    name: string;
    logo: string; // can be emoji or /public/logo-original.svg path
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  location: string;
  technologies?: string[];
  achievements?: string[];
  projects?: string[];
  responsibilities?: string[];
  skills?: string[];
  tools?: string[];
  certifications?: string[];
  awards?: string[];
  languages?: string[];
}

export const portfolioData = {
  personal: {
    name: "Nithin K R",
    title: "Full Stack Developer | Cyber Security",
    email: "nithinpoojari717@gmail.com",
    github: "https://github.com/NITHINKR06",
    linkedin: "https://linkedin.com/in/nithinkr06",
    location: "Karnataka, IN",
    bio: "Passionate Full Stack Developer with expertise in modern web technologies and a focus on creating scalable, user-centric applications."
  },
  
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", logo: "/logos/react-original.svg" },
        { name: "Next.js", logo: "/logos/nextjs-original.svg" },
        { name: "TypeScript", logo: "/logos/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "/logos/tailwindcss-original.svg" },
        { name: "GSAP", logo: "/logos/gsap.svg" },
        { name: "Three.js", logo: "/logos/threejs-original.svg" },
        { name: "Vite", logo: "/logos/vite-original.svg" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "/logos/nodejs-original.svg" },
        { name: "Python", logo: "/logos/python-original.svg" },
        { name: "PostgreSQL", logo: "/logos/postgresql-original.svg" },
        { name: "MongoDB", logo: "/logos/mongodb-original.svg" },
        { name: "GraphQL", logo: "/logos/graphql-plain.svg" },
        { name: "Networking", logo: "/logos/networking-original.svg" }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", logo: "/logos/docker-original.svg" },
        { name: "AWS", logo: "/logos/aws-original.svg" },
        { name: "Vercel", logo: "/logos/vercel-original.svg" },
        { name: "GitHub Actions", logo: "/logos/githubactions-original.svg" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", logo: "/logos/git-original.svg" },
        { name: "GitHub", logo: "/logos/github-original.svg" },
        { name: "VSCode", logo: "/logos/vscode-original.svg" },
        { name: "Figma", logo: "/logos/figma-original.svg" },
        { name: "Canva", logo: "/logos/canva-original.svg" },
        { name: "Notion", logo: "/logos/notion-original.svg" },
        { name: "Postman", logo: "/logos/postman.svg" },
        { name: "Firebase", logo: "/logos/firebase-original.svg" }
      ]
    }
  ] as Skill[],


  projects: [
    {
      id: "emp",
      title: "Employment Website",
      description: "A comprehensive React application focused on user authentication, booking management, calendar integration, and interactive UI components.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/NITHINKR06/emp",
      liveUrl: "https://your-deployment-link.com",
      status: "completed"
    }
  ] as Project[],

  education: [
    {
      institution: "NMAM Institute of Technology Nitte",
      degree: "Computer Science(Cyber Security)",
      period: "2024-present",
      description: "Pursuing Master's in Cyber Security with a focus on Ethical Hacking and Network Security"
    },
    {
      institution: "SDM Institute of Technology Ujire",
      degree: "Computer Science and Engineering(Full Stack)",
      period: "2021-2024",
      description: "Specialized in Full Stack Development with a focus on modern web technologies"
    },
    {
      institution: "S.Manasa High School, Aldur",
      degree: "High School",
      period: "2021"
    }
  ] as Education[],

  experience: [
    {
      company: "Code lab systems Mangalore",
      position: "Full Stack Developer Intern",
      period: "2024",
      location: "Mangalore, IN",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented real-time features using WebSockets and Redis",
        "Mentored 3 junior developers and conducted code reviews",
        "Reduced application load time by 40% through optimization"
      ],
      technologies: ["Node.js", "React", "Redis", "PostgreSQL"],
      achievements: ["Optimized performance by 40%", "Improved developer onboarding"],
      responsibilities: ["Architecture design", "Feature development", "Code reviews"]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2022-2023", 
      description: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment systems",
        "Participated in agile development and sprint planning"
      ]
    }
  ] as Experience[]
};

export const terminalCommands = {
  help: {
    description: "Show available commands",
    usage: "help"
  },
  about: {
    description: "Display personal information",
    usage: "about"
  },
  skills: {
    description: "List technical skills",
    usage: "skills [category]"
  },
  projects: {
    description: "Show project portfolio",
    usage: "projects [project-id]"
  },
  education: {
    description: "Display education background",
    usage: "education"
  },
  experience: {
    description: "Show work experience",
    usage: "experience"
  },
  contact: {
    description: "Get contact information",
    usage: "contact"
  },
  clear: {
    description: "Clear terminal screen",
    usage: "clear"
  },
  whoami: {
    description: "Display current user",
    usage: "whoami"
  },
  ls: {
    description: "List available sections",
    usage: "ls"
  },
  cat: {
    description: "Display file contents",
    usage: "cat [filename]"
  },
  pwd: {
    description: "Print working directory",
    usage: "pwd"
  },
  social: {
    description: "Show social links (GitHub, LinkedIn)",
    usage: "social"
  }

};