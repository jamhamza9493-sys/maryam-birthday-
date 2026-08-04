import React from 'react';

export type SceneType = 
  | 'stargazing'
  | 'sitting_talking'
  | 'laughing'
  | 'holding_cake'
  | 'under_tree'
  | 'waving_goodbye'
  | 'photo_album';

interface BestFriendIllustrationProps {
  scene: SceneType;
  className?: string;
  showBirthdayOverlayText?: boolean;
}

export const BestFriendIllustration: React.FC<BestFriendIllustrationProps> = ({
  scene,
  className = "w-full max-w-md mx-auto h-64 sm:h-80",
  showBirthdayOverlayText = false,
}) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden border border-rose-500/20 bg-gradient-to-b from-slate-900 via-[#0a0612] to-[#040208] shadow-2xl ${className}`}>
      
      {/* Background Graphic Overlay if requested */}
      {showBirthdayOverlayText && (
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none select-none z-0">
          <span className="font-serif-display text-4xl sm:text-6xl font-black tracking-widest text-rose-300 text-center uppercase leading-tight px-4">
            HAPPY BIRTHDAY<br />MARYAM
          </span>
        </div>
      )}

      {/* SVG Vector Renderings */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {scene === 'stargazing' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stars & Moon */}
            <circle cx="200" cy="60" r="1.5" fill="#FFE4E6" className="animate-pulse" />
            <circle cx="80" cy="80" r="2" fill="#FDE68A" />
            <circle cx="320" cy="70" r="2.5" fill="#F472B6" />
            <circle cx="140" cy="40" r="1" fill="#FFF" />
            <circle cx="280" cy="45" r="1.5" fill="#FFE4E6" />
            <path d="M330 40 Q345 40 345 55 Q330 55 330 40" fill="#FEF08A" opacity="0.8" />
            
            {/* Hill Slope */}
            <path d="M0 260 Q200 210 400 260 L400 300 L0 300 Z" fill="#1E1229" />
            <path d="M0 275 Q200 235 400 275 L400 300 L0 300 Z" fill="#0F0918" />

            {/* Boy & Girl Sitting Together Looking Up */}
            <g id="characters">
              {/* Boy */}
              <ellipse cx="170" cy="225" rx="14" ry="20" fill="#3B82F6" opacity="0.8" />
              <circle cx="170" cy="195" r="11" fill="#FCD34D" /> {/* Skin */}
              <path d="M160 190 Q170 180 180 190 Q175 185 160 190" fill="#1E293B" /> {/* Hair */}
              
              {/* Girl (Maryam) */}
              <ellipse cx="210" cy="225" rx="13" ry="19" fill="#EC4899" opacity="0.8" />
              <circle cx="210" cy="195" r="10.5" fill="#FCD34D" /> {/* Skin */}
              <path d="M197 192 Q210 178 223 192 Q225 210 223 218 L197 218 Z" fill="#331825" /> {/* Long Hair */}
              <circle cx="218" cy="190" r="3" fill="#FB7185" /> {/* Rose Hairclip */}

              {/* Little Floating Glowing Heart */}
              <path d="M190 170 Q190 162 195 162 Q200 162 200 170 Q200 176 190 182 Q180 176 180 170 Q180 162 185 162 Q190 162 190 170 Z" fill="#F43F5E" className="animate-bounce" />
            </g>
          </svg>
        )}

        {scene === 'sitting_talking' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Arch & Lights */}
            <path d="M50 80 Q200 30 350 80" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
            <circle cx="100" cy="65" r="4" fill="#FDE68A" />
            <circle cx="160" cy="48" r="4" fill="#F472B6" />
            <circle cx="230" cy="48" r="4" fill="#FDE68A" />
            <circle cx="290" cy="63" r="4" fill="#F472B6" />

            {/* Bench */}
            <rect x="110" y="220" width="180" height="12" rx="4" fill="#78350F" />
            <rect x="125" y="232" width="10" height="40" fill="#451A03" />
            <rect x="265" y="232" width="10" height="40" fill="#451A03" />

            {/* Boy */}
            <circle cx="160" cy="160" r="14" fill="#FDE68A" /> {/* Face */}
            <path d="M148 152 Q160 140 172 152 Q165 145 148 152" fill="#1E1B4B" /> {/* Hair */}
            <rect x="145" y="174" width="30" height="46" rx="10" fill="#3B82F6" /> {/* Coat */}

            {/* Girl */}
            <circle cx="240" cy="162" r="13.5" fill="#FDE68A" /> {/* Face */}
            <path d="M225 158 Q240 142 255 158 Q258 185 255 200 L225 200 Z" fill="#3B0764" /> {/* Long Hair */}
            <circle cx="250" cy="154" r="3.5" fill="#F43F5E" /> {/* Rose Accessory */}
            <rect x="225" y="175" width="30" height="45" rx="10" fill="#FB7185" /> {/* Sweater */}

            {/* Steaming Coffee Cups */}
            <rect x="190" y="210" width="8" height="10" rx="2" fill="#E2E8F0" />
            <rect x="202" y="210" width="8" height="10" rx="2" fill="#E2E8F0" />
            <path d="M192 205 Q194 198 192 195" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M204 205 Q206 198 204 195" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}

        {scene === 'holding_cake' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Confetti & Sparkles */}
            <circle cx="80" cy="60" r="3" fill="#F43F5E" />
            <circle cx="320" cy="50" r="4" fill="#FBBF24" />
            <path d="M120 40 L125 50 L115 50 Z" fill="#A855F7" />
            <path d="M280 80 L288 88 L278 92 Z" fill="#3B82F6" />

            {/* Table */}
            <rect x="100" y="230" width="200" height="15" rx="4" fill="#831843" />

            {/* Birthday Cake */}
            <rect x="165" y="180" width="70" height="50" rx="8" fill="#F472B6" />
            <path d="M165 195 Q175 205 185 195 Q195 205 205 195 Q215 205 225 195 Q235 205 235 195 L235 180 L165 180 Z" fill="#FFF" />
            {/* Candles */}
            <rect x="180" y="165" width="4" height="15" fill="#FDE68A" />
            <rect x="198" y="160" width="4" height="20" fill="#3B82F6" />
            <rect x="216" y="165" width="4" height="15" fill="#FDE68A" />
            {/* Flame */}
            <circle cx="182" cy="160" r="3" fill="#EF4444" className="animate-pulse" />
            <circle cx="200" cy="154" r="3.5" fill="#F59E0B" className="animate-pulse" />
            <circle cx="218" cy="160" r="3" fill="#EF4444" className="animate-pulse" />

            {/* Boy Cheering */}
            <circle cx="120" cy="160" r="13" fill="#FDE68A" />
            <path d="M108 152 Q120 142 132 152 Q126 146 108 152" fill="#0F172A" />
            <path d="M110 173 L130 173 L125 230 L115 230 Z" fill="#2563EB" />
            <path d="M100 180 L80 150" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" /> {/* Raised Hand */}

            {/* Girl Holding Cake */}
            <circle cx="280" cy="160" r="13" fill="#FDE68A" />
            <path d="M265 155 Q280 140 295 155 Q298 180 295 195 L265 195 Z" fill="#4C0519" />
            <circle cx="290" cy="150" r="3.5" fill="#F43F5E" />
            <path d="M270 173 L290 173 L285 230 L275 230 Z" fill="#DB2777" />

            {/* Birthday Balloons */}
            <g id="balloons">
              <ellipse cx="60" cy="100" rx="16" ry="22" fill="#E11D48" />
              <path d="M60 122 L60 170" stroke="#FDA4AF" strokeWidth="1" />
              <ellipse cx="340" cy="90" rx="16" ry="22" fill="#8B5CF6" />
              <path d="M340 112 L340 170" stroke="#DDD6FE" strokeWidth="1" />
            </g>
          </svg>
        )}

        {scene === 'under_tree' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tree Trunk & Canopy */}
            <path d="M80 300 C90 200 110 150 140 120 C120 80 160 30 220 40 C280 20 330 70 320 120 C350 160 310 220 280 300 Z" fill="#881337" opacity="0.4" />
            <path d="M160 300 C165 240 175 180 190 150 C180 120 210 80 250 90 C290 80 320 120 310 160 C320 210 280 250 260 300 Z" fill="#9F1239" opacity="0.7" />
            <path d="M170 300 L185 200 C185 200 160 170 145 150" stroke="#451A03" strokeWidth="10" strokeLinecap="round" />

            {/* Falling Leaves/Petals */}
            <circle cx="130" cy="180" r="3" fill="#FB7185" className="animate-bounce" />
            <circle cx="210" cy="140" r="2.5" fill="#F43F5E" />
            <circle cx="280" cy="190" r="3.5" fill="#FDA4AF" />
            <circle cx="240" cy="220" r="2" fill="#FECDD3" />

            {/* Boy & Girl Sitting Under Tree */}
            <ellipse cx="190" cy="260" rx="12" ry="18" fill="#1E3A8A" />
            <circle cx="190" cy="235" r="9.5" fill="#FDE68A" />
            
            <ellipse cx="225" cy="260" rx="12" ry="18" fill="#9D174D" />
            <circle cx="225" cy="235" r="9" fill="#FDE68A" />
            <path d="M215 232 Q225 220 235 232 Q237 250 235 258 L215 258 Z" fill="#3B0764" />
            <circle cx="232" cy="228" r="2.5" fill="#F43F5E" />
          </svg>
        )}

        {scene === 'waving_goodbye' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sunset Gradient Background Circle */}
            <circle cx="200" cy="170" r="90" fill="#F59E0B" opacity="0.25" />
            <circle cx="200" cy="170" r="60" fill="#EF4444" opacity="0.2" />

            {/* Ground */}
            <path d="M0 240 Q200 220 400 240 L400 300 L0 300 Z" fill="#111827" />

            {/* Boy Standing Silhouetted Waving */}
            <ellipse cx="150" cy="210" rx="12" ry="25" fill="#374151" />
            <circle cx="150" cy="175" r="10" fill="#4B5563" />
            <path d="M140 185 L120 160" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" /> {/* Waving Hand */}

            {/* Girl Standing Waving Back */}
            <ellipse cx="250" cy="210" rx="12" ry="24" fill="#831843" />
            <circle cx="250" cy="175" r="9.5" fill="#9D174D" />
            <path d="M242 172 Q250 160 258 172 Q260 195 258 208 L242 208 Z" fill="#4C0519" />
            <path d="M260 185 L280 160" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />

            {/* Small Glowing Heart Between Them */}
            <path d="M200 180 Q200 174 204 174 Q208 174 208 180 Q208 185 200 190 Q192 185 192 180 Q192 174 196 174 Q200 174 200 180 Z" fill="#F43F5E" opacity="0.8" />
          </svg>
        )}

        {scene === 'photo_album' && (
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Framed Photo Frame */}
            <rect x="100" y="50" width="200" height="170" rx="12" fill="#1E1B4B" stroke="#F43F5E" strokeWidth="3" />
            <rect x="110" y="60" width="180" height="150" rx="8" fill="#0F172A" />

            {/* Photo Scene inside frame */}
            <circle cx="200" cy="100" r="30" fill="#FDE68A" opacity="0.2" />
            <path d="M120 190 Q200 160 280 190 L280 210 L120 210 Z" fill="#831843" />
            
            <circle cx="180" cy="135" r="9" fill="#FDE68A" />
            <rect x="172" y="145" width="16" height="25" rx="5" fill="#2563EB" />

            <circle cx="220" cy="135" r="8.5" fill="#FDE68A" />
            <rect x="212" y="145" width="16" height="25" rx="5" fill="#EC4899" />

            {/* Sparkles on Frame */}
            <path d="M95 45 L100 55 L90 55 Z" fill="#FBBF24" />
            <path d="M305 220 L312 228 L302 230 Z" fill="#F43F5E" />
          </svg>
        )}
      </div>

    </div>
  );
};
