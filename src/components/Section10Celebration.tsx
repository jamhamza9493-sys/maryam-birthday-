import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Sparkles, Heart, PartyPopper, ArrowRight } from 'lucide-react';
import { BestFriendIllustration } from './BestFriendIllustration';
import { audioEngine } from '../utils/audioEngine';

interface Section10Props {
  recipientName: string;
  birthdayDate: string;
  onNext: () => void;
}

export const Section10Celebration: React.FC<Section10Props> = ({
  recipientName,
  birthdayDate,
  onNext,
}) => {
  const [lit, setLit] = useState<boolean>(false);

  const handleLightCandle = () => {
    setLit(true);
    audioEngine.playCelebrationChime();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10 overflow-hidden bg-black">
      
      {/* Background Fireworks & Particles Effect when lit */}
      {lit && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        </div>
      )}

      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-8 py-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <PartyPopper className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 10 • Birthday Celebration</span>
        </motion.div>

        {!lit ? (
          /* Single Candle State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="font-serif-display text-2xl sm:text-3xl text-rose-300 uppercase tracking-widest font-bold">
                {birthdayDate}
              </span>
              <p className="font-serif-classic text-lg text-slate-400 italic">
                “Light the candle to celebrate Maryam...”
              </p>
            </div>

            {/* Candle Graphic */}
            <div className="relative py-10 flex justify-center">
              <button
                onClick={handleLightCandle}
                className="group relative flex flex-col items-center p-6 bg-slate-900/80 border border-rose-500/30 rounded-3xl hover:border-rose-400 transition-all glow-rose"
              >
                <div className="relative mb-2">
                  <Flame className="w-12 h-12 text-amber-400 animate-pulse group-hover:scale-125 transition-transform" />
                  <div className="absolute inset-0 bg-amber-400/40 rounded-full blur-md opacity-60" />
                </div>
                
                <div className="w-6 h-24 bg-gradient-to-b from-rose-200 to-rose-400 rounded-lg shadow-inner" />
                <div className="w-16 h-4 bg-rose-900 rounded-full mt-1 border border-rose-500/40" />

                <span className="font-sans-clean text-xs text-rose-200 mt-4 font-semibold uppercase tracking-wider">
                  Touch To Light Candle ✨
                </span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Celebration Exploded State */
          <AnimatePresence mode="wait">
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Grand Birthday Title */}
              <div className="space-y-3">
                <span className="inline-block px-4 py-1 rounded-full bg-rose-950/80 border border-rose-400 text-rose-200 text-xs font-sans-clean tracking-widest uppercase font-bold">
                  🎉 CELEBRATING MARYAM YASEEN 🎉
                </span>

                <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-gradient-rose drop-shadow-2xl leading-tight">
                  HAPPY BIRTHDAY<br />
                  <span className="text-rose-100">{recipientName} ❤️</span>
                </h1>
              </div>

              {/* Cute Best Friend Illustration Celebration */}
              <BestFriendIllustration scene="holding_cake" showBirthdayOverlayText={true} />

              {/* Heartfelt Wish */}
              <div className="bg-slate-900/90 border border-rose-500/40 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
                <p className="font-serif-classic text-xl sm:text-2xl text-rose-100 italic">
                  “I hope today gives you at least one reason to smile.”
                </p>
              </div>

              {/* Continue to Final Message Button */}
              <div>
                <button
                  onClick={onNext}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-500 hover:to-rose-700 text-white border border-rose-300/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
                >
                  <span>Read My Final Words</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
};
