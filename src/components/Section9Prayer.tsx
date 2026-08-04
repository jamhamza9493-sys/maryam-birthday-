import React from 'react';
import { motion } from 'motion/react';
import { Sun, Heart, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface Section9Props {
  recipientName: string;
  prayers: string[];
  onNext: () => void;
}

export const Section9Prayer: React.FC<Section9Props> = ({ recipientName, prayers, onNext }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
      
      {/* Background Sunrise Light Rays Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 via-[#0a0512] to-[#040208] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-8 py-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span>Section 09 • Sacred Prayer</span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-amber-100 tracking-tight">
            My Prayer For You
          </h2>
          <p className="font-serif-classic text-lg text-amber-200/80 italic font-light">
            “Prayers sent to Allah with peace, gratitude, and sincerity.”
          </p>
        </motion.div>

        {/* Golden Sunrise Glow Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          <div className="flex items-center gap-3 border-b border-amber-500/20 pb-4">
            <div className="p-3 bg-amber-950/80 border border-amber-500/40 rounded-2xl text-amber-400">
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-sans-clean font-semibold">
                Du'a For {recipientName}
              </span>
              <p className="font-serif-display text-lg text-amber-100">
                Peace & Barakah
              </p>
            </div>
          </div>

          <div className="space-y-4 font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed font-light">
            {prayers.map((prayer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="flex items-start gap-3 p-3 bg-slate-950/60 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-colors"
              >
                <Heart className="w-4 h-4 text-amber-400 fill-amber-400/50 shrink-0 mt-1" />
                <p className={idx === 0 ? "text-amber-200 font-medium" : "text-slate-200"}>
                  {prayer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 text-center border-t border-amber-500/20">
            <span className="font-serif-display text-2xl sm:text-3xl text-amber-300 font-bold tracking-widest">
              Ameen. 🤲❤️
            </span>
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
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-900/90 to-rose-950 hover:from-amber-800 hover:to-rose-900 text-amber-100 border border-amber-500/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
          >
            <span>Section 10 • Birthday Celebration</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
