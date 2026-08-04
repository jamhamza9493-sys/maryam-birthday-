import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Star, Eye } from 'lucide-react';

interface Section5Props {
  recipientName: string;
  onNext: () => void;
}

export const Section5ThroughMyEyes: React.FC<Section5Props> = ({ recipientName, onNext }) => {
  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center items-center text-center">
      
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-sans-clean tracking-wider uppercase mb-8">
        <Sparkles className="w-3.5 h-3.5 text-rose-400" />
        <span>Section 05</span>
      </span>

      {/* Constellation Star Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative bg-slate-950/80 border border-rose-500/30 rounded-3xl p-8 sm:p-14 max-w-3xl w-full shadow-2xl backdrop-blur-xl space-y-10 glow-rose"
      >
        {/* Subtle Constellation Lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] rounded-3xl"></div>

        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-serif-display text-4xl sm:text-5xl font-bold text-gradient-rose"
          >
            {recipientName}…
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif-classic text-2xl sm:text-3xl text-slate-200 font-light italic"
          >
            “If you could see yourself through my eyes for just one minute…”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif-classic text-xl sm:text-2xl text-rose-300 font-normal italic"
          >
            “…you would understand why ordinary words can never explain what I feel.”
          </motion.p>
        </div>

        {/* Four Poetic Statements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6 border-t border-slate-800">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-slate-900/90 border border-rose-500/20 p-4 rounded-2xl space-y-1"
          >
            <span className="text-xs font-sans-clean text-rose-400 font-semibold uppercase">The Smile</span>
            <p className="font-serif-classic text-slate-200 italic">
              “…whose smile became a memory…”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-slate-900/90 border border-rose-500/20 p-4 rounded-2xl space-y-1"
          >
            <span className="text-xs font-sans-clean text-rose-400 font-semibold uppercase">The Comfort</span>
            <p className="font-serif-classic text-slate-200 italic">
              “…whose presence became comfort…”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-slate-900/90 border border-rose-500/20 p-4 rounded-2xl space-y-1"
          >
            <span className="text-xs font-sans-clean text-rose-400 font-semibold uppercase">The Treasure</span>
            <p className="font-serif-classic text-slate-200 italic">
              “…whose memories became treasures…”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-slate-900/90 border border-rose-500/20 p-4 rounded-2xl space-y-1"
          >
            <span className="text-xs font-sans-clean text-rose-400 font-semibold uppercase">The Prayer</span>
            <p className="font-serif-classic text-slate-200 italic">
              “…and whose happiness became something I genuinely pray for.”
            </p>
          </motion.div>
        </div>

        {/* Final Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="pt-4"
        >
          <p className="font-serif-display text-2xl sm:text-3xl text-gradient-rose font-bold flex items-center justify-center gap-2">
            “You would finally understand how precious you are to me.” <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </p>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <div className="text-center pt-12">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900/90 hover:bg-rose-950/80 text-rose-200 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-xl transition-all glow-rose"
        >
          <span>Touch My Heart</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-500/50 group-hover:scale-125 transition-transform" />
        </button>
      </div>

    </section>
  );
};
