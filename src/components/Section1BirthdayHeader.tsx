import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowRight, Calendar, Sparkles, Clock } from 'lucide-react';

interface Section1Props {
  recipientName: string;
  waitStartDate?: string;
  birthdayDate?: string;
  onNext: () => void;
}

export const Section1BirthdayHeader: React.FC<Section1Props> = ({
  recipientName,
  waitStartDate = "17 July",
  birthdayDate = "5 August",
  onNext,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
      <div className="max-w-3xl w-full mx-auto space-y-10 py-10">

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 01 • The Beginning & The Wait</span>
        </motion.div>

        {/* Main Title Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gradient-rose drop-shadow-2xl">
            Happy Birthday, {recipientName}
          </h1>
          
          <div className="flex justify-center items-center gap-2">
            <span className="h-px w-12 bg-rose-500/40" />
            <Heart className="w-7 h-7 text-rose-500 fill-rose-500/80 animate-pulse" />
            <span className="h-px w-12 bg-rose-500/40" />
          </div>
        </motion.div>

        {/* Core Emotional Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative bg-gradient-to-b from-slate-900/90 to-rose-950/30 border border-rose-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4 text-slate-200"
        >
          <p className="font-serif-classic text-xl sm:text-2xl text-rose-100 italic leading-relaxed font-light">
            “I still love you the way I always did. Life changed our circumstances, but it never changed what you mean to my heart.”
          </p>

          <p className="font-sans-clean text-sm sm:text-base text-rose-200/90 leading-relaxed pt-2 border-t border-rose-500/20">
            “You brought a kind of happiness into my life that I will always remember.”
          </p>
        </motion.div>

        {/* 17 JULY → 5 AUGUST INTERACTIVE TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-slate-900/80 border border-rose-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6 text-left"
        >
          <div className="flex items-center gap-3 border-b border-rose-500/20 pb-4">
            <div className="p-2.5 bg-rose-950/70 border border-rose-500/40 rounded-2xl text-rose-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-display text-xl sm:text-2xl text-rose-200 font-semibold">
                {waitStartDate} → {birthdayDate}
              </h2>
              <p className="text-xs text-slate-400 font-sans-clean">
                The Countdown From My Heart
              </p>
            </div>
          </div>

          <div className="space-y-3 font-serif-classic text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              “Since <span className="text-rose-300 font-semibold">{waitStartDate}</span>, I had been waiting for one date.”
            </p>
            <p className="text-rose-200 font-medium">
              “<span className="text-2xl font-serif-display text-rose-400">{birthdayDate}</span>.”
            </p>
            <p className="italic text-slate-400">
              “Not because it is just another date… But because it is the birthday of someone who still means so much to me.”
            </p>
            <p className="text-rose-200/90 font-light">
              “I kept waiting for this day because somewhere in my heart I wanted to be the first person to wish you.”
            </p>
          </div>

          {/* Animated Interactive Timeline Graphic */}
          <div className="pt-4 border-t border-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              
              {/* Step 1: 17 July */}
              <div 
                onClick={() => setActiveStep(1)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 1 
                    ? 'bg-rose-950/80 border-rose-500 shadow-lg text-rose-100 scale-105' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-rose-500/30'
                }`}
              >
                <Calendar className="w-5 h-5 mx-auto mb-2 text-rose-400" />
                <div className="font-serif-display text-lg font-bold">{waitStartDate}</div>
                <div className="text-xs font-sans-clean text-slate-400 mt-1">The Wait Begins</div>
              </div>

              {/* Arrow / Waiting */}
              <div 
                onClick={() => setActiveStep(2)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 2 
                    ? 'bg-rose-950/80 border-rose-500 shadow-lg text-rose-100 scale-105' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-rose-500/30'
                }`}
              >
                <Clock className="w-5 h-5 mx-auto mb-2 text-rose-400 animate-spin-slow" />
                <div className="font-serif-display text-sm font-semibold">Counting Down</div>
                <div className="text-xs font-sans-clean text-slate-400 mt-1">Every Single Moment</div>
              </div>

              {/* Step 3: 5 August */}
              <div 
                onClick={() => setActiveStep(3)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === 3 
                    ? 'bg-rose-950/80 border-rose-500 shadow-lg text-rose-100 scale-105' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-rose-500/30'
                }`}
              >
                <Heart className="w-5 h-5 mx-auto mb-2 text-rose-400 fill-rose-500" />
                <div className="font-serif-display text-lg font-bold text-rose-300">{birthdayDate}</div>
                <div className="text-xs font-sans-clean text-rose-200 mt-1">Happy Birthday ❤️</div>
              </div>

            </div>
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
            <span>Continue To Section 02</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
