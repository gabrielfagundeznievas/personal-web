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
import { PERSONAL_INFO, EXPERIENCE, SKILLS, PROJECTS, TABS } from './data/portfolio';
import type { TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('EXPERIENCE_LOG');

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
              {TABS.map((tab) => (
                <TabButton
                  key={tab}
                  label={tab}
                  isActive={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
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
