import type { Translations } from '../types';

export const es: Translations = {
  header: {
    status: "SISTEMA EN LINEA",
    location: "UY-MONTEVIDEO-ROOT"
  },
  profile: {
    specializedIn: "Ingeniero Backend especializado en",
    techStack: "Java, .NET y Node.js",
    obsessedWith: "Obsesionado con el",
    performance: "rendimiento",
    andMemory: "y la gestion de memoria.",
    yearsMastering: "+10 anos dominando entornos",
    linux: "Linux",
    andOptimizing: "y optimizando arquitecturas criticas."
  },
  tabs: {
    experience: "EXPERIENCIA",
    projects: "PROYECTOS"
  },
  footer: {
    optimized: "SISTEMA OPTIMIZADO. MEMORY LEAKS: 0.",
    engineered: "DESARROLLADO POR GABRIEL FAGUNDEZ"
  },
  experience: {
    current: "ACTUALIDAD"
  },
  skills: {
    backend: "BACKEND",
    frontend: "FRONTEND",
    database: "BASE DE DATOS",
    infra: "INFRA & HERRAMIENTAS"
  },
  projects: [
    {
      title: "Plataforma de Aprendizaje de Ingles",
      description: "Plataforma educativa completa (LMS). Arquitectura de microservicios con NestJS."
    },
    {
      title: "Herramientas Internas Alsacia",
      description: "Software de gestion interna en .NET y Angular. Optimizacion de flujos operativos."
    }
  ],
  experiences: [
    {
      role: "Desarrollador Backend SSR (Java)",
      description: "Desarrollo backend para sector Fintech. Liderazgo en optimizacion de recursos criticos y refactorizacion de procesos asincronos para alta concurrencia."
    },
    {
      role: "Desarrollador de Software",
      description: "Participacion en el desarrollo de software interno utilizando .NET y Angular. Colaboracion en equipo multidisciplinario para definir requerimientos y optimizar procesos."
    },
    {
      role: "Desarrollador Full Stack",
      description: "Creacion de plataforma LMS para aprendizaje de ingles. Diseno de arquitectura y APIs REST en NestJS. Implementacion de pruebas unitarias y frontend con Styled-Components."
    },
    {
      role: "Desarrollador de Software",
      description: "Mantenimiento de sitios de alto trafico (Paris, Easy, Jumbo). Migracion de monolito a microservicios. Implementacion de controles de calidad y migracion de GitLab a GitHub."
    }
  ]
};
