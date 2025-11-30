import { Globe } from 'lucide-react';
import { useLanguage } from '../../i18n';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 text-sm font-mono"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-bold">{language}</span>
    </button>
  );
}
