import React from 'react';
import { motion } from 'motion/react';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';

interface Section11Props {
  recipientName: string;
  birthdayDate?: string;
  onReplay: () => void;
}

export const Section11LastMessage: React.FC<Section11Props> = ({
  recipientName,
  birthdayDate = "5 August",
  onReplay,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10 bg-black text-slate-100">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#08040d] to-black pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full mx-auto space-y-10 py-12">

        {/* Name Slow Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-2"
        >
          <span className="font-serif-display text-3xl sm:text-5xl font-light text-rose-300 tracking-wide">
            {recipientName}…
          </span>
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed font-light"
        >
          <div className="space-y-3">
            <p className="text-slate-300 italic">
              “Life may have changed our story.”
            </p>
            <p className="text-slate-300 italic">
              “Fate may have written different paths for us.”
            </p>
            <p className="text-rose-200 font-normal">
              “But I will never be ashamed of the love and memories I carried in my heart.”
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-800 pt-4 text-rose-100">
            <p>“I loved you sincerely.”</p>
            <p>“I still love you.”</p>
            <p className="font-semibold text-rose-200">“And I will always wish happiness for you.”</p>
          </div>

          <div className="space-y-2 border-t border-slate-800 pt-4 text-slate-300">
            <p>“I don't ask you for anything.”</p>
            <p>“I don't ask you to return.”</p>
            <p>“I don't ask you to change your life.”</p>
            <p className="text-rose-200 font-medium">
              “I only wanted you to know that someone once loved you very deeply… and still remembers you with the same sincerity.”
            </p>
          </div>

          <div className="space-y-3 border-t border-rose-500/20 pt-4 bg-rose-950/40 p-5 rounded-2xl">
            <p className="text-rose-100 font-normal">
              “May Allah give you the happiest life, protect your heart, fulfill your dreams and keep you smiling for the rest of your life.”
            </p>
            <p className="text-rose-200 font-medium">
              “And wherever life takes you… May you always be happy.”
            </p>
          </div>
        </motion.div>

        {/* Final Birthday Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="space-y-4 pt-4"
        >
          <h2 className="font-serif-display text-2xl sm:text-4xl text-gradient-rose font-bold">
            Happy Birthday, {recipientName}. ❤️
          </h2>

          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-300 font-sans-clean text-xs uppercase tracking-widest font-semibold">
            {birthdayDate}
          </div>

          <p className="font-serif-classic text-xl sm:text-2xl text-rose-100 italic">
            “You will always be a beautiful memory in my heart.”
          </p>

          <p className="text-xs text-slate-400 font-sans-clean pt-6 border-t border-slate-900 max-w-md mx-auto">
            “Some people leave our lives… but the memories they gave us never truly leave.”
          </p>
        </motion.div>

        {/* Replay Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-6"
        >
          <button
            onClick={onReplay}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-rose-500/30 rounded-full text-rose-200 text-sm font-sans-clean transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Experience From Beginning</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
