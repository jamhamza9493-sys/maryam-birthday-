/**
 * MARYAM YASEEN - BIRTHDAY SURPRISE AUDIO ENGINE
 * 
 * 🎧 AUDIO FILE PLACEHOLDERS:
 * You can place your custom .mp3 files in the public folder and configure them below!
 * Example:
 *  - "voiceIntro.mp3"       -> Gentle voice: "Please Maryam... screen ko touch karo."
 *  - "birthdaySong.mp3"     -> Happy birthday to you... Happy birthday to Maryam...
 *  - "backgroundMusic.mp3"  -> Soft emotional romantic instrumental music
 */

export const AUDIO_FILES = {
  voiceIntro: "voiceIntro.mp3",
  birthdaySong: "birthdaySong.mp3",
  backgroundMusic: "backgroundMusic.mp3",
};

class AudioSynthEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;
  private isMusicPlaying: boolean = false;
  private musicInterval: any = null;
  
  // Custom audio elements for HTML5 MP3 files
  private voiceAudioEl: HTMLAudioElement | null = null;
  private birthdayAudioEl: HTMLAudioElement | null = null;
  private backgroundAudioEl: HTMLAudioElement | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.backgroundAudioEl) this.backgroundAudioEl.muted = muted;
    if (this.birthdayAudioEl) this.birthdayAudioEl.muted = muted;
    if (this.voiceAudioEl) this.voiceAudioEl.muted = muted;
    if (muted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.backgroundAudioEl) this.backgroundAudioEl.volume = this.volume;
    if (this.birthdayAudioEl) this.birthdayAudioEl.volume = this.volume;
    if (this.voiceAudioEl) this.voiceAudioEl.volume = this.volume;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * STEP 1 VOICE INTRO
   * Attempts to play "voiceIntro.mp3".
   * Fallback: Uses Web SpeechSynthesis with gentle voice reading "Please Maryam... screen ko touch karo."
   */
  public playVoiceIntro(onEnded?: () => void) {
    if (this.isMuted) return;

    try {
      this.voiceAudioEl = new Audio(AUDIO_FILES.voiceIntro);
      this.voiceAudioEl.volume = this.volume;
      this.voiceAudioEl.onended = () => {
        if (onEnded) onEnded();
      };

      const playPromise = this.voiceAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to Web SpeechSynthesis
          this.speakVoiceFallback("Please Maryam... screen ko touch karo.", onEnded);
        });
      }
    } catch (e) {
      this.speakVoiceFallback("Please Maryam... screen ko touch karo.", onEnded);
    }
  }

  private speakVoiceFallback(text: string, onEnded?: () => void) {
    if (this.isMuted) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      utterance.volume = this.volume;
      
      const voices = window.speechSynthesis.getVoices();
      const softVoice = voices.find(v => v.lang.includes('en') || v.lang.includes('hi') || v.lang.includes('ur')) || voices[0];
      if (softVoice) utterance.voice = softVoice;

      utterance.onend = () => {
        if (onEnded) onEnded();
      };
      window.speechSynthesis.speak(utterance);
    } else if (onEnded) {
      setTimeout(onEnded, 2500);
    }
  }

  /**
   * STEP 2 BIRTHDAY AUDIO SEQUENCE
   * Attempts to play "birthdaySong.mp3".
   * Fallback: Synthesizes "Happy Birthday To You... Happy Birthday to Maryam..." melody via Web Audio API.
   */
  public playBirthdaySequence(onEnded?: () => void) {
    if (this.isMuted) return;

    try {
      this.birthdayAudioEl = new Audio(AUDIO_FILES.birthdaySong);
      this.birthdayAudioEl.volume = this.volume;
      this.birthdayAudioEl.onended = () => {
        if (onEnded) onEnded();
      };

      const playPromise = this.birthdayAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.playSynthesizedBirthdaySong(onEnded);
        });
      }
    } catch (e) {
      this.playSynthesizedBirthdaySong(onEnded);
    }
  }

  /**
   * Synthesize "Happy Birthday To You" Notes using Web Audio API
   */
  private playSynthesizedBirthdaySong(onEnded?: () => void) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      // Notes for Happy Birthday in C major (frequencies Hz & duration in sec)
      const notes = [
        { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 1.2 }, // Happy birthday to you
        { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 }, { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.2 }, // Happy birthday to you
        { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 523.25, d: 0.7 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 329.63, d: 0.7 }, { f: 293.66, d: 0.9 }, // Happy birthday dear Maryam
        { f: 466.16, d: 0.35 }, { f: 466.16, d: 0.35 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 }, { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.5 }  // Happy birthday to you!
      ];

      let startTime = ctx.currentTime + 0.1;

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2 * this.volume, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + note.d);

        startTime += note.d + 0.08;
      });

      const totalDuration = (startTime - ctx.currentTime) * 1000;
      if (onEnded) {
        setTimeout(onEnded, totalDuration);
      }
    } catch (e) {
      if (onEnded) setTimeout(onEnded, 4000);
    }
  }

  /**
   * STEP 3 SOFT BACKGROUND MUSIC
   * Plays backgroundMusic.mp3 or soft synthesized romantic piano progression.
   */
  public startAmbientMusic() {
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;

    try {
      this.backgroundAudioEl = new Audio(AUDIO_FILES.backgroundMusic);
      this.backgroundAudioEl.loop = true;
      this.backgroundAudioEl.volume = this.volume;

      const playPromise = this.backgroundAudioEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.startSynthesizedAmbientMusic();
        });
      }
    } catch (e) {
      this.startSynthesizedAmbientMusic();
    }
  }

  private startSynthesizedAmbientMusic() {
    const ctx = this.getContext();
    const chords = [
      [261.63, 329.63, 392.00, 523.25], // C major
      [220.00, 261.63, 329.63, 440.00], // A minor
      [174.61, 220.00, 261.63, 349.23], // F major
      [196.00, 246.94, 293.66, 392.00]  // G major
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    const playAmbientStep = () => {
      if (!this.isMusicPlaying || this.isMuted) return;

      const currentChord = chords[chordIdx];
      const freq = currentChord[noteIdx % currentChord.length];

      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = noteIdx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(700, ctx.currentTime);

        const now = ctx.currentTime;
        const noteDuration = 2.5;
        const noteVolume = 0.07 * this.volume;

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(noteVolume, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + noteDuration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + noteDuration);
      } catch (e) {
        // audio context error
      }

      noteIdx++;
      if (noteIdx % 4 === 0) {
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    playAmbientStep();
    this.musicInterval = setInterval(playAmbientStep, 750);
  }

  public stopAmbientMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    if (this.backgroundAudioEl) {
      this.backgroundAudioEl.pause();
    }
  }

  /**
   * Plays soft heartbeat "lub-dub"
   */
  public playHeartbeat() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      const playThump = (time: number, freq: number, duration: number, vol: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(30, time + duration);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, time);

        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(vol * this.volume, time + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + duration);
      };

      playThump(now, 70, 0.14, 0.35);
      playThump(now + 0.16, 55, 0.18, 0.25);
    } catch (e) {
      // restricted
    }
  }

  /**
   * Magical celebration chime for fireworks & final cake
   */
  public playCelebrationChime() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      const now = ctx.currentTime;

      notes.forEach((freq, i) => {
        const time = now + i * 0.1;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.12 * this.volume, time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + 1.2);
      });
    } catch (e) {
      // fallback
    }
  }
}

export const audioEngine = new AudioSynthEngine();

