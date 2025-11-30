import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-8 text-center text-slate-600 text-sm">
      <p className="flex items-center justify-center gap-2">
        <Terminal className="w-4 h-4" />
        <span>SYSTEM OPTIMIZED. MEMORY LEAKS: 0.</span>
      </p>
      <p className="mt-2 text-xs opacity-50">
        ENGINEERED BY GABRIEL FAGUNDEZ
      </p>
    </footer>
  );
}
