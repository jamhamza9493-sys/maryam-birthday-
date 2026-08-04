import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface Section10Props {
  recipientName: string;
  onReplay: () => void;
}

export const Section10LastMessage: React.FC<Section10Props> = ({ recipientName, onReplay }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStep(1); // "One Last Thing…"
    }, 1000);

    const t2 = setTimeout(() => {
      setStep(2); // "I don't know how many birthdays..."
      audioEngine.playHeartbeat();
    }, 3200);

    const t3 = setTimeout(() => {
      setStep(3); // "I don't know what tomorrow will bring..."
    }, 5500);

    const t4 = setTimeout(() => {
      setStep(4); // "But I know that every memory..."
      audioEngine.playHeartbeat();
    }, 7800);

    const t5 = setTimeout(() => {
      setStep(5); // "And if Allah gives me a long life... until my last breath."
    }, 10500);

    const t6 = setTimeout(() => {
      setStep(6); // "Happy Birthday, my beloved Maryam Yaseen. I love you. ❤️"
      audioEngine.playHeartbeat();
    }, 13500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center items-center text-center">
      
      {/* Peaceful glowing central heart */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
        <Heart className="w-20 h-20 text-rose-500 fill-rose-500 animate-pulse-slow relative z-10" />
      </div>

      <div className="max-w-2xl w-full mx-auto space-y-8">
        
        {step >= 1 && (
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif-display text-3xl sm:text-4xl text-rose-300 font-semibold"
          >
            One Last Thing…
          </motion.h2>
        )}

        <div className="space-y-6 font-serif-classic text-xl sm:text-2xl text-slate-200 leading-relaxed italic">
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              “I don't know how many birthdays we will celebrate together.”
            </motion.p>
          )}

          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              “I don't know what tomorrow will bring.”
            </motion.p>
          )}

          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-rose-200"
            >
              “But I know that every memory I have with you is something I will carry with me.”
            </motion.p>
          )}

          {step >= 5 && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-slate-100 font-normal pt-2 border-t border-slate-800"
            >
              “And if Allah gives me a long life… I hope I can keep loving you, caring for you and making beautiful memories with you until my last breath.”
            </motion.p>
          )}
        </div>

        {step >= 6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="pt-8 space-y-4 bg-slate-950/90 border border-rose-500/30 rounded-3xl p-8 shadow-2xl glow-rose"
          >
            <h3 className="font-serif-display text-3xl sm:text-4xl text-gradient-rose font-bold">
              Happy Birthday, my beloved {recipientName}.
            </h3>
            <p className="font-serif-classic text-xl text-slate-300 italic">
              “May Allah always keep you smiling.”
            </p>
            <p className="font-serif-display text-3xl text-rose-400 font-extrabold flex items-center justify-center gap-2">
              I love you. <Heart className="w-7 h-7 fill-rose-500 text-rose-500" />
            </p>

            <div className="pt-6 flex justify-center">
              <button
                onClick={onReplay}
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-700 font-sans-clean text-xs font-medium transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-rose-400" />
                <span>Replay Experience</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>

    </section>
  );
};
