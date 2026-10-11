'use client';

import React, { useState, useCallback } from 'react';

interface RipplePoint {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function usePixelRipple() {
  const [ripples, setRipples] = useState<RipplePoint[]>([]);

  const triggerRipple = useCallback((
    e?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    let clientX = 0;
    let clientY = 0;
    let hasCoords = false;

    const el = e?.currentTarget as HTMLElement | null;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    if (e && 'touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      hasCoords = true;
    } else if (e && 'changedTouches' in e && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
      hasCoords = true;
    } else if (e && 'clientX' in e && (e.clientX !== 0 || e.clientY !== 0)) {
      clientX = e.clientX;
      clientY = e.clientY;
      hasCoords = true;
    }

    const x = hasCoords ? Math.max(0, Math.min(rect.width, clientX - rect.left)) : rect.width / 2;
    const y = hasCoords ? Math.max(0, Math.min(rect.height, clientY - rect.top)) : rect.height / 2;

    const maxDist = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );

    const size = Math.ceil(maxDist * 2.4);
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { id, x, y, size }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }, []);

  return { ripples, triggerRipple };
}

export function PixelRippleOverlay({ ripples }: { ripples: RipplePoint[] }) {
  return (
    <div className="pixel-ripple-container" aria-hidden="true">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pixel-ripple-dot"
          style={{
            left: `${r.x}px`,
            top: `${r.y}px`,
            ['--ripple-target-size' as string]: `${r.size}px`
          }}
        />
      ))}
    </div>
  );
}
