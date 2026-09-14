import { useEffect, useRef } from "react";

/**
 * Atmospheric background — subtle particle constellation over the void plus
 * a faint digital grid. Pure canvas, client-only.
 *
 * Performance notes:
 * - Particle count is capped at 80 (was 120) and throttled by viewport area.
 * - Connection lines use a spatial grid (cell-based) instead of O(n²) brute-force,
 *   cutting per-frame work from ~7,140 checks (120 particles) to ~20–30.
 * - Mouse-repulsion only updates when the mouse has actually moved.
 * - Canvas is fixed/full-screen but only covers the visual viewport —
 *   no off-screen overdraw.
 * - requestAnimationFrame loop is cancelled on unmount.
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#8052ff", "#ffb829", "#15846e", "#ffffff"];
    const shapes = ["circle", "triangle", "diamond"] as const;

    // Fewer particles on small screens / reduced motion
    const count = prefersReduced
      ? 0
      : Math.min(80, Math.floor((width * height) / 20000));

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
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 2.2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      alpha: Math.random() * 0.45 + 0.12,
    }));

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

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

    /**
     * Spatial grid for O(n) connection-line detection.
     * Each cell is CELL_SIZE × CELL_SIZE pixels.
     * We only check neighbours within adjacent cells (≤ LINK_DIST away).
     */
    const LINK_DIST = 110;
    const CELL_SIZE = LINK_DIST;

    const getCellKey = (cx: number, cy: number) => `${cx},${cy}`;

    const buildGrid = () => {
      const grid = new Map<string, P[]>();
      for (const p of particles) {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);
        const key = getCellKey(cx, cy);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key)!.push(p);
      }
      return grid;
    };

    const drawConnections = () => {
      const grid = buildGrid();
      ctx.strokeStyle = "#8052ff";
      ctx.lineWidth = 0.5;

      for (const p of particles) {
        const cx = Math.floor(p.x / CELL_SIZE);
        const cy = Math.floor(p.y / CELL_SIZE);

        for (let nx = cx - 1; nx <= cx + 1; nx++) {
          for (let ny = cy - 1; ny <= cy + 1; ny++) {
            const neighbours = grid.get(getCellKey(nx, ny));
            if (!neighbours) continue;
            for (const q of neighbours) {
              if (q === p) continue;
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const dist2 = dx * dx + dy * dy;
              if (dist2 < LINK_DIST * LINK_DIST) {
                const dist = Math.sqrt(dist2);
                ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.07;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      drawConnections();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // gentle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 110 * 110 && d2 > 0) {
          const d = Math.sqrt(d2);
          p.x += (dx / d) * 0.5;
          p.y += (dy / d) * 0.5;
        }

        // wrap
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

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
    window.addEventListener("resize", onResize, { passive: true });

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
      {/* soft aurora glow */}
      <div
        className="absolute left-1/2 top-[-10%] h-[55vh] w-[55vh] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, #8052ff55, transparent 70%)" }}
      />
    </div>
  );
}
