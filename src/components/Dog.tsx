import { useEffect, useRef } from 'react';
import './dog.css';

/**
 * A lab that lives on the hero's ground line.
 * - Trots toward the cursor when it's near the top of the page.
 * - Eyes and head track the cursor everywhere.
 * - Click or tap: hop.
 * - Reduced motion: stands still.
 *
 * Everything animates through refs and one rAF loop; React only renders once.
 */

const DOG_W = 96; // matches the SVG viewBox width
const SPEED = 300; // px/s
const CHASE_MARGIN = 160; // px below the ground line the cursor still counts as "nearby"

export default function Dog() {
  const ground = useRef<HTMLDivElement>(null);
  const mover = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const head = useRef<SVGGElement>(null);
  const pupil = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const el = ground.current;
    const m = mover.current;
    const b = body.current;
    if (!el || !m || !b) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;

    // Start at the right-hand third of the ground, facing left toward the text.
    let x = Math.max(0, el.clientWidth * 0.68 - DOG_W / 2);
    let target = x;
    let dir: 1 | -1 = -1;
    let pointer: { x: number; y: number } | null = null;
    let lastPointerAt = 0;
    let lastFrame = 0;
    let trotting = false;
    let raf = 0;

    m.style.transform = `translateX(${x}px)`;
    b.style.setProperty('--dir', String(dir));

    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      lastPointerAt = performance.now();
    };
    const onLeave = () => {
      pointer = null;
    };

    if (fine) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    }

    const frame = (t: number) => {
      const dt = Math.min(0.05, (t - lastFrame) / 1000 || 0);
      lastFrame = t;

      const rect = el.getBoundingClientRect();
      const maxX = Math.max(0, rect.width - DOG_W);

      if (pointer) {
        const nearby = pointer.y < rect.bottom + CHASE_MARGIN;
        if (nearby) {
          target = Math.min(maxX, Math.max(0, pointer.x - rect.left - DOG_W / 2));
        }

        // Head + eyes track the cursor from wherever the dog is.
        const noseX = rect.left + x + (dir === 1 ? DOG_W * 0.8 : DOG_W * 0.2);
        const noseY = rect.bottom - 40;
        const dx = (pointer.x - noseX) * dir;
        const dy = pointer.y - noseY;
        const angle = Math.max(-22, Math.min(18, (Math.atan2(dy, Math.abs(dx) + 60) * 180) / Math.PI));
        head.current?.style.setProperty('--tilt', `${angle}deg`);

        const len = Math.hypot(dx, dy) || 1;
        pupil.current?.setAttribute('cx', String(2 + (dx / len) * 1.1));
        pupil.current?.setAttribute('cy', String(-3 + (dy / len) * 1.1));
      }

      const diff = target - x;
      const dist = Math.abs(diff);
      if (dist > 2) {
        const step = Math.min(dist, SPEED * dt);
        x += Math.sign(diff) * step;
        const newDir = diff > 0 ? 1 : -1;
        if (newDir !== dir) {
          dir = newDir;
          b.style.setProperty('--dir', String(dir));
        }
        m.style.transform = `translateX(${x}px)`;
        if (!trotting) {
          trotting = true;
          b.dataset.state = 'trot';
        }
      } else if (trotting) {
        trotting = false;
        b.dataset.state = 'idle';
      }

      // Tail: excited if the cursor moved in the last 700ms, else a slow idle wag.
      b.dataset.tail = t - lastPointerAt < 700 ? 'fast' : 'slow';

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onResize = () => {
      const maxX = Math.max(0, el.clientWidth - DOG_W);
      x = Math.min(x, maxX);
      target = Math.min(target, maxX);
      m.style.transform = `translateX(${x}px)`;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const hop = () => {
    const b = body.current;
    if (!b || b.classList.contains('hop')) return;
    b.classList.add('hop');
    b.addEventListener('animationend', () => b.classList.remove('hop'), { once: true });
  };

  return (
    <div className="dog-ground" ref={ground} aria-hidden="true">
      <div className="dog-mover" ref={mover}>
        <div className="dog" ref={body} data-state="idle" data-tail="slow" onPointerDown={hop}>
          <svg viewBox="0 0 96 64" width={DOG_W} height={64} focusable="false">
            {/* tail */}
            <path className="tail" d="M24 30 Q12 26 9 15" />
            {/* rear legs */}
            <rect className="leg a" x="26" y="40" width="6" height="19" rx="3" />
            <rect className="leg b" x="34" y="40" width="6" height="19" rx="3" />
            {/* body */}
            <rect className="fur torso" x="22" y="22" width="48" height="24" rx="12" />
            {/* front legs */}
            <rect className="leg b" x="54" y="40" width="6" height="19" rx="3" />
            <rect className="leg a" x="62" y="40" width="6" height="19" rx="3" />
            {/* neck + head */}
            <g className="head" ref={head}>
              <rect className="fur" x="60" y="14" width="14" height="22" rx="7" />
              <rect className="collar" x="60" y="27" width="14" height="3.5" rx="1.75" />
              <g transform="translate(68 14)">
                <circle className="fur" r="9.5" />
                <rect className="fur" x="4" y="-3" width="15" height="10" rx="5" />
                <circle className="nose" cx="18" cy="0" r="2" />
                <ellipse className="ear" cx="-6" cy="3" rx="4" ry="7.5" />
                <circle className="eye" cx="2" cy="-3" r="1.9" />
                <circle className="pupil" ref={pupil} cx="2" cy="-3" r="1" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
