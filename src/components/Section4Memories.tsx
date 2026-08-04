import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MemoryItem } from '../config';
import { Heart, Sparkles, Image as ImageIcon, Music, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { BestFriendIllustration } from './BestFriendIllustration';

interface Section4Props {
  recipientName: string;
  memories: MemoryItem[];
  onNext: () => void;
}

export const Section4Memories: React.FC<Section4Props> = ({
  recipientName,
  memories,
  onNext,
}) => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(memories[0] || null);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
      <div className="max-w-4xl w-full mx-auto space-y-10 py-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-sans-clean tracking-wider uppercase shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 04 • Unforgettable Memories</span>
        </motion.div>

        {/* Cinematic Title & "You Think I Don't Remember You..." Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 text-left"
        >
          <div className="border-b border-slate-800 pb-4">
            <h2 className="font-serif-display text-2xl sm:text-4xl text-rose-100 font-bold">
              “You Think I Don't Remember You…”
            </h2>
            <p className="text-xs font-sans-clean text-rose-400 uppercase tracking-widest mt-1">
              A Quiet Truth
            </p>
          </div>

          <div className="space-y-4 font-serif-classic text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
            <p className="italic">
              “Maybe you believe that I don't remember you anymore.”
            </p>
            <p className="italic text-slate-400">
              “Maybe you think I have moved on and forgotten everything.”
            </p>
            <p className="text-rose-200 font-normal pt-2 border-t border-slate-800">
              “But there hasn't been a single day… and not a single night… when your memory hasn't crossed my mind.”
            </p>
          </div>

          {/* Trigger items grid: Song, Place, Date, Ordinary thing */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-slate-950/80 border border-rose-500/20 rounded-2xl flex flex-col items-center text-center space-y-1">
              <Music className="w-5 h-5 text-rose-400" />
              <span className="text-xs font-sans-clean text-slate-300 font-medium">A Song</span>
            </div>
            <div className="p-3 bg-slate-950/80 border border-rose-500/20 rounded-2xl flex flex-col items-center text-center space-y-1">
              <MapPin className="w-5 h-5 text-rose-400" />
              <span className="text-xs font-sans-clean text-slate-300 font-medium">A Place</span>
            </div>
            <div className="p-3 bg-slate-950/80 border border-rose-500/20 rounded-2xl flex flex-col items-center text-center space-y-1">
              <Calendar className="w-5 h-5 text-rose-400" />
              <span className="text-xs font-sans-clean text-slate-300 font-medium">A Date</span>
            </div>
            <div className="p-3 bg-slate-950/80 border border-rose-500/20 rounded-2xl flex flex-col items-center text-center space-y-1">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span className="text-xs font-sans-clean text-slate-300 font-medium">Something Ordinary</span>
            </div>
          </div>

          <p className="font-serif-classic text-lg text-rose-100 italic pt-2">
            “…and suddenly, I remember you.”
          </p>
          
          <div className="p-4 bg-rose-950/50 border border-rose-500/30 rounded-2xl text-center">
            <p className="font-sans-clean text-sm sm:text-base text-rose-200 font-medium">
              “You may no longer be part of my everyday life, but your memories are still part of me.”
            </p>
          </div>
        </motion.div>

        {/* Interactive Best Friend Illustration Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <BestFriendIllustration scene="photo_album" showBirthdayOverlayText={true} />
        </motion.div>

        {/* Memories Gallery / Selector */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
            <h3 className="font-serif-display text-2xl text-rose-200 font-semibold">
              Treasured Memory Timeline
            </h3>
            <span className="text-xs font-sans-clean text-slate-400">
              Select any memory to view
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {memories.map((mem) => (
              <button
                key={mem.id}
                onClick={() => setSelectedMemory(mem)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  selectedMemory?.id === mem.id
                    ? 'bg-rose-950/80 border-rose-500 text-rose-100 shadow-lg scale-105'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-rose-500/30 hover:text-slate-200'
                }`}
              >
                <div className="font-sans-clean text-xs font-semibold text-rose-400">
                  {mem.number}
                </div>
                <div className="font-serif-display text-sm font-semibold truncate mt-1">
                  {mem.subtitle || mem.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Memory Detail Box */}
          {selectedMemory && (
            <motion.div
              key={selectedMemory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-sans-clean text-xs uppercase tracking-widest text-rose-400 font-semibold">
                  Memory {selectedMemory.number} • {selectedMemory.date || 'Precious Moment'}
                </span>
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </div>

              <h4 className="font-serif-display text-xl text-rose-100 font-semibold">
                {selectedMemory.title}
              </h4>

              {selectedMemory.photoUrl && (
                <div className="rounded-2xl overflow-hidden max-h-64 border border-rose-500/20">
                  <img
                    src={selectedMemory.photoUrl}
                    alt={selectedMemory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="font-sans-clean text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedMemory.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-900/90 to-slate-900 hover:from-rose-800 hover:to-slate-800 text-rose-100 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-2xl transition-all glow-rose"
          >
            <span>Section 05 • The Person I Became</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
