import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface OpeningSectionProps {
  recipientName: string;
  birthdayDate: string;
  onComplete: () => void;
}

export const OpeningSection: React.FC<OpeningSectionProps> = ({
  recipientName,
  birthdayDate,
  onComplete,
}) => {
  // Phase 0: Step 1 Black screen waiting for touch / voice
  // Phase 1: Step 2 Cake reveal + candles + Birthday song
  // Phase 2: Step 3 Background music active + Section 1 message & Continue button
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [hasVoicePlayed, setHasVoicePlayed] = useState(false);

  useEffect(() => {
    // Attempt automatic voice playback after 1 second on dark screen
    const timer = setTimeout(() => {
      audioEngine.playVoiceIntro(() => {
        setHasVoicePlayed(true);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTouchScreen = () => {
    if (phase !== 0) return;

    // Trigger step 2
    setPhase(1);
    audioEngine.playHeartbeat();
    audioEngine.playCelebrationChime();

    // Play Birthday Audio Sequence
    audioEngine.playBirthdaySequence(() => {
      // Step 3: Transition into soft ambient background music
      audioEngine.startAmbientMusic();
      setPhase(2);
    });

    // Fallback if sequence ends or user advances
    setTimeout(() => {
      audioEngine.startAmbientMusic();
      setPhase(2);
    }, 9000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center select-none overflow-hidden bg-black z-10">
      
      {/* Background stars for opening step */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 via-black to-black opacity-90" />

      <AnimatePresence mode="wait">
        
        {/* STEP 1: BLACK SCREEN WITH VOICE & PULSING TOUCH TARGET */}
        {phase === 0 && (
          <motion.div
            key="step1-blackscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2 }}
            onClick={handleTouchScreen}
            className="relative z-20 flex flex-col items-center justify-center space-y-8 cursor-pointer w-full max-w-md mx-auto min-h-screen"
          >
            {/* Pulsing glowing touch indicator */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-36 h-36 rounded-full bg-rose-600/20 animate-ping opacity-75" />
              <div className="absolute w-28 h-28 rounded-full bg-rose-500/30 animate-pulse blur-md" />
              
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-rose-950 to-rose-700 border border-rose-400/50 flex items-center justify-center shadow-2xl shadow-rose-900/80 glow-rose">
                <Heart className="w-10 h-10 text-rose-200 fill-rose-500/80 animate-pulse" />
              </div>
            </div>

            {/* Voice hint / touch prompt */}
            <div className="space-y-3">
              <p className="font-serif-classic text-xl sm:text-2xl text-slate-200 italic font-light tracking-wide">
                “Please Maryam… screen ko touch karo.”
              </p>
              
              <p className="font-sans-clean text-xs sm:text-sm text-rose-300/80 tracking-widest uppercase flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin-slow" />
                <span>Touch the screen… ❤️</span>
                <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin-slow" />
              </p>
            </div>

            {/* Tap to Begin Fallback Button */}
            <div className="pt-6">
              <button
                onClick={handleTouchScreen}
                className="px-6 py-2.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs uppercase tracking-widest font-sans-clean shadow-lg hover:border-rose-400 transition-all flex items-center gap-2"
              >
                <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Tap to Begin ❤️</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: CAKE REVEAL + CANDLES DISPLAYING "HBD MARYAM ❤️" */}
        {phase === 1 && (
          <motion.div
            key="step2-cake"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2 }}
            className="relative z-20 flex flex-col items-center justify-center space-y-8 w-full max-w-xl mx-auto py-10"
          >
            {/* Golden lights & rose particle glow */}
            <div className="absolute -top-20 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Cake Header Title */}
            <div className="space-y-2">
              <span className="px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-widest uppercase shadow-lg">
                ✨ Surprise Unlocked ✨
              </span>
              <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-gradient-rose tracking-wide">
                Happy Birthday Maryam!
              </h1>
            </div>

            {/* Realistic / Elegant Birthday Cake with Glowing Candles displaying HBD MARYAM ❤️ */}
            <div className="relative py-6 px-4 flex flex-col items-center">
              
              {/* Candles displaying HBD MARYAM ❤️ */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 z-10">
                {['H', 'B', 'D', ' ', 'M', 'A', 'R', 'Y', 'A', 'M', ' ', '❤️'].map((char, idx) => (
                  char === ' ' ? <span key={idx} className="w-2" /> : (
                    <div key={idx} className="flex flex-col items-center">
                      {/* Candle Flame */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 0.9, 1.1], opacity: [0.8, 1, 0.85, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 + idx * 0.1 }}
                        className="w-2 h-3.5 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full blur-[1px] shadow-[0_0_12px_#f59e0b]"
                      />
                      {/* Candle Body with Letter */}
                      <div className="w-5 sm:w-6 h-8 sm:h-9 bg-gradient-to-b from-rose-400 via-rose-600 to-rose-950 border border-rose-300/40 rounded-t-sm flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-md">
                        {char}
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Cake Top Layer */}
              <div className="w-56 sm:w-72 h-16 bg-gradient-to-r from-rose-900 via-pink-700 to-rose-900 rounded-t-3xl border-t border-x border-rose-300/40 flex items-center justify-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-pink-300 via-rose-200 to-pink-300 opacity-80" />
                <span className="font-serif-display text-sm sm:text-base text-rose-100 font-semibold tracking-wider">
                  HAPPY BIRTHDAY MARYAM
                </span>
              </div>

              {/* Cake Middle Layer */}
              <div className="w-64 sm:w-80 h-20 bg-gradient-to-r from-rose-950 via-rose-800 to-rose-950 border-t border-rose-400/30 flex items-center justify-center shadow-2xl relative">
                {/* Decorative Roses */}
                <div className="flex justify-between items-center w-full px-4">
                  <span className="text-xl">🌹</span>
                  <span className="text-sm font-sans-clean text-rose-200/90 tracking-widest font-light">5 AUGUST</span>
                  <span className="text-xl">🌹</span>
                </div>
              </div>

              {/* Cake Bottom Base */}
              <div className="w-72 sm:w-96 h-6 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-b-2xl shadow-2xl border-t border-amber-300" />
            </div>

            {/* Audio Indicator */}
            <div className="flex items-center gap-2 text-rose-200/90 text-sm font-serif-classic italic animate-pulse">
              <Volume2 className="w-4 h-4 text-rose-400" />
              <span>Playing: “Happy birthday to you… Happy birthday to Maryam…”</span>
            </div>

            {/* Proceed directly button */}
            <button
              onClick={() => {
                audioEngine.startAmbientMusic();
                setPhase(2);
              }}
              className="px-6 py-3 bg-rose-900/80 hover:bg-rose-800 border border-rose-500/40 rounded-full text-rose-100 font-sans-clean text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl"
            >
              <span>Continue to Story</span>
              <ArrowRight className="w-4 h-4 text-rose-300" />
            </button>
          </motion.div>
        )}

        {/* STEP 3: SECTION 1 BIRTHDAY MESSAGE & CONTINUE BUTTON */}
        {phase === 2 && (
          <motion.div
            key="step3-message"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex flex-col items-center justify-center space-y-8 w-full max-w-2xl mx-auto py-10"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-widest uppercase shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Section 01 • Happy Birthday Maryam</span>
            </div>

            {/* Title */}
            <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-gradient-rose tracking-tight">
              Happy Birthday, {recipientName} ❤️
            </h1>

            {/* Main Message Card */}
            <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-slate-200 text-left font-serif-classic text-lg sm:text-xl leading-relaxed">
              <p className="text-rose-200 font-medium text-xl sm:text-2xl">
                “Today is not just another date for me.”
              </p>
              
              <p className="text-slate-200">
                “5 August will always be special because it is the day you came into this world.”
              </p>

              <div className="p-4 bg-rose-950/40 border-l-2 border-rose-500 rounded-r-2xl space-y-2 italic text-rose-100/90">
                <p>“I could have simply written Happy Birthday…”</p>
                <p>“But you are someone who deserves more than a few ordinary words.”</p>
              </div>

              <p className="text-rose-200 font-light pt-2">
                “So I created this little world just for you.”
              </p>
            </div>

            {/* Continue Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onComplete}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-sans-clean text-base font-medium rounded-full shadow-2xl shadow-rose-950/80 border border-rose-400/40 transition-all glow-rose"
            >
              <span>Continue ❤️</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

