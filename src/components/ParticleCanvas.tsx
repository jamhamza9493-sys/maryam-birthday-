import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  color: string;
  type: 'petal' | 'heart' | 'golden' | 'firefly' | 'balloon';
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
}

interface WatermarkText {
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  text: string;
}

interface ParticleCanvasProps {
  intensity?: 'gentle' | 'intense' | 'hearts';
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ intensity = 'gentle' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // 1. Generate Watermark Wallpaper Grid ("Happy Birthday Maryam")
    const watermarks: WatermarkText[] = [];
    const stepX = 220;
    const stepY = 160;

    for (let x = -50; x < width + 100; x += stepX) {
      for (let y = -50; y < height + 100; y += stepY) {
        watermarks.push({
          x: x + (Math.random() * 30 - 15),
          y: y + (Math.random() * 30 - 15),
          size: Math.floor(Math.random() * 6) + 12, // 12px - 18px
          rotation: (Math.random() * 20 - 10) * (Math.PI / 180), // -10deg to 10deg
          opacity: Math.random() * 0.04 + 0.02, // 0.02 - 0.06 opacity
          text: Math.random() > 0.3 ? 'HAPPY BIRTHDAY MARYAM' : 'Happy Birthday Maryam ❤️'
        });
      }
    }

    // 2. Generate Stars
    const starCount = Math.floor((width * height) / 9000);
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
    }));

    // 3. Generate Floating Particles (Petals, Golden Sparkles, Fireflies, Balloons)
    const particleColors = [
      'rgba(244, 63, 94, ',   // rose
      'rgba(251, 113, 133, ',  // soft pink
      'rgba(245, 158, 11, ',   // golden
      'rgba(254, 240, 138, '   // light yellow firefly
    ];

    const count = intensity === 'intense' ? 50 : intensity === 'hearts' ? 45 : 30;

    const particles: Particle[] = Array.from({ length: count }, () => {
      const pType = Math.random() < 0.4 ? 'petal' : Math.random() < 0.7 ? 'golden' : Math.random() < 0.85 ? 'firefly' : 'balloon';
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: pType === 'balloon' ? Math.random() * 8 + 12 : pType === 'petal' ? Math.random() * 8 + 6 : Math.random() * 3 + 2,
        speedY: pType === 'balloon' ? -(Math.random() * 0.5 + 0.2) : Math.random() * 0.7 + 0.3,
        speedX: Math.random() * 0.6 - 0.3,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        type: pType
      };
    });

    // Draw single rose petal
    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = `${p.color}${p.opacity})`;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
      ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
      ctx.fill();

      ctx.restore();
    };

    // Draw floating heart
    const drawHeart = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = `rgba(244, 63, 94, ${opacity})`;
      ctx.shadowColor = 'rgba(244, 63, 94, 0.4)';
      ctx.shadowBlur = 8;
      
      ctx.beginPath();
      const top = size * 0.3;
      ctx.moveTo(0, top);
      ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, top);
      ctx.bezierCurveTo(-size / 2, (size + top) / 2, 0, size, 0, size * 1.2);
      ctx.bezierCurveTo(0, size, size / 2, (size + top) / 2, size / 2, top);
      ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, top);
      ctx.fill();

      ctx.restore();
    };

    // Draw golden sparkle particle / firefly
    const drawSparkle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity})`;
      ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Draw mini balloon
    const drawBalloon = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.fillStyle = `rgba(225, 29, 72, ${p.opacity * 0.7})`;

      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.7, p.size, 0, 0, Math.PI * 2);
      ctx.fill();

      // Balloon string
      ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, p.size);
      ctx.lineTo(Math.sin(p.y * 0.05) * 4, p.size + 12);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Wallpaper Watermark Pattern ("HAPPY BIRTHDAY MARYAM")
      watermarks.forEach(wm => {
        ctx.save();
        ctx.translate(wm.x, wm.y);
        ctx.rotate(wm.rotation);
        ctx.font = `${wm.size}px serif`;
        ctx.fillStyle = `rgba(244, 114, 182, ${wm.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(wm.text, 0, 0);
        ctx.restore();
      });

      // 2. Draw Stars
      stars.forEach(s => {
        s.alpha += s.twinkleSpeed;
        if (s.alpha > 0.85 || s.alpha < 0.15) {
          s.twinkleSpeed = -s.twinkleSpeed;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw Floating Particles
      particles.forEach(p => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
        p.angle += p.angularSpeed;

        if (p.type === 'balloon') {
          if (p.y < -30) p.y = height + 30;
        } else {
          if (p.y > height + 30) p.y = -30;
        }

        if (intensity === 'hearts' && Math.random() > 0.4) {
          drawHeart(p.x, p.y, p.size, p.opacity * 0.8);
        } else if (p.type === 'petal') {
          drawPetal(p);
        } else if (p.type === 'balloon') {
          drawBalloon(p);
        } else {
          drawSparkle(p);
        }
      });

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};

