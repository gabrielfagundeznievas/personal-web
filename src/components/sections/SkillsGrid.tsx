import { TiltCard } from '../ui';
import type { Skill } from '../../types';

interface SkillsGridProps {
  skills: Skill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {skills.map((skill, idx) => (
        <TiltCard key={idx}>
          <div className="p-5 flex flex-col h-full bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              {skill.icon}
              <h3 className="font-bold text-white tracking-wide text-sm">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-100 transition-all cursor-crosshair"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  );
}
