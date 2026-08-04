import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Sun, Moon } from 'lucide-react';

interface Section8Props {
  recipientName: string;
  prayers: string[];
  onNext: () => void;
}

export const Section8MyPrayer: React.FC<Section8Props> = ({ recipientName, prayers, onNext }) => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center items-center text-center">
      
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 text-xs font-sans-clean tracking-wider uppercase mb-8">
        <Sun className="w-3.5 h-3.5 text-amber-400" />
        <span>Section 08 — Sacred Prayer</span>
      </span>

      {/* Main Golden Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="bg-gradient-to-b from-slate-950 via-[#130f1c] to-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-14 max-w-3xl w-full shadow-2xl backdrop-blur-xl space-y-8 glow-amber"
      >
        <div className="space-y-2">
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-gradient-gold">
            My Prayer For You, {recipientName}
          </h2>
          <p className="font-serif-classic text-amber-200/80 text-lg italic">
            Offered quietly with standard sincerity and love.
          </p>
        </div>

        {/* Prayer Lines Grid */}
        <div className="space-y-4 pt-4 border-t border-amber-500/20 text-left max-w-2xl mx-auto">
          {prayers.map((prayer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-3 bg-slate-900/60 border border-amber-500/15 p-3.5 rounded-2xl"
            >
              <span className="text-amber-400 text-xs mt-1">🤲</span>
              <p className="font-serif-classic text-lg sm:text-xl text-slate-200 italic leading-snug">
                “{prayer}”
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Dua */}
        <div className="space-y-4 pt-6 border-t border-amber-500/30 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="font-serif-classic text-xl sm:text-2xl text-amber-100 italic"
          >
            “And Ya Allah… If it is good for both of us, allow us to continue walking through life together, making memories that we can look back on with grateful hearts.”
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-serif-classic text-lg sm:text-xl text-slate-300 italic"
          >
            “And if our future is written differently, then at least let me always be grateful that I had the chance to know someone as special as her.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pt-4"
          >
            <span className="font-serif-display text-3xl sm:text-4xl text-amber-300 font-bold tracking-widest">
              Ameen. 🤲❤️
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Next Button */}
      <div className="text-center pt-12">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-sans-clean text-base font-medium rounded-full shadow-2xl transition-all glow-amber"
        >
          <span>Reveal Birthday Surprise</span>
          <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

    </section>
  );
};
