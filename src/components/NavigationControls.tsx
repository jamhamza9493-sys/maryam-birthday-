import React, { useState } from 'react';
import { Heart, ChevronUp, ChevronDown, List } from 'lucide-react';

interface NavigationControlsProps {
  currentSection: number;
  totalSections: number;
  onSelectSection: (index: number) => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSection,
  totalSections,
  onSelectSection,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sectionNames = [
    "00. Opening",
    "01. The Beginning & Wait",
    "02. One More Truth",
    "03. Sincere Apology",
    "04. Unforgettable Memories",
    "05. The Person I Became",
    "06. Love That Remained",
    "07. Best Friend Moments",
    "08. Main Love Letter",
    "09. Sacred Prayer",
    "10. Birthday Celebration",
    "11. Final Message"
  ];

  if (currentSection === 0) return null; // Don't block opening sequence

  return (
    <div className="fixed bottom-4 left-4 z-40 font-sans-clean text-xs">
      <div className="relative">
        
        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2 bg-slate-900/95 hover:bg-slate-800 border border-rose-500/30 backdrop-blur-md rounded-full text-rose-200 shadow-xl transition-all"
        >
          <List className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-medium hidden sm:inline">
            {sectionNames[currentSection] || `Section ${currentSection}`}
          </span>
          <span className="font-medium sm:hidden">
            {currentSection} / {totalSections}
          </span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        {/* Section List Dropdown */}
        {isOpen && (
          <div className="absolute bottom-12 left-0 bg-slate-900/95 border border-rose-500/30 rounded-2xl p-2 shadow-2xl backdrop-blur-xl w-64 max-h-80 overflow-y-auto space-y-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="px-3 py-1.5 text-[11px] font-semibold text-rose-400/80 uppercase tracking-wider border-b border-slate-800">
              Jump to Section
            </div>
            {sectionNames.map((name, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelectSection(index);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                  currentSection === index
                    ? 'bg-rose-950/70 text-rose-200 border border-rose-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <span className="truncate">{name}</span>
                {currentSection === index && <Heart className="w-3 h-3 fill-rose-500 text-rose-500 shrink-0" />}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
