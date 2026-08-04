import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Play, Pause, FastForward, RotateCcw, Feather } from 'lucide-react';

interface Section4Props {
  letterText: string;
  onNext: () => void;
}

export const Section4PersonalLetter: React.FC<Section4Props> = ({ letterText, onNext }) => {
  const paragraphs = letterText.split('\n\n').filter(p => p.trim().length > 0);
  
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const letterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: any;
    if (isPlaying && visibleCount < paragraphs.length) {
      timer = setTimeout(() => {
        setVisibleCount(prev => prev + 1);
        // Gentle auto scroll if appropriate
        if (letterRef.current) {
          const bottomNode = letterRef.current.querySelector('#letter-bottom');
          bottomNode?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, visibleCount, paragraphs.length]);

  const handleRevealAll = () => {
    setVisibleCount(paragraphs.length);
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setVisibleCount(1);
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-4xl mx-auto z-10 flex flex-col justify-center">
      
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-sans-clean tracking-wider uppercase mb-4">
          <Feather className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 04</span>
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl text-rose-100 font-bold mb-4">
          The Letter I Wish I Could Read To You
        </h2>
        <p className="font-serif-classic text-lg text-slate-300 italic">
          Written from the deepest corner of my heart.
        </p>
      </div>

      {/* Letter Controls */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-8 text-xs font-sans-clean">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 border border-rose-500/30 rounded-full text-rose-300 hover:bg-slate-800 transition-colors"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isPlaying ? 'Pause Auto-Reading' : 'Resume Auto-Reading'}</span>
        </button>

        <button
          onClick={handleRevealAll}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 border border-rose-500/30 rounded-full text-rose-300 hover:bg-slate-800 transition-colors"
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>Read Full Letter Immediately</span>
        </button>

        <button
          onClick={handleRestart}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 border border-rose-500/30 rounded-full text-slate-400 hover:text-rose-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay From Start</span>
        </button>
      </div>

      {/* Elegant Parchment Letter Container */}
      <div
        ref={letterRef}
        className="relative bg-gradient-to-b from-slate-950 via-[#0d0a18] to-slate-950 border border-rose-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-xl space-y-6 glow-rose overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-6">
          <AnimatePresence>
            {paragraphs.slice(0, visibleCount).map((paragraph, index) => {
              const isGreeting = index === 0;
              const isClosing = index >= paragraphs.length - 2;

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className={`${
                    isGreeting
                      ? 'font-serif-display text-2xl sm:text-3xl font-semibold text-rose-300 border-b border-rose-500/20 pb-4'
                      : isClosing
                      ? 'font-serif-display text-xl sm:text-2xl text-rose-200 font-medium italic pt-2'
                      : 'font-serif-classic text-lg sm:text-xl text-slate-200 leading-relaxed italic'
                  }`}
                >
                  {paragraph}
                </motion.p>
              );
            })}
          </AnimatePresence>
        </div>

        {visibleCount < paragraphs.length && (
          <div className="flex items-center gap-2 text-xs font-sans-clean text-rose-400/70 pt-4 italic animate-pulse">
            <Feather className="w-3.5 h-3.5" />
            <span>Words appearing softly...</span>
          </div>
        )}

        <div id="letter-bottom" className="h-1"></div>
      </div>

      {/* Next Button */}
      <div className="text-center pt-12">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-sans-clean text-base font-medium rounded-full shadow-2xl transition-all glow-rose"
        >
          <span>If You Could See Yourself Through My Eyes</span>
          <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
};
