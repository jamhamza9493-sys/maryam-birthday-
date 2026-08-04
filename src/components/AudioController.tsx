import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Settings, Sparkles, Upload, Play, Pause } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface AudioControllerProps {
  onOpenCustomize?: () => void;
}

export const AudioController: React.FC<AudioControllerProps> = ({ onOpenCustomize }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.6);
  const [showControls, setShowControls] = useState<boolean>(false);

  useEffect(() => {
    // Start ambient music on component mount if allowed
    audioEngine.setVolume(volume);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioEngine.stopAmbientMusic();
      setIsPlaying(false);
    } else {
      audioEngine.startAmbientMusic();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioEngine.setMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolumeState(val);
    audioEngine.setVolume(val);
    if (val === 0) {
      setIsMuted(true);
      audioEngine.setMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
      audioEngine.setMuted(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Audio main trigger pill */}
      <div className="relative flex items-center bg-slate-900/80 backdrop-blur-md border border-rose-500/20 rounded-full px-3 py-1.5 shadow-lg shadow-rose-950/20 text-slate-200">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-xs font-medium hover:text-rose-300 transition-colors py-1 px-1.5"
          title={isPlaying ? "Pause Ambiance" : "Play Ambiance"}
        >
          <div className="relative">
            <Music className={`w-4 h-4 ${isPlaying && !isMuted ? 'text-rose-400 animate-pulse' : 'text-slate-400'}`} />
            {isPlaying && !isMuted && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
            )}
          </div>
          <span className="hidden sm:inline font-sans-clean text-xs">
            {isPlaying ? "Music On" : "Music Paused"}
          </span>
        </button>

        <div className="h-3 w-px bg-slate-700/60 mx-1"></div>

        <button
          onClick={toggleMute}
          className="p-1.5 hover:text-rose-300 transition-colors rounded-full"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-slate-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-rose-300" />
          )}
        </button>

        <button
          onClick={() => setShowControls(!showControls)}
          className="p-1.5 hover:text-rose-300 transition-colors rounded-full text-slate-400"
          title="Volume & Audio Settings"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Customize app button for user */}
      {onOpenCustomize && (
        <button
          onClick={onOpenCustomize}
          className="flex items-center gap-1.5 bg-rose-950/70 hover:bg-rose-900/80 border border-rose-500/30 backdrop-blur-md text-rose-200 rounded-full px-3 py-2 text-xs font-medium transition-all shadow-md shadow-rose-950/30 hover:border-rose-400/50"
          title="Personalize Memories & Content"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span className="hidden md:inline font-sans-clean">Personalize</span>
        </button>
      )}

      {/* Expanded Controls Popover */}
      {showControls && (
        <div className="absolute top-12 right-0 bg-slate-900/95 border border-rose-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl w-64 text-slate-200 z-50 text-xs font-sans-clean animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-rose-200 flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-rose-400" /> Ambiance Settings
            </span>
            <button
              onClick={() => setShowControls(false)}
              className="text-slate-400 hover:text-slate-200 text-sm font-bold"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-rose-500 bg-slate-800 rounded-lg h-1.5 cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-slate-800">
              <p className="text-[11px] text-slate-400 mb-1.5">
                Romantic piano synthesizer is currently active.
              </p>
              <button
                onClick={togglePlay}
                className="w-full py-1.5 px-3 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-500/30 rounded-lg text-rose-200 text-xs flex items-center justify-center gap-2 transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? "Pause Audio" : "Play Romantic Melody"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
