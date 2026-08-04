import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppConfig, loadAppConfig } from './config';
import { ParticleCanvas } from './components/ParticleCanvas';
import { AudioController } from './components/AudioController';
import { NavigationControls } from './components/NavigationControls';
import { CustomizeModal } from './components/CustomizeModal';

import { OpeningSection } from './components/OpeningSection';
import { Section1BirthdayHeader } from './components/Section1BirthdayHeader';
import { Section2UnknownNumber } from './components/Section2UnknownNumber';
import { Section3Apology } from './components/Section3Apology';
import { Section4Memories } from './components/Section4Memories';
import { Section5EmotionalJourney } from './components/Section5EmotionalJourney';
import { Section6InteractiveHeart } from './components/Section6InteractiveHeart';
import { Section7BestFriends } from './components/Section7BestFriends';
import { Section8Letter } from './components/Section8Letter';
import { Section9Prayer } from './components/Section9Prayer';
import { Section10Celebration } from './components/Section10Celebration';
import { Section11LastMessage } from './components/Section11LastMessage';

export default function App() {
  const [config, setConfig] = useState<AppConfig>(loadAppConfig);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState<boolean>(false);

  // Auto-scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const goToNextSection = () => {
    setCurrentSection((prev) => Math.min(prev + 1, 11));
  };

  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
  };

  const getParticleIntensity = () => {
    if (currentSection === 6 || currentSection === 10) return 'hearts';
    if (currentSection === 1 || currentSection === 9) return 'intense';
    return 'gentle';
  };

  return (
    <div className="relative min-h-screen bg-[#05040a] text-slate-100 font-sans-clean overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200">
      {/* Dynamic Ambient Particles & Rose Petal Engine */}
      <ParticleCanvas intensity={getParticleIntensity()} />

      {/* Floating Audio & Customization Bar */}
      <AudioController onOpenCustomize={() => setIsCustomizeOpen(true)} />

      {/* Section Jump Bar */}
      <NavigationControls
        currentSection={currentSection}
        totalSections={11}
        onSelectSection={(idx) => setCurrentSection(idx)}
      />

      {/* Main Experience View */}
      <main className="relative z-10 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {currentSection === 0 && (
              <OpeningSection
                recipientName={config.recipientName}
                birthdayDate={config.birthdayDate}
                onComplete={() => setCurrentSection(1)}
              />
            )}

            {currentSection === 1 && (
              <Section1BirthdayHeader
                recipientName={config.recipientName}
                waitStartDate={config.waitStartDate}
                birthdayDate={config.birthdayDate}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 2 && (
              <Section2UnknownNumber onNext={goToNextSection} />
            )}

            {currentSection === 3 && (
              <Section3Apology
                recipientName={config.recipientName}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 4 && (
              <Section4Memories
                recipientName={config.recipientName}
                memories={config.memories}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 5 && (
              <Section5EmotionalJourney onNext={goToNextSection} />
            )}

            {currentSection === 6 && (
              <Section6InteractiveHeart
                recipientName={config.recipientName}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 7 && (
              <Section7BestFriends onNext={goToNextSection} />
            )}

            {currentSection === 8 && (
              <Section8Letter
                letterText={config.letterText}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 9 && (
              <Section9Prayer
                recipientName={config.recipientName}
                prayers={config.prayers}
                onNext={goToNextSection}
              />
            )}

            {currentSection === 10 && (
              <Section10Celebration
                recipientName={config.recipientName}
                birthdayDate={config.birthdayDate}
                onNext={() => setCurrentSection(11)}
              />
            )}

            {currentSection === 11 && (
              <Section11LastMessage
                recipientName={config.recipientName}
                birthdayDate={config.birthdayDate}
                onReplay={() => setCurrentSection(0)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Personalization Modal */}
      <CustomizeModal
        config={config}
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
