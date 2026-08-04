import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BestFriendIllustration, SceneType } from './BestFriendIllustration';
import { Sparkles, Heart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Section7Props {
  onNext: () => void;
}

export const Section7BestFriends: React.FC<Section7Props> = ({ onNext }) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);

  const scenes: { id: SceneType; title: string; subtitle: string; description: string }[] = [
    {
      id: 'sitting_talking',
      title: 'Sitting Together & Talking',
      subtitle: 'Innocent, Unfiltered Conversations',
      description: 'Moments when hours felt like seconds, just listening to each other share simple thoughts over warm tea.'
    },
    {
      id: 'stargazing',
      title: 'Walking Under The Stars',
      subtitle: 'Silent Understanding',
      description: 'Looking up at the night sky, realizing that some bond doesn’t need words to feel deep and real.'
    },
    {
      id: 'holding_cake',
      title: 'Holding A Birthday Cake',
      subtitle: 'Celebrating Your Special Day',
      description: 'Glowing candles, warm wishes, and cheering for every dream in your heart to come true.'
    },
    {
      id: 'under_tree',
      title: 'Sitting Beneath A Blooming Tree',
      subtitle: 'Peaceful Shelter',
      description: 'A quiet afternoon under falling petals, holding onto moments that time could never wash away.'
    },
    {
      id: 'laughing',
      title: 'Laughing Uncontrollably',
      subtitle: 'Natural Happiness',
      description: 'Pure, effortless smiles and laughter that came naturally whenever you were around.'
    },
    {
      id: 'photo_album',
      title: 'Looking At Old Photographs',
      subtitle: 'A Gift Of Memories',
      description: 'Flipping through pages of time, holding gratitude for every single chapter we shared.'
    },
    {
      id: 'waving_goodbye',
      title: 'Waving Goodbye Under The Sunset',
      subtitle: 'Wishing You Endless Joy',
      description: 'A warm, respectful farewell filled with prayers, dignity, and sincere love that asks for nothing in return.'
    }
  ];

  const activeScene = scenes[currentSceneIndex];

  const handleNextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  const handlePrevScene = () => {
    setCurrentSceneIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
      <div className="max-w-3xl w-full mx-auto space-y-8 py-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 07 • Innocent Friendship & Memories</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-rose-100 tracking-tight">
            Best Friend Moments We Shared
          </h2>
          <p className="font-serif-classic text-lg text-slate-300 italic font-light">
            “Two innocent souls who created warm, unforgettable memories together.”
          </p>
        </motion.div>

        {/* Interactive Illustration Viewer */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScene.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5 }}
            >
              <BestFriendIllustration 
                scene={activeScene.id} 
                showBirthdayOverlayText={true} 
              />
            </motion.div>
          </AnimatePresence>

          {/* Scene Title & Controls */}
          <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevScene}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-rose-900/80 border border-rose-500/30 text-rose-200 transition-colors"
                title="Previous Scene"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center px-4">
                <span className="text-xs font-sans-clean uppercase tracking-widest text-rose-400 font-semibold">
                  Scene {currentSceneIndex + 1} of {scenes.length}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl text-rose-100 font-bold mt-1">
                  {activeScene.title}
                </h3>
                <p className="font-serif-classic text-sm text-slate-300 italic mt-0.5">
                  {activeScene.subtitle}
                </p>
              </div>

              <button
                onClick={handleNextScene}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-rose-900/80 border border-rose-500/30 text-rose-200 transition-colors"
                title="Next Scene"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="font-sans-clean text-sm text-slate-300 leading-relaxed pt-3 border-t border-slate-800">
              {activeScene.description}
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 pt-2">
              {scenes.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setCurrentSceneIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSceneIndex === idx 
                      ? 'w-6 bg-rose-500' 
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-900/90 to-slate-900 hover:from-rose-800 hover:to-slate-800 text-rose-100 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
          >
            <span>Section 08 • Read My Personal Letter</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
