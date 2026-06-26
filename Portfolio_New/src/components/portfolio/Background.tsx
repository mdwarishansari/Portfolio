import { useEffect, useRef } from "react";

/**
 * Atmospheric background — a subtle particle constellation drifting over the void,
 * plus a faint digital grid. Pure canvas for performance, client-only.
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#8052ff", "#ffb829", "#15846e", "#ffffff"];
    const shapes = ["circle", "triangle", "diamond"] as const;
    const count = Math.min(120, Math.floor((width * height) / 16000));

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      shape: (typeof shapes)[number];
      alpha: number;
    };

    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 2.4 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      alpha: Math.random() * 0.5 + 0.15,
    }));

    const mouse = { x: -1000, y: -1000 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const drawShape = (p: P) => {
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - p.size);
        ctx.lineTo(p.x - p.size, p.y + p.size);
        ctx.lineTo(p.x + p.size, p.y + p.size);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
        ctx.restore();
      }
    };

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = "#8052ff";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;

          // gentle mouse repulsion
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            p.x += (dx / d) * 0.6;
            p.y += (dy / d) * 0.6;
          }

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
        drawShape(p);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-circuit opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* soft aurora glow, very subtle */}
      <div
        className="absolute left-1/2 top-[-10%] h-[55vh] w-[55vh] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #8052ff55, transparent 70%)" }}
      />
    </div>
  );
}
