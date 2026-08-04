import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Calendar, Image as ImageIcon, X, ChevronRight, Eye } from 'lucide-react';
import { MemoryItem } from '../config';

interface Section2Props {
  recipientName: string;
  memories: MemoryItem[];
  onNext: () => void;
}

export const Section2MemoriesTimeline: React.FC<Section2Props> = ({
  recipientName,
  memories,
  onNext,
}) => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto z-10 flex flex-col justify-center">
      
      {/* Section Badge */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-sans-clean tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 02 — Timeline of Hearts</span>
        </span>
        
        <h2 className="font-serif-display text-3xl sm:text-5xl text-rose-100 font-bold mb-6">
          The Memories I Can Never Forget
        </h2>
      </div>

      {/* Intro Narrative Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-slate-900/70 border border-rose-500/20 backdrop-blur-xl rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl space-y-4 text-center max-w-3xl mx-auto"
      >
        <p className="font-serif-classic text-xl sm:text-2xl text-slate-200 leading-relaxed italic">
          “{recipientName}, we have created so many memories together.”
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-sans-clean py-2 text-rose-200">
          <div className="bg-rose-950/40 border border-rose-500/20 py-2 px-3 rounded-xl">✨ Beautiful</div>
          <div className="bg-rose-950/40 border border-rose-500/20 py-2 px-3 rounded-xl">😊 Funny</div>
          <div className="bg-rose-950/40 border border-rose-500/20 py-2 px-3 rounded-xl">🌧️ Difficult</div>
        </div>
        <p className="font-serif-classic text-lg sm:text-xl text-slate-300 italic">
          “But every one of them became a part of my story with you.”
        </p>
        <p className="font-serif-classic text-lg sm:text-xl text-rose-200 italic pt-2 border-t border-slate-800">
          “There are memories I could never explain to anyone else… because they belong to a place only you and I understand.”
        </p>
        <p className="font-serif-display text-xl sm:text-2xl text-rose-400 font-semibold pt-2 flex items-center justify-center gap-2">
          “And no matter how much time passes, I don't think I will ever forget them.” <Heart className="w-5 h-5 fill-rose-500 inline-block" />
        </p>
      </motion.div>

      {/* Interactive Timeline Grid */}
      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-rose-500/40 via-rose-500/20 to-transparent -translate-x-1/2"></div>

        {memories.map((mem, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div
                  onClick={() => setSelectedMemory(mem)}
                  className="group relative bg-slate-900/80 hover:bg-slate-900 border border-rose-500/25 hover:border-rose-400/60 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-rose-950/30 glow-rose"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-3xl font-serif-display font-bold text-rose-400/60 group-hover:text-rose-400 transition-colors">
                      {mem.number}
                    </span>
                    {mem.date && (
                      <span className="flex items-center gap-1 text-[11px] font-sans-clean text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                        <Calendar className="w-3 h-3 text-rose-400" />
                        {mem.date}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-display text-xl text-slate-100 font-semibold mb-2 group-hover:text-rose-200 transition-colors">
                    {mem.title}
                  </h3>

                  <p className="font-sans-clean text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                    {mem.description}
                  </p>

                  {/* Photo preview if available */}
                  {mem.photoUrl && (
                    <div className="mb-4 rounded-2xl overflow-hidden h-44 w-full relative border border-rose-500/20">
                      <img
                        src={mem.photoUrl}
                        alt={mem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-sans-clean text-rose-300 pt-3 border-t border-slate-800/80">
                    <span className="flex items-center gap-1 font-medium group-hover:underline">
                      <Eye className="w-3.5 h-3.5" /> Tap to read full memory
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Center Timeline Node */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-rose-500 text-rose-400 z-10 shadow-lg shadow-rose-950">
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>

              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Memory Detail Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-slate-100 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-sans-clean text-rose-400 font-semibold tracking-wider uppercase">
                Memory {selectedMemory.number}
              </span>

              <h3 className="font-serif-display text-2xl font-bold text-rose-100">
                {selectedMemory.title}
              </h3>

              {selectedMemory.photoUrl && (
                <div className="rounded-2xl overflow-hidden border border-rose-500/30 max-h-72">
                  <img
                    src={selectedMemory.photoUrl}
                    alt={selectedMemory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="font-sans-clean text-slate-200 leading-relaxed text-base whitespace-pre-wrap">
                {selectedMemory.description}
              </p>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="px-5 py-2 bg-rose-950 hover:bg-rose-900 text-rose-200 rounded-xl text-xs font-medium border border-rose-500/30 transition-colors"
                >
                  Close Memory
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next Button */}
      <div className="text-center pt-14">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-sans-clean text-base font-medium rounded-full shadow-2xl transition-all glow-rose"
        >
          <span>What I Feel For You</span>
          <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
};
