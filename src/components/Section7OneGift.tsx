import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Gift } from 'lucide-react';

interface Section7Props {
  onNext: () => void;
}

export const Section7OneGift: React.FC<Section7Props> = ({ onNext }) => {
  const giftStatements = [
    "I wouldn't give you something that money can buy.",
    "I would give you the ability to see how beautiful you are from where I stand.",
    "I would give you every happy moment you deserve.",
    "Every dream you have ever prayed for.",
    "And a lifetime filled with reasons to smile."
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center items-center text-center">
      
      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-sans-clean tracking-wider uppercase mb-8">
        <Gift className="w-3.5 h-3.5 text-rose-400" />
        <span>Section 07</span>
      </span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-slate-950/80 border border-rose-500/30 rounded-3xl p-8 sm:p-14 max-w-3xl w-full shadow-2xl backdrop-blur-xl space-y-8 glow-rose"
      >
        <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-gradient-rose">
          If I Could Give You One Gift Today…
        </h2>

        <div className="space-y-6 pt-4 border-t border-slate-800">
          {giftStatements.map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.25 }}
              className={`font-serif-classic ${
                idx === 1
                  ? 'text-2xl sm:text-3xl text-rose-200 font-semibold italic'
                  : 'text-xl sm:text-2xl text-slate-300 italic'
              }`}
            >
              “{text}”
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-6 border-t border-rose-500/30"
        >
          <p className="font-serif-display text-2xl sm:text-3xl text-rose-400 font-bold flex items-center justify-center gap-2">
            “Because your happiness is one of the things my heart wishes for.” <Heart className="w-6 h-6 fill-rose-500" />
          </p>
        </motion.div>
      </motion.div>

      {/* Next Button */}
      <div className="text-center pt-12">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900/90 hover:bg-rose-950/80 text-rose-200 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-xl transition-all glow-rose"
        >
          <span>My Prayer For You</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-500/50 group-hover:scale-125 transition-transform" />
        </button>
      </div>

    </section>
  );
};
