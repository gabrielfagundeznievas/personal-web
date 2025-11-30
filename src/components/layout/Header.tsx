import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { GlitchText, LanguageToggle } from '../ui';
import { useLanguage } from '../../i18n';
import type { PersonalInfo } from '../../types';

interface HeaderProps {
  info: PersonalInfo;
}

const SOCIAL_LINKS = [
  { Icon: GithubIcon, key: 'github' as const },
  { Icon: LinkedinIcon, key: 'linkedin' as const },
  { Icon: Mail, key: 'email' as const }
] as const;

export function Header({ info }: HeaderProps) {
  const { t } = useLanguage();

  const getLink = (key: typeof SOCIAL_LINKS[number]['key']) => {
    if (key === 'email') return `mailto:${info.email}`;
    return info[key];
  };

  return (
    <header className="mb-24 text-center md:text-left md:flex justify-between items-end border-b border-white/10 pb-8">
      <div>
        <div className="flex items-center gap-2 mb-2 text-cyan-400 text-sm tracking-widest">
          <span className="animate-pulse">●</span> {t.header.status}
          <span className="hidden sm:inline"> // {t.header.location}</span>
        </div>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-slate-400">
          <GlitchText text={info.name} />
        </h1>
        <h2 className="text-lg md:text-2xl text-cyan-500/80 font-bold mt-2 flex items-center gap-2 flex-wrap justify-center md:justify-start">
          {info.title}
          <span className="hidden md:inline text-white/20">|</span>
          <span className="text-xs md:text-sm text-slate-400 font-normal border border-slate-700 px-2 py-0.5 rounded bg-slate-900">
            {info.subtitle}
          </span>
        </h2>
      </div>

      <div className="flex items-center gap-4 mt-8 md:mt-0 justify-center md:justify-start">
        <LanguageToggle />
        {SOCIAL_LINKS.map(({ Icon, key }) => (
          <a
            key={key}
            href={getLink(key)}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/20 rounded-full hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </div>
    </header>
  );
}
