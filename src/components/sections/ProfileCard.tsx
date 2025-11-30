import { Cpu } from 'lucide-react';
import { TiltCard } from '../ui';
import { calculateVersion } from '../../utils';

interface SkillBar {
  label: string;
  percentage: number;
  color: 'cyan' | 'fuchsia';
}

const SKILL_BARS: SkillBar[] = [
  { label: "JAVA / SPRING BOOT", percentage: 95, color: 'cyan' },
  { label: ".NET / ANGULAR", percentage: 90, color: 'fuchsia' }
];

export function ProfileCard() {
  const version = calculateVersion();

  return (
    <TiltCard className="h-auto">
      <div className="p-6 bg-linear-to-b from-slate-900 to-black h-full">
        <div className="flex items-center justify-between mb-6">
          <Cpu className="w-8 h-8 text-cyan-400 animate-[spin_8s_linear_infinite]" />
          <span className="text-xs border border-cyan-500/30 px-2 py-1 rounded text-cyan-400 bg-cyan-900/20">
            {version.formatted} STABLE
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Ingeniero Backend especializado en <span className="text-white font-bold">Java, .NET y Node.js</span>.
          <br/><br/>
          Obsesionado con el <span className="text-cyan-400">rendimiento</span> y la gestion de memoria.
          +10 anos dominando entornos <span className="text-white font-bold">Linux</span> y optimizando arquitecturas criticas.
        </p>

        <div className="space-y-4 pt-4 border-t border-white/10">
          {SKILL_BARS.map(({ label, percentage, color }) => (
            <div key={label}>
              <div className={`flex justify-between text-xs mb-1 font-bold ${color === 'cyan' ? 'text-cyan-400' : 'text-fuchsia-400'}`}>
                <span>{label}</span>
                <span>{percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color === 'cyan' ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]'}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
