import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface Section6Props {
  recipientName: string;
  onNext: () => void;
}

export const Section6InteractiveHeart: React.FC<Section6Props> = ({ recipientName, onNext }) => {
  const [bloomed, setBloomed] = useState<boolean>(false);

  const handleBloomRose = () => {
    setBloomed(true);
    audioEngine.playHeartbeat();
  };

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
          <span>Section 06 • The Love That Remained</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-display text-3xl sm:text-5xl font-bold text-rose-100 tracking-tight"
        >
          The Love That Didn't Disappear
        </motion.h2>

        {/* Blooming Rose Animation Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative py-8 flex flex-col items-center justify-center"
        >
          <button
            onClick={handleBloomRose}
            className={`group relative p-8 rounded-full border transition-all duration-700 cursor-pointer ${
              bloomed
                ? 'bg-rose-950/90 border-rose-400 shadow-2xl glow-rose scale-110'
                : 'bg-slate-900/80 border-rose-500/30 hover:border-rose-400'
            }`}
          >
            {/* Glowing Petals Layer */}
            <div className={`absolute inset-0 rounded-full bg-rose-500/20 blur-xl transition-opacity duration-1000 ${
              bloomed ? 'opacity-100 animate-pulse-slow' : 'opacity-0'
            }`} />

            <div className="relative z-10 flex flex-col items-center">
              <Heart className={`w-16 h-16 transition-all duration-700 ${
                bloomed 
                  ? 'text-rose-500 fill-rose-500 scale-125' 
                  : 'text-rose-400/80 fill-rose-500/30 group-hover:scale-110'
              }`} />
              
              <span className="text-xs font-sans-clean font-medium text-rose-300 mt-3">
                {bloomed ? 'Forever In My Heart' : 'Touch To Bloom Rose'}
              </span>
            </div>
          </button>
        </motion.div>

        {/* Emotional Narrative Statements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          <div className="space-y-4 font-serif-classic text-xl sm:text-2xl text-slate-200 leading-relaxed font-light">
            <p className="text-slate-400 italic">
              “There is one thing I don't want to lie about.”
            </p>
            
            <p className="font-serif-display text-2xl sm:text-3xl text-rose-200 font-bold not-italic pt-2 border-t border-slate-800">
              “I still love you.”
            </p>

            <div className="space-y-2 text-rose-100">
              <p>“I loved you before.”</p>
              <p>“I love you today.”</p>
              <p className="font-normal text-rose-200">
                “And I believe some part of my heart will continue loving you for the rest of my life.”
              </p>
            </div>

            <div className="py-2 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-300 text-sm font-sans-clean font-semibold uppercase tracking-wider">
                Until My Last Breath ❤️
              </span>
            </div>
          </div>

          {/* Respectful Guarantee Disclaimer */}
          <div className="bg-slate-950/80 border border-rose-500/20 rounded-2xl p-5 space-y-2 font-sans-clean text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2 text-rose-400 font-semibold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-rose-400" />
              <span>Sincere Guarantee</span>
            </div>
            <p className="text-slate-300">“Not as a demand.”</p>
            <p className="text-slate-300">“Not as an expectation.”</p>
            <p className="text-slate-300">“Not as a claim over your life.”</p>
            <p className="text-rose-200 font-semibold pt-1">
              “Just as a feeling that became a part of who I am.”
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
            <span>Section 07 • Shared Best Friend Moments</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
