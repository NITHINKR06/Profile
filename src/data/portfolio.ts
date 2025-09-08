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
  items: { name: string; logo: string; link: string }[]; // 👈 updated
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
        { name: "React", logo: "/logos/react-original.svg", link: "https://react.dev/" },
        { name: "Next.js", logo: "/logos/nextjs-original.svg", link: "https://nextjs.org/" },
        { name: "TypeScript", logo: "/logos/typescript-original.svg", link: "https://www.typescriptlang.org/" },
        { name: "Tailwind CSS", logo: "/logos/tailwindcss-original.svg", link: "https://tailwindcss.com/" },
        { name: "GSAP", logo: "/logos/gsap.svg", link: "https://gsap.com/" },
        { name: "Three.js", logo: "/logos/threejs-original.svg", link: "https://threejs.org/" },
        { name: "Vite", logo: "/logos/vite-original.svg", link: "https://vitejs.dev/" }
      ]
    },
    {
      category: "Backend", 
      items: [
        { name: "Node.js", logo: "/logos/nodejs-original.svg", link: "https://nodejs.org/" },
        { name: "Python", logo: "/logos/python-original.svg", link: "https://www.python.org/" },
        { name: "PostgreSQL", logo: "/logos/postgresql-original.svg", link: "https://www.postgresql.org/" },
        { name: "MongoDB", logo: "/logos/mongodb-original.svg", link: "https://www.mongodb.com/" },
        { name: "GraphQL", logo: "/logos/graphql-plain.svg", link: "https://graphql.org/" },
        { name: "Networking", logo: "/logos/networking-original.svg", link: "https://en.wikipedia.org/wiki/Computer_network" }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", logo: "/logos/docker-original.svg", link: "https://www.docker.com/" },
        { name: "AWS", logo: "/logos/aws-original.svg", link: "https://aws.amazon.com/" },
        { name: "Vercel", logo: "/logos/vercel-original.svg", link: "https://vercel.com/" },
        { name: "GitHub Actions", logo: "/logos/githubactions-original.svg", link: "https://github.com/features/actions" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", logo: "/logos/git-original.svg", link: "https://git-scm.com/" },
        { name: "GitHub", logo: "/logos/github-original.svg", link: "https://github.com/" },
        { name: "VSCode", logo: "/logos/vscode-original.svg", link: "https://code.visualstudio.com/" },
        { name: "Figma", logo: "/logos/figma-original.svg", link: "https://figma.com/" },
        { name: "Canva", logo: "/logos/canva-original.svg", link: "https://canva.com/" },
        { name: "Notion", logo: "/logos/notion-original.svg", link: "https://notion.so/" },
        { name: "Postman", logo: "/logos/postman.svg", link: "https://www.postman.com/" },
        { name: "Firebase", logo: "/logos/firebase-original.svg", link: "https://firebase.google.com/" }
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