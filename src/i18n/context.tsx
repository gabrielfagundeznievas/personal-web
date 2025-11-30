import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, Translations } from './types';
import { es } from './translations/es';
import { en } from './translations/en';

const translations: Record<Language, Translations> = { es, en };

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = 'portfolio-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;

  const browserLang = navigator.language.slice(0, 2);
  return browserLang === 'es' ? 'es' : 'en';
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState(prev => prev === 'es' ? 'en' : 'es');

  return (
    <LanguageContext.Provider value={{
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
