import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Smile, Compass, HeartHandshake, Bookmark, Sun, CloudMoon, UserCheck } from 'lucide-react';

interface Section3Props {
  onNext: () => void;
}

export const Section3WhatIFeel: React.FC<Section3Props> = ({ onNext }) => {
  const cards = [
    {
      title: "Your Smile",
      text: "Your smile has a way of making even an ordinary moment feel special.",
      icon: Smile,
      gradient: "from-rose-500/20 via-slate-900 to-slate-950"
    },
    {
      title: "Your Presence",
      text: "Sometimes I don't need anything else. Just knowing you're there is enough.",
      icon: Compass,
      gradient: "from-amber-500/20 via-slate-900 to-slate-950"
    },
    {
      title: "Your Heart",
      text: "I admire the person you are, not just the person the world sees.",
      icon: HeartHandshake,
      gradient: "from-pink-500/20 via-slate-900 to-slate-950"
    },
    {
      title: "Our Memories",
      text: "Every memory with you has become something I quietly carry with me.",
      icon: Bookmark,
      gradient: "from-red-500/20 via-slate-900 to-slate-950"
    },
    {
      title: "Your Happiness",
      text: "Your happiness genuinely matters to me.",
      icon: Sun,
      gradient: "from-amber-400/20 via-slate-900 to-slate-950"
    },
    {
      title: "Your Dreams",
      text: "I pray that life gives you every beautiful thing you deserve.",
      icon: CloudMoon,
      gradient: "from-purple-500/20 via-slate-900 to-slate-950"
    },
    {
      title: "You",
      text: "And after everything I could write… it simply comes down to you.",
      icon: UserCheck,
      gradient: "from-rose-600/30 via-slate-900 to-slate-950",
      highlight: true
    }
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto z-10 flex flex-col justify-center">

      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-sans-clean tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>Section 03</span>
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl text-rose-100 font-bold mb-4">
          What I Feel For You
        </h2>
        <p className="font-serif-classic text-lg sm:text-xl text-slate-300 italic max-w-xl mx-auto">
          Seven simple truths about what you mean to my heart.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((item, idx) => {
          const IconComp = item.icon;
          const isLast = item.highlight;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative bg-gradient-to-b ${item.gradient} border ${
                isLast ? 'border-rose-400/60 lg:col-span-3 md:col-span-2' : 'border-rose-500/20'
              } rounded-3xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-300 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-sans-clean font-semibold text-rose-400/50">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className={`font-serif-display ${isLast ? 'text-2xl sm:text-3xl' : 'text-xl'} text-rose-100 font-semibold mb-3`}>
                  {item.title}
                </h3>

                <p className={`font-serif-classic ${isLast ? 'text-xl sm:text-2xl' : 'text-lg'} text-slate-200 leading-relaxed italic`}>
                  “{item.text}”
                </p>
              </div>

              {isLast && (
                <div className="mt-4 pt-3 border-t border-rose-500/30 flex justify-center">
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse-slow" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Emotional Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-8 max-w-2xl mx-auto text-center space-y-3 shadow-2xl glow-rose mb-12"
      >
        <p className="font-serif-classic text-xl sm:text-2xl text-slate-300 italic">
          “I don't love you because of one perfect moment.”
        </p>
        <p className="font-serif-display text-2xl sm:text-3xl text-gradient-rose font-bold">
          “I love you because thousands of little moments made you important to my heart.”
        </p>
      </motion.div>

      {/* Next Button */}
      <div className="text-center">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900/90 hover:bg-rose-950/80 text-rose-200 border border-rose-500/40 rounded-full font-sans-clean text-base font-medium shadow-xl transition-all glow-rose"
        >
          <span>Read My Personal Letter</span>
          <Heart className="w-4 h-4 text-rose-400 fill-rose-500/40 group-hover:scale-110 transition-transform" />
        </button>
      </div>

    </section>
  );
};
