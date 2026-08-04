import React from 'react';
import { motion } from 'motion/react';
import { PhoneOff, Heart, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface Section2Props {
  onNext: () => void;
}

export const Section2UnknownNumber: React.FC<Section2Props> = ({ onNext }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
      <div className="max-w-2xl w-full mx-auto space-y-8 py-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 02 • One More Truth…</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-3xl sm:text-5xl font-bold text-rose-100 tracking-tight"
        >
          One More Truth…
        </motion.h2>

        {/* Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-2xl text-rose-400">
              <PhoneOff className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-400 font-sans-clean font-semibold">
                Sincere Disclosure
              </span>
              <p className="font-serif-display text-lg text-slate-200">
                A Wish From Distance
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
            <p className="text-rose-200 font-normal">
              “You have blocked me from your numbers.”
            </p>
            <p className="text-slate-300">
              “So when your birthday finally came, I couldn't reach you the way I once could.”
            </p>
            <p className="text-slate-300 italic border-l-2 border-rose-500/40 pl-4 py-1">
              “I had to send my wish from an unknown number because I had been waiting for this day for so long.”
            </p>
          </div>

          {/* Respectful & Boundary Statement */}
          <div className="bg-slate-950/80 border border-rose-500/20 rounded-2xl p-5 space-y-3 font-sans-clean text-sm sm:text-base text-slate-300">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>With Total Respect</span>
            </div>
            <p>
              “I don't say this to blame you.”
            </p>
            <p className="text-slate-200">
              “I understand your decision, and I respect your boundaries.”
            </p>
            <p className="text-rose-200 font-medium">
              “I simply wanted to wish you once… because your birthday still matters to me.”
            </p>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-900/90 to-slate-900 hover:from-rose-800 hover:to-slate-800 text-rose-100 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
          >
            <span>Section 03 • I'm Sorry</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
