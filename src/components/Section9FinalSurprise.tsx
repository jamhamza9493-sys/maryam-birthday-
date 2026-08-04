import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, PartyPopper, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

interface Section9Props {
  recipientName: string;
  birthdayDate: string;
  onProceedToLastMessage: () => void;
}

export const Section9FinalSurprise: React.FC<Section9Props> = ({
  recipientName,
  birthdayDate,
  onProceedToLastMessage,
}) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // Stage 1: "Maryam…"
    const t1 = setTimeout(() => setPhase(1), 1000);
    // Stage 2: "Before you leave…"
    const t2 = setTimeout(() => setPhase(2), 3000);
    // Stage 3: "I want you to remember one thing."
    const t3 = setTimeout(() => setPhase(3), 5200);

    // Stage 4: Confetti & Core Birthday Declaration
    const t4 = setTimeout(() => {
      setPhase(4);
      audioEngine.playCelebrationChime();

      // Fire elegant rose gold & pink confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f5e', '#fb7185', '#fef08a', '#e11d48']
        });
      } catch (e) {
        // Fallback
      }
    }, 7800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center items-center text-center">
      
      <AnimatePresence mode="wait">
        {phase < 4 ? (
          <div className="space-y-6 max-w-xl mx-auto">
            {/* Single small light */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-4 h-4 rounded-full bg-rose-400 mx-auto glow-rose shadow-rose-500"
            />

            {phase >= 1 && (
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif-display text-4xl sm:text-5xl text-rose-200 font-bold"
              >
                {recipientName}…
              </motion.h3>
            )}

            {phase >= 2 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif-classic text-2xl sm:text-3xl text-slate-300 italic"
              >
                “Before you leave…”
              </motion.p>
            )}

            {phase >= 3 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif-classic text-2xl sm:text-3xl text-rose-300 font-normal italic"
              >
                “I want you to remember one thing.”
              </motion.p>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-10 max-w-3xl w-full"
          >
            {/* Core Declarations */}
            <div className="space-y-3 font-serif-display text-3xl sm:text-5xl font-extrabold tracking-wider">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-gradient-rose"
              >
                YOU ARE LOVED.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gradient-gold"
              >
                YOU ARE PRECIOUS.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-rose-100"
              >
                YOU ARE IRREPLACEABLE.
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-serif-classic text-2xl sm:text-3xl text-slate-200 italic"
            >
              “And you will always have a special place in my heart.”
            </motion.p>

            {/* Huge Birthday Card Announcement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-slate-950/90 border-2 border-rose-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4 glow-rose"
            >
              <div className="flex justify-center">
                <PartyPopper className="w-10 h-10 text-rose-400 animate-bounce" />
              </div>

              <h1 className="font-serif-display text-4xl sm:text-6xl text-gradient-rose font-bold uppercase tracking-tight">
                Happy Birthday
              </h1>

              <h2 className="font-serif-display text-3xl sm:text-5xl text-rose-200 font-semibold">
                {recipientName} ❤️
              </h2>

              <span className="inline-block px-5 py-2 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 font-sans-clean font-bold tracking-widest text-sm uppercase">
                {birthdayDate}
              </span>
            </motion.div>

            {/* Final Prayers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="space-y-3 font-serif-classic text-lg sm:text-xl text-slate-300 italic max-w-xl mx-auto bg-slate-900/60 p-6 rounded-2xl border border-rose-500/20"
            >
              <p>“May Allah write the most beautiful chapters of your life ahead.”</p>
              <p>“May every year make you happier than the one before.”</p>
              <p>“May your heart always have a reason to smile.”</p>
              <p className="text-rose-200 font-normal">“And may Allah protect the beautiful soul that you are.”</p>
              <p className="font-serif-display text-2xl text-rose-400 font-bold not-italic pt-2">
                Ameen. 🤲
              </p>
            </motion.div>

            {/* Proceed to The Last Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="pt-6"
            >
              <button
                onClick={onProceedToLastMessage}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-rose-950 text-rose-200 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
              >
                <span>One Last Thing…</span>
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500 group-hover:scale-125 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
