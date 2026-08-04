import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, ArrowRight, Sparkles, Feather } from 'lucide-react';

interface Section3Props {
  recipientName: string;
  onNext: () => void;
}

export const Section3Apology: React.FC<Section3Props> = ({ recipientName, onNext }) => {
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
          <span>Section 03 • Sincere Apology</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-3xl sm:text-5xl font-bold text-rose-100 tracking-tight"
        >
          I'm Sorry, {recipientName}.
        </motion.h2>

        {/* Apology Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-3 bg-rose-950/80 border border-rose-500/40 rounded-2xl text-rose-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-rose-400 font-sans-clean font-semibold">
                Without Any Expectation
              </span>
              <p className="font-serif-display text-lg text-slate-200">
                Acknowledging My Past
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
            <p className="text-rose-200 font-normal">
              “I know I made many mistakes.”
            </p>
            <p className="text-slate-300">
              “I know that because of some of my actions and mistakes, you were hurt.”
            </p>
            <p className="text-slate-400 italic">
              “Maybe there are things I wish I could go back and change. But I cannot change the past.”
            </p>
            <p className="text-slate-200">
              “All I can do is sincerely acknowledge it and say…”
            </p>
          </div>

          {/* Glowing I'm Sorry statement */}
          <div className="py-6 text-center bg-rose-950/40 border border-rose-500/30 rounded-2xl">
            <span className="font-serif-display text-3xl sm:text-4xl text-rose-200 font-bold tracking-wide">
              “I'm Sorry.”
            </span>
          </div>

          <div className="space-y-3 font-sans-clean text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
            <p className="text-rose-100 font-medium">
              “From the deepest part of my heart, please forgive me for the moments when I hurt you.”
            </p>
            <p className="text-slate-400">
              “I never wanted my mistakes to become painful memories for you.”
            </p>
            <p className="text-rose-200 italic">
              “I hope that one day, when you remember me, you remember not only my mistakes, but also the genuine love and good memories we once shared.”
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
            <span>Section 04 • Unforgettable Memories</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
