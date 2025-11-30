import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const stars: Star[] = Array.from({ length: 400 }, () => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * 2000,
      pz: 0
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 10, 0.4)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const speed = 20 + Math.min(window.scrollY / 10, 50);

      for (const star of stars) {
        star.pz = star.z;
        star.z -= speed;

        if (star.z < 1) {
          star.z = 2000;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.pz = 2000;
        }

        const scale = (2000 - star.z) / 2000;
        const colorVal = Math.floor(scale * 255);

        ctx.beginPath();
        ctx.strokeStyle = `rgb(${colorVal}, ${colorVal * 0.8}, 255)`;
        ctx.lineWidth = scale * 2;
        ctx.moveTo((star.x / star.pz) * width + cx, (star.y / star.pz) * height + cy);
        ctx.lineTo((star.x / star.z) * width + cx, (star.y / star.z) * height + cy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
    />
  );
}
