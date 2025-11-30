import { useState } from 'react';
import {
  SpaceBackground,
  Overlays,
  Header,
  Footer,
  ProfileCard,
  SkillsGrid,
  ExperienceList,
  ProjectsGrid,
  TabButton
} from './components';
import { useLanguage } from './i18n';
import { PERSONAL_INFO, EXPERIENCE, SKILLS, PROJECTS } from './data/portfolio';
import type { TabType } from './types';

const TABS: Array<{ key: TabType; labelKey: 'experience' | 'projects' }> = [
  { key: 'EXPERIENCE_LOG', labelKey: 'experience' },
  { key: 'PROJECT_PROTOCOLS', labelKey: 'projects' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('EXPERIENCE_LOG');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-white font-mono overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      <SpaceBackground />
      <Overlays />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <Header info={PERSONAL_INFO} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            <ProfileCard />
            <SkillsGrid skills={SKILLS} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex gap-4 border-b border-white/10 pb-1 overflow-x-auto">
              {TABS.map(({ key, labelKey }) => (
                <TabButton
                  key={key}
                  label={t.tabs[labelKey]}
                  isActive={activeTab === key}
                  onClick={() => setActiveTab(key)}
                />
              ))}
            </div>

            <div className="min-h-[500px]">
              {activeTab === 'EXPERIENCE_LOG' ? (
                <ExperienceList experiences={EXPERIENCE} />
              ) : (
                <ProjectsGrid projects={PROJECTS} />
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
