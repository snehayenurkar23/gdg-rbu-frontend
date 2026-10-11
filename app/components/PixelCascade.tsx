'use client';

import React, { useEffect, useRef, useState } from 'react';

interface PixelCascadeProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PixelCascade({
  children,
  id,
  className = '',
  style = {}
}: PixelCascadeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setOpacity(1);
      return;
    }

    const updateOpacity = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom <= 0 || rect.top >= windowHeight) {
        setOpacity(0);
        return;
      }

      const fadeDistance = Math.min(200, windowHeight * 0.25);
      let enterProgress = 1;
      let exitProgress = 1;

      if (rect.top > windowHeight - fadeDistance) {
        enterProgress = (windowHeight - rect.top) / fadeDistance;
      }

      if (rect.bottom < fadeDistance) {
        exitProgress = rect.bottom / fadeDistance;
      }

      const raw = Math.min(enterProgress, exitProgress);
      const clamped = Math.max(0, Math.min(1, raw));

      if (clamped >= 0.96) {
        setOpacity(1);
      } else if (clamped <= 0.04) {
        setOpacity(0);
      } else {
        setOpacity(Number(clamped.toFixed(3)));
      }
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        updateOpacity();
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateOpacity();

    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [id]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`section-fade-wrap ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        opacity,
        transition: 'opacity 0.22s ease-out',
        ...style
      }}
    >
      {children}
    </div>
  );
}
