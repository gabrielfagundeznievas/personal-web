import { ExternalLink } from 'lucide-react';
import { TiltCard } from '../ui';
import { useLanguage } from '../../i18n';
import type { Project } from '../../types';

interface ProjectsGridProps {
  projects: Project[];
}

const STATUS_STYLES = {
  fuchsia: 'text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10',
  emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
} as const;

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => {
        const translation = t.projects[index];

        return (
          <TiltCard key={project.id}>
            <div className="p-6 h-full bg-linear-to-br from-slate-900 to-slate-800 border-t border-white/5">
              <div className="flex justify-between items-start mb-4">
                {project.icon}
                <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
              </div>
              <h3 className="text-xl font-bold mb-2">{translation?.title ?? project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{translation?.description ?? project.description}</p>
              <div className={`text-xs font-mono border inline-block px-2 py-1 rounded ${STATUS_STYLES[project.statusColor]}`}>
                STATUS: {project.status}
              </div>
            </div>
          </TiltCard>
        );
      })}
    </div>
  );
}
