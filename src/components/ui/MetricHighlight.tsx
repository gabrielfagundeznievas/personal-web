import { TrendingUp } from 'lucide-react';

interface MetricHighlightProps {
  metric: string;
  context: string;
}

export function MetricHighlight({ metric, context }: MetricHighlightProps) {
  return (
    <div className="mt-4 relative group overflow-hidden rounded bg-emerald-900/10 border border-emerald-500/30 hover:border-emerald-400 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
      <div className="p-3 flex items-center gap-4">
        <div className="p-2 bg-emerald-500/20 rounded-full border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <div className="text-lg md:text-xl font-black text-emerald-400 tracking-tighter leading-none drop-shadow-sm">
            {metric}
          </div>
          <div className="text-[10px] md:text-xs text-emerald-600/80 font-mono uppercase tracking-wider mt-1">
            {context}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-shine pointer-events-none" />
    </div>
  );
}
