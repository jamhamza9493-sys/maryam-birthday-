import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { BestFriendIllustration } from './BestFriendIllustration';

interface Section5Props {
  onNext: () => void;
}

export const Section5EmotionalJourney: React.FC<Section5Props> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

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
          <span>Section 03 • What Changed</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-3xl sm:text-5xl font-bold text-rose-100 tracking-tight"
        >
          What Changed
        </motion.h2>

        {/* Tab Selector: BEFORE vs AFTER */}
        <div className="flex justify-center items-center gap-3 bg-slate-900/90 p-1.5 border border-rose-500/30 rounded-full max-w-sm mx-auto shadow-xl">
          <button
            onClick={() => setActiveTab('before')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-sans-clean text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'before'
                ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-400" />
            <span>BEFORE</span>
          </button>

          <button
            onClick={() => setActiveTab('after')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-sans-clean text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'after'
                ? 'bg-indigo-950/80 text-rose-200 border border-rose-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Moon className="w-4 h-4 text-indigo-400" />
            <span>AFTER</span>
          </button>
        </div>

        {/* Side-by-Side Comparison Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          {activeTab === 'before' ? (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-amber-500/20 pb-3">
                <div className="p-2.5 bg-amber-950/60 border border-amber-500/30 rounded-2xl text-amber-300">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-amber-200 font-semibold">
                    BEFORE — Warm Sunlight & Smiles
                  </h3>
                  <p className="text-xs font-sans-clean text-slate-400">
                    When You Were Part Of My Life
                  </p>
                </div>
              </div>

              <BestFriendIllustration scene="sitting_together" showBirthdayOverlayText={false} />

              <div className="space-y-3 font-serif-classic text-lg sm:text-xl text-slate-100 leading-relaxed italic">
                <p className="text-amber-200 font-medium">“When you were part of my life, happiness felt easy.”</p>
                <p>“I smiled more.”</p>
                <p>“I laughed more.”</p>
                <p className="text-amber-100 font-normal">“Even ordinary days felt special.”</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-indigo-500/20 pb-3">
                <div className="p-2.5 bg-indigo-950/60 border border-indigo-500/30 rounded-2xl text-indigo-300">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl text-indigo-200 font-semibold">
                    AFTER — A Quiet Evening
                  </h3>
                  <p className="text-xs font-sans-clean text-slate-400">
                    After You Went Away
                  </p>
                </div>
              </div>

              <BestFriendIllustration scene="watching_sunset" showBirthdayOverlayText={false} />

              <div className="space-y-3 font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed italic">
                <p className="text-rose-200 font-medium">“Then life changed.”</p>
                <p>“You went away.”</p>
                <p>“And somehow, the smile on my face changed too.”</p>
                <p className="text-slate-300 font-light">“I still smile sometimes… but it doesn't always feel the same.”</p>
              </div>
            </div>
          )}

          {/* Concluding Respectful Statement */}
          <div className="p-5 bg-slate-950/80 border border-rose-500/30 rounded-2xl space-y-2 text-center">
            <p className="font-serif-classic text-lg text-rose-200 italic font-medium">
              “This isn't your responsibility.”
            </p>
            <p className="font-sans-clean text-xs sm:text-sm text-slate-300">
              “It's simply the truth of what your presence once meant to me.”
            </p>
          </div>
        </motion.div>

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
            <span>Section 04 • I Still Remember</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

