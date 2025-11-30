import type { ReactNode } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface ExperienceHighlight {
  metric: string;
  context: string;
  type: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlight?: ExperienceHighlight;
}

export interface Skill {
  category: string;
  icon: ReactNode;
  items: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  statusColor: 'fuchsia' | 'emerald';
  icon: ReactNode;
}

export type TabType = 'EXPERIENCE_LOG' | 'PROJECT_PROTOCOLS';
