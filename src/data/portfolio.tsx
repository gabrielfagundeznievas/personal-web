import { Server, Zap, Database, Terminal, Activity, Code2 } from 'lucide-react';
import type { PersonalInfo, Experience, Skill, Project } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "GABRIEL FAGUNDEZ",
  title: "BACKEND ENGINEER",
  subtitle: "JAVA // .NET // NODE.JS // LINUX VETERAN",
  email: "gabrielfagundeznievas@gmail.com",
  phone: "+598 97 319 679",
  linkedin: "https://www.linkedin.com/in/juan-gabriel-fagundez/",
  github: "https://github.com/gabrielfagundeznievas",
};

export const EXPERIENCE: Experience[] = [
  {
    id: 0,
    company: "ICHASH.ONE",
    role: "SSR Backend Developer (Java)",
    period: "OCT 2025 - ACTUALIDAD",
    description: "Desarrollo backend para sector Fintech. Liderazgo en optimizacion de recursos criticos y refactorizacion de procesos asincronos para alta concurrencia.",
    tech: ["JAVA", "SPRING BOOT", "THREAD POOLS", "DOCKER"],
    highlight: {
      metric: "80% MEMORY REDUCTION",
      context: "Async Threads -> ThreadPoolExecutor",
      type: "performance"
    }
  },
  {
    id: 1,
    company: "ALSACIA SOFTWARE",
    role: "Desarrollador de Software",
    period: "FEB 2025 - OCT 2025",
    description: "Participacion en el desarrollo de software interno utilizando .NET y Angular. Colaboracion en equipo multidisciplinario para definir requerimientos y optimizar procesos.",
    tech: [".NET", "ANGULAR", "C#", "SQL"]
  },
  {
    id: 2,
    company: "FREELANCER",
    role: "Desarrollador Full Stack",
    period: "SEP 2024 - ENE 2025",
    description: "Creacion de plataforma LMS para aprendizaje de ingles. Diseno de arquitectura y APIs REST en NestJS. Implementacion de pruebas unitarias y frontend con Styled-Components.",
    tech: ["REACT", "NESTJS", "TYPESCRIPT", "POSTGRESQL"]
  },
  {
    id: 3,
    company: "CENCOSUD",
    role: "Desarrollador de Software",
    period: "AGO 2022 - MAY 2024",
    description: "Mantenimiento de sitios de alto trafico (Paris, Easy, Jumbo). Migracion de monolito a microservicios. Implementacion de controles de calidad y migracion de GitLab a GitHub.",
    tech: ["NODE", "GRAPHQL", "MICROSERVICES", "REACT"]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "BACKEND",
    icon: <Server className="text-cyan-400" />,
    items: ["Java (Spring Boot)", "Node.js (NestJS)", "C# (.NET)", "Microservices", "REST/GraphQL"]
  },
  {
    category: "FRONTEND",
    icon: <Zap className="text-fuchsia-400" />,
    items: ["React.js", "Angular", "Next.js", "JavaScript/ES6+", "SASS/CSS"]
  },
  {
    category: "DATABASE",
    icon: <Database className="text-emerald-400" />,
    items: ["PostgreSQL", "MySQL", "JPA / Hibernate", "TypeORM / MikroORM", "Entity Framework"]
  },
  {
    category: "INFRA & TOOLS",
    icon: <Terminal className="text-yellow-400" />,
    items: ["Linux (10+ years)", "Docker", "Kubernetes", "AWS (Basic)", "Git/GitHub", "Terraform"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "English Learning Platform",
    description: "Plataforma educativa completa (LMS). Arquitectura de microservicios con NestJS.",
    status: "DEPLOYED",
    statusColor: "fuchsia",
    icon: <Activity className="text-fuchsia-500 w-8 h-8" />
  },
  {
    id: 1,
    title: "Alsacia Internal Tools",
    description: "Software de gestion interna en .NET y Angular. Optimizacion de flujos operativos.",
    status: "PRODUCTION",
    statusColor: "emerald",
    icon: <Code2 className="text-emerald-500 w-8 h-8" />
  }
];

export const TABS = ['EXPERIENCE_LOG', 'PROJECT_PROTOCOLS'] as const;
