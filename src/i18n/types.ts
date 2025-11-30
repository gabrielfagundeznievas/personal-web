export type Language = 'es' | 'en';

export interface Translations {
  header: {
    status: string;
    location: string;
  };
  profile: {
    specializedIn: string;
    techStack: string;
    obsessedWith: string;
    performance: string;
    andMemory: string;
    yearsMastering: string;
    linux: string;
    andOptimizing: string;
  };
  tabs: {
    experience: string;
    projects: string;
  };
  footer: {
    optimized: string;
    engineered: string;
  };
  experience: {
    current: string;
  };
  skills: {
    backend: string;
    frontend: string;
    database: string;
    infra: string;
  };
  projects: Array<{
    title: string;
    description: string;
  }>;
  experiences: Array<{
    role: string;
    description: string;
  }>;
}
