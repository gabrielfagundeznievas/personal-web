import { Layers, Terminal } from 'lucide-react';
import { TiltCard, MetricHighlight } from '../ui';
import type { Experience } from '../../types';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="space-y-6">
      {experiences.map((job) => (
        <TiltCard key={job.id} className="group">
          <div className={`p-8 bg-slate-900/40 relative ${job.highlight ? 'bg-linear-to-br from-slate-900/80 to-emerald-950/20' : ''}`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-opacity ${
              job.highlight
                ? 'bg-emerald-500 opacity-100'
                : 'bg-linear-to-b from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100'
            }`} />

            <div className="md:flex justify-between items-start mb-4">
              <div>
                <h3 className={`text-2xl font-bold transition-colors ${job.highlight ? 'text-white' : 'text-white group-hover:text-cyan-400'}`}>
                  {job.role}
                </h3>
                <h4 className={`text-slate-400 flex items-center gap-2 font-medium ${job.highlight ? 'text-emerald-100/70' : ''}`}>
                  <Layers className="w-4 h-4" /> {job.company}
                </h4>
              </div>
              <div className={`mt-2 md:mt-0 px-3 py-1 rounded text-xs font-mono border ${
                job.highlight
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-white/5 text-cyan-200 border-white/10'
              }`}>
                {job.period}
              </div>
            </div>

            <p className="text-slate-300 mb-6 border-l-2 border-slate-700 pl-4 leading-relaxed">
              {job.description}
            </p>

            {job.highlight && (
              <div className="mb-6">
                <MetricHighlight metric={job.highlight.metric} context={job.highlight.context} />
              </div>
            )}

            <div className="flex gap-2 flex-wrap">
              {job.tech.map(t => (
                <span key={t} className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${
                  job.highlight
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                    : 'text-slate-500 bg-black/30 border border-transparent'
                }`}>
                  {job.highlight && <Terminal className="w-3 h-3" />}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}
