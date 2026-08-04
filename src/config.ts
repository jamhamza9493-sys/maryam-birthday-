/**
 * MARYAM YASEEN - BIRTHDAY SURPRISE CONFIGURATION
 * 
 * You can easily customize any text, memories, letter, dates, or photos below!
 * You can also edit these live inside the application using the "Customize Experience" button.
 */

export interface MemoryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  photoUrl?: string; // Optional image URL or base64 data
}

export interface AppConfig {
  recipientName: string;
  birthdayDate: string;
  waitStartDate: string;
  relationshipTitle: string;
  customMusicUrl?: string;
  memories: MemoryItem[];
  letterText: string;
  prayers: string[];
}

export const defaultConfig: AppConfig = {
  recipientName: "Maryam Yaseen",
  birthdayDate: "5 August",
  waitStartDate: "17 July",
  relationshipTitle: "My Dearest Maryam",
  customMusicUrl: "", // Optional custom MP3 audio URL

  // Memory cards - Easily editable with placeholders MEMORY_01, MEMORY_02, PHOTO_01...
  memories: [
    {
      id: "mem-1",
      number: "01",
      title: "Memory 01 — A Moment I'll Never Forget",
      subtitle: "The Beginning of Something Special",
      description: "MEMORY_01: [Add our first special memory here. Replace this placeholder with the story of the first day or moment that stayed with you forever.]",
      date: "Special Moment",
      photoUrl: "" // PHOTO_01: Add image URL or upload photo in customize mode
    },
    {
      id: "mem-2",
      number: "02",
      title: "Memory 02 — The Moment That Made Me Smile",
      subtitle: "Unfiltered Joy",
      description: "MEMORY_02: [Add another unforgettable memory here. Something funny or sweet that made your heart skip a beat or made you laugh out loud.]",
      date: "Precious Memory",
      photoUrl: "" // PHOTO_02
    },
    {
      id: "mem-3",
      number: "03",
      title: "Memory 03 — A Moment I Wish I Could Live Again",
      subtitle: "Frozen in Time",
      description: "MEMORY_03: [Add memory here. A peaceful, warm afternoon, a deep conversation, or a shared glance you wish you could pause forever.]",
      date: "Unforgettable Day",
      photoUrl: "" // PHOTO_03
    },
    {
      id: "mem-4",
      number: "04",
      title: "Memory 04 — The Little Thing You Probably Don't Remember",
      subtitle: "Silent Magic",
      description: "MEMORY_04: [Add memory here. A tiny habit, a phrase she said, a smile, or a small gesture she might have forgotten but you hold dear.]",
      date: "Little Detail",
      photoUrl: "" // PHOTO_04
    },
    {
      id: "mem-5",
      number: "05",
      title: "Memory 05 — A Memory I Carry In My Heart",
      subtitle: "Forever Precious",
      description: "MEMORY_05: [Add memory here. A profound moment when you realized just how deeply she means to you and how irreplaceable she is.]",
      date: "Deep Connection",
      photoUrl: "" // PHOTO_05
    }
  ],

  // Main Handwritten Love Letter
  letterText: `My dearest Maryam,

I don't know if these words can ever completely explain what is inside my heart, but today I want to try.

First of all, Happy Birthday. ❤️

5 August will always be a special date for me because it is the day you came into this world.

I had been waiting for this day since 17 July. I kept thinking that when 5 August finally came, I would somehow be the first person to wish you.

But life has changed.

You are going to be engaged to someone else, and I accept that this is what fate has written. I know that I cannot change what is written for you.

I don't want to stand against your happiness.

I don't want to disturb your life.

I only want to tell you something honestly, once, from the deepest part of my heart.

I still love you.

The same way I loved you before.

Maybe circumstances changed. Maybe distance changed everything around us. But my feelings did not simply disappear.

I have so many memories with you that I don't think I could ever forget them all. Some memories may seem small to someone else, but to me they are pieces of a time when I was genuinely happy.

When you were around, my laughter felt real. My smile came naturally. Even ordinary days had something beautiful in them.

After you left, I realized how much happiness your presence had quietly brought into my life.

I still remember you.

There hasn't been a single day or night when your memory hasn't crossed my mind in some way.

Maybe you believe I don't remember you anymore. Maybe you think time has made me forget.

But some people cannot simply be erased from your heart because they became part of your memories, your experiences and your story.

You are one of those people for me.

I also know that I made many mistakes.

I know that some of my actions hurt you.

For every moment in which I caused you pain, I am truly sorry.

Please forgive me for my mistakes if your heart ever allows you to. I don't ask for anything else.

I don't want this letter to make you feel guilty.

I don't want you to feel responsible for my sadness.

I simply want you to know the truth about what you meant to me.

You were someone I loved deeply.

And you are still someone I remember with love.

I don't know what the future holds.

I don't know where life will take either of us.

But I know that as long as Allah gives me life, a part of my heart will always carry the memories we made.

I will continue wishing good things for you.

I will continue praying for your happiness.

And I will always hope that life treats you kindly.

If loving someone means wanting them to be happy, even when their path is no longer the same as yours, then I hope my love can always remain that kind of love.

Maryam, I loved you before.

I love you today.

And I believe I will carry this love in some form until my last breath.

Happy Birthday, Maryam Yaseen.

May you always smile.

May you always be happy.

May every dream in your heart find its way to reality.

And may Allah protect you wherever life takes you.

Thank you for every memory.

Thank you for every smile.

Thank you for being a beautiful chapter of my life.

With all the love and respect in my heart,

Always wishing you happiness. ❤️`,

  // Section 9 Final Prayer
  prayers: [
    "Ya Allah… Wherever Maryam goes, protect her.",
    "Give her peace when her heart feels heavy.",
    "Give her happiness that doesn't fade quickly.",
    "Give her success in her dreams and efforts.",
    "Protect her from pain, disappointment and people who may hurt her.",
    "Bless her with good health, a long life and countless reasons to smile.",
    "Give her a beautiful future.",
    "Put barakah in every step she takes.",
    "And if someone is written for her, make that person a source of peace, respect and happiness for her.",
    "Ya Allah, I cannot control destiny, and I accept what You have written. I only ask You to keep her safe and happy, wherever her life takes her.",
    "And if our paths were ever meant to cross again, let it happen in the most beautiful way and according to Your wisdom. Ameen. 🤲❤️"
  ]
};

// Helper to load config with localStorage override support
const STORAGE_KEY = "maryam_birthday_app_config_v2";

export function loadAppConfig(): AppConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultConfig, ...parsed };
    }
  } catch (e) {
    console.error("Failed to load custom app config", e);
  }
  return defaultConfig;
}

export function saveAppConfig(config: AppConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Failed to save custom app config", e);
  }
}

export function resetAppConfig(): AppConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to reset config", e);
  }
  return defaultConfig;
}

